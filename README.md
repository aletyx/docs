# Aletyx Documentation

Enterprise decision and process automation platform — Build, test, deploy, and govern business decisions and processes with Aletyx.

## Blume migration

This Mintlify site is being replaced by a Blume site that builds its pages from the Notion Docs database (see `blume.config.ts`). New and migrated pages are written in Notion, not in this repo.

Track progress on the [Blume migration tracker](https://app.notion.com/p/aletyx/Blume-migration-tracker-3e9abc1d8c6481dcb8f2f38bf3accbef) in Notion. Register every page you migrate or add there, with its Blume URL and Notion page.

## Link check

Run `scripts/links-check.sh` before committing content or nav changes. It checks every internal link in an existing build and does not build the site itself, so build first:

```sh
scripts/build-site.sh      # builds from Notion into dist/ (needs NOTION_TOKEN and NOTION_DB_ID, from the environment or .env.local)
scripts/links-check.sh     # checks dist/
```

While `blume dev` is running, build with `scripts/build-site.sh --isolated` and check its output with `scripts/links-check.sh .blume-verify/dist`.
