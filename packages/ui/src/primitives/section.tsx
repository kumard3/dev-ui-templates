import type { ComponentProps } from "react";
import { cn } from "../cn";

export function Section({ className, ...props }: ComponentProps<"section">) {
  return <section className={cn("py-24", className)} {...props} />;
}
