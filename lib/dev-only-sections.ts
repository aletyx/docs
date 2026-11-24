import type { ContentSource } from "blume/sources/types.ts";

// Dev-only sections: slug folders that exist only in `blume dev`. Every other build (production,
// and `--preview` builds that keep Drafts, e.g. for PRs) drops their pages at the source, so they
// can't be reached and never fall into another tab's sidebar. Their header tab is added only in
// dev too (blume.config.ts).
export const DEV_ONLY_PREFIXES = ["quarantine/"];

const isDevOnly = (ref: string) => DEV_ONLY_PREFIXES.some((prefix) => ref.startsWith(prefix));

/** Wraps a content source so dev-only sections are dropped unless `dev` is true. */
export const withDevOnlySections = (source: ContentSource, dev: boolean): ContentSource =>
  dev
    ? source
    : {
        ...source,
        load: async () => {
          const result = await source.load();
          result.entries = result.entries.filter((entry) => !isDevOnly(entry.ref));
          return result;
        },
        withContext: source.withContext
          ? (ctx) => withDevOnlySections(source.withContext!(ctx), dev)
          : undefined,
      };
