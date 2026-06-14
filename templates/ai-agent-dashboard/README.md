# AI Agent Dashboard — DevUI Pro

An admin dashboard for an AI agent platform: sidebar navigation, top bar with search, four
stat cards, a recent-runs table with status badges, and a weekly usage chart (pure CSS, no
chart dependency). Built with Next.js 14, TypeScript, Tailwind, and the shared `@devui/ui`
design system.

## Run

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Structure

- `components/shell.tsx` — sidebar + top bar layout (pass `title` and children)
- `components/stat-cards.tsx` — KPI cards (uses the shared `Stat` primitive)
- `components/runs-table.tsx` — recent runs with status badges
- `components/usage-chart.tsx` — dependency-free bar chart
- `lib/sample.ts` — sample stats, usage, and runs

## Wire your data

Everything reads from `lib/sample.ts`. Replace those exports with data from your API or
database (the page is a server component, so you can fetch directly in `app/page.tsx` and
pass results down). Swap the bar chart for Recharts or Tremor if you need interactivity.

Part of DevUI Pro. License in the repo root `LICENSE.md`.
