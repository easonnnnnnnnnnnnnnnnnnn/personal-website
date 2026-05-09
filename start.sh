#!/usr/bin/env bash
# Serves this folder on http://localhost:<PORT> using whatever is installed.
# Tries python3, then python, then npx http-server, then php.

set -e

PORT="${PORT:-8000}"
ROOT="$(cd "$(dirname "$0")" && pwd)"
URL="http://localhost:${PORT}"

cd "$ROOT"

# --- sanity: required source files ------------------------------------------
missing=()
for f in index.html app-v2.jsx styles-v2.css assets/eason.jpg; do
  [ -e "$f" ] || missing+=("$f")
done
if [ "${#missing[@]}" -gt 0 ]; then
  echo "Missing required files:"
  printf '  - %s\n' "${missing[@]}"
  exit 1
fi

# --- pick a server ----------------------------------------------------------
have() { command -v "$1" >/dev/null 2>&1; }

open_browser() {
  if have open;        then (sleep 1 && open "$URL") &
  elif have xdg-open;  then (sleep 1 && xdg-open "$URL") &
  fi
}

echo "Serving $ROOT on $URL"
echo "Press Ctrl+C to stop."
echo

if have python3; then
  echo "→ using python3 http.server"
  open_browser
  exec python3 -m http.server "$PORT"
fi

if have python; then
  echo "→ using python http.server"
  open_browser
  exec python -m http.server "$PORT"
fi

if have npx; then
  echo "→ using npx http-server (will download on first run)"
  open_browser
  exec npx --yes http-server -p "$PORT" -c-1 .
fi

if have php; then
  echo "→ using php built-in server"
  open_browser
  exec php -S "localhost:${PORT}" -t .
fi

echo "No supported server found. Install one of:"
echo "  - Python 3:  https://www.python.org/downloads/  (or 'brew install python')"
echo "  - Node.js:   https://nodejs.org/                (or 'brew install node')"
echo "  - PHP:       'brew install php'"
exit 1
