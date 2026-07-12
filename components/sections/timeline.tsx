import { processSteps } from "@/data/process";
import { SectionHeader } from "@/components/sections/section-header";
import { FadeIn } from "@/components/animations/fade-in";

export function Timeline() {
  return (
    <section className="relative py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="How we work"
          title={<>From idea to production in <span className="text-gradient-brand">6 focused weeks.</span></>}
          description="A calm, transparent process — with weekly demos and a delivery calendar you can plan a launch around."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.06}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border/70 bg-card/60 p-6 transition hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                <div className="absolute right-4 top-4 font-display text-4xl font-bold text-muted-foreground/20">
                  {step.step}
                </div>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-white shadow-md">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
                <div className="mt-4 inline-flex items-center rounded-full border border-border/70 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                  {step.duration}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
