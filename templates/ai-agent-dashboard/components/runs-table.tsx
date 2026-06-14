import { Card, cn } from "@devui/ui";
import { runs, type RunStatus } from "@/lib/sample";

const statusStyles: Record<RunStatus, string> = {
  success: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
  failed: "bg-rose-500/10 text-rose-400 ring-rose-500/20",
  running: "bg-amber-500/10 text-amber-400 ring-amber-500/20",
};

export function RunsTable() {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between px-5 py-4">
        <h3 className="text-sm font-medium text-white">Recent runs</h3>
        <a href="#" className="text-xs text-muted transition hover:text-fg">
          View all
        </a>
      </div>
      <table className="w-full text-left text-sm">
        <thead className="border-y border-line text-xs uppercase tracking-wide text-muted">
          <tr>
            <th className="px-5 py-3 font-medium">Agent</th>
            <th className="px-5 py-3 font-medium">Status</th>
            <th className="px-5 py-3 font-medium">Duration</th>
            <th className="px-5 py-3 font-medium">Cost</th>
            <th className="px-5 py-3 font-medium">When</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {runs.map((r) => (
            <tr key={r.id} className="transition hover:bg-white/[0.02]">
              <td className="px-5 py-3 font-medium text-neutral-200">{r.agent}</td>
              <td className="px-5 py-3">
                <span className={cn("inline-flex rounded-full px-2 py-0.5 text-xs font-medium capitalize ring-1", statusStyles[r.status])}>
                  {r.status}
                </span>
              </td>
              <td className="px-5 py-3 text-muted">{r.duration}</td>
              <td className="px-5 py-3 text-muted">{r.cost}</td>
              <td className="px-5 py-3 text-muted">{r.when}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}
