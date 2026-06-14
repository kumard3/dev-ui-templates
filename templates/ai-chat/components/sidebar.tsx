import { Button } from "@devui/ui";
import { conversations } from "@/lib/sample";

export function Sidebar({ onNew }: { onNew: () => void }) {
  return (
    <aside className="hidden w-64 shrink-0 flex-col border-r border-line md:flex">
      <div className="p-3">
        <Button variant="outline" onClick={onNew} className="w-full justify-start gap-2">
          <span className="text-lg leading-none">+</span> New chat
        </Button>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 pb-3">
        <p className="px-2 py-2 text-xs uppercase tracking-wide text-muted">Recent</p>
        <ul className="space-y-1">
          {conversations.map((c) => (
            <li key={c}>
              <button className="w-full truncate rounded-lg px-3 py-2 text-left text-sm text-muted transition hover:bg-surface hover:text-fg">
                {c}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t border-line p-3">
        <div className="flex items-center gap-3 rounded-lg px-2 py-1.5">
          <span className="grid h-8 w-8 place-items-center rounded-full border border-line bg-surface text-xs text-muted">
            DK
          </span>
          <span className="text-sm text-neutral-300">Your account</span>
        </div>
      </div>
    </aside>
  );
}
