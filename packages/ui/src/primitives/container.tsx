import type { ComponentProps } from "react";
import { cn } from "../cn";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("mx-auto max-w-6xl px-6", className)} {...props} />;
}
