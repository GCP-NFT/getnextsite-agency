"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { MobileNav } from "@/components/layout/mobile-nav";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 8));
    return () => unsub();
  }, [scrollY]);

  const blur = useTransform(scrollY, [0, 80], [4, 16]);

  return (
    <motion.header
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 transition-all duration-300 sm:px-4 sm:pt-4",
      )}
      style={{ backdropFilter: `blur(${blur.get()}px)` }}
    >
      <nav
        className={cn(
          "relative flex w-full max-w-6xl items-center justify-between gap-4 rounded-full border border-white/10 bg-background/70 px-3 py-2 shadow-lg backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 sm:px-4",
          scrolled &&
            "bg-background/85 shadow-xl shadow-slate-900/5 dark:shadow-black/40",
        )}
        aria-label="Primary"
      >
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {siteConfig.nav.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    isActive && "text-foreground",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full bg-muted"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => {
              const evt = new KeyboardEvent("keydown", {
                key: "k",
                metaKey: true,
                ctrlKey: true,
                bubbles: true,
              });
              window.dispatchEvent(evt);
            }}
            className="hidden items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs text-muted-foreground transition hover:border-primary/40 hover:text-foreground md:inline-flex"
            aria-label="Open command menu"
          >
            <Search className="h-3.5 w-3.5" />
            <span>Search</span>
            <kbd className="rounded border border-border/70 bg-muted px-1 py-0.5 font-mono text-[10px]">
              ⌘K
            </kbd>
          </button>
          <ThemeToggle />
          <Link
            href="/sign-in"
            className="hidden text-sm font-medium text-muted-foreground transition hover:text-foreground lg:inline-flex"
          >
            Sign in
          </Link>
          <Button
            asChild
            variant="gradient"
            size="sm"
            className="hidden sm:inline-flex"
          >
            <Link href="/book-consultation">Book Free Call</Link>
          </Button>
          <MobileNav />
        </div>
      </nav>
    </motion.header>
  );
}
