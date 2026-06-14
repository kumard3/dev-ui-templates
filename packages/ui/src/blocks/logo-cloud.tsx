import { Container } from "../primitives/container";

export function LogoCloud({ label = "Trusted by fast-moving teams", logos = [] }: { label?: string; logos?: string[] }) {
  return (
    <Container className="border-b border-line py-16">
      <p className="text-center text-xs uppercase tracking-widest text-muted">{label}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
        {logos.map((l) => (
          <span key={l} className="text-lg font-semibold text-neutral-600">
            {l}
          </span>
        ))}
      </div>
    </Container>
  );
}
