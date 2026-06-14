import { cn } from "../cn";

export function Avatar({ name, className }: { name: string; className?: string }) {
  const initials = name
    .split(" ")
    .map((p) => p.charAt(0))
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <span
      className={cn(
        "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/5 text-xs font-medium text-zinc-300 ring-1 ring-white/10",
        className,
      )}
    >
      {initials}
    </span>
  );
}
