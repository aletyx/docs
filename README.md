# Aletyx Documentation

Enterprise decision and process automation platform — Build, test, deploy, and govern business decisions and processes with Aletyx.

## Blume migration

This Mintlify site is being replaced by a Blume site that builds its pages from the Notion Docs database (see `blume.config.ts`). New and migrated pages are written in Notion, not in this repo.

Track progress on the [Blume migration tracker](https://app.notion.com/p/aletyx/Blume-migration-tracker-3e9abc1d8c6481dcb8f2f38bf3accbef) in Notion. Register every page you migrate or add there, with its Blume URL and Notion page.

## Git hooks

This repo ships a `pre-push` hook that runs `scripts/links-check.sh` to block pushes containing broken internal documentation links. Enable it once per clone:

```sh
scripts/git-hooks/install-hooks.sh
```

This sets `core.hooksPath` to the tracked `scripts/git-hooks/` directory. To check links manually at any time, run `scripts/links-check.sh`. To push despite a failing check, use `git push --no-verify`.