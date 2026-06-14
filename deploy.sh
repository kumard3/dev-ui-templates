#!/usr/bin/env bash
#
# Deploy a DevUI Pro template to Vercel and/or Cloudflare Pages.
#
# Usage:
#   ./deploy.sh <template> [target]
#     <template>  folder name under templates/ (e.g. ai-chat)
#     [target]    vercel | cf | both   (default: both)
#
# Requires bun, plus the CLI for each target you use, logged in:
#   Vercel:      npm i -g vercel && vercel login
#   Cloudflare:  npx wrangler login   (or set CLOUDFLARE_API_TOKEN)
#
set -euo pipefail

NAME="${1:-}"
TARGET="${2:-both}"

if [ -z "$NAME" ] || [ ! -d "templates/$NAME" ]; then
  echo "Usage: ./deploy.sh <template> [vercel|cf|both]"
  echo "Templates:"
  ls templates
  exit 1
fi

DIR="templates/$NAME"

echo "▸ Building static export for $NAME"
( cd "$DIR" && STATIC_EXPORT=1 bun run build )
OUT="$DIR/out"

if [ "$TARGET" = "vercel" ] || [ "$TARGET" = "both" ]; then
  echo "▸ Vercel"
  vercel deploy "$OUT" --prod --yes
fi

if [ "$TARGET" = "cf" ] || [ "$TARGET" = "both" ]; then
  echo "▸ Cloudflare Pages"
  npx wrangler pages deploy "$OUT" --project-name "devui-$NAME" --branch main
fi

echo "✓ Done"
