import type { ComponentProps } from "react";
import { cn } from "../cn";

export function Badge({ className, ...props }: ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted",
        className,
      )}
      {...props}
    />
  );
}
