#!/usr/bin/env bash
#
# Point git at the tracked hooks directory. Run once per clone.

set -euo pipefail
repo_root="$(git rev-parse --show-toplevel)"
git -C "$repo_root" config core.hooksPath scripts/git-hooks
echo "Installed: core.hooksPath -> scripts/git-hooks"
