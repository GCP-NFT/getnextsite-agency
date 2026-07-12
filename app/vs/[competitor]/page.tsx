import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Minus, ArrowRight, ChevronRight, TriangleAlert } from "lucide-react";
import { competitors } from "@/data/competitors";
import { siteConfig } from "@/config/site";
import { PageHeader } from "@/components/sections/page-header";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/final-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/animations/fade-in";
import { InvoiceRequestTrigger } from "@/components/forms/invoice-request-dialog";
import { breadcrumbJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

type Params = { params: Promise<{ competitor: string }> };

export function generateStaticParams() {
  return competitors.map((c) => ({ competitor: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { competitor } = await params;
  const c = competitors.find((x) => x.slug === competitor);
  if (!c) return {};
  return {
    title: `GetNextSite vs ${c.name} — Which is right for your business?`,
    description: c.summary,
    alternates: { canonical: `${siteConfig.url}/vs/${c.slug}` },
  };
}

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
        <Check className="h-3.5 w-3.5" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center text-muted-foreground/50">
        <Minus className="h-3.5 w-3.5" />
      </span>
    );
  }
  return <span className="text-sm">{value}</span>;
}

export default async function CompetitorPage({ params }: Params) {
  const { competitor } = await params;
  const c = competitors.find((x) => x.slug === competitor);
  if (!c) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: `vs ${c.name}`, url: `/vs/${c.slug}` },
            ]),
          ),
        }}
      />
      <PageHeader
        eyebrow={`Compare · ${c.category}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: `vs ${c.name}`, url: `/vs/${c.slug}` },
        ]}
        title={
          <>
            GetNextSite Agency <span className="text-muted-foreground">vs</span>{" "}
            <span className="text-gradient-brand">{c.name}</span>
          </>
        }
        description={c.tagline}
      />

      <section className="pb-14">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-muted-foreground">
            <p>{c.summary}</p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-wide">
          <div className="overflow-hidden rounded-3xl border border-border/70 bg-card/60">
            <div className="grid grid-cols-3 border-b border-border/70 bg-muted/30">
              <div className="p-5 text-xs uppercase tracking-widest text-muted-foreground">
                Feature
              </div>
              <div className="border-l border-border/70 bg-primary/5 p-5">
                <div className="font-display text-base font-semibold">
                  GetNextSite Agency
                </div>
                <div className="text-xs text-primary">Recommended</div>
              </div>
              <div className="border-l border-border/70 p-5">
                <div className="font-display text-base font-semibold">{c.name}</div>
                <div className="text-xs text-muted-foreground">{c.category}</div>
              </div>
            </div>
            <div>
              {c.rows.map((r, i) => (
                <div
                  key={r.feature}
                  className={cn(
                    "grid grid-cols-3 border-b border-border/50 last:border-0 text-sm",
                    i % 2 === 1 && "bg-muted/10",
                  )}
                >
                  <div className="p-4 font-medium">
                    {r.feature}
                    {r.note && (
                      <div className="mt-1 text-[11px] text-muted-foreground">
                        {r.note}
                      </div>
                    )}
                  </div>
                  <div className="border-l border-border/50 bg-primary/5 p-4 text-center">
                    <Cell value={r.us} />
                  </div>
                  <div className="border-l border-border/50 p-4 text-center">
                    <Cell value={r.them} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-16">
        <div className="container-wide">
          <div className="grid gap-6 lg:grid-cols-2">
            <FadeIn>
              <div className="h-full rounded-2xl border border-border/70 bg-card/70 p-6">
                <Badge variant="gradient" className="mb-3">
                  Where {c.name} wins
                </Badge>
                <p className="text-sm text-muted-foreground">{c.bestFor}</p>
                <ul className="mt-4 space-y-2 text-sm">
                  {c.weaknesses.map((w) => (
                    <li key={w} className="flex items-start gap-2">
                      <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                      <span className="text-muted-foreground">{w}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="gradient-border h-full rounded-2xl">
                <div className="h-full rounded-2xl bg-card/70 p-6 backdrop-blur">
                  <Badge variant="gradient" className="mb-3">
                    Where GetNextSite wins
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    A subscription studio that ships continuously — you get
                    outcomes, not a builder.
                  </p>
                  <ul className="mt-4 space-y-2 text-sm">
                    {c.our_edges.map((e) => (
                      <li key={e} className="flex items-start gap-2">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                        <span>{e}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Button asChild variant="gradient" size="sm">
                      <Link href="/pricing">
                        See pricing <ArrowRight className="h-3 w-3" />
                      </Link>
                    </Button>
                    <InvoiceRequestTrigger>
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-full"
                      >
                        Send Me an Invoice
                      </Button>
                    </InvoiceRequestTrigger>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-bold tracking-tight sm:text-4xl">
            More comparisons
          </h2>
          <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
            {competitors
              .filter((x) => x.slug !== c.slug)
              .map((x) => (
                <Link
                  key={x.slug}
                  href={`/vs/${x.slug}`}
                  className="group inline-flex items-center justify-between rounded-2xl border border-border/70 bg-card/60 p-4 text-sm font-medium transition hover:border-primary/40"
                >
                  vs {x.name}
                  <ChevronRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-1 group-hover:opacity-100" />
                </Link>
              ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FinalCTA />
    </>
  );
}
