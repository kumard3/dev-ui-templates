import { Container } from "../primitives/container";
import { Card } from "../primitives/card";
import { cn } from "../cn";

export type Feature = { title: string; body: string; wide?: boolean };

export function FeatureGrid({
  heading,
  subheading,
  features = [],
}: {
  heading: string;
  subheading?: string;
  features?: Feature[];
}) {
  return (
    <Container id="features" className="py-24">
      <div className="max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{heading}</h2>
        {subheading ? <p className="mt-4 text-muted">{subheading}</p> : null}
      </div>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title} className={cn("p-6", f.wide && "md:col-span-2")}>
            <h3 className="text-lg font-medium text-white">{f.title}</h3>
            <p className="mt-2 text-sm text-muted">{f.body}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
