"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/data/testimonials";
import { SectionHeader } from "@/components/sections/section-header";

export function Testimonials() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4200, stopOnInteraction: false }),
  ]);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="pointer-events-none absolute inset-0 aurora-bg opacity-40" />
      <div className="container-wide">
        <SectionHeader
          eyebrow="Loved by operators"
          title={<>Real founders. <span className="text-gradient-brand">Real numbers.</span></>}
          description="What our long-term partners say after a year on the subscription."
        />

        <div className="mt-14 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-4">
            {testimonials.map((t, i) => (
              <motion.figure
                key={t.author}
                className="flex min-w-0 flex-[0_0_100%] flex-col justify-between rounded-2xl border border-border/70 bg-card/70 p-6 backdrop-blur sm:flex-[0_0_50%] lg:flex-[0_0_33%]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-purple-500 font-semibold text-white">
                    {t.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="text-xs">
                    <div className="font-semibold">{t.author}</div>
                    <div className="text-muted-foreground">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
