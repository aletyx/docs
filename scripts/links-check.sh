#!/usr/bin/env bash
#
# links-check.sh — verify internal links on an already built Blume site.
#
# Does not build anything. Build first with scripts/build-site.sh (output in
# dist/), or with `scripts/build-site.sh --isolated` while `blume dev` is running
# (output in .blume-verify/dist, pass that directory as the argument).
#
# Links are checked as the site serves them: every href/src in the built HTML
# that points at the site itself (/docs/..., relative, or https://aletyx.ai/docs/...)
# must resolve to a built page or asset. A production build leaves out Draft
# pages, so a link to a Draft page counts as broken.
#
# Usage: scripts/links-check.sh [dist-dir]   (default: dist)

set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
dist="${1:-$root/dist}"

if [[ ! -d "$dist" ]]; then
  echo "links-check: no build found at $dist. Run scripts/build-site.sh first." >&2
  exit 2
fi

exec python3 "$root/scripts/links-check.py" "$dist"
