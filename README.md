# Aletyx Documentation

Enterprise decision and process automation platform: build, test, deploy, and govern business decisions and processes with Aletyx.

## How the site is built

The docs are a [Blume](https://www.npmjs.com/package/blume) site that builds every page from the Notion Docs database (see `blume.config.ts`). Pages are written in Notion, not in this repo. This repo holds the Blume configuration (`blume.config.ts`, `theme.css`, `lib/`), the build and link-check scripts, and the local dev setup.

## Commands

npm and make run the same scripts (in `scripts/`), and so do CI, devbox (process-compose) and Codespaces:

| What | npm | make |
| --- | --- | --- |
| Install dependencies | `npm ci` | `make install` |
| Dev server at http://127.0.0.1:4321/docs | `npm run dev` (or `npm start`) | `make dev` |
| Production build into `dist/` | `npm run build` | `make build` |
| Build including Draft pages | `npm run build:preview` | `make preview` |
| Check links in `dist/` | `npm run links-check` | `make links-check` |
| Build, then check links (like `mint broken-links`) | `npm run broken-links` | `make broken-links` |

They replace `mint dev` and `mint broken-links`. Every command needs `NOTION_TOKEN`, `NOTION_DB_ID` and `NOTION_VARS_DB_ID`, exported or in `.env.local`. The dev server serves under `/docs` on port 4321 (`PORT=3000 npm run dev` to change it), and a cold start fetches every Notion page first, which takes several minutes. Pass extra Blume options after `--`, for example `npm run build -- --isolated`.

Track pages on the [Blume migration tracker](https://app.notion.com/p/aletyx/Blume-migration-tracker-3e9abc1d8c6481dcb8f2f38bf3accbef) in Notion. Register every page you migrate or add there, with its Blume URL and Notion page.

## Operations

To build and serve the site in production (build command, output directory, Notion variables, host requirements), see [OPERATIONS.md](OPERATIONS.md).

## Archived Mintlify site

The previous Mintlify site (pages, `docs.json`, images and its scripts) is archived under `archive/mintlify/`, with its original layout, as a migration source only. Don't edit or build it.

## Link check

Run `scripts/links-check.sh` before committing content or nav changes. It checks every internal link in an existing build and does not build the site itself, so build first:

```sh
scripts/build-site.sh      # builds from Notion into dist/ (needs NOTION_TOKEN, NOTION_DB_ID and NOTION_VARS_DB_ID, from the environment or .env.local)
scripts/links-check.sh     # checks dist/
```

`dist/` holds only the site and is served at `/docs` (`deployment.base` in `blume.config.ts`): pages, assets, `llms.txt`, `robots.txt` and `sitemap.xml` all sit under `aletyx.ai/docs`, as they did with Mintlify. To go live, point the existing `aletyx.ai/docs/*` route at a host that serves `dist/` at `/docs`, and apply `dist/_redirects`.

There is no pre-push link check any more: pages live in Notion, so a push doesn't change them. If you installed the old hook (`scripts/git-hooks/install-hooks.sh`), turn it off with `git config --unset core.hooksPath`.

While `blume dev` is running, build with `scripts/build-site.sh --isolated` and check its output with `scripts/links-check.sh .blume-verify/dist`.
