# Working agreements

## Where docs live

- Docs live in Notion (the Blume Docs database), not in this repo. The Mintlify site here is deprecated: don't change, build, or check it unless told to; read it only as a migration source.
- Register every migrated or new page on the [Blume migration tracker](https://app.notion.com/p/aletyx/Blume-migration-tracker-3e9abc1d8c6481dcb8f2f38bf3accbef?pvs=28). With every change, update the completion line at the top (Mintlify nav rows with a Notion URL, out of all nav rows) and add a dated entry under Changelog (newest first).
- Check every new or changed page in `blume dev` at `/docs/<slug>`: every section, callout, list, code block, image and link must render. Drafts show only in `blume dev`.
- After adding or changing a page, compare it with the other pages. If two are too similar, propose a merge; the user chooses which page to keep. Never merge on your own.

## Review flags

- Every page has a Flag:
  - `⚑ Green`: great content, no broken links, nothing needed.
  - `⚑ Review` (yellow): looks good, but something may need an eye.
  - `⚑ Red`: broken links, outdated content, conflicts, or anything needing manual review or the user's decision.
- A Red page gets a comment listing each open item and, unless it is Published (ask first), a red 🚩 callout at the top saying what is needed and from whom (engineering, product, or the user). Remove the callout when the page leaves Red.
- A page waiting on engineering or product stays Red until the answer is applied.
- Record every Red-flag resolution as a page comment (what was decided, by whom, what changed). Comment before trashing a page; Notion can't comment on trashed pages.

## Blume rendering (Notion source)

- Tables and heading_4 blocks are dropped: use lists and heading_1 to heading_3.
- Docs links must be absolute `https://aletyx.ai/docs/<slug>`, without a trailing `/index` (Blume serves `x/index` at `/docs/x`). Relative links break.
- Published pages must not link to Draft pages: those links 404 in production.
- Callouts render without their type; MDX typed as text shows literally.

## Doc variables

- Values that change between releases live in the [Doc Variables database](https://app.notion.com/p/aletyx/3ecabc1d8c6480d48300d9cf1cd614e6?v=3ecabc1d8c6480b3a7c0000cb22300ac). Pages write `{{ALETYX_NAME}}` and the build substitutes it (`lib/doc-variables.ts`, `NOTION_VARS_DB_ID`). An unknown `ALETYX_` key fails the build.
- When a page adds, changes, or removes a variable, update its row (Key, Value, Description, References) in the same change. Delete a row only when no page uses it.

## Writing style

- No em dashes. Use commas, colons, parentheses, or separate sentences.
- Never write "deterministic". Say "predictable", or "the same inputs always produce the same result".
- Never publish staging or test addresses (e.g. `cosmos.aletyx.services`). Published product endpoints (Maven repos, container registries) are fine.

## Repo changes

- Run `scripts/links-check.sh` before committing content or nav changes.
- Every page move or rename ships with a 301 redirect in `blume.config.ts` (`redirects`).
- Tickets live in `aletyx/aletyx-content-issues` (`gh issue <cmd> --repo aletyx/aletyx-content-issues`), never this repo. Rank by priority label, business relevance, then nav order. After picking a ticket, stop and wait for instructions. Comment on it summarizing the change before pushing.
- After submitting a PR, wait for Greptile's review and fix each reasonable comment on the PR branch.

## Migrating pages

- Pre-migration originals render at https://aletyx-docs-preview.aletyx.workers.dev; use it for fidelity checks.
- Keep every admonition as a Notion callout, with any custom title as a bold first line and the full body.

## Reviewing blog posts (`blog/`)

Add or verify: a TL;DR up top, a short FAQ at the end, answer-first phrasing, at least one concrete example, and E-E-A-T signals.
