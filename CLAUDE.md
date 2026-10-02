# Working agreements

## Where docs live

- This Mintlify site is DEPRECATED. Unless told otherwise, change pages in Notion (the Blume Docs database), not in this repo.
- Only the Blume docs matter. Don't update, build, or check Mintlify pages, `docs.json`, or the Mintlify dev server, except to read a page as a migration source.
- ALWAYS register every migrated or new page on the [Blume migration tracker](https://app.notion.com/p/aletyx/Blume-migration-tracker-3e9abc1d8c6481dcb8f2f38bf3accbef?pvs=28). With every change, also update the completion percentage at the top of the tracker (Mintlify nav rows that have a Notion URL, out of all nav rows) and add a dated summary entry to the Changelog at the bottom.
- For every migrated page, open it on the local Blume dev server (`blume dev`, under `/docs/<slug>`) and check that it renders completely and correctly: every section, callout, list, code block, image and link from the source is there and displays as intended. Draft pages show only in `blume dev`, not in production builds.
- Whenever a page in the Blume Docs database is added, composed, or updated, compare its content with every other page in the database. If two pages are too similar, propose merging one into the other. Always let the user choose which page to keep and which to merge in; never merge without that choice.

## Review flags

- Blume Docs pages carry a Flag: `⚑ Green` (confident all is right), `⚑ Review` (yellow: non-severe issues, or not sure), `⚑ Red` (severe, or anything that needs the user's decision).
- Anything that needs the user's decision is Red, with a page comment listing each decision.
- Every Red page starts with a callout (red background, 🚩 icon) that states what the Red flag is and exactly what input is needed and from whom (engineering, product, or the user's choice for merges). Remove the callout when the page leaves Red. Don't put it on a Published page; ask the user first.
- A page waiting on an answer from engineering or product stays Red until that answer arrives and is applied.
- Always record the resolution of a Red flag as a comment on the page: what was decided, by whom, and what changed. Do this even when the flag stays Red. When the resolution deletes the page, comment before moving it to the trash (Notion can't comment on trashed pages).

## Doc variables

- Values that change between releases (versions, release names, file names) live in the [Doc Variables database](https://app.notion.com/p/aletyx/3ecabc1d8c6480d48300d9cf1cd614e6?v=3ecabc1d8c6480b3a7c0000cb22300ac), not in page text. Pages write `{{ALETYX_NAME}}`, and the build replaces it with the row's Value (`lib/doc-variables.ts`, database ID in `NOTION_VARS_DB_ID`). An unknown `ALETYX_` key fails the build; other `{{...}}` text is left as written.
- Whenever a variable is added, changed, or removed in a Blume Docs page, update the Doc Variables database in the same change: Key, Value, Description, and References (the Blume Docs pages that use it). Delete a row only when no page uses it any more.

## Writing style

- No em dashes. Use commas, colons, parentheses, or separate sentences.
- Never write "deterministic". Say "predictable", or "the same inputs always produce the same result".

## Issue tracking

Tickets live in a separate repo: `aletyx/aletyx-content-issues`. Never use this repo's tracker.

- Create, list, comment, and close there: `gh issue <cmd> --repo aletyx/aletyx-content-issues`.
- Rank the next ticket by: (1) priority label, (2) business relevance, (3) site nav order.
- After picking a ticket, stop. Present it and wait for explicit instructions before changing anything.
- Comment on the ticket summarizing the change before pushing.

## Pull requests

- After every PR is submitted, wait for Greptile's review comments, evaluate each one and, if it is reasonable, fix it on the PR branch.

## Content changes

- Run `scripts/links-check.sh` before committing content or nav changes.
- Every page move or rename ships with a 301 redirect in `docs.json`.
- Never publish staging, stage, or test addresses in the docs. Use them only as working references. Published product endpoints (Maven repo, container registry) are fine.

## Migrating pages

Pre-migration originals render at https://aletyx-docs-preview.aletyx.workers.dev (the production old-docs site is retired). Use it as the `source:` frontmatter value and for fidelity comparisons.

Map each mkdocs-material admonition to the nearest Mintlify callout. Keep any custom title as a bold first line inside the callout, and preserve the full body.

| Source | Callout |
| --- | --- |
| `!!! note` | `<Note>` |
| `!!! tip` | `<Tip>` |
| `!!! info` | `<Info>` |
| `!!! warning` | `<Warning>` |
| `!!! danger` | `<Danger>` |

## Reviewing blog posts (`blog/`)

Always add or verify:

- TL;DR / key takeaways up top.
- Brief FAQ at the end.
- Answer-first phrasing (explicit answer sentences).
- At least one concrete example or mini scenario.
- E-E-A-T signals (experience, expertise, authoritativeness, trustworthiness).
