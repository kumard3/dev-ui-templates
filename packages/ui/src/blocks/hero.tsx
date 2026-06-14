import { Container } from "../primitives/container";
import { Badge } from "../primitives/badge";
import { Button } from "../primitives/button";

export type HeroProps = {
  badge?: string;
  title: string;
  subtitle: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  note?: string;
};

export function Hero({ badge, title, subtitle, primary, secondary, note }: HeroProps) {
  return (
    <section className="border-b border-line">
      <Container className="max-w-4xl pb-24 pt-24 text-center">
        {badge ? (
          <Badge>
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            {badge}
          </Badge>
        ) : null}
        <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">{subtitle}</p>
        <div className="mt-10 flex items-center justify-center gap-3">
          {primary ? (
            <Button variant="primary" size="lg" href={primary.href}>
              {primary.label}
            </Button>
          ) : null}
          {secondary ? (
            <Button variant="outline" size="lg" href={secondary.href}>
              {secondary.label}
            </Button>
          ) : null}
        </div>
        {note ? <p className="mt-4 text-xs text-muted">{note}</p> : null}
      </Container>
    </section>
  );
}
