import { Shell } from "@/components/shell";
import { StatCards } from "@/components/stat-cards";
import { UsageChart } from "@/components/usage-chart";
import { RunsTable } from "@/components/runs-table";

export default function Page() {
  return (
    <Shell title="Overview">
      <div className="space-y-6">
        <StatCards />
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RunsTable />
          </div>
          <UsageChart />
        </div>
      </div>
    </Shell>
  );
}
