import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Sparkles, Users } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/final-cta";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { openRoles, values, benefits } from "@/data/careers";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join GetNextSite Agency. Remote-first, product-obsessed team building websites, apps, AI and marketing for SMBs worldwide.",
  alternates: { canonical: `${siteConfig.url}/careers` },
};

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Careers", url: "/careers" },
        ]}
        title={
          <>
            Come build the future of small business{" "}
            <span className="text-gradient-brand">with us.</span>
          </>
        }
        description="We're a remote-first team of designers, engineers, marketers and AI specialists — helping thousands of businesses ship better software."
      />

      <section className="py-16">
        <div className="container-wide">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border/70 bg-card/60 p-6">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-16">
        <div className="container-wide">
          <div className="grid gap-12 md:grid-cols-12">
            <div className="md:col-span-5">
              <Badge variant="outline" className="border-primary/30 text-primary">
                Benefits
              </Badge>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Perks that respect your life outside of work.
              </h2>
              <p className="mt-4 text-muted-foreground">
                No ping-pong tables. Just fair pay, real ownership, and a schedule
                you actually control.
              </p>
            </div>
            <ul className="grid gap-3 md:col-span-7 md:grid-cols-2">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-2 rounded-xl border border-border/70 bg-card/60 p-4 text-sm"
                >
                  <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-emerald-500/15 text-emerald-500">
                    <Sparkles className="h-3 w-3" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="open-roles" className="scroll-mt-24 py-16">
        <div className="container-wide">
          <div className="flex items-end justify-between gap-4">
            <div>
              <Badge variant="outline" className="border-primary/30 text-primary">
                Open roles
              </Badge>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {openRoles.length} positions we're hiring for.
              </h2>
            </div>
            <span className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-card/60 px-3 py-1 text-xs text-muted-foreground">
              <Users className="h-3 w-3" /> Remote worldwide
            </span>
          </div>

          <ul className="mt-8 divide-y divide-border/70 rounded-2xl border border-border/70 bg-card/60">
            {openRoles.map((r) => (
              <li
                key={r.id}
                className="group flex flex-col items-start justify-between gap-4 p-6 transition hover:bg-muted/30 sm:flex-row sm:items-center"
              >
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 font-medium text-primary">
                      {r.team}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" /> {r.location}
                    </span>
                    <span>· {r.type}</span>
                    <span>· {r.seniority}</span>
                  </div>
                  <h3 className="mt-1 font-display text-lg font-semibold">
                    {r.title}
                  </h3>
                  <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
                    {r.summary}
                  </p>
                </div>
                <Link
                  href={`mailto:careers@nextsite-agency.com?subject=Application: ${encodeURIComponent(
                    r.title,
                  )}`}
                  className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background px-4 py-2 text-sm font-semibold transition hover:border-primary/40 hover:text-primary"
                >
                  Apply <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Don't see your role? Reach out anyway —{" "}
            <a
              className="text-primary underline"
              href="mailto:careers@nextsite-agency.com"
            >
              careers@nextsite-agency.com
            </a>
            .
          </p>
        </div>
      </section>

      <Testimonials />
      <FinalCTA />
    </>
  );
}
