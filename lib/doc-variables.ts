import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { Client } from "@notionhq/client";
import { escapeMarkdownText } from "blume/sources/lower.ts";
import type { ContentSource, SourceEntry } from "blume/sources/types.ts";

// Doc variables: a Notion database with a Key (title) and a Value (text) column.
// Pages write {{ALETYX_KEY}}; the build swaps in the value. An unknown ALETYX_
// key fails the build, so a typo never ships; any other {{...}} (a Mermaid
// hexagon, an email template) stays as written. Prose reaches us escaped by
// Blume's Notion lowering (\{\{key\}\}), code spans and blocks verbatim, so the
// pattern takes both and the value is escaped only where the token was.
const TOKEN = /(\\?)\{\\?\{\s*((?:[\w.-]|\\[_.-])+?)\s*\\?\}\\?\}/g;
const CACHE = ".blume/cache/doc-variables.json";
// The generated reference page: always a draft (shown by `blume dev` only, never
// in a production build) and hidden from the sidebar.
const PAGE_REF = "doc-variables.mdx";

type Vars = Record<string, string>;
interface VariableRow {
  key: string;
  value: string;
  description: string;
  references: { title: string; slug: string }[];
}

const plain = (parts: { plain_text: string }[] = []) =>
  parts.map((t) => t.plain_text).join("").trim();

const fetchRows = async (database: string, token: string): Promise<VariableRow[]> => {
  const client = new Client({ auth: token });
  const db = (await client.databases.retrieve({ database_id: database })) as {
    data_sources: { id: string }[];
  };
  const rows: (VariableRow & { referenceIds: string[] })[] = [];
  let cursor: string | undefined;
  do {
    const res = await client.dataSources.query({
      data_source_id: db.data_sources[0].id,
      start_cursor: cursor,
    });
    for (const row of res.results as { properties: Record<string, any> }[]) {
      const key = plain(row.properties.Key?.title);
      if (!key) continue;
      rows.push({
        key,
        value: plain(row.properties.Value?.rich_text),
        description: plain(row.properties.Description?.rich_text),
        references: [],
        referenceIds: (row.properties.References?.relation ?? []).map((r: { id: string }) => r.id),
      });
    }
    cursor = res.has_more ? (res.next_cursor ?? undefined) : undefined;
  } while (cursor);
  // Resolve each referenced Blume Docs page once, for its title and slug.
  const ids = [...new Set(rows.flatMap((row) => row.referenceIds))];
  const pages = new Map(
    await Promise.all(
      ids.map(async (id) => {
        const page = (await client.pages.retrieve({ page_id: id })) as { properties: Record<string, any> };
        const title = plain(page.properties.Name?.title);
        return [id, { title, slug: plain(page.properties.Slug?.rich_text) }] as const;
      })
    )
  );
  return rows
    .map(({ referenceIds, ...row }) => ({
      ...row,
      references: referenceIds.flatMap((id) => (pages.get(id)?.slug ? [pages.get(id)!] : [])),
    }))
    .sort((a, b) => a.key.localeCompare(b.key));
};

const readCache = async (): Promise<VariableRow[] | undefined> => {
  const cached = await readFile(CACHE, "utf8").catch(() => undefined);
  if (!cached) return undefined;
  const parsed = JSON.parse(cached) as VariableRow[] | Vars;
  // An older cache held a flat { key: value } map.
  return Array.isArray(parsed)
    ? parsed
    : Object.entries(parsed).map(([key, value]) => ({ key, value, description: "", references: [] }));
};

// Fetch fresh values, keep a copy on disk, and fall back to it when Notion is
// unreachable, the way Blume's own Notion cache does.
const loadRows = async (): Promise<VariableRow[]> => {
  const database = process.env.NOTION_VARS_DB_ID;
  const token = process.env.NOTION_TOKEN;
  if (!database || !token) {
    console.warn("[doc-variables] NOTION_VARS_DB_ID or NOTION_TOKEN unset; using cached values, if any.");
    return (await readCache()) ?? [];
  }
  try {
    const rows = await fetchRows(database, token);
    if (rows.length === 0) {
      console.warn("[doc-variables] The Doc Variables database returned no Key/Value rows.");
    }
    await mkdir(dirname(CACHE), { recursive: true });
    await writeFile(CACHE, JSON.stringify(rows, null, 2));
    return rows;
  } catch (error) {
    const cached = await readCache();
    if (!cached) throw error;
    console.warn(`[doc-variables] Notion unreachable, using cached values: ${(error as Error).message}`);
    return cached;
  }
};

const toVars = (rows: VariableRow[]): Vars =>
  Object.fromEntries(rows.map((row) => [row.key, row.value]));

// A table cell: Markdown-escaped (so a `|` can't split the cell) on one line.
const cell = (text: string) => escapeMarkdownText(text.replace(/\s+/g, " ")) || " ";

const referencePage = (rows: VariableRow[]): string =>
  [
    "This page lists every doc variable. It is generated at build time from the Doc Variables database in Notion, so edit the values there, not here. It is always a draft, so only `blume dev` shows it.",
    "",
    "To use a variable, write `{{KEY}}` in a Blume Docs page, for example `{{ALETYX_WILDFLY_VERSION}}`. The build replaces it with the value. An unknown `ALETYX_` key fails the build.",
    "",
    "| Key | Value | Description | Used by |",
    "| --- | --- | --- | --- |",
    ...rows.map((row) => {
      const usedBy = row.references
        .map((ref) => `[${cell(ref.title || ref.slug)}](${ref.slug === "index" ? "/docs" : `/docs/${ref.slug}`})`)
        .join(", ");
      return `| \`${row.key}\` | ${cell(row.value)} | ${cell(row.description)} | ${usedBy || " "} |`;
    }),
    "",
  ].join("\n");

const referenceEntry = (rows: VariableRow[]): SourceEntry => {
  const text = referencePage(rows);
  return {
    ref: PAGE_REF,
    data: {
      title: "Doc variables",
      description: "Every {{ALETYX_*}} doc variable, its value, and the pages that use it.",
      draft: true,
      hidden: true,
    },
    body: { format: "mdx", text },
  };
};

const substitute = (text: string, vars: Vars, where: string, plainText = false): string =>
  text.replace(TOKEN, (match, escaped: string, rawKey: string) => {
    const key = rawKey.replace(/\\/g, "");
    const value = vars[key];
    if (value === undefined) {
      if (key.startsWith("ALETYX_")) throw new Error(`[doc-variables] Unknown variable {{${key}}} in ${where}`);
      return match;
    }
    return escaped && !plainText ? escapeMarkdownText(value) : value;
  });

/** Wraps a content source so `{{ALETYX_KEY}}` placeholders resolve from the Notion doc variables database. */
export const withDocVariables = (source: ContentSource): ContentSource => {
  let current: Promise<VariableRow[]> | undefined;
  let page: string | undefined;
  return {
    ...source,
    load: async () => {
      current = loadRows();
      const [result, rows] = await Promise.all([source.load(), current]);
      const vars = toVars(rows);
      for (const entry of result.entries) {
        const where = entry.ref;
        entry.body.text = substitute(entry.body.text, vars, where);
        // Staged pages render from `raw` (front matter + body), not `body.text`.
        if (entry.raw !== undefined) entry.raw = substitute(entry.raw, vars, where);
        for (const field of ["title", "description"]) {
          const value = entry.data[field];
          if (typeof value === "string") {
            // Frontmatter is plain text, not Markdown: insert values as-is.
            entry.data[field] = substitute(value, vars, where, true);
          }
        }
      }
      const reference = referenceEntry(rows);
      page = reference.body.text;
      result.entries.push(reference);
      return result;
    },
    read: async (ref) => {
      if (ref === PAGE_REF) return page ?? referenceEntry(await (current ??= loadRows())).body.text;
      return source.read ? substitute(await source.read(ref), toVars(await (current ??= loadRows())), ref) : "";
    },
    withContext: source.withContext
      ? (ctx) => withDocVariables(source.withContext!(ctx))
      : undefined,
  };
};
