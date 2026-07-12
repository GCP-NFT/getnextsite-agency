"use client";

import * as React from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

const filters = ["All", "Website", "Mobile App", "AI", "Marketing", "Branding"] as const;
type Filter = (typeof filters)[number];

export function TestimonialsWall() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const visible =
    filter === "All"
      ? testimonials
      : testimonials.filter((t) => t.service === filter);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              filter === f
                ? "border-primary bg-primary text-primary-foreground shadow-md"
                : "border-border/70 hover:border-primary/40"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <LayoutGroup>
        <motion.div
          layout
          className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {visible.map((t, i) => (
              <motion.figure
                key={`${t.author}-${t.company}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, delay: i * 0.02 }}
                className="flex flex-col rounded-2xl border border-border/70 bg-card/70 p-6 backdrop-blur"
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
                {t.service && (
                  <span className="mt-4 inline-flex w-fit rounded-full border border-border/70 bg-background/60 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                    {t.service}
                    {t.industry ? ` · ${t.industry}` : ""}
                  </span>
                )}
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}
