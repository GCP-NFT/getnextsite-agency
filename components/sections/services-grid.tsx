import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeader } from "@/components/sections/section-header";

export function ServicesGrid() {
  return (
    <section id="services" className="relative py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="What we do"
          title={<>One partner for your <span className="text-gradient-brand">entire</span> digital stack.</>}
          description="Everything you need to launch, market and grow — under one subscription, one team, and one invoice."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <FadeIn key={s.slug} delay={i * 0.06}>
              <Link
                href={s.href}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div
                  className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${s.color} opacity-10 blur-2xl transition-opacity group-hover:opacity-30`}
                />

                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-md`}>
                  <s.icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 font-display text-xl font-semibold">
                  {s.shortTitle}
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">{s.tagline}</p>
                <p className="mt-3 text-sm text-muted-foreground">{s.description}</p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {s.features.slice(0, 4).map((f) => (
                    <li
                      key={f}
                      className="rounded-full border border-border/70 bg-background/60 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between pt-6">
                  <span className="text-xs text-muted-foreground">
                    Starting at <span className="font-semibold text-foreground">{s.startingAt}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary">
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
