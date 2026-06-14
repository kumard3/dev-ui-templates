import type { ComponentProps } from "react";
import { cn } from "../cn";

const variants = {
  primary: "bg-white text-ink hover:bg-neutral-200",
  outline: "border border-line bg-transparent text-fg hover:bg-surface",
  ghost: "text-muted hover:text-fg",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3 text-base",
  icon: "h-9 w-9 text-base",
};

type ButtonProps = {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
} & (
  | ({ href: string } & Omit<ComponentProps<"a">, "href">)
  | ({ href?: undefined } & ComponentProps<"button">)
);

export function Button({ variant = "primary", size = "md", className, ...props }: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-lg font-medium transition disabled:cursor-not-allowed disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );

  if (props.href != null) {
    return <a className={classes} {...(props as ComponentProps<"a">)} />;
  }
  return <button className={classes} {...(props as ComponentProps<"button">)} />;
}
