import { cn } from "../cn";

export function Logo({ name = "Nova", className }: { name?: string; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2 font-semibold text-white", className)}>
      <span className="grid h-7 w-7 place-items-center rounded-lg bg-white text-sm font-bold text-ink">
        {name.charAt(0)}
      </span>
      {name}
    </span>
  );
}
