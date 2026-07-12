"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  ArrowUpRight,
  FileText,
  PhoneCall,
  Globe,
  Smartphone,
  Bot,
  Palette,
  BarChart3,
  Users,
  Newspaper,
  Briefcase,
  Sparkles,
  Command,
} from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { cn } from "@/lib/utils";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { projects } from "@/data/portfolio";
import { posts } from "@/data/insights";

type Item = {
  id: string;
  label: string;
  hint?: string;
  group: string;
  href?: string;
  action?: () => void;
  icon?: React.ComponentType<{ className?: string }>;
  keywords?: string[];
};

const serviceIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "web-development": Globe,
  "mobile-apps": Smartphone,
  "ai-solutions": Bot,
  branding: Palette,
  "digital-marketing": BarChart3,
};

export function CommandMenu() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (
        (e.key === "k" || e.key === "K") &&
        (e.metaKey || e.ctrlKey)
      ) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "/" && !isEditableTarget(e.target)) {
        e.preventDefault();
        setOpen(true);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  React.useEffect(() => {
    if (open) {
      setQuery("");
      const raf = requestAnimationFrame(() => inputRef.current?.focus());
      return () => cancelAnimationFrame(raf);
    }
  }, [open]);

  const items = React.useMemo<Item[]>(() => {
    const nav: Item[] = [
      { id: "home", label: "Home", group: "Pages", href: "/", icon: Sparkles },
      {
        id: "services",
        label: "All services",
        group: "Pages",
        href: "/services",
        icon: Sparkles,
      },
      {
        id: "pricing",
        label: "Pricing calculator",
        group: "Pages",
        href: "/pricing",
        icon: Sparkles,
      },
      {
        id: "book",
        label: "Book a free consultation",
        group: "Actions",
        href: "/book-consultation",
        icon: PhoneCall,
      },
      {
        id: "invoice",
        label: "Send me an invoice",
        group: "Actions",
        href: "/pricing#send-invoice",
        icon: FileText,
      },
      {
        id: "portfolio",
        label: "Portfolio",
        group: "Pages",
        href: "/portfolio",
        icon: Sparkles,
      },
      {
        id: "insights",
        label: "Insights",
        group: "Pages",
        href: "/insights",
        icon: Newspaper,
      },
      {
        id: "testimonials",
        label: "Testimonials wall",
        group: "Pages",
        href: "/testimonials",
        icon: Users,
      },
      {
        id: "careers",
        label: "Careers",
        group: "Pages",
        href: "/careers",
        icon: Briefcase,
      },
    ];

    const svc: Item[] = services
      .filter((s) => s.href.startsWith("/services/"))
      .map((s) => ({
        id: `svc-${s.slug}`,
        label: s.title,
        group: "Services",
        href: s.href,
        icon: serviceIcons[s.slug] ?? Sparkles,
        hint: s.startingAt,
        keywords: [s.shortTitle, s.tagline],
      }));

    const ind: Item[] = industries.map((i) => ({
      id: `ind-${i.slug}`,
      label: i.name,
      group: "Industries",
      href: `/industries/${i.slug}`,
      icon: i.icon,
      keywords: [i.blurb],
    }));

    const proj: Item[] = projects.map((p) => ({
      id: `proj-${p.slug}`,
      label: p.title,
      group: "Case studies",
      href: `/portfolio/${p.slug}`,
      hint: p.category,
      keywords: [p.industry, p.client, ...p.tech],
    }));

    const insight: Item[] = posts.map((p) => ({
      id: `post-${p.slug}`,
      label: p.title,
      group: "Insights",
      href: `/insights/${p.slug}`,
      hint: p.category,
      keywords: p.tags,
    }));

    return [...nav, ...svc, ...ind, ...proj, ...insight];
  }, []);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items.slice(0, 24);
    return items
      .filter((i) => {
        const hay = [i.label, i.hint, ...(i.keywords ?? [])]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();
        return hay.includes(q);
      })
      .slice(0, 30);
  }, [items, query]);

  const grouped = React.useMemo(() => {
    const map = new Map<string, Item[]>();
    for (const it of filtered) {
      if (!map.has(it.group)) map.set(it.group, []);
      map.get(it.group)!.push(it);
    }
    return Array.from(map.entries());
  }, [filtered]);

  const flat = filtered;
  const [active, setActive] = React.useState(0);
  React.useEffect(() => setActive(0), [query, open]);

  function onSelect(item: Item) {
    setOpen(false);
    if (item.href) router.push(item.href);
    item.action?.();
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((v) => (v + 1) % Math.max(flat.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((v) => (v - 1 + flat.length) % Math.max(flat.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = flat[active];
      if (item) onSelect(item);
    }
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-[60] bg-slate-950/70 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content
          className="fixed left-1/2 top-[15%] z-[70] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-background/95 shadow-2xl backdrop-blur-2xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
          onKeyDown={onKeyDown}
        >
          <DialogPrimitive.Title className="sr-only">
            Search GetNextSite
          </DialogPrimitive.Title>
          <div className="flex items-center gap-2 border-b border-border/70 px-4">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search services, industries, case studies, insights…"
              className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <kbd className="hidden rounded border border-border/70 bg-muted px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground sm:inline">
              esc
            </kbd>
          </div>

          <div className="max-h-[60vh] overflow-y-auto p-2">
            {grouped.length === 0 && (
              <div className="p-6 text-center text-sm text-muted-foreground">
                No results for "{query}".
              </div>
            )}
            {grouped.map(([group, its]) => (
              <div key={group} className="mb-2">
                <div className="px-2 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {group}
                </div>
                <ul>
                  {its.map((it) => {
                    const idx = flat.indexOf(it);
                    const isActive = idx === active;
                    return (
                      <li key={it.id}>
                        <button
                          onMouseEnter={() => setActive(idx)}
                          onClick={() => onSelect(it)}
                          className={cn(
                            "flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left text-sm transition",
                            isActive
                              ? "bg-primary/10 text-foreground"
                              : "text-muted-foreground hover:text-foreground",
                          )}
                        >
                          {it.icon ? (
                            <it.icon className="h-4 w-4 shrink-0" />
                          ) : (
                            <span className="h-4 w-4" />
                          )}
                          <span className="flex-1 truncate">{it.label}</span>
                          {it.hint && (
                            <span className="hidden text-xs text-muted-foreground sm:inline">
                              {it.hint}
                            </span>
                          )}
                          <ArrowUpRight className="h-3 w-3 text-muted-foreground" />
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-border/70 bg-muted/30 px-3 py-2 text-[11px] text-muted-foreground">
            <div className="flex items-center gap-2">
              <Command className="h-3 w-3" /> <span>GetNextSite search</span>
            </div>
            <div className="hidden items-center gap-3 sm:flex">
              <span>
                <kbd className="rounded border border-border/70 bg-background px-1 py-0.5 font-mono">↑↓</kbd>{" "}
                navigate
              </span>
              <span>
                <kbd className="rounded border border-border/70 bg-background px-1 py-0.5 font-mono">↵</kbd>{" "}
                open
              </span>
            </div>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

function isEditableTarget(t: EventTarget | null) {
  const el = t as HTMLElement | null;
  if (!el) return false;
  const tag = el.tagName;
  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    el.isContentEditable
  );
}
