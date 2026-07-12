import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { industries } from "@/data/industries";
import { FadeIn } from "@/components/animations/fade-in";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Websites, mobile apps, AI and marketing tailored to restaurants, hotels, doctors, lawyers, realtors, salons, gyms, retailers and more.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
        ]}
        title={
          <>
            Built for the businesses that{" "}
            <span className="text-gradient-brand">actually run the economy.</span>
          </>
        }
        description="Every industry has its own conversion patterns and compliance quirks. We've shipped for all of them."
      />

      <section className="py-16">
        <div className="container-wide">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((i, idx) => (
              <FadeIn key={i.slug} delay={idx * 0.03}>
                <Link
                  href={`/industries/${i.slug}`}
                  id={i.slug}
                  className="group flex h-full scroll-mt-32 flex-col rounded-2xl border border-border/70 bg-card/60 p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-purple-500/15 text-primary">
                    <i.icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-4 font-display text-xl font-semibold">
                    {i.name}
                  </h2>
                  <p className="mt-2 text-sm text-muted-foreground">{i.blurb}</p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {i.outcomes.map((o) => (
                      <li
                        key={o}
                        className="rounded-full border border-border/70 bg-background/60 px-2.5 py-0.5 text-[11px]"
                      >
                        {o}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-primary opacity-0 transition group-hover:opacity-100">
                    Explore {i.name.toLowerCase()} <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
