"use client";

import { Bell, Search } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export function DashboardTopbar({ title }: { title: string }) {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-border/60 bg-background/80 px-4 py-3 backdrop-blur">
      <h1 className="font-display text-lg font-semibold">{title}</h1>
      <div className="ml-auto flex items-center gap-1.5">
        <button
          className="hidden items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary/40 hover:text-foreground md:inline-flex"
          onClick={() => {
            const evt = new KeyboardEvent("keydown", {
              key: "k",
              metaKey: true,
              ctrlKey: true,
              bubbles: true,
            });
            window.dispatchEvent(evt);
          }}
        >
          <Search className="h-3 w-3" /> Search
          <kbd className="rounded border border-border/70 bg-muted px-1 py-0.5 font-mono text-[10px]">
            ⌘K
          </kbd>
        </button>
        <button
          className="rounded-full border border-border/70 p-2 text-muted-foreground hover:text-foreground"
          aria-label="Notifications"
        >
          <Bell className="h-4 w-4" />
        </button>
        <ThemeToggle />
        <div className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-purple-500 text-xs font-semibold text-white">
          JS
        </div>
      </div>
    </header>
  );
}
