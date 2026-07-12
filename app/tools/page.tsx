import type { Metadata } from "next";
import Link from "next/link";
import { Gauge, FileText, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { FinalCTA } from "@/components/sections/final-cta";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Free tools",
  description:
    "Free tools from GetNextSite Agency — audit your website, generate invoices, and more. No signup required.",
  alternates: { canonical: `${siteConfig.url}/tools` },
};

const tools = [
  {
    slug: "website-audit",
    title: "Website Audit",
    tagline: "Score any URL in 30 seconds.",
    description:
      "Get an at-a-glance report on speed, SEO, accessibility and best practices. No signup — just paste a URL.",
    icon: Gauge,
  },
  {
    slug: "invoice-generator",
    title: "Invoice Generator",
    tagline: "Create a clean invoice PDF in one minute.",
    description:
      "Fill your business info, add line items, and generate a print-ready invoice. Free forever.",
    icon: FileText,
  },
];

export default function ToolsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free tools"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Free tools", url: "/tools" },
        ]}
        title={
          <>
            Free tools that <span className="text-gradient-brand">actually help.</span>
          </>
        }
        description="No signup, no email walls, no fake gated PDFs. Real tools we built for our clients — and now for everyone."
      />

      <section className="pb-24">
        <div className="container-wide">
          <div className="grid gap-6 md:grid-cols-2">
            {tools.map((t) => (
              <Link
                key={t.slug}
                href={`/tools/${t.slug}`}
                className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card/60 p-8 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-brand-500 to-purple-500 opacity-15 blur-3xl transition group-hover:opacity-25" />
                <Badge variant="gradient" className="mb-3 gap-1.5">
                  <Sparkles className="h-3 w-3" /> Free forever
                </Badge>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-white">
                  <t.icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 font-display text-2xl font-semibold">
                  {t.title}
                </h2>
                <p className="mt-1 text-sm font-medium text-primary">
                  {t.tagline}
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  {t.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
