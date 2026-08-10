# Working agreements

## Writing style

- Avoid em dashes; prefer a natural text flow using articles and regular punctuation (commas, colons, parentheses, or separate sentences).
- Avoid the word "deterministic"; describe the behavior in plain terms instead (e.g. "predictable", "the same inputs always produce the same result").

- All issues (tickets) are managed in the https://github.com/aletyx/aletyx-content-issues repo — never in this repo's issue tracker. Create, comment on, and close issues there.
- When picking the next ticket to work on, rank by: (1) explicit priority labels, (2) relevance to the business, (3) order in the site navigation.
- Always comment on the related GitHub issue (ticket) summarizing the change **before** pushing.
- Verify links with `scripts/links-check.sh` before committing content or nav changes.
- Any page move or rename must ship with a 301 redirect in `docs.json`.
- Original (pre-migration) docs pages can be found at https://aletyx-docs-preview.aletyx.workers.dev — the production old-docs site is retired, but this preview still serves the rendered originals; use it as the `source:` frontmatter target and for fidelity comparisons.
- When migrating documents, observe admonitions (callouts) in the source and migrate them as closely as possible visually to the new doc: map each mkdocs-material type to the nearest Mintlify callout (`!!! note` → `<Note>`, `!!! tip` → `<Tip>`, `!!! info` → `<Info>`, `!!! warning` → `<Warning>`, `!!! danger` → `<Danger>`), keep custom admonition titles as a bold first line inside the callout, and preserve the full body content.
- When reviewing blog posts (content under `blog/`), always:
  - Add a TL;DR / key-takeaways block up top.
  - Add a brief FAQ section at the end.
  - Review and prefer explicit answer sentences ("answer-first" phrasing).
  - Add at least one concrete example or mini scenario.
  - Review for search quality (E-E-A-T signals: experience, expertise, authoritativeness, trustworthiness).
