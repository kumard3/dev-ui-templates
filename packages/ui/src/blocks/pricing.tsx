import { Container } from "../primitives/container";
import { Button } from "../primitives/button";
import { CheckItem } from "../primitives/check-item";
import { cn } from "../cn";

export type Tier = {
  name: string;
  price: string;
  period?: string;
  tagline: string;
  features: string[];
  cta: { label: string; href: string };
  featured?: boolean;
};

export function Pricing({
  heading,
  subheading,
  tiers = [],
}: {
  heading: string;
  subheading?: string;
  tiers?: Tier[];
}) {
  return (
    <Container id="pricing" className="py-24">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{heading}</h2>
        {subheading ? <p className="mx-auto mt-4 max-w-xl text-muted">{subheading}</p> : null}
      </div>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={cn("relative rounded-2xl border bg-surface p-8", t.featured ? "border-white" : "border-line")}
          >
            {t.featured ? (
              <span className="absolute -top-3 left-8 rounded-full bg-white px-3 py-1 text-xs font-medium text-ink">
                Most popular
              </span>
            ) : null}
            <h3 className="text-sm font-medium uppercase tracking-wide text-muted">{t.name}</h3>
            <p className="mt-4 text-4xl font-semibold text-white">
              {t.price}
              <span className="text-base font-normal text-muted">{t.period ?? "/mo"}</span>
            </p>
            <p className="mt-2 text-sm text-muted">{t.tagline}</p>
            <Button variant={t.featured ? "primary" : "outline"} href={t.cta.href} className="mt-6 w-full">
              {t.cta.label}
            </Button>
            <ul className="mt-8 space-y-3 text-sm text-neutral-300">
              {t.features.map((f) => (
                <CheckItem key={f}>{f}</CheckItem>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Container>
  );
}
