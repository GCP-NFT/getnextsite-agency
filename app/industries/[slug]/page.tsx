import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Check } from "lucide-react";
import { industries } from "@/data/industries";
import { projects } from "@/data/portfolio";
import { siteConfig } from "@/config/site";
import { PageHeader } from "@/components/sections/page-header";
import { FinalCTA } from "@/components/sections/final-cta";
import { Testimonials } from "@/components/sections/testimonials";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { breadcrumbJsonLd } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};
  return {
    title: `${industry.name} — Digital Solutions`,
    description: `${industry.blurb} Websites, mobile apps, AI automation and marketing engineered for ${industry.name.toLowerCase()}.`,
    alternates: {
      canonical: `${siteConfig.url}/industries/${industry.slug}`,
    },
  };
}

const commonSolutions: Record<
  string,
  { title: string; items: string[] }[]
> = {
  default: [
    {
      title: "Websites & landing pages",
      items: [
        "Conversion-first architecture",
        "Speed-tuned for mobile",
        "Local SEO & schema markup",
      ],
    },
    {
      title: "Booking & customer flows",
      items: [
        "24/7 online booking",
        "Automated reminders (SMS + email)",
        "CRM sync & lead capture",
      ],
    },
    {
      title: "AI & automation",
      items: [
        "AI receptionist / chatbot",
        "WhatsApp & Messenger automation",
        "Lead qualification & routing",
      ],
    },
    {
      title: "Marketing & growth",
      items: [
        "Google Business Profile",
        "Paid social & search",
        "Monthly performance reports",
      ],
    },
  ],
};

export default async function IndustryPage({ params }: Params) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  const relatedProjects = projects.filter(
    (p) => p.industry.toLowerCase() === industry.name.toLowerCase(),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Industries", url: "/industries" },
              { name: industry.name, url: `/industries/${industry.slug}` },
            ]),
          ),
        }}
      />

      <PageHeader
        eyebrow={`Industry · ${industry.name}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
          { name: industry.name, url: `/industries/${industry.slug}` },
        ]}
        title={
          <>
            Digital solutions built for{" "}
            <span className="text-gradient-brand">{industry.name.toLowerCase()}.</span>
          </>
        }
        description={industry.blurb}
      />

      <section className="pb-16">
        <div className="container-wide">
          <div className="grid gap-4 sm:grid-cols-3">
            {industry.outcomes.map((o) => (
              <FadeIn key={o}>
                <div className="rounded-2xl border border-border/70 bg-card/60 p-6 text-center">
                  <div className="font-display text-xl font-semibold text-gradient-brand">
                    {o}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    Typical outcome
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="outline"
              className="border-primary/30 text-primary"
            >
              Solutions
            </Badge>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What we typically ship for {industry.name.toLowerCase()}
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {commonSolutions.default.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-border/70 bg-card/60 p-6">
                  <h3 className="font-display text-lg font-semibold">
                    {s.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {s.items.map((it) => (
                      <li
                        key={it}
                        className="flex items-start gap-2 text-sm"
                      >
                        <span className="mt-0.5 grid h-4 w-4 place-items-center rounded-full bg-emerald-500/15 text-emerald-500">
                          <Check className="h-3 w-3" />
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {relatedProjects.length > 0 && (
        <section className="py-20">
          <div className="container-wide">
            <div className="flex items-end justify-between">
              <div>
                <Badge
                  variant="outline"
                  className="border-primary/30 text-primary"
                >
                  Case studies
                </Badge>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Recent {industry.name.toLowerCase()} projects
                </h2>
              </div>
              <Button asChild variant="ghost">
                <Link href="/portfolio">
                  All work <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {relatedProjects.slice(0, 3).map((p) => (
                <Link
                  key={p.slug}
                  href={`/portfolio/${p.slug}`}
                  className="group flex flex-col rounded-2xl border border-border/70 bg-card/60 p-5 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-md"
                >
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    {p.category}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-semibold group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {p.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 pt-2">
                    {p.results.slice(0, 2).map((r) => (
                      <span
                        key={r.label}
                        className="rounded-full border border-border/70 bg-background/60 px-2.5 py-0.5 text-[11px]"
                      >
                        <span className="text-primary">{r.value}</span>{" "}
                        <span className="text-muted-foreground">
                          {r.label}
                        </span>
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Testimonials />
      <FinalCTA />
    </>
  );
}
