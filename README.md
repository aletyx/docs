# Aletyx Documentation

Enterprise decision and process automation platform — Build, test, deploy, and govern business decisions and processes with Aletyx.

## Git hooks

This repo ships a `pre-push` hook that runs `scripts/links-check.sh` to block pushes containing broken internal documentation links. Enable it once per clone:

```sh
scripts/git-hooks/install-hooks.sh
```

This sets `core.hooksPath` to the tracked `scripts/git-hooks/` directory. To check links manually at any time, run `scripts/links-check.sh`. To push despite a failing check, use `git push --no-verify`.