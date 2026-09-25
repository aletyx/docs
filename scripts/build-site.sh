#!/usr/bin/env bash
#
# build-site.sh — build the Blume docs site from the Notion Docs database.
#
# Blume reads every page from Notion (see blume.config.ts), so the build needs
# NOTION_TOKEN and NOTION_DB_ID. They come from the environment (CI secrets) or,
# locally, from .env.local / .env at the repo root. Exported values take
# precedence over the files.
#
# Output lands in dist/. Extra arguments go straight to `blume build`, e.g.:
#   scripts/build-site.sh --preview    include Draft pages
#   scripts/build-site.sh --isolated   build while `blume dev` is running
#
# Usage: scripts/build-site.sh [blume build options]

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

# File values are fallbacks: anything already exported wins over a stale file.
keep_token="${NOTION_TOKEN:-}"
keep_db_id="${NOTION_DB_ID:-}"
for f in .env.local .env; do
  if [[ -f "$f" ]]; then
    set -a
    # shellcheck disable=SC1090
    . "./$f"
    set +a
    break
  fi
done
[[ -n "$keep_token" ]] && export NOTION_TOKEN="$keep_token"
[[ -n "$keep_db_id" ]] && export NOTION_DB_ID="$keep_db_id"

missing=()
[[ -n "${NOTION_TOKEN:-}" ]] || missing+=(NOTION_TOKEN)
[[ -n "${NOTION_DB_ID:-}" ]] || missing+=(NOTION_DB_ID)
if (( ${#missing[@]} )); then
  echo "error: ${missing[*]} not set (export it, or add it to .env.local)" >&2
  exit 1
fi

if [[ ! -d node_modules/blume ]]; then
  npm ci
fi

npx blume build "$@"
