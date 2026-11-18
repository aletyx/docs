import type { ContentSource } from "blume/sources/types.ts";

// Legacy sections: Published pages that stay reachable by URL but out of view. Each prefix
// here is a slug folder (e.g. `dc/` for the old Decision Control docs). Their pages get
// `noindex` (robots meta, dropped from the sitemap) and are excluded from site search. The
// matching header tab is hidden in theme.css except on the section's own pages, so the
// sidebar still scopes to the section while you are in it.
const LEGACY_PREFIXES = ["dc/"];

const isLegacy = (ref: string) => LEGACY_PREFIXES.some((prefix) => ref.startsWith(prefix));

/** Wraps a content source so pages under a legacy prefix are noindexed and kept out of search. */
export const withLegacySections = (source: ContentSource): ContentSource => ({
  ...source,
  load: async () => {
    const result = await source.load();
    for (const entry of result.entries) {
      if (!isLegacy(entry.ref)) continue;
      // `data` feeds Blume's route manifest (search index, sitemap).
      entry.data.noindex = true;
      const search = typeof entry.data.search === "object" && entry.data.search !== null ? entry.data.search : {};
      entry.data.search = { ...search, exclude: true };
      // Staged pages render from `raw`, whose front matter Astro parses on its own and reads as
      // `seo.noindex` for the robots meta (the top-level shorthand is only mapped by Blume's
      // normalizer). The Notion source never writes an `seo` key itself.
      if (entry.raw?.startsWith("---\n") && !/^seo:/m.test(entry.raw)) {
        entry.raw = entry.raw.replace("---\n", "---\nseo:\n  noindex: true\n");
      }
    }
    return result;
  },
  withContext: source.withContext
    ? (ctx) => withLegacySections(source.withContext!(ctx))
    : undefined,
});
