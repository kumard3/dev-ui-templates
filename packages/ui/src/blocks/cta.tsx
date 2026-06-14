import { Container } from "../primitives/container";
import { Button } from "../primitives/button";

export function CTA({
  heading,
  subheading,
  action,
}: {
  heading: string;
  subheading?: string;
  action: { label: string; href: string };
}) {
  return (
    <Container className="py-24">
      <div className="rounded-3xl border border-line bg-surface px-8 py-16 text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{heading}</h2>
        {subheading ? <p className="mx-auto mt-4 max-w-xl text-muted">{subheading}</p> : null}
        <Button variant="primary" size="lg" href={action.href} className="mt-8">
          {action.label}
        </Button>
      </div>
    </Container>
  );
}
