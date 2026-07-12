import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Sparkles } from "lucide-react";
import { projects } from "@/data/portfolio";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/sections/page-header";
import { FinalCTA } from "@/components/sections/final-cta";
import { InvoiceRequestTrigger } from "@/components/forms/invoice-request-dialog";
import { breadcrumbJsonLd } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      images: [{ url: project.image, width: 1600, height: 1000 }],
    },
    alternates: { canonical: `${siteConfig.url}/portfolio/${project.slug}` },
  };
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Portfolio", url: "/portfolio" },
              { name: project.title, url: `/portfolio/${project.slug}` },
            ]),
          ),
        }}
      />

      <PageHeader
        eyebrow={`${project.category} · ${project.year}`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
          { name: project.client, url: `/portfolio/${project.slug}` },
        ]}
        title={<>{project.title}</>}
        description={project.summary}
      />

      <section className="pb-16">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 shadow-2xl">
            <Image
              src={project.image}
              alt={project.title}
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/80 to-transparent" />
            <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <Badge
                  key={t}
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white backdrop-blur"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                What we shipped
              </h2>
              <p className="mt-4 text-muted-foreground">
                {project.summary} Working closely with {project.client}, we
                redesigned the digital experience end-to-end — from strategy and
                identity to engineering, launch and continuous optimization.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {project.results.map((r) => (
                  <div
                    key={r.label}
                    className="rounded-2xl border border-border/70 bg-card/60 p-5 text-center"
                  >
                    <div className="font-display text-3xl font-bold text-gradient-brand">
                      {r.value}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    The challenge
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.client} needed a modern platform that could scale
                    with growth, unify the customer experience, and reduce
                    reliance on third-party channels.
                  </p>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold">
                    Our approach
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A focused discovery phase, an in-house design system, a
                    modern Next.js frontend and integrations designed for
                    long-term maintainability — deployed with zero downtime.
                  </p>
                </div>
              </div>

              {project.testimonial && (
                <figure className="mt-10 rounded-2xl border border-border/70 bg-card/60 p-6">
                  <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    <Sparkles className="h-3 w-3" /> What the client said
                  </div>
                  <blockquote className="text-lg italic">
                    "{project.testimonial.quote}"
                  </blockquote>
                  <figcaption className="mt-3 text-sm text-muted-foreground">
                    — {project.testimonial.author}, {project.testimonial.role}
                  </figcaption>
                </figure>
              )}
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-24 space-y-4">
                <div className="rounded-2xl border border-border/70 bg-card/60 p-6">
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">
                    Project details
                  </div>
                  <dl className="mt-3 space-y-2 text-sm">
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Client</dt>
                      <dd className="font-medium">{project.client}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Industry</dt>
                      <dd className="font-medium">{project.industry}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Category</dt>
                      <dd className="font-medium">{project.category}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-muted-foreground">Year</dt>
                      <dd className="font-medium">{project.year}</dd>
                    </div>
                  </dl>
                  {project.liveUrl && (
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="mt-4 w-full rounded-full"
                    >
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit live site <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    </Button>
                  )}
                </div>

                <div className="gradient-border rounded-2xl">
                  <div className="rounded-2xl bg-card/70 p-6 backdrop-blur">
                    <h3 className="font-display font-semibold">
                      Want results like these?
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      We'll show you exactly what your plan would look like.
                    </p>
                    <div className="mt-4 space-y-2">
                      <Button
                        asChild
                        variant="gradient"
                        size="lg"
                        className="w-full"
                      >
                        <Link href="/book-consultation">Book Free Call</Link>
                      </Button>
                      <InvoiceRequestTrigger>
                        <Button
                          variant="outline"
                          size="lg"
                          className="w-full rounded-full"
                        >
                          Send Me an Invoice
                        </Button>
                      </InvoiceRequestTrigger>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-border/60 py-12">
        <div className="container-wide">
          <div className="flex flex-col items-stretch justify-between gap-4 sm:flex-row">
            <Link
              href={`/portfolio/${prev.slug}`}
              className="group flex flex-1 items-center gap-3 rounded-2xl border border-border/70 bg-card/60 p-4 transition hover:border-primary/40 hover:shadow-md"
            >
              <ArrowLeft className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:-translate-x-1 group-hover:text-primary" />
              <div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  Previous
                </div>
                <div className="text-sm font-semibold">{prev.title}</div>
              </div>
            </Link>
            <Link
              href={`/portfolio/${next.slug}`}
              className="group flex flex-1 items-center justify-end gap-3 rounded-2xl border border-border/70 bg-card/60 p-4 transition hover:border-primary/40 hover:shadow-md"
            >
              <div className="text-right">
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                  Next
                </div>
                <div className="text-sm font-semibold">{next.title}</div>
              </div>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
