"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, FileText, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InvoiceRequestTrigger } from "@/components/forms/invoice-request-dialog";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container-wide">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-10 shadow-2xl sm:p-16">
          <div className="absolute inset-0 aurora-bg opacity-90" />
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
          <motion.div
            className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[600px] -translate-x-1/2 rounded-full bg-brand-500/40 blur-3xl"
            animate={{ opacity: [0.4, 0.7, 0.4] }}
            transition={{ duration: 6, repeat: Infinity }}
          />

          <div className="relative mx-auto max-w-2xl text-center text-white">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-5xl">
              Ready to build the future of your business?
            </h2>
            <p className="mt-4 text-base text-slate-300 sm:text-lg">
              Book a free 30-minute consultation. We'll map your growth plan and
              show you exactly what your subscription would look like.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="gradient" size="xl">
                <Link href="/book-consultation">
                  <PhoneCall className="h-4 w-4" />
                  Book Free Consultation
                </Link>
              </Button>
              <InvoiceRequestTrigger>
                <Button variant="glass" size="xl" className="text-slate-950">
                  <FileText className="h-4 w-4" />
                  Send Me an Invoice
                </Button>
              </InvoiceRequestTrigger>
              <Button asChild variant="link" size="xl" className="text-slate-100">
                <Link href="/pricing">
                  See pricing <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
