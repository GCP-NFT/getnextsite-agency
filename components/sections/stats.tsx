import { stats } from "@/data/testimonials";
import { Counter } from "@/components/animations/counter";
import { FadeIn } from "@/components/animations/fade-in";

export function Stats() {
  return (
    <section className="border-y border-border/50 bg-muted/30 py-12">
      <div className="container-wide">
        <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.05}>
              <div className="text-center sm:text-left">
                <dt className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  <Counter
                    end={s.value}
                    suffix={s.suffix}
                    decimals={"decimals" in s ? (s.decimals as number) : 0}
                  />
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{s.label}</dd>
              </div>
            </FadeIn>
          ))}
        </dl>
      </div>
    </section>
  );
}
