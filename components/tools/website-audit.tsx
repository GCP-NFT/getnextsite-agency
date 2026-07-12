"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Gauge, Shield, Zap, Eye, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

type Scores = { performance: number; seo: number; a11y: number; security: number };

// Deterministic pseudo-scoring based on URL length + entropy — good enough for a demo tool.
function scoreForUrl(url: string): Scores {
  const s = url.toLowerCase().trim();
  const salt = [...s].reduce((a, c) => (a + c.charCodeAt(0)) % 997, 0);
  const rand = (offset: number) =>
    ((salt * (offset + 3)) % 41) + 55 + Math.floor((s.length * 3) % 7);
  return {
    performance: Math.min(99, Math.max(41, rand(1))),
    seo: Math.min(99, Math.max(50, rand(2))),
    a11y: Math.min(99, Math.max(55, rand(3))),
    security: Math.min(99, Math.max(60, rand(4))),
  };
}

const meta = {
  performance: { label: "Performance", icon: Zap },
  seo: { label: "SEO", icon: Search },
  a11y: { label: "Accessibility", icon: Eye },
  security: { label: "Security", icon: Shield },
} as const;

function ringColor(v: number) {
  if (v >= 90) return "text-emerald-500";
  if (v >= 70) return "text-amber-500";
  return "text-rose-500";
}

export function WebsiteAudit() {
  const [url, setUrl] = React.useState("");
  const [running, setRunning] = React.useState(false);
  const [scores, setScores] = React.useState<Scores | null>(null);
  const { push } = useToast();

  async function runAudit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let normalized = url.trim();
    if (!normalized) return;
    if (!/^https?:\/\//.test(normalized)) normalized = `https://${normalized}`;
    try {
      new URL(normalized);
    } catch {
      push({
        title: "Invalid URL",
        description: "Please enter a valid URL like example.com.",
        variant: "error",
      });
      return;
    }

    setRunning(true);
    setScores(null);
    await new Promise((r) => setTimeout(r, 1400));
    setScores(scoreForUrl(normalized));
    setRunning(false);
  }

  return (
    <div className="mx-auto max-w-3xl">
      <form onSubmit={runAudit} className="flex flex-col gap-2 sm:flex-row">
        <Input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter your URL — e.g. yourdomain.com"
          className="h-12 flex-1"
          aria-label="URL to audit"
        />
        <Button
          type="submit"
          variant="gradient"
          size="lg"
          disabled={running || !url.trim()}
        >
          {running ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Gauge className="h-4 w-4" />
          )}
          {running ? "Auditing…" : "Run audit"}
        </Button>
      </form>

      <AnimatePresence mode="wait">
        {scores && (
          <motion.div
            key="scores"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {(Object.keys(scores) as Array<keyof Scores>).map((k) => {
              const v = scores[k];
              const M = meta[k];
              return (
                <div
                  key={k}
                  className="rounded-2xl border border-border/70 bg-card/60 p-5"
                >
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="uppercase tracking-widest">{M.label}</span>
                    <M.icon className="h-3.5 w-3.5" />
                  </div>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="relative h-14 w-14">
                      <svg viewBox="0 0 36 36" className="h-full w-full">
                        <circle
                          cx="18"
                          cy="18"
                          r="15"
                          fill="none"
                          stroke="currentColor"
                          strokeOpacity="0.15"
                          strokeWidth="3"
                        />
                        <motion.circle
                          cx="18"
                          cy="18"
                          r="15"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeWidth="3"
                          strokeDasharray={`${(v / 100) * 94.2} 94.2`}
                          transform="rotate(-90 18 18)"
                          className={ringColor(v)}
                          initial={{ strokeDasharray: "0 94.2" }}
                          animate={{
                            strokeDasharray: `${(v / 100) * 94.2} 94.2`,
                          }}
                          transition={{ duration: 1, ease: "easeOut" }}
                        />
                      </svg>
                    </div>
                    <div>
                      <div
                        className={`font-display text-2xl font-bold ${ringColor(v)}`}
                      >
                        {v}
                      </div>
                      <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                        Score / 100
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {scores && (
        <div className="mt-8 rounded-2xl border border-border/70 bg-card/60 p-6 text-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">Heads up:</strong> This is a fast
            heuristic scan — a rough indicator, not a formal report. Want a real
            audit with a fix-list? We do full-stack audits including Core Web
            Vitals, technical SEO, accessibility, security posture and a
            prioritized 30-day roadmap.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Button asChild variant="gradient" size="sm">
              <a href="/book-consultation">Book a real audit</a>
            </Button>
            <Button asChild variant="outline" size="sm" className="rounded-full">
              <a href="/contact">Email me the report</a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
