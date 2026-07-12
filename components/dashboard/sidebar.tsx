"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  Receipt,
  LifeBuoy,
  Sparkles,
  LogOut,
  ArrowLeft,
} from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Projects", href: "/dashboard/projects", icon: FolderKanban },
  { label: "Invoices", href: "/dashboard/invoices", icon: Receipt },
  { label: "Support", href: "/dashboard/support", icon: LifeBuoy },
];

export function DashboardSidebar() {
  const pathname = usePathname();
  return (
    <aside className="hidden w-60 shrink-0 border-r border-border/60 bg-card/40 backdrop-blur lg:flex lg:flex-col">
      <div className="px-5 py-5">
        <Logo />
      </div>

      <div className="mx-3 mb-3 rounded-xl border border-border/70 bg-gradient-to-br from-brand-500/10 to-purple-500/10 p-3 text-xs">
        <div className="flex items-center gap-2 font-semibold">
          <Sparkles className="h-3.5 w-3.5 text-primary" /> Foundation plan
        </div>
        <p className="mt-1 text-muted-foreground">
          Renews Aug 12 · $149/mo
        </p>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {nav.map((n) => {
          const isActive =
            pathname === n.href ||
            (n.href !== "/dashboard" && pathname.startsWith(n.href));
          return (
            <Link
              key={n.href}
              href={n.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition",
                isActive
                  ? "bg-primary/10 font-semibold text-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <n.icon className="h-4 w-4" />
              {n.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border/60 p-3">
        <Link
          href="/"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-xs text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <ArrowLeft className="h-3 w-3" /> Back to site
        </Link>
        <button className="mt-1 flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs text-muted-foreground hover:bg-muted hover:text-foreground">
          <LogOut className="h-3 w-3" /> Sign out
        </button>
      </div>
    </aside>
  );
}
