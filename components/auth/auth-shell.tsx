import Link from "next/link";
import { Sparkles, Star } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function AuthShell({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="-mt-24 grid min-h-screen grid-cols-1 lg:grid-cols-2">
      <section className="relative flex items-center justify-center px-4 py-16 sm:px-8">
        <div className="w-full max-w-md">
          <Logo />
          <div className="mt-8">{children}</div>
        </div>
      </section>

      <aside className="relative hidden overflow-hidden bg-slate-950 lg:block">
        <div className="absolute inset-0 aurora-bg opacity-90" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
        <div className="relative z-10 flex h-full flex-col justify-between p-12 text-white">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs">
              <Sparkles className="h-3 w-3" /> One team. One subscription.
            </div>
            <h2 className="mt-8 font-display text-4xl font-bold leading-tight tracking-tight">
              Everything you need to launch and grow —{" "}
              <span className="text-gradient-brand">under one login.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm text-slate-300">
              Websites, mobile apps, AI, marketing, hosting — all managed from
              one client portal.
            </p>
          </div>

          <blockquote className="max-w-md rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="flex gap-0.5 text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3 w-3 fill-current" />
              ))}
            </div>
            <p className="mt-3 text-sm italic">
              "Their subscription model gave us Fortune-500 quality on a
              small-business budget. It's the single best partnership we have."
            </p>
            <footer className="mt-3 text-xs text-slate-300">
              Julien Rossi · Owner, Canela Cocina
            </footer>
          </blockquote>

          <div className="text-xs text-slate-400">
            <Link href="/" className="hover:text-white">
              ← Back to nextsite-agency.com
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
