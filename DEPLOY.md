# Deploying DevUI Pro templates

Every template is a standard Next.js 14 app. Deploy it as a **static site** (anywhere) or as
a **full Next.js app** (with API routes / SSR).

## One command — Vercel + Cloudflare

From the repo root:

```bash
./deploy.sh <template> both      # e.g. ./deploy.sh ai-chat both
./deploy.sh <template> vercel
./deploy.sh <template> cf
```

It builds the static export and pushes to the chosen target(s). Log in to each first
(`vercel login`, `npx wrangler login`). On a multi-team Vercel account, add `--scope <team>`
to the `vercel deploy` line in `deploy.sh`.

The rest of this file documents what `deploy.sh` does, and the full-Next.js options. Run the
manual commands from inside a template folder, e.g. `templates/ai-chat`.

## Static — deploy to any host (Cloudflare Pages, Netlify, GitHub Pages, S3)

```bash
bun run build:static     # outputs ./out  (a self-contained static site)
```

**Cloudflare Pages**
```bash
npx wrangler pages deploy out --project-name my-app
```
Or connect the repo in the Cloudflare dashboard:
- Build command: `bun run build:static`
- Output directory: `out`
- Root directory: `templates/<name>`

**Netlify**
```bash
netlify deploy --prod --dir=out
```

**Vercel (as static)**
```bash
vercel deploy out --prod
```

**Any static host** — upload the contents of `out/`.

## Full Next.js — API routes, SSR (e.g. the chat's `/api/chat` backend)

Use the default build (`bun run build`). Deploy to:
- **Vercel:** `vercel --prod`
- **Cloudflare:** `npx @cloudflare/next-on-pages`, then deploy `.vercel/output/static` to Pages
- **Node host:** `bun run build && bun run start`

## Which one?

Start **static** while a template has no backend — it's the cheapest and deploys to any host
in one command. Switch to **full Next.js** the moment you add an API route or server-side
data fetching. The `output` mode is env-toggled in `next.config.mjs`, so no code change is
needed to switch: plain `build` = full Next, `build:static` = static export.
