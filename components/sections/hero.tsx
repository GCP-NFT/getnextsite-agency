"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Zap, Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroDashboard } from "@/components/sections/hero-dashboard";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-8 sm:pt-16">
      {/* animated aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 aurora-bg" />
        <div className="absolute inset-0 grid-bg opacity-40" />
        <motion.div
          className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl"
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-0 top-40 h-96 w-96 rounded-full bg-purple-500/30 blur-3xl"
          animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-wide">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex"
          >
            <Badge variant="gradient" className="gap-2 px-4 py-2 text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Websites · Apps · AI · Marketing — one subscription</span>
            </Badge>
          </motion.div>

          <motion.h1
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            Building the Future of{" "}
            <span className="text-gradient-brand">Your Business</span> Online.
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            GetNextSite Agency is the long-term digital partner for small businesses and
            growing brands — professional websites, mobile apps, AI automation, and
            marketing on one flat monthly plan.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <Button asChild variant="gradient" size="xl">
              <Link href="/pricing">
                Build My Digital Business
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link href="/book-consultation">Book Free Consultation</Link>
            </Button>
          </motion.div>

          <motion.ul
            className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <li className="inline-flex items-center gap-1.5">
              <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" /> No lock-in
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-amber-500" /> Launches in 3–6 weeks
            </li>
            <li className="inline-flex items-center gap-1.5">
              <Bot className="h-3.5 w-3.5 text-brand-400" /> AI included
            </li>
          </motion.ul>
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <HeroDashboard />
        </motion.div>
      </div>
    </section>
  );
}
