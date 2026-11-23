#!/usr/bin/env bash
#
# restart-dev.sh: rebuild the docs from Notion and restart the Blume dev server.
#
# Stops the dev server on $PORT, clears the Notion cache so every page and doc
# variable is fetched fresh, starts the server again in the background through
# scripts/dev.sh, and waits until http://$HOST:$PORT/docs answers. Notion's edge
# sometimes returns a 502 during a full fetch, which stops Blume, so a failed
# start is retried (3 attempts by default).
#
# The server keeps running after this script exits. Its output goes to
# .blume/dev.log (`tail -f .blume/dev.log` to follow it).
#
# Usage: scripts/restart-dev.sh [--keep-cache]
#   --keep-cache  restart without clearing the Notion cache (fast, but page and
#                 slug changes made in Notion since the last fetch don't show)
#
# For a production build and link check, stop dev first and run `make broken-links`.
#
# Environment: HOST (default 127.0.0.1), PORT (default 4321),
#              ATTEMPTS (default 3), READY_TIMEOUT in seconds (default 900).

set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

HOST="${HOST:-127.0.0.1}"
PORT="${PORT:-4321}"
ATTEMPTS="${ATTEMPTS:-3}"
READY_TIMEOUT="${READY_TIMEOUT:-900}"
LOG=".blume/dev.log"
URL="http://$HOST:$PORT/docs"

keep_cache=false
for arg in "$@"; do
  case "$arg" in
    --keep-cache) keep_cache=true ;;
    -h | --help) sed -n '2,21p' "$0" | sed 's/^# \{0,1\}//'; exit 0 ;;
    *) echo "error: unknown option $arg (try --help)" >&2; exit 2 ;;
  esac
done

listening_pids() { lsof -nP -iTCP:"$PORT" -sTCP:LISTEN -t 2>/dev/null || true; }

stop_server() {
  local pids
  pids="$(listening_pids)"
  if [[ -z "$pids" ]]; then
    echo "No dev server on port $PORT."
  else
    echo "Stopping the dev server on port $PORT (pid $(echo $pids))."
    # shellcheck disable=SC2086
    kill $pids 2>/dev/null || true
    for _ in $(seq 1 20); do
      [[ -z "$(listening_pids)" ]] && break
      sleep 0.5
    done
    pids="$(listening_pids)"
    # shellcheck disable=SC2086
    [[ -n "$pids" ]] && kill -9 $pids 2>/dev/null || true
  fi
  rm -f .blume/dev.lock
}

http_code() { curl -s -o /dev/null -w '%{http_code}' --max-time 10 "$URL" 2>/dev/null || true; }

# Starts the server and waits for it. Returns 0 when ready, 1 if it exited, 2 on timeout.
start_and_wait() {
  mkdir -p .blume
  nohup scripts/dev.sh > "$LOG" 2>&1 &
  local pid=$! waited=0
  while (( waited < READY_TIMEOUT )); do
    [[ "$(http_code)" == "200" ]] && return 0
    kill -0 "$pid" 2>/dev/null || return 1
    sleep 2
    waited=$((waited + 2))
    (( waited % 60 == 0 )) && echo "  still loading from Notion ($((waited / 60)) min)..."
  done
  return 2
}

stop_server

if ! $keep_cache; then
  echo "Clearing the Notion cache, so every page is fetched fresh."
  rm -rf .blume/cache/notion .blume/content/notion .blume/cache/doc-variables.json
fi

ok=false
for attempt in $(seq 1 "$ATTEMPTS"); do
  echo "Starting Blume dev (attempt $attempt of $ATTEMPTS). A full Notion fetch takes a few minutes."
  started=$(date +%s)
  if start_and_wait; then
    echo "Ready in $(( $(date +%s) - started ))s: $URL"
    ok=true
    break
  else
    status=$?
  fi
  if (( status == 2 )); then
    echo "error: not ready after ${READY_TIMEOUT}s. See $LOG." >&2
    stop_server
    exit 1
  fi
  echo "The server stopped during startup:" >&2
  grep -E 'BLUME_[A-Z_]+|status: [0-9]{3}|Unknown variable|rate_limited' "$LOG" | head -3 | cut -c1-200 >&2 || tail -5 "$LOG" >&2
  rm -f .blume/dev.lock
  if grep -qE 'Unknown variable|BLUME_CONFIG' "$LOG"; then
    echo "error: this is a content or config error, not a Notion outage, so retrying won't help. See $LOG." >&2
    exit 1
  fi
  (( attempt < ATTEMPTS )) && sleep 10
done
$ok || { echo "error: the dev server did not start after $ATTEMPTS attempts. See $LOG." >&2; exit 1; }

if grep -qE '\[ERROR\]' "$LOG"; then
  echo "Warning: the server logged errors (pages that fail to render):"
  grep -E '\[ERROR\]' "$LOG" | head -5 | cut -c1-200
fi

echo "Dev server running at $URL (log: $LOG)"
