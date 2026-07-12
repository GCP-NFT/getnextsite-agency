import Link from "next/link";
import { industries } from "@/data/industries";
import { SectionHeader } from "@/components/sections/section-header";
import { FadeIn } from "@/components/animations/fade-in";

export function IndustriesStrip() {
  return (
    <section className="relative py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Industries we serve"
          title={<>Built for the businesses that <span className="text-gradient-brand">actually run the economy.</span></>}
          description="From restaurants and hotels to lawyers and dental practices — patterns that convert, engineered for your industry."
        />

        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {industries.map((i, idx) => (
            <FadeIn key={i.slug} delay={idx * 0.02}>
              <Link
                href={`/industries/${i.slug}`}
                className="group flex flex-col items-start rounded-2xl border border-border/70 bg-card/60 p-4 transition hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-brand-500/15 to-purple-500/15 text-primary">
                  <i.icon className="h-4 w-4" />
                </span>
                <span className="mt-3 text-sm font-semibold">{i.name}</span>
                <span className="mt-1 text-xs text-muted-foreground line-clamp-2">
                  {i.blurb}
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
