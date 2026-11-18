#!/usr/bin/env bash
# Starts the Blume dev server in a Codespace (postAttachCommand). Notion settings come from
# Codespaces secrets; scripts/dev.sh loads them and skips the start if the server already runs.
set -euo pipefail
exec "$(dirname "$0")/../scripts/dev.sh"
