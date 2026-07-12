import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { PricingCalculator } from "@/components/pricing/pricing-calculator";
import { ComparisonTable } from "@/components/pricing/comparison-table";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { pricingFAQ } from "@/data/faq";
import { Check, RefreshCw, PauseCircle, XCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Interactive pricing configurator. Build a monthly subscription for your website, mobile app, AI automation and marketing — all in one plan.",
};

const modelBlocks = [
  {
    icon: RefreshCw,
    title: "One-time setup",
    body: "Discovery, UI design, development, testing and deployment — paid at kickoff and after milestones.",
  },
  {
    icon: Check,
    title: "Monthly subscription",
    body: "Hosting, SSL, security, backups, monitoring, updates, technical support, AI monitoring, performance & bug fixes.",
  },
  {
    icon: PauseCircle,
    title: "Pause any time",
    body: "Downgrade, upgrade or pause your plan. Changes take effect on the next billing cycle.",
  },
  {
    icon: XCircle,
    title: "If you cancel",
    body: "You keep the code and content. Hosting, monitoring and maintenance stop with the subscription — nothing is held hostage.",
  },
];

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Pricing", url: "/pricing" },
        ]}
        title={
          <>
            Configure your plan. <span className="text-gradient-brand">See the price update live.</span>
          </>
        }
        description="Base plan starts at $39/month. Assemble the exact services you need — nothing more."
      />

      <section className="py-16">
        <div className="container-wide">
          <PricingCalculator />
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30 py-16">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              How the subscription works
            </h2>
            <p className="mt-4 text-muted-foreground">
              We're transparent about pricing so you can plan long-term with
              confidence.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {modelBlocks.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-border/70 bg-card/70 p-6"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Compare bundled plans
            </h2>
            <p className="mt-3 text-muted-foreground">
              Prefer a pre-set bundle? Here's how our three most popular
              subscription bundles stack up.
            </p>
          </div>
          <div className="mt-10">
            <ComparisonTable />
          </div>
        </div>
      </section>

      <FAQ items={pricingFAQ} eyebrow="Pricing FAQ" />
      <FinalCTA />
    </>
  );
}
