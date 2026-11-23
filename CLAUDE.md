# Working agreements

## Where docs live

- Docs live in Notion (the Blume Docs database), not in this repo. The old Mintlify site is archived under `archive/mintlify/` (pages, `docs.json`, images): don't change, build, or check it unless told to; read it only as a migration source.
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

## Review queue

- Every page outside Quarantine has a place in the review queue: Documentation Database properties `Review #` (position), `Review` (To review, In review, Reviewed), `Review reason` and `Reviewed on`. Sort by `Review #` and take the lowest page that is not Reviewed.
- Set `Review` to In review when you start a page. When done, set it to Reviewed, set `Reviewed on`, set the Flag to match the outcome, and add a page comment summarizing what changed and what is still open.
- A page moved to Quarantine during review leaves the queue: clear its `Review #`.
- New pages join the queue as To review, ranked with the same rules: Published Red first, then Published with broken links, Published Review, Platform drafts, other Red drafts, Review drafts, Published Green, Green drafts, and the legacy `dc/` section last. Within a tier: Get started, Aletyx Platform, Playground, Enterprise Builds, then the most linked pages first.

## Quarantine (outdated pages)

- Outdated pages move to the hidden Quarantine section instead of being trashed: set Section to `Quarantine`, Status to `Draft`, Flag to `⚑ Red`, and change the Slug to `quarantine/<old-slug>`. Keep the Order.
- Quarantined pages show only in `blume dev`, under the "Quarantine [DEV ONLY]" tab at `/docs/quarantine`. Every other build (production, and `--preview` builds that keep Drafts) drops them at the source (`lib/dev-only-sections.ts`), so no Published page may link to a quarantined page.
- Add a top callout saying why the page was quarantined, what would bring it back, and who decides. Record the move as a page comment and as a dated Changelog entry on the migration tracker.
- If the page was Published, ship a 301 in `blume.config.ts` (`redirects`) from its old slug to the page that replaces it, or to its section index when nothing does.
- A quarantined page leaves by being rewritten (move it back to its product folder, with a redirect from the quarantine slug) or by being trashed after the user decides, with the decision recorded as a page comment first.

## Legacy Decision Control (`/docs/dc`)

- The old Decision Control, Decision Control Tower and Sidecar docs live under slug `dc/` with Section `Decision Control`. They are Published, and `lib/legacy-section.ts` noindexes them and drops them from site search. The "Decision Control" header tab is visible for now (since 2026-11-17) and will be phased out; to hide it except on `dc/` pages, uncomment the rule in `theme.css`.
- Each page starts with a gray legacy-notice callout instead of 🚩 callouts; its open items stay in page comments, and its Flag stays `⚑ Red` until they are resolved.
- The intended entry points are the end of the index page and the FAQ item `platform/05-faq/decision-control`. Ask the user before adding other links from new-platform pages into `/dc`.

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
