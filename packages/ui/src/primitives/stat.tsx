import { Card } from "./card";

export function Stat({
  label,
  value,
  delta,
}: {
  label: string;
  value: string;
  delta?: string;
  positive?: boolean;
}) {
  return (
    <Card className="p-5">
      <p className="text-sm text-muted">{label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-semibold text-white">{value}</span>
        {delta ? <span className="text-xs font-medium text-muted">{delta}</span> : null}
      </div>
    </Card>
  );
}
