"use client";

import { clientLogos } from "@/data/testimonials";

export function ClientLogos() {
  const doubled = [...clientLogos, ...clientLogos];
  return (
    <section className="py-12">
      <div className="container-wide">
        <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by fast-growing businesses worldwide
        </p>
        <div className="mask-fade-both mt-6 flex overflow-hidden">
          <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-12">
            {doubled.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap font-display text-xl font-semibold tracking-tight text-muted-foreground/70 opacity-80 transition hover:text-foreground hover:opacity-100"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
