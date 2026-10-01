import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { Client } from "@notionhq/client";
import { escapeMarkdownText } from "blume/sources/lower.ts";
import type { ContentSource } from "blume/sources/types.ts";

// Doc variables: a Notion database with a Key (title) and a Value (text) column.
// Pages write {{AX_KEY}} (the convention Mintlify's docs.json variables used);
// the build swaps in the value. An unknown AX_ key fails the build, so a typo
// never ships; any other {{...}} (a Mermaid hexagon, an email template) stays
// as written. Prose reaches us escaped by
// Blume's Notion lowering (\{\{key\}\}), code spans and blocks verbatim, so the
// pattern takes both and the value is escaped only where the token was.
const TOKEN = /(\\?)\{\\?\{\s*((?:[\w.-]|\\[_.-])+?)\s*\\?\}\\?\}/g;
const CACHE = ".blume/cache/doc-variables.json";

type Vars = Record<string, string>;

const plain = (parts: { plain_text: string }[] = []) =>
  parts.map((t) => t.plain_text).join("").trim();

const fetchVars = async (database: string, token: string): Promise<Vars> => {
  const client = new Client({ auth: token });
  const db = (await client.databases.retrieve({ database_id: database })) as {
    data_sources: { id: string }[];
  };
  const vars: Vars = {};
  let cursor: string | undefined;
  do {
    const res = await client.dataSources.query({
      data_source_id: db.data_sources[0].id,
      start_cursor: cursor,
    });
    for (const row of res.results as { properties: Record<string, any> }[]) {
      const key = plain(row.properties.Key?.title);
      if (key) vars[key] = plain(row.properties.Value?.rich_text);
    }
    cursor = res.has_more ? (res.next_cursor ?? undefined) : undefined;
  } while (cursor);
  return vars;
};

const readCache = async (): Promise<Vars | undefined> => {
  const cached = await readFile(CACHE, "utf8").catch(() => undefined);
  return cached ? (JSON.parse(cached) as Vars) : undefined;
};

// Fetch fresh values, keep a copy on disk, and fall back to it when Notion is
// unreachable, the way Blume's own Notion cache does.
const loadVars = async (): Promise<Vars> => {
  const database = process.env.NOTION_VARS_DB_ID;
  const token = process.env.NOTION_TOKEN;
  if (!database || !token) {
    console.warn("[doc-variables] NOTION_VARS_DB_ID or NOTION_TOKEN unset; using cached values, if any.");
    return (await readCache()) ?? {};
  }
  try {
    const vars = await fetchVars(database, token);
    await mkdir(dirname(CACHE), { recursive: true });
    await writeFile(CACHE, JSON.stringify(vars, null, 2));
    return vars;
  } catch (error) {
    const cached = await readCache();
    if (!cached) throw error;
    console.warn(`[doc-variables] Notion unreachable, using cached values: ${(error as Error).message}`);
    return cached;
  }
};

const substitute = (text: string, vars: Vars, where: string, plainText = false): string =>
  text.replace(TOKEN, (match, escaped: string, rawKey: string) => {
    const key = rawKey.replace(/\\/g, "");
    const value = vars[key];
    if (value === undefined) {
      if (key.startsWith("AX_")) throw new Error(`[doc-variables] Unknown variable {{${key}}} in ${where}`);
      return match;
    }
    return escaped && !plainText ? escapeMarkdownText(value) : value;
  });

/** Wraps a content source so `{{AX_KEY}}` placeholders resolve from the Notion doc variables database. */
export const withDocVariables = (source: ContentSource): ContentSource => {
  let current: Promise<Vars> | undefined;
  return {
    ...source,
    load: async () => {
      current = loadVars();
      const [result, vars] = await Promise.all([source.load(), current]);
      for (const entry of result.entries) {
        const where = entry.ref;
        entry.body.text = substitute(entry.body.text, vars, where);
        for (const field of ["title", "description"]) {
          const value = entry.data[field];
          if (typeof value === "string") {
            // Frontmatter is plain text, not Markdown: insert values as-is.
            entry.data[field] = substitute(value, vars, where, true);
          }
        }
      }
      return result;
    },
    read: source.read
      ? async (ref) => substitute(await source.read!(ref), await (current ??= loadVars()), ref)
      : undefined,
    withContext: source.withContext
      ? (ctx) => withDocVariables(source.withContext!(ctx))
      : undefined,
  };
};
