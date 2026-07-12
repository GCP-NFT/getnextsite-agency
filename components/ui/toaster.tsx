"use client";

import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const icons = {
  default: Info,
  success: CheckCircle2,
  error: AlertCircle,
};

const styles = {
  default: "border-border/70 bg-card/80 text-foreground",
  success:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-200",
  error:
    "border-destructive/40 bg-destructive/10 text-destructive dark:text-red-300",
};

export function Toaster() {
  const { toasts, dismiss } = useToast();

  return (
    <div
      aria-live="polite"
      className="fixed inset-x-0 bottom-24 z-[80] flex flex-col items-center gap-2 px-4 pointer-events-none sm:inset-x-auto sm:right-6 sm:bottom-6 sm:items-end"
    >
      <AnimatePresence>
        {toasts.map((t) => {
          const Icon = icons[t.variant ?? "default"];
          return (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: 40, transition: { duration: 0.15 } }}
              transition={{ type: "spring", damping: 22, stiffness: 260 }}
              className={cn(
                "pointer-events-auto flex w-full max-w-sm items-start gap-3 rounded-2xl border p-4 shadow-xl backdrop-blur-xl",
                styles[t.variant ?? "default"],
              )}
              role="status"
            >
              <Icon className="mt-0.5 h-4 w-4 shrink-0" />
              <div className="flex-1 text-sm">
                {t.title && <div className="font-semibold">{t.title}</div>}
                {t.description && (
                  <div className="mt-0.5 text-xs opacity-80">
                    {t.description}
                  </div>
                )}
              </div>
              <button
                aria-label="Dismiss"
                onClick={() => dismiss(t.id)}
                className="opacity-60 transition hover:opacity-100"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}
