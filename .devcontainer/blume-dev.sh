#!/usr/bin/env bash
# Starts the Blume dev server in a Codespace. Notion settings come from Codespaces secrets,
# or from .env / .env.local without overriding exported values (same as process-compose.yaml).
set -euo pipefail
cd "$(dirname "$0")/.."

keep_token="${NOTION_TOKEN:-}"; keep_db_id="${NOTION_DB_ID:-}"; keep_vars_db_id="${NOTION_VARS_DB_ID:-}"
for f in .env .env.local; do [ -f "$f" ] && { set -a; . "./$f"; set +a; }; done
[ -n "$keep_token" ] && export NOTION_TOKEN="$keep_token"
[ -n "$keep_db_id" ] && export NOTION_DB_ID="$keep_db_id"
[ -n "$keep_vars_db_id" ] && export NOTION_VARS_DB_ID="$keep_vars_db_id"

missing=()
for v in NOTION_TOKEN NOTION_DB_ID NOTION_VARS_DB_ID; do [ -n "${!v:-}" ] || missing+=("$v"); done
if [ ${#missing[@]} -gt 0 ]; then
  echo "Missing ${missing[*]}. Add them as Codespaces secrets for this repo, then rebuild the Codespace." >&2
  exit 1
fi

# Only one dev server: skip if something already listens on 4321 (e.g. a second attach).
if (exec 3<>/dev/tcp/127.0.0.1/4321) 2>/dev/null; then
  echo "Blume dev is already running on port 4321."
  exit 0
fi

[ -d node_modules/blume ] || npm ci
exec npx blume dev --host 127.0.0.1 --port 4321
