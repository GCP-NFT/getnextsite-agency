import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Clock, Info, Quote } from "lucide-react";
import { posts } from "@/data/insights";
import { siteConfig } from "@/config/site";
import { PageHeader } from "@/components/sections/page-header";
import { FinalCTA } from "@/components/sections/final-cta";
import { Badge } from "@/components/ui/badge";
import { breadcrumbJsonLd } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [{ url: post.cover, width: 1600, height: 1000 }],
    },
    alternates: {
      canonical: `${siteConfig.url}/insights/${post.slug}`,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function articleJsonLd(post: (typeof posts)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [post.cover],
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/icon.svg`,
      },
    },
    mainEntityOfPage: `${siteConfig.url}/insights/${post.slug}`,
  };
}

export default async function InsightPage({ params }: Params) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd(post)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Insights", url: "/insights" },
              { name: post.title, url: `/insights/${post.slug}` },
            ]),
          ),
        }}
      />

      <PageHeader
        eyebrow={`${post.category} · ${post.readTime} min read`}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Insights", url: "/insights" },
          { name: post.category, url: "/insights" },
        ]}
        title={<>{post.title}</>}
        description={post.excerpt}
      />

      <section className="pb-14">
        <div className="container-wide">
          <div className="relative overflow-hidden rounded-3xl border border-border/70 shadow-lg">
            <Image
              src={post.cover}
              alt={post.title}
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
          <div className="mx-auto mt-6 flex max-w-3xl items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-purple-500 text-xs font-semibold text-white">
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <div className="font-medium text-foreground">
                  {post.author.name}
                </div>
                <div className="text-xs">{post.author.role}</div>
              </div>
            </div>
            <div className="flex items-center gap-3 text-xs">
              <span>{formatDate(post.publishedAt)}</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="h-3 w-3" /> {post.readTime} min
              </span>
            </div>
          </div>
        </div>
      </section>

      <article className="pb-24">
        <div className="container-tight">
          <div className="mx-auto max-w-2xl space-y-5 text-base leading-relaxed">
            {post.sections.map((s, i) => {
              switch (s.type) {
                case "h2":
                  return (
                    <h2
                      key={i}
                      className="pt-6 font-display text-2xl font-semibold tracking-tight"
                    >
                      {s.text}
                    </h2>
                  );
                case "h3":
                  return (
                    <h3
                      key={i}
                      className="pt-4 font-display text-xl font-semibold tracking-tight"
                    >
                      {s.text}
                    </h3>
                  );
                case "p":
                  return (
                    <p key={i} className="text-muted-foreground">
                      {s.text}
                    </p>
                  );
                case "list":
                  return (
                    <ul key={i} className="ml-5 list-disc space-y-2 text-muted-foreground">
                      {s.items.map((it) => (
                        <li key={it}>{it}</li>
                      ))}
                    </ul>
                  );
                case "quote":
                  return (
                    <figure
                      key={i}
                      className="my-2 rounded-2xl border-l-4 border-primary/60 bg-primary/5 p-5"
                    >
                      <Quote className="h-5 w-5 text-primary" />
                      <blockquote className="mt-2 text-base italic text-foreground">
                        {s.text}
                      </blockquote>
                      {s.source && (
                        <figcaption className="mt-2 text-xs text-muted-foreground">
                          — {s.source}
                        </figcaption>
                      )}
                    </figure>
                  );
                case "callout":
                  return (
                    <div
                      key={i}
                      className="my-2 flex gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-5"
                    >
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-emerald-500/20 text-emerald-500">
                        <Info className="h-4 w-4" />
                      </div>
                      <div>
                        <div className="font-semibold">{s.title}</div>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {s.body}
                        </p>
                      </div>
                    </div>
                  );
              }
            })}

            <div className="mt-8 flex flex-wrap gap-2 pt-4">
              {post.tags.map((t) => (
                <Badge key={t} variant="outline" className="text-xs">
                  #{t}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border/60 py-16">
          <div className="container-wide">
            <h2 className="font-display text-2xl font-semibold">Keep reading</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/insights/${p.slug}`}
                  className="group rounded-2xl border border-border/70 bg-card/60 p-5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
                >
                  <Badge variant="outline" className="text-[10px]">
                    {p.category}
                  </Badge>
                  <h3 className="mt-2 font-display text-lg font-semibold group-hover:text-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {p.excerpt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-border/60 py-10">
        <div className="container-wide">
          <div className="flex flex-col items-stretch justify-between gap-3 sm:flex-row">
            <Link
              href="/insights"
              className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-sm font-medium transition hover:border-primary/40"
            >
              <ArrowLeft className="h-3.5 w-3.5 transition group-hover:-translate-x-1" />
              All insights
            </Link>
            <Link
              href="/book-consultation"
              className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-4 py-2 text-sm font-medium transition hover:border-primary/40"
            >
              Book a call about this
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
