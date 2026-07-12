"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll } from "framer-motion";
import { PhoneCall, FileText } from "lucide-react";
import { InvoiceRequestTrigger } from "@/components/forms/invoice-request-dialog";

export function StickyMobileCTA() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const unsub = scrollY.on("change", (v) => setVisible(v > 480));
    return () => unsub();
  }, [scrollY]);

  return (
    <motion.div
      className="fixed inset-x-3 bottom-3 z-30 flex items-center gap-2 rounded-full border border-white/10 bg-background/90 p-1.5 shadow-xl backdrop-blur-xl md:hidden"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: visible ? 0 : 80, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", damping: 22, stiffness: 260 }}
      aria-hidden={!visible}
    >
      <Link
        href="/book-consultation"
        className="flex flex-1 items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-brand-600 via-purple-600 to-brand-500 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/30"
      >
        <PhoneCall className="h-3.5 w-3.5" /> Free Call
      </Link>
      <InvoiceRequestTrigger>
        <button className="flex flex-1 items-center justify-center gap-1.5 rounded-full border border-border/70 bg-background px-3 py-2.5 text-sm font-semibold">
          <FileText className="h-3.5 w-3.5" /> Invoice
        </button>
      </InvoiceRequestTrigger>
    </motion.div>
  );
}
