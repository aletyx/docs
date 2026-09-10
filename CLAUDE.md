# Working agreements

## Writing style

- No em dashes. Use commas, colons, parentheses, or separate sentences.
- Never write "deterministic". Say "predictable", or "the same inputs always produce the same result".

## Issue tracking

Tickets live in a separate repo: `aletyx/aletyx-content-issues`. Never use this repo's tracker.

- Create, list, comment, and close there: `gh issue <cmd> --repo aletyx/aletyx-content-issues`.
- Rank the next ticket by: (1) priority label, (2) business relevance, (3) site nav order.
- After picking a ticket, stop. Present it and wait for explicit instructions before changing anything.
- Comment on the ticket summarizing the change before pushing.

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
