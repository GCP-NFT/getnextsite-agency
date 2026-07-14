"use client";

import * as React from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { search, searchIndex, type SearchDoc } from "@/lib/search-index";

const groups: SearchDoc["group"][] = [
  "Page",
  "Service",
  "Industry",
  "Landing",
  "Case study",
  "Insight",
  "Compare",
];

export function SiteSearch({ initial = "" }: { initial?: string }) {
  const [q, setQ] = React.useState(initial);
  const [group, setGroup] = React.useState<SearchDoc["group"] | "All">("All");

  const results = React.useMemo(() => {
    const raw = q.trim() ? search(q, 60) : searchIndex.slice(0, 30);
    if (group === "All") return raw;
    return raw.filter((r) => r.group === group);
  }, [q, group]);

  const grouped = React.useMemo(() => {
    const map = new Map<SearchDoc["group"], SearchDoc[]>();
    for (const r of results) {
      if (!map.has(r.group)) map.set(r.group, []);
      map.get(r.group)!.push(r);
    }
    return Array.from(map.entries()).sort(
      (a, b) => groups.indexOf(a[0]) - groups.indexOf(b[0]),
    );
  }, [results]);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search services, industries, case studies, insights…"
          autoFocus
          className="h-14 pl-11 text-base"
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {(["All", ...groups] as const).map((g) => (
          <button
            key={g}
            onClick={() => setGroup(g)}
            className={`rounded-full border px-3 py-1 text-xs transition ${
              group === g
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border/70 hover:border-primary/40"
            }`}
          >
            {g}
          </button>
        ))}
      </div>

      <div className="mt-8 space-y-8">
        {grouped.length === 0 && q.trim() && (
          <div className="rounded-2xl border border-border/70 bg-card/60 p-8 text-center text-sm text-muted-foreground">
            No results for <span className="font-medium">"{q}"</span>. Try
            broader terms.
          </div>
        )}

        {grouped.map(([g, docs]) => (
          <section key={g}>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold">{g}</h2>
              <Badge variant="outline" className="text-[10px]">
                {docs.length}
              </Badge>
            </div>
            <ul className="divide-y divide-border/60 rounded-2xl border border-border/70 bg-card/60">
              {docs.map((doc) => (
                <li key={doc.id}>
                  <Link
                    href={doc.href}
                    className="group flex items-start justify-between gap-4 p-4 transition hover:bg-muted/30"
                  >
                    <div className="min-w-0">
                      <div className="font-medium text-foreground">
                        {doc.title}
                      </div>
                      <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                        {doc.description}
                      </p>
                      <div className="mt-2 truncate text-[11px] text-muted-foreground">
                        {doc.href}
                      </div>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground transition group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
