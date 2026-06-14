import { Container } from "../primitives/container";
import { Logo } from "../primitives/logo";
import { Button } from "../primitives/button";

export type NavbarProps = {
  brand?: string;
  links?: { label: string; href: string }[];
  cta?: { label: string; href: string };
};

export function Navbar({ brand = "Nova", links = [], cta }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink">
      <Container className="flex h-16 items-center justify-between">
        <Logo name={brand} />
        <ul className="hidden items-center gap-8 text-sm md:flex">
          {links.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="text-muted transition hover:text-fg">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        {cta ? (
          <Button variant="primary" href={cta.href}>
            {cta.label}
          </Button>
        ) : (
          <span />
        )}
      </Container>
    </header>
  );
}
