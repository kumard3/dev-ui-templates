import { Container } from "../primitives/container";
import { Logo } from "../primitives/logo";

export type FooterGroup = { title: string; links: string[] };

export function Footer({
  brand = "Nova",
  tagline,
  groups = [],
  note,
}: {
  brand?: string;
  tagline?: string;
  groups?: FooterGroup[];
  note?: string;
}) {
  return (
    <footer className="border-t border-line">
      <Container className="grid gap-10 py-16 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Logo name={brand} />
          {tagline ? <p className="mt-4 text-sm text-muted">{tagline}</p> : null}
        </div>
        {groups.map((g) => (
          <div key={g.title}>
            <h4 className="text-sm font-medium text-white">{g.title}</h4>
            <ul className="mt-4 space-y-2 text-sm text-muted">
              {g.links.map((l) => (
                <li key={l}>
                  <a href="#" className="transition hover:text-fg">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      {note ? (
        <div className="border-t border-line py-6 text-center text-xs text-neutral-600">{note}</div>
      ) : null}
    </footer>
  );
}
