import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { breadcrumbJsonLd } from "@/lib/seo";
import { FadeIn } from "@/components/animations/fade-in";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: { name: string; url: string }[];
}) {
  return (
    <section className="relative overflow-hidden pb-14 pt-6">
      <div className="pointer-events-none absolute inset-0 -z-10 aurora-bg opacity-70" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-bg opacity-30" />
      {breadcrumbs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)),
          }}
        />
      )}
      <div className="container-wide">
        {breadcrumbs && (
          <nav aria-label="Breadcrumb" className="mb-4 text-sm">
            <ol className="flex flex-wrap items-center gap-1 text-muted-foreground">
              {breadcrumbs.map((b, i) => (
                <li key={b.url} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5" />}
                  {i === breadcrumbs.length - 1 ? (
                    <span className="text-foreground">{b.name}</span>
                  ) : (
                    <Link href={b.url} className="hover:text-foreground">
                      {b.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <div className="max-w-3xl">
          {eyebrow && (
            <FadeIn>
              <Badge
                variant="outline"
                className="mb-4 border-primary/30 text-primary"
              >
                {eyebrow}
              </Badge>
            </FadeIn>
          )}
          <FadeIn delay={0.05}>
            <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h1>
          </FadeIn>
          {description && (
            <FadeIn delay={0.1}>
              <p className="mt-5 text-lg text-muted-foreground">{description}</p>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}
