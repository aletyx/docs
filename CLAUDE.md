# Working agreements

- All issues (tickets) are managed in the https://github.com/aletyx/aletyx-content-issues repo — never in this repo's issue tracker. Create, comment on, and close issues there.
- Always comment on the related GitHub issue (ticket) summarizing the change **before** pushing.
- Verify links with `scripts/links-check.sh` before committing content or nav changes.
- Any page move or rename must ship with a 301 redirect in `docs.json`.
- Original (pre-migration) docs pages can be found at https://aletyx-docs-preview.aletyx.workers.dev — the production old-docs site is retired, but this preview still serves the rendered originals; use it as the `source:` frontmatter target and for fidelity comparisons.
- When migrating documents, observe admonitions (callouts) in the source and migrate them as closely as possible visually to the new doc: map each mkdocs-material type to the nearest Mintlify callout (`!!! note` → `<Note>`, `!!! tip` → `<Tip>`, `!!! info` → `<Info>`, `!!! warning` → `<Warning>`, `!!! danger` → `<Danger>`), keep custom admonition titles as a bold first line inside the callout, and preserve the full body content.
