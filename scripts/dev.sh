#!/usr/bin/env bash
#
# dev.sh: run the Blume dev server, with every page from the Notion Docs database.
#
# Same entry point for `npm run dev`, `make dev`, process-compose (devbox) and
# Codespaces. Notion settings (NOTION_TOKEN, NOTION_DB_ID, NOTION_VARS_DB_ID)
# come from the environment (CI or Codespaces secrets) or from .env / .env.local
# at the repo root; exported values win over the files, as in build-site.sh.
#
# The site serves at http://127.0.0.1:${PORT:-4321}/docs. Extra arguments go
# straight to `blume dev`. A cold start fetches every Notion page first and can
# take several minutes.
#
# Usage: scripts/dev.sh [blume dev options]

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

HOST="${HOST:-127.0.0.1}"
PORT="${PORT:-4321}"

keep_token="${NOTION_TOKEN:-}"
keep_db_id="${NOTION_DB_ID:-}"
keep_vars_db_id="${NOTION_VARS_DB_ID:-}"
for f in .env .env.local; do
  if [[ -f "$f" ]]; then
    set -a
    # shellcheck disable=SC1090
    . "./$f"
    set +a
  fi
done
[[ -n "$keep_token" ]] && export NOTION_TOKEN="$keep_token"
[[ -n "$keep_db_id" ]] && export NOTION_DB_ID="$keep_db_id"
[[ -n "$keep_vars_db_id" ]] && export NOTION_VARS_DB_ID="$keep_vars_db_id"

missing=()
for v in NOTION_TOKEN NOTION_DB_ID NOTION_VARS_DB_ID; do
  [[ -n "${!v:-}" ]] || missing+=("$v")
done
if (( ${#missing[@]} )); then
  echo "error: ${missing[*]} not set (export it, add it to .env.local, or in a Codespace add it as a Codespaces secret)" >&2
  exit 1
fi

# One dev server only: a second one would fight the first over .blume/.
if (exec 3<>"/dev/tcp/$HOST/$PORT") 2>/dev/null; then
  echo "Blume dev is already running: http://$HOST:$PORT/docs"
  exit 0
fi

if [[ ! -d node_modules/blume ]]; then
  npm ci
fi

echo "Starting Blume dev at http://$HOST:$PORT/docs (a cold start fetches every Notion page first)"
exec npx blume dev --host "$HOST" --port "$PORT" "$@"
