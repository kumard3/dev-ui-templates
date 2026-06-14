import { Navbar, Hero, LogoCloud, FeatureGrid, Pricing, CTA, Footer, type Feature, type Tier, type FooterGroup } from "@devui/ui";

const nav = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#" },
  { label: "Blog", href: "#" },
];

const features: Feature[] = [
  { title: "Prompt to PR", body: "Describe the change. Nova writes the code, opens the pull request, and explains the diff.", wide: true },
  { title: "Always in context", body: "Connected to your repo, docs, and tickets so every answer is grounded in your stack." },
  { title: "Review that catches bugs", body: "Adversarial review runs on every change before it merges." },
  { title: "Ship anywhere", body: "Deploy to Vercel, Fly, or your own cloud with a single command.", wide: true },
];

const tiers: Tier[] = [
  { name: "Starter", price: "$0", tagline: "For trying Nova out", features: ["1 workspace", "100 runs / month", "Community support"], cta: { label: "Start free", href: "#" } },
  { name: "Pro", price: "$24", tagline: "For working developers", features: ["Unlimited workspaces", "5,000 runs / month", "Priority review", "Email support"], cta: { label: "Start free trial", href: "#" }, featured: true },
  { name: "Team", price: "$99", tagline: "For shipping teams", features: ["Everything in Pro", "Shared context", "SSO & roles", "SLA"], cta: { label: "Contact sales", href: "#" } },
];

const footerGroups: FooterGroup[] = [
  { title: "Product", links: ["Features", "Pricing", "Changelog", "Docs"] },
  { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
  { title: "Legal", links: ["Privacy", "Terms", "Security"] },
];

export default function Page() {
  return (
    <main>
      <Navbar brand="Nova" links={nav} cta={{ label: "Get started", href: "#" }} />
      <Hero
        badge="Nova 2.0 is live"
        title="The AI workspace that ships your work"
        subtitle="Turn a prompt into production. Nova plans, writes, and reviews so your team moves from idea to shipped in minutes, not weeks."
        primary={{ label: "Start free", href: "#" }}
        secondary={{ label: "Book a demo", href: "#" }}
        note="No credit card required · Free for 14 days"
      />
      <LogoCloud logos={["Vercel", "Linear", "Ramp", "Notion", "Retool", "Cursor"]} />
      <FeatureGrid
        heading="Everything between idea and shipped"
        subheading="One workspace for planning, building, and reviewing, so nothing falls through the cracks."
        features={features}
      />
      <Pricing
        heading="Simple, scaling pricing"
        subheading="Start free. Upgrade when Nova is doing real work for you."
        tiers={tiers}
      />
      <CTA
        heading="Ship your next feature with Nova"
        subheading="Join thousands of developers who turned their backlog into shipped product."
        action={{ label: "Start free today", href: "#" }}
      />
      <Footer
        brand="Nova"
        tagline="The AI workspace that ships your work."
        groups={footerGroups}
        note="© 2026 Nova. Built with DevUI Pro."
      />
    </main>
  );
}
