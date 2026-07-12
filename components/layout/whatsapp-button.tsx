"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function WhatsAppButton() {
  const number = siteConfig.contact.whatsapp.replace(/[^0-9]/g, "");
  const href = `https://wa.me/${number}?text=${encodeURIComponent(
    "Hi GetNextSite — I'd like to know more about your services.",
  )}`;
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="group fixed bottom-20 right-4 z-40 flex items-center gap-2 rounded-full bg-emerald-500 py-3 pl-3 pr-4 text-sm font-semibold text-white shadow-xl shadow-emerald-500/30 hover:bg-emerald-600 md:bottom-5 md:right-5"
      initial={{ opacity: 0, scale: 0.8, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: "spring", damping: 20 }}
      whileHover={{ scale: 1.05 }}
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-emerald-500/40" />
      <MessageCircle className="h-4 w-4" />
      <span className="hidden sm:inline">Chat with us</span>
    </motion.a>
  );
}
