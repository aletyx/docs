import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { Client } from "@notionhq/client";
import type { ContentSource } from "blume/sources/types.ts";

// Notion page links: pages link to each other as Notion page links, so a link works in
// Notion (it opens the target page there) and, after this rewrite, on the site.
//
// - A link to a page of the Docs database (https://www.notion.so/<id>, https://app.notion.com/p/
//   <title>-<id>, or the editor's own /<id>) becomes /docs/<slug>. Notion block anchors (#...)
//   are dropped: they name blocks, not headings.
// - An absolute https://aletyx.ai/docs/... link becomes root-relative /docs/..., so a click in
//   `blume dev` stays on the dev server and production is unchanged.
// - A Published page that links to a Draft page gets a warning: that link 404s in production.
//   A link to a Notion page outside the Docs database is left as is, with a warning.

const CACHE = ".blume/cache/notion-links.json";
const SITE = "https://aletyx.ai/docs";

interface Target {
  slug: string;
  draft: boolean;
}
type Targets = Record<string, Target>;

const ID = String.raw`([0-9a-f]{32}|[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})`;
const NOTION_URL = new RegExp(
  String.raw`^(?:https?://(?:www\.)?notion\.so/(?:[^/?#)\s]+/)?|https?://app\.notion\.com/p/(?:[^/?#)\s]+/)?|/)` +
    String.raw`(?:[^/?#)\s]*-)?` +
    ID +
    String.raw`(?:\?[^#)\s]*)?(?:#[^)\s]*)?$`,
  "i",
);
// The URL part of a Markdown link or image: ](url) or ](url "title").
const LINK = /\]\(([^)\s]+)((?:\s+"[^"]*")?)\)/g;

const plain = (parts: { plain_text: string }[] = []) => parts.map((t) => t.plain_text).join("").trim();
const normalizeId = (id: string) => id.replace(/-/g, "").toLowerCase();
const pathOf = (slug: string) => {
  const path = slug.replace(/(^|\/)index$/, "");
  return path ? `/docs/${path}` : "/docs";
};

const fetchTargets = async (database: string, token: string): Promise<Targets> => {
  const client = new Client({ auth: token });
  const db = (await client.databases.retrieve({ database_id: database })) as { data_sources: { id: string }[] };
  const targets: Targets = {};
  let cursor: string | undefined;
  do {
    const res = await client.dataSources.query({ data_source_id: db.data_sources[0].id, start_cursor: cursor });
    for (const page of res.results as { id: string; properties: Record<string, any> }[]) {
      const slug = plain(page.properties.Slug?.rich_text);
      if (!slug) continue;
      targets[normalizeId(page.id)] = { slug, draft: page.properties.Status?.select?.name !== "Published" };
    }
    cursor = res.has_more ? (res.next_cursor ?? undefined) : undefined;
  } while (cursor);
  return targets;
};

const readCache = async (): Promise<Targets | undefined> => {
  const cached = await readFile(CACHE, "utf8").catch(() => undefined);
  return cached ? (JSON.parse(cached) as Targets) : undefined;
};

// Fetch the page id -> slug map, keep a copy on disk, and fall back to it when Notion is
// unreachable, the same way lib/doc-variables.ts does.
const loadTargets = async (): Promise<Targets> => {
  const database = process.env.NOTION_DB_ID;
  const token = process.env.NOTION_TOKEN;
  if (!database || !token) {
    console.warn("[notion-links] NOTION_DB_ID or NOTION_TOKEN unset; using the cached page map, if any.");
    return (await readCache()) ?? {};
  }
  try {
    const targets = await fetchTargets(database, token);
    await mkdir(dirname(CACHE), { recursive: true });
    await writeFile(CACHE, JSON.stringify(targets, null, 2));
    return targets;
  } catch (error) {
    const cached = await readCache();
    if (!cached) throw error;
    console.warn(`[notion-links] Notion unreachable, using the cached page map: ${(error as Error).message}`);
    return cached;
  }
};

const rewrite = (text: string, targets: Targets, where: string, published: boolean, warn: (m: string) => void) =>
  text.replace(LINK, (match, url: string, title: string) => {
    const notion = NOTION_URL.exec(url);
    if (notion) {
      const target = targets[normalizeId(notion[1])];
      if (!target) {
        warn(`[notion-links] ${where} links to a Notion page outside the Docs database: ${url}`);
        return match;
      }
      if (published && target.draft) warn(`[notion-links] ${where} is Published but links to Draft ${target.slug} (404 in production)`);
      return `](${pathOf(target.slug)}${title})`;
    }
    if (url === SITE || url.startsWith(`${SITE}/`) || url.startsWith(`${SITE}#`)) {
      return `](/docs${url.slice(SITE.length)}${title})`;
    }
    return match;
  });

/** Wraps a content source so Notion page links and absolute docs links become site links. */
export const withNotionLinks = (source: ContentSource): ContentSource => {
  let current: Promise<Targets> | undefined;
  return {
    ...source,
    load: async () => {
      current = loadTargets();
      const [result, targets] = await Promise.all([source.load(), current]);
      const warned = new Set<string>();
      const warn = (message: string) => {
        if (!warned.has(message)) console.warn((warned.add(message), message));
      };
      for (const entry of result.entries) {
        const published = entry.data.draft !== true;
        entry.body.text = rewrite(entry.body.text, targets, entry.ref, published, warn);
        // Staged pages render from `raw` (front matter + body), not `body.text`.
        if (entry.raw !== undefined) entry.raw = rewrite(entry.raw, targets, entry.ref, published, () => {});
      }
      return result;
    },
    read: source.read
      ? async (ref) => rewrite(await source.read!(ref), await (current ??= loadTargets()), ref, false, () => {})
      : undefined,
    withContext: source.withContext ? (ctx) => withNotionLinks(source.withContext!(ctx)) : undefined,
  };
};
