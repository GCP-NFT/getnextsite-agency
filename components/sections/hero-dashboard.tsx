"use client";

import { motion } from "framer-motion";
import {
  Activity,
  TrendingUp,
  Bot,
  BarChart3,
  Globe,
  Zap,
} from "lucide-react";

export function HeroDashboard() {
  return (
    <div className="relative">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-brand-500/25 via-purple-500/20 to-brand-400/25 blur-3xl" />

      <div className="gradient-border rounded-3xl p-1.5 shadow-2xl">
        <div className="overflow-hidden rounded-[calc(1.5rem-6px)] bg-background/90 backdrop-blur-xl">
          {/* window chrome */}
          <div className="flex items-center gap-2 border-b border-border/70 bg-muted/40 px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
            <div className="mx-auto flex items-center gap-2 rounded-md bg-background/60 px-3 py-1 text-xs text-muted-foreground">
              <Globe className="h-3 w-3" /> app.getnextsite.com/dashboard
            </div>
          </div>

          {/* content */}
          <div className="grid gap-4 p-4 md:grid-cols-12">
            {/* Sidebar */}
            <aside className="hidden md:col-span-3 md:block">
              <div className="rounded-xl border border-border/70 bg-card/50 p-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Workspace
                </div>
                <ul className="mt-3 space-y-1 text-sm">
                  {[
                    { icon: BarChart3, label: "Overview", active: true },
                    { icon: Globe, label: "Websites" },
                    { icon: Bot, label: "AI Agents" },
                    { icon: TrendingUp, label: "Marketing" },
                    { icon: Activity, label: "Reports" },
                  ].map((it) => (
                    <li key={it.label}>
                      <button
                        className={`flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left ${
                          it.active
                            ? "bg-primary/10 text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <it.icon className="h-3.5 w-3.5" />
                        {it.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Main */}
            <div className="space-y-4 md:col-span-9">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { label: "Visitors", value: "48,201", delta: "+24%" },
                  { label: "Conversion", value: "6.8%", delta: "+1.2pt" },
                  { label: "AI Sessions", value: "1,204", delta: "+62%" },
                  { label: "Revenue", value: "$38.2K", delta: "+18%" },
                ].map((k, i) => (
                  <motion.div
                    key={k.label}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.08 }}
                    className="rounded-xl border border-border/70 bg-card/50 p-3"
                  >
                    <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {k.label}
                    </div>
                    <div className="mt-1 text-lg font-semibold">{k.value}</div>
                    <div className="text-[11px] text-emerald-500">{k.delta}</div>
                  </motion.div>
                ))}
              </div>

              {/* Chart */}
              <div className="rounded-xl border border-border/70 bg-card/50 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold">
                      Growth this quarter
                    </div>
                    <div className="text-xs text-muted-foreground">
                      All properties · last 90 days
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-[10px] font-medium text-emerald-500">
                    <Zap className="h-3 w-3" /> On track
                  </div>
                </div>

                <svg
                  viewBox="0 0 600 180"
                  className="h-32 w-full"
                  role="img"
                  aria-label="Growth chart"
                >
                  <defs>
                    <linearGradient id="gg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(221, 83%, 60%)" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="hsl(221, 83%, 60%)" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="gg2" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(262, 83%, 68%)" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="hsl(262, 83%, 68%)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d="M0,150 C60,120 100,140 160,100 C220,60 260,110 320,80 C380,50 420,90 480,60 C540,40 570,50 600,30 L600,180 L0,180 Z"
                    fill="url(#gg)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.6, delay: 0.6 }}
                  />
                  <motion.path
                    d="M0,150 C60,120 100,140 160,100 C220,60 260,110 320,80 C380,50 420,90 480,60 C540,40 570,50 600,30"
                    fill="none"
                    stroke="hsl(221, 83%, 60%)"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.6, delay: 0.6 }}
                  />
                  <motion.path
                    d="M0,160 C60,140 100,150 160,130 C220,110 260,140 320,120 C380,100 420,120 480,100 C540,80 570,90 600,70"
                    fill="none"
                    stroke="hsl(262, 83%, 68%)"
                    strokeDasharray="4 4"
                    strokeWidth="2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.8, delay: 0.9 }}
                  />
                </svg>
              </div>

              {/* Bottom row: AI + Sites */}
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-border/70 bg-card/50 p-3">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Bot className="h-4 w-4 text-brand-500" />
                    AI Receptionist
                  </div>
                  <ul className="mt-2 space-y-1.5 text-xs">
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Calls answered</span>
                      <span className="font-medium">128 today</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Appointments</span>
                      <span className="font-medium">42 booked</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-muted-foreground">Handoffs</span>
                      <span className="font-medium">6 escalated</span>
                    </li>
                  </ul>
                </div>
                <div className="rounded-xl border border-border/70 bg-card/50 p-3">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    <Globe className="h-4 w-4 text-emerald-500" />
                    Uptime · 99.99%
                  </div>
                  <div className="mt-2 flex h-16 items-end gap-1">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${40 + Math.random() * 60}%` }}
                        transition={{ delay: 0.9 + i * 0.02 }}
                        className="w-full rounded-sm bg-gradient-to-t from-emerald-500/40 to-emerald-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating glass cards */}
      <motion.div
        className="glass-strong absolute -left-4 top-24 hidden rounded-2xl p-3 shadow-xl sm:block"
        initial={{ opacity: 0, x: -20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.1, type: "spring" }}
      >
        <div className="flex items-center gap-2 text-xs">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-emerald-500/15 text-emerald-500">
            <TrendingUp className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-semibold">+118% leads</div>
            <div className="text-[10px] text-muted-foreground">last 30 days</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="glass-strong absolute -right-2 top-40 hidden rounded-2xl p-3 shadow-xl sm:block"
        initial={{ opacity: 0, x: 20, y: 20 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1.3, type: "spring" }}
      >
        <div className="flex items-center gap-2 text-xs">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-brand-500/15 text-brand-500">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-semibold">AI live · 24/7</div>
            <div className="text-[10px] text-muted-foreground">answering now</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
