# Building and serving the docs

This is how to build the Aletyx docs and serve them at `https://aletyx.ai/docs`. The site is static: one build command, one output directory, three Notion variables. Page content is written in Notion and pulled at build time, so rebuilding is how content changes reach the site.

## Summary

- Build command: `npm ci && npm run build`
- Output directory: `dist/`, served at `/docs`
- Variables: `NOTION_TOKEN`, `NOTION_DB_ID`, `NOTION_VARS_DB_ID`
- Runtime: Node.js 22.12 or later. Nothing runs on the server: the output is plain files.

## Variables

The build fails at the start if any of these is missing.

| Variable | What it is | Secret |
| --- | --- | --- |
| `NOTION_TOKEN` | Internal integration secret of the Notion integration that reads the docs (starts with `ntn_` or `secret_`). | Yes |
| `NOTION_DB_ID` | ID of the Notion database that holds the pages (the "Blume Docs" database). | No |
| `NOTION_VARS_DB_ID` | ID of the Notion database that holds doc variables, the `{{ALETYX_*}}` values pages substitute at build time ("Doc Variables"). | No |

- The token needs read access only, to both databases: in Notion, add the integration under **Connections** on each database. The build never writes to Notion.
- A database ID is the 32 hex characters in the database's Notion URL. The docs team can supply both IDs.
- The build reads the variables from the environment. For local runs only, it also reads them from `.env` or `.env.local` at the repo root; exported values take precedence. Never commit those files (they are git-ignored).
- In GitHub Actions, the variables come from repository secrets with the same names (see [CI](#ci)).

## Build

```sh
npm ci            # installs exact versions from package-lock.json
npm run build     # same as: make build, or scripts/build-site.sh
```

- Every run fetches all pages from Notion, so a clean build takes several minutes (about 10 on a cold cache). Reruns on the same machine reuse the `.blume/` cache and are much faster.
- The build only publishes pages whose Status is **Published** in Notion. Draft pages are left out.
- `npm run build:preview` (or `make preview`) also includes Draft pages. Use it for review only, never for production.
- The build exits non-zero on any error, for example:
  - a missing variable
  - an unreachable Notion API
  - a page that fails validation
  - an unknown `{{ALETYX_*}}` key

  Treat a non-zero exit as a failed deploy and keep the previous version live.
- Optional check after building: `npm run links-check` reports internal links that don't resolve. It exits non-zero if any are broken.

## Output

`dist/` holds the whole site and nothing else. Serve its contents at `https://aletyx.ai/docs/`, so that `dist/quickstart/index.html` answers `/docs/quickstart`. Every URL the site uses is under `/docs`, including assets (`/docs/_astro/...`), `llms.txt`, `robots.txt` and `sitemap.xml`, so the host only needs the `/docs/*` route.

The routing matches the previous Mintlify site. To switch over, keep the existing `aletyx.ai/docs/*` route and point it at the new host instead of Mintlify.

The host must:

- Serve `x/index.html` for `/docs/x` and `/docs/x/` (directory indexes).
- Serve `404.html` with status 404 for unknown paths.
- Apply the redirects (301s for moved pages) and headers that the build generates. They come in two formats; use the one your host reads:
  - `_redirects` and `_headers`: Cloudflare Pages, Cloudflare Workers static assets, Netlify.
  - `vercel.json`: Vercel.

  On any other host, recreate the rules from `blume-redirects.json` and `_headers`.
- Not cache HTML for long, so content updates show up after a rebuild. Files under `/docs/_astro/` have content hashes in their names and can be cached for a long time.

## CI

`.github/workflows/build-docs.yml` builds the site on demand (Actions, **Build docs**, **Run workflow**) and uploads `dist/` as the `blume-docs-site` artifact. Ticking **preview** includes Draft pages and names the artifact `blume-docs-site-preview`; never deploy that one.

The workflow reads `NOTION_TOKEN`, `NOTION_DB_ID` and `NOTION_VARS_DB_ID` from repository secrets.

## Verify a deploy

- `https://aletyx.ai/docs` loads with styles (CSS comes from `/docs/_astro/`).
- `https://aletyx.ai/docs/llms.txt` and `https://aletyx.ai/docs/sitemap.xml` return 200.
- A moved page redirects: `https://aletyx.ai/docs/08-tooling/maven` returns 301 to `/docs/enterprise-builds/02-tooling/maven`.
- An unknown path such as `https://aletyx.ai/docs/does-not-exist` returns 404 with the docs 404 page.
