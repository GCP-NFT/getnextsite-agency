import { TrendingUp, Rocket, Bot, Globe, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { DashboardTopbar } from "@/components/dashboard/topbar";
import { clientProjects, clientInvoices } from "@/data/dashboard";
import { formatCurrency } from "@/lib/utils";

export default function DashboardOverview() {
  const nextInvoice = clientInvoices[0];
  const inFlight = clientProjects.filter((p) => p.progress < 100);

  return (
    <>
      <DashboardTopbar title="Welcome back, Jane" />
      <div className="flex-1 space-y-6 p-4 sm:p-6">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Uptime", value: "99.99%", icon: Globe, sub: "last 30 days" },
            { label: "Traffic", value: "48,201", icon: TrendingUp, sub: "+24% MoM" },
            { label: "AI sessions", value: "1,204", icon: Bot, sub: "+62% MoM" },
            { label: "Projects live", value: `${inFlight.length}`, icon: Rocket, sub: "in flight" },
          ].map((k) => (
            <div
              key={k.label}
              className="rounded-2xl border border-border/70 bg-card/60 p-5"
            >
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="uppercase tracking-widest">{k.label}</span>
                <k.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="mt-2 font-display text-2xl font-bold">
                {k.value}
              </div>
              <div className="text-xs text-emerald-500">{k.sub}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          <section className="rounded-2xl border border-border/70 bg-card/60 p-5 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-lg font-semibold">Active projects</h2>
              <Link
                href="/dashboard/projects"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary"
              >
                View all <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
            <ul className="mt-4 divide-y divide-border/60">
              {inFlight.map((p) => (
                <li key={p.id} className="py-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">{p.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {p.stage} · Lead {p.lead}
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Due{" "}
                      {new Date(p.due).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
                    <div
                      className="h-1.5 rounded-full bg-gradient-to-r from-brand-500 via-purple-500 to-brand-400"
                      style={{ width: `${p.progress}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <aside className="space-y-4">
            <div className="gradient-border rounded-2xl">
              <div className="rounded-2xl bg-card/70 p-5 backdrop-blur">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5" /> Next invoice
                </div>
                <div className="mt-2 font-display text-2xl font-bold text-gradient-brand">
                  {formatCurrency(nextInvoice.amount)}
                </div>
                <div className="text-xs text-muted-foreground">
                  Renews Aug 1, 2026 · Auto-billed
                </div>
                <Link
                  href="/dashboard/invoices"
                  className="mt-4 inline-flex text-xs font-semibold text-primary"
                >
                  Invoice history <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-border/70 bg-card/60 p-5">
              <h3 className="font-display text-sm font-semibold">
                Need something?
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                Support ticket, change request, or a strategy call — one click.
              </p>
              <Link
                href="/dashboard/support"
                className="mt-3 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground"
              >
                Open support <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
