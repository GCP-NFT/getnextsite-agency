"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Gift, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { InvoiceRequestTrigger } from "@/components/forms/invoice-request-dialog";

const STORAGE_KEY = "nextsite-exit-intent-shown";

export function ExitIntent() {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    // Only arm on non-touch, non-mobile viewports.
    const isMobile =
      window.matchMedia("(hover: none)").matches ||
      window.innerWidth < 768;
    if (isMobile) return;

    let armed = false;
    const armTimer = window.setTimeout(() => {
      armed = true;
    }, 8000);

    function onMouseOut(e: MouseEvent) {
      if (!armed) return;
      if (e.clientY > 0) return;
      if ((e.relatedTarget as HTMLElement | null) !== null) return;
      setOpen(true);
      sessionStorage.setItem(STORAGE_KEY, "1");
      document.removeEventListener("mouseout", onMouseOut);
    }

    document.addEventListener("mouseout", onMouseOut);
    return () => {
      window.clearTimeout(armTimer);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[75] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            onClick={() => setOpen(false)}
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Special offer"
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.95, y: 8, opacity: 0 }}
            transition={{ type: "spring", damping: 22, stiffness: 260 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-background/95 p-8 shadow-2xl backdrop-blur-2xl"
          >
            <div className="pointer-events-none absolute inset-0 aurora-bg opacity-70" />
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                <Gift className="h-3 w-3" /> Before you go
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
                Get a free 30-minute strategy call
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                We'll map your growth plan on-screen, live. No pitch, no
                commitment — just a plan you can act on the same day.
              </p>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Button
                  asChild
                  variant="gradient"
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => setOpen(false)}
                >
                  <Link href="/book-consultation">
                    Book my free call <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <InvoiceRequestTrigger>
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full rounded-full sm:w-auto"
                    onClick={() => setOpen(false)}
                  >
                    Send Me an Invoice
                  </Button>
                </InvoiceRequestTrigger>
              </div>

              <p className="mt-4 text-[11px] text-muted-foreground">
                We'll never share your details. Cancel or reschedule any time.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
