# DevUI Templates

Free, open-source UI templates from [DevUI](https://dev-ui.vercel.app). MIT licensed — use them
in anything.

## AI starters

Modern templates built with **Next.js 14, TypeScript, and Tailwind**, all composed from a
shared `@devui/ui` design system (solid monochrome theme, no gradients). Live demos:

| Template | Live demo | Code |
|----------|-----------|------|
| AI SaaS Landing | https://devui-ai-saas-landing.pages.dev | `templates/ai-saas-landing` |
| AI Chat | https://devui-ai-chat.pages.dev | `templates/ai-chat` |
| AI Agent Dashboard | https://devui-ai-agent-dashboard.pages.dev | `templates/ai-agent-dashboard` |

### Run

```bash
bun install            # from the repo root (links @devui/ui into every template)
cd templates/ai-chat
bun run dev
```

### Restyle everything at once

Colors live in one file: `packages/ui/tailwind-preset.ts`. Change the tokens and every
template updates.

### Deploy to Vercel + Cloudflare

```bash
./deploy.sh ai-chat both      # or: vercel | cf
```

Full options (Netlify, static, full Next.js) are in `DEPLOY.md`.

## Legacy templates

The `template-1` … `template-13` folders are the original DevUI templates (NFT, portfolio,
agency landing pages). Each is a standalone app:

```bash
cd template-1
yarn
yarn dev
```

## License

MIT — see `LICENSE`.
