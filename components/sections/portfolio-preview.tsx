import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/portfolio";
import { SectionHeader } from "@/components/sections/section-header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";

export function PortfolioPreview() {
  const featured = projects.slice(0, 6);
  return (
    <section className="relative py-24">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Selected work"
            title={<>Businesses that partnered with us — and <span className="text-gradient-brand">grew.</span></>}
            align="left"
            className="mx-0"
          />
          <Button asChild variant="outline" className="rounded-full">
            <Link href="/portfolio">
              View all case studies <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 0.05}>
              <Link
                href={`/portfolio/${p.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/60 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent`} />
                  <Badge
                    variant="gradient"
                    className="absolute left-3 top-3 backdrop-blur"
                  >
                    {p.category}
                  </Badge>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {p.industry} · {p.year}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-2">
                    {p.summary}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-4">
                    {p.results.slice(0, 3).map((r) => (
                      <span
                        key={r.label}
                        className="rounded-full border border-border/70 bg-background/50 px-2.5 py-0.5 text-[11px]"
                      >
                        <span className="text-primary">{r.value}</span>{" "}
                        <span className="text-muted-foreground">
                          {r.label}
                        </span>
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
