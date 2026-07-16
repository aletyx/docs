#!/usr/bin/env bash
#
# links-check.sh — verify internal links in .mdx docs.
#
# For every .mdx file, find internal links (relative, not starting with http),
# resolve each to a file on disk, and print the count of OK and broken links.
#
# Internal links are collected from two forms:
#   markdown:   [text](/path/to/page)
#   component:  href="/path/to/page"
# External (http/https/mailto), in-page anchors (#...), and protocol-relative
# (//...) links are ignored.
#
# Resolution rules for a link target (after stripping #anchor and ?query):
#   - absolute "/x/y" is resolved from the docs root (this script's parent dir)
#   - relative "x/y" is resolved from the linking file's directory
#   - a hit is: the literal path, path.mdx, path.md, or path/index.mdx
#
# Usage: scripts/links-check.sh [root-dir]   (default root: repo containing this script)

set -euo pipefail

# Docs root: argument, or the parent of the scripts/ dir holding this script.
script_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
root="${1:-$(dirname "$script_dir")}"
root="$(cd "$root" && pwd)"

total_ok=0
total_broken=0

# Resolve a link target to an existing file; echo the path on success, else nothing.
resolve() {
  local base_dir="$1" target="$2" candidate
  # Strip anchor and query string.
  target="${target%%#*}"
  target="${target%%\?*}"
  [ -z "$target" ] && return 1  # pure anchor / empty

  # The site is served under the /docs base path (aletyx.ai/docs). Mintlify
  # prepends it to markdown/component links at render time, but raw <a> tags
  # must hardcode it — resolve those against the docs root.
  if [[ "$target" == /docs/* ]]; then
    target="${target#/docs}"
  fi

  local prefix
  if [[ "$target" == /* ]]; then
    prefix="$root$target"
  else
    prefix="$base_dir/$target"
  fi

  for candidate in "$prefix" "$prefix.mdx" "$prefix.md" "$prefix/index.mdx"; do
    [ -f "$candidate" ] && { printf '%s\n' "$candidate"; return 0; }
  done
  return 1
}

# Find all .mdx files under the root, sorted for stable output.
while IFS= read -r -d '' file; do
  base_dir="$(dirname "$file")"
  ok=0
  broken=0
  broken_targets=()

  # Extract link targets from markdown ](...) and href="..." forms,
  # then drop external / anchor / protocol-relative links.
  while IFS= read -r target; do
    [ -z "$target" ] && continue
    case "$target" in
      http://*|https://*|mailto:*|tel:*|\#*|//*) continue ;;
    esac
    if resolve "$base_dir" "$target" >/dev/null; then
      ok=$((ok + 1))
    else
      broken=$((broken + 1))
      broken_targets+=("$target")
    fi
  done < <(
    grep -oE '\]\([^) ]+\)|href="[^"]+"' "$file" \
      | sed -E 's/^\]\(//; s/\)$//; s/^href="//; s/"$//'
  )

  rel="${file#"$root"/}"
  printf '%s  ok=%d broken=%d\n' "$rel" "$ok" "$broken"
  for t in "${broken_targets[@]:-}"; do
    [ -n "$t" ] && printf '    BROKEN: %s\n' "$t"
  done

  total_ok=$((total_ok + ok))
  total_broken=$((total_broken + broken))
done < <(find "$root" -name '*.mdx' -type f -print0 | sort -z)

printf '\nTOTAL  ok=%d broken=%d\n' "$total_ok" "$total_broken"

# Exit non-zero if any broken links were found.
[ "$total_broken" -eq 0 ] || exit 1
exit 0
