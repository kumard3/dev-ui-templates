import { Card } from "@devui/ui";
import { usage } from "@/lib/sample";

export function UsageChart() {
  const max = Math.max(...usage.map((d) => d.value));
  return (
    <Card className="p-5">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-white">Runs this week</h3>
        <span className="text-xs text-muted">Last 7 days</span>
      </div>
      <div className="mt-6 flex h-40 items-end gap-3">
        {usage.map((d) => (
          <div key={d.day} className="flex flex-1 flex-col items-center gap-2">
            <div className="flex h-full w-full items-end">
              <div className="w-full rounded-t bg-white/80" style={{ height: `${(d.value / max) * 100}%` }} />
            </div>
            <span className="text-xs text-muted">{d.day}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
