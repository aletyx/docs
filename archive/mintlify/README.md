# Archived Mintlify site

The Aletyx docs used to be a Mintlify site built from this folder. They are now a Blume site built from the Notion Docs database (see `blume.config.ts` at the repo root). This folder keeps the Mintlify site as it was, as a migration source only: don't edit or build it.

- Pages (`.mdx`), `docs.json` (navigation, redirects, theme), `custom.css`, `images/`, `logo/` and `favicon.svg` keep their original relative layout, so `docs.json` still resolves.
- `archive/`: pages that were already removed from the Mintlify site.
- `scripts/`: Mintlify-only helpers (the `/docs` subpath proxy for `mint dev`, the SVG foreignObject converter).
- `agent-skills/`: the Mintlify agent skills and their `skills-lock.json`.
- `MIGRATION.md` and `migration-report.md`: records from the earlier docs.aletyx.ai to Mintlify migration.

Pre-migration originals also render at https://aletyx-docs-preview.aletyx.workers.dev for fidelity checks.
