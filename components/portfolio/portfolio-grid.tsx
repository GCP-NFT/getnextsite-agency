"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { projects, projectCategories, type ProjectCategory } from "@/data/portfolio";
import { Badge } from "@/components/ui/badge";

type Filter = ProjectCategory | "All";

export function PortfolioGrid() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
        {(["All", ...projectCategories] as Filter[]).map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full border px-4 py-1.5 text-sm transition ${
              filter === c
                ? "border-primary bg-primary text-primary-foreground shadow-md"
                : "border-border/70 hover:border-primary/40"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <LayoutGroup>
        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filtered.map((p) => (
              <motion.article
                key={p.slug}
                id={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative scroll-mt-32 overflow-hidden rounded-2xl border border-border/70 bg-card/70 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <Link
                  href={`/portfolio/${p.slug}`}
                  aria-label={`Read the ${p.title} case study`}
                  className="absolute inset-0 z-10"
                />
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                  <div className="absolute left-3 top-3 flex gap-1">
                    <Badge variant="gradient">{p.category}</Badge>
                    <Badge variant="outline" className="border-white/30 bg-white/10 text-white backdrop-blur">
                      {p.year}
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    {p.industry}
                  </div>
                  <h3 className="mt-1 font-display text-lg font-semibold">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                    {p.summary}
                  </p>

                  <ul className="mt-4 grid grid-cols-3 gap-2 rounded-xl border border-border/60 bg-background/60 p-3 text-center">
                    {p.results.map((r) => (
                      <li key={r.label}>
                        <div className="font-display text-sm font-bold text-gradient-brand">
                          {r.value}
                        </div>
                        <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {r.label}
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border/70 bg-background/40 px-2 py-0.5 text-[10px] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {p.testimonial && (
                    <blockquote className="mt-4 border-l-2 border-primary/50 pl-3 text-xs italic text-muted-foreground">
                      "{p.testimonial.quote}"
                      <div className="mt-1 not-italic text-foreground">
                        — {p.testimonial.author}, {p.testimonial.role}
                      </div>
                    </blockquote>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}
