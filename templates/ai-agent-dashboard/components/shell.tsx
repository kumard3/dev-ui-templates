import type { ReactNode } from "react";
import { Logo, cn } from "@devui/ui";

const nav = [
  { label: "Overview", icon: "▦", active: true },
  { label: "Agents", icon: "◇" },
  { label: "Runs", icon: "↻" },
  { label: "Logs", icon: "≡" },
  { label: "Settings", icon: "⚙" },
];

export function Shell({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="flex min-h-screen bg-ink">
      <aside className="hidden w-60 shrink-0 flex-col border-r border-line lg:flex">
        <div className="flex h-16 items-center px-5">
          <Logo name="Nova" />
        </div>
        <nav className="flex-1 px-3">
          <ul className="space-y-1">
            {nav.map((n) => (
              <li key={n.label}>
                <a
                  href="#"
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
                    n.active ? "bg-surface text-white" : "text-muted hover:bg-surface hover:text-fg",
                  )}
                >
                  <span className="text-muted">{n.icon}</span>
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="border-t border-line p-3">
          <div className="flex items-center gap-3 px-2 py-1.5">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-line bg-surface text-xs text-muted">
              DK
            </span>
            <div className="text-sm">
              <p className="text-neutral-200">Deepanshu</p>
              <p className="text-xs text-muted">Pro plan</p>
            </div>
          </div>
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center justify-between border-b border-line px-6">
          <h1 className="text-lg font-semibold text-white">{title}</h1>
          <div className="flex items-center gap-3">
            <input
              placeholder="Search…"
              className="hidden rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-white outline-none placeholder:text-muted focus:border-neutral-600 sm:block"
            />
            <span className="grid h-8 w-8 place-items-center rounded-full border border-line bg-surface text-xs text-muted">
              DK
            </span>
          </div>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
