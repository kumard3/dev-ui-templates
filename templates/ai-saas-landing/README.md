# AI SaaS Landing — DevUI Pro

A modern, dark-mode landing page for an AI product. Built with Next.js 14 (App Router),
TypeScript, and Tailwind CSS.

## Run

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Structure

- `app/page.tsx` — composes the sections
- `components/` — Navbar, Hero, LogoCloud, Features, Pricing, CTA, Footer

Edit the copy in each section component, and change the color tokens in the shared
`@devui/ui` preset (`packages/ui/tailwind-preset.ts`) to match your brand.

Part of DevUI Pro. License in the repo root `LICENSE.md`.
