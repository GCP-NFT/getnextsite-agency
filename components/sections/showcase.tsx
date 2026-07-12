"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Globe,
  Smartphone,
  Bot,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/sections/section-header";

export function Showcase() {
  return (
    <section className="relative py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Products in action"
          title={<>See what your business could look like <span className="text-gradient-brand">next month.</span></>}
          description="Websites that convert. Apps your customers keep on their home screen. AI that never sleeps."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-12">
          {/* Web showcase */}
          <div className="lg:col-span-7">
            <div className="group relative h-full overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-brand-500/10 via-transparent to-purple-500/10 p-8 shadow-lg">
              <div className="flex items-start justify-between">
                <div>
                  <Badge variant="gradient" className="mb-3 gap-1.5">
                    <Globe className="h-3 w-3" /> Web Development
                  </Badge>
                  <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                    Sub-second websites.
                  </h3>
                  <p className="mt-2 max-w-md text-sm text-muted-foreground">
                    Every site we ship targets a 0.9s Largest Contentful Paint on
                    mobile and a 100 Accessibility score — before launch.
                  </p>
                </div>
                <div className="hidden text-right sm:block">
                  <div className="font-display text-3xl font-bold text-gradient-brand">
                    0.9s
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Median LCP
                  </div>
                </div>
              </div>

              <div className="relative mt-8 overflow-hidden rounded-2xl border border-border/60 bg-background/70 shadow-inner">
                <div className="flex items-center gap-2 border-b border-border/60 bg-muted/40 px-3 py-2">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-[10px] text-muted-foreground">
                    lumenhotels.com
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2 p-3">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="aspect-[4/3] rounded-lg bg-gradient-to-br from-brand-500/30 to-purple-500/20"
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * i }}
                    />
                  ))}
                </div>
                <div className="space-y-2 px-3 pb-4">
                  <div className="h-2 w-2/3 rounded-full bg-muted" />
                  <div className="h-2 w-1/2 rounded-full bg-muted" />
                  <div className="h-2 w-3/4 rounded-full bg-muted" />
                </div>
              </div>

              <Button
                asChild
                variant="ghost"
                className="mt-6 -ml-3 gap-1 text-primary"
              >
                <Link href="/services/web-development">
                  Explore web development <ArrowRight className="h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Mobile showcase */}
          <div className="lg:col-span-5">
            <div className="relative h-full overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-violet-500/10 via-transparent to-fuchsia-500/10 p-8 shadow-lg">
              <Badge variant="gradient" className="mb-3 gap-1.5">
                <Smartphone className="h-3 w-3" /> Mobile Apps
              </Badge>
              <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                Apps your customers keep.
              </h3>
              <p className="mt-2 max-w-md text-sm text-muted-foreground">
                iOS + Android in one build. Push notifications, loyalty, bookings,
                offline mode — production-ready.
              </p>

              <div className="mt-6 flex items-end justify-center">
                <PhoneMockup />
              </div>

              <Button
                asChild
                variant="ghost"
                className="mt-6 -ml-3 gap-1 text-primary"
              >
                <Link href="/services/mobile-apps">
                  Explore mobile <ArrowRight className="h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>

          {/* AI showcase */}
          <div className="lg:col-span-12">
            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-gradient-to-br from-emerald-500/10 via-transparent to-teal-500/10 p-8 shadow-lg">
              <div className="grid gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6">
                  <Badge variant="gradient" className="mb-3 gap-1.5">
                    <Bot className="h-3 w-3" /> AI Automation
                  </Badge>
                  <h3 className="font-display text-2xl font-semibold sm:text-3xl">
                    A tireless AI teammate for every business.
                  </h3>
                  <p className="mt-3 max-w-lg text-sm text-muted-foreground">
                    Answers calls, books appointments, qualifies leads, replies on
                    WhatsApp, and updates your CRM — around the clock, in your
                    brand voice.
                  </p>

                  <ul className="mt-5 grid gap-2 text-sm sm:grid-cols-2">
                    {[
                      "24/7 phone & chat coverage",
                      "Automated booking & reminders",
                      "WhatsApp + Messenger + IG",
                      "CRM & calendar in sync",
                    ].map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500/20 text-emerald-500">
                          <Sparkles className="h-3 w-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    variant="ghost"
                    className="mt-6 -ml-3 gap-1 text-primary"
                  >
                    <Link href="/services/ai-solutions">
                      Explore AI solutions <ArrowRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>

                <div className="lg:col-span-6">
                  <AIChatMock />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="h-[380px] w-[190px] rounded-[36px] border-[10px] border-slate-900 bg-slate-900 shadow-2xl dark:border-slate-800">
        <div className="relative h-full w-full overflow-hidden rounded-[26px] bg-gradient-to-b from-brand-500/30 via-background to-purple-500/20">
          <div className="mx-auto mt-2 h-4 w-16 rounded-full bg-slate-900" />
          <div className="px-3 pt-4">
            <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Book a class
            </div>
            <div className="mt-1 font-display text-lg font-bold">
              Kite Fitness
            </div>
            <div className="mt-3 space-y-2">
              {["Yoga · 7:30", "HIIT · 9:00", "Pilates · 18:00"].map((t, i) => (
                <div
                  key={t}
                  className="rounded-xl bg-card/80 p-2.5 shadow-sm backdrop-blur"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium">{t}</span>
                    <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-semibold text-primary">
                      Book
                    </span>
                  </div>
                  <div className="mt-1 h-1 w-full rounded-full bg-muted">
                    <motion.span
                      className="block h-1 rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${40 + i * 20}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-xl bg-gradient-to-r from-brand-600 to-purple-600 p-2.5 text-center text-[10px] font-semibold text-white">
              Confirm my week
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AIChatMock() {
  return (
    <div className="rounded-2xl border border-border/70 bg-background/70 p-4 backdrop-blur">
      <div className="mb-3 flex items-center gap-2">
        <div className="grid h-8 w-8 place-items-center rounded-full bg-emerald-500/15 text-emerald-500">
          <Bot className="h-4 w-4" />
        </div>
        <div>
          <div className="text-sm font-semibold">AI Receptionist · Live</div>
          <div className="text-[11px] text-muted-foreground">
            North Dental · answered in 0.4s
          </div>
        </div>
      </div>
      <div className="space-y-2">
        {[
          { from: "user", text: "Hi, can I book a cleaning for Friday morning?" },
          {
            from: "ai",
            text: "Sure! Dr. Menon has 9:15 and 10:45 available on Friday. Which works?",
          },
          { from: "user", text: "9:15 please." },
          {
            from: "ai",
            text: "Booked. I've sent a confirmation and reminder to your phone. Anything else?",
          },
        ].map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
            className={`max-w-[80%] rounded-2xl px-3 py-2 text-sm ${
              m.from === "user"
                ? "ml-auto bg-primary text-primary-foreground"
                : "bg-muted"
            }`}
          >
            {m.text}
          </motion.div>
        ))}
        <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-background px-3 py-2 text-xs text-muted-foreground">
          <MessageSquare className="h-3.5 w-3.5" />
          Say hi to your AI teammate…
        </div>
      </div>
    </div>
  );
}
