import type { Metadata } from "next";
import {
  ShieldCheck,
  Lock,
  Cloud,
  ClipboardCheck,
  Activity,
  FileText,
  Gauge,
  UsersRound,
} from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { FinalCTA } from "@/components/sections/final-cta";
import { Badge } from "@/components/ui/badge";
import { Counter } from "@/components/animations/counter";
import { FadeIn } from "@/components/animations/fade-in";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Security & Trust",
  description:
    "How GetNextSite Agency protects your data, infrastructure and business. SOC 2-aligned practices, uptime, and compliance.",
  alternates: { canonical: `${siteConfig.url}/security` },
};

const pillars = [
  {
    icon: Cloud,
    title: "Enterprise-grade hosting",
    body: "Every site runs on globally-distributed CDN infrastructure with automatic failover and DDoS protection.",
  },
  {
    icon: Lock,
    title: "Encryption everywhere",
    body: "TLS 1.3 in transit. AES-256 at rest. HSTS + preload enforced. No exceptions.",
  },
  {
    icon: ShieldCheck,
    title: "SOC 2-aligned",
    body: "Our vendor stack (hosting, email, analytics, storage) is SOC 2 Type II certified. Our own controls follow the same posture.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance-ready",
    body: "GDPR, CCPA, PIPEDA. HIPAA-aware infrastructure available for medical clients on request.",
  },
];

const controls = [
  {
    icon: Activity,
    title: "24/7 monitoring",
    body: "Uptime, performance, error and security monitoring. Pages on-call within 60s of incidents.",
  },
  {
    icon: FileText,
    title: "Audit logs",
    body: "Every code change, deployment and access event is logged. Client portal shows recent activity.",
  },
  {
    icon: UsersRound,
    title: "Least-privilege access",
    body: "Team members get access only to the projects they're staffed on. Access is revoked automatically at project end.",
  },
  {
    icon: Gauge,
    title: "Backups & DR",
    body: "Daily encrypted backups, 30-day retention, tested quarterly. Recovery time objective (RTO): under 4 hours.",
  },
];

const kpis = [
  { value: 99.99, suffix: "%", label: "Uptime (12mo)", decimals: 2 },
  { value: 60, suffix: "s", label: "Incident page time" },
  { value: 4, suffix: "h", label: "Recovery objective" },
  { value: 100, suffix: "%", label: "Encrypted traffic" },
];

const faqs = [
  {
    q: "Where is my data hosted?",
    a: "By default, all client data is hosted in US East and EU West regions with automatic failover. On request, we can pin your data to a single region.",
  },
  {
    q: "Do you sign DPAs?",
    a: "Yes. Our standard Data Processing Agreement is available on request and covers GDPR, CCPA and PIPEDA.",
  },
  {
    q: "Can you support HIPAA workloads?",
    a: "For medical and healthcare clients, we deploy to a HIPAA-eligible infrastructure with signed BAAs. Contact us for a discovery call.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "You get a full export of your code, content and data. We delete our copies within 30 days unless you request longer retention for legal reasons.",
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Security & trust"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Security", url: "/security" },
        ]}
        title={
          <>
            Security you'd expect from a{" "}
            <span className="text-gradient-brand">Fortune 500,</span> for a small
            business.
          </>
        }
        description="We build for restaurants, dentists and law firms. That means enterprise-grade infrastructure — quietly, in the background, on every plan."
      />

      <section className="border-y border-border/60 bg-muted/20 py-16">
        <div className="container-wide">
          <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {kpis.map((k, i) => (
              <FadeIn key={k.label} delay={i * 0.05}>
                <div className="text-center">
                  <dt className="font-display text-3xl font-bold tracking-tight text-gradient-brand sm:text-4xl">
                    <Counter
                      end={k.value}
                      suffix={k.suffix}
                      decimals={k.decimals ?? 0}
                    />
                  </dt>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {k.label}
                  </dd>
                </div>
              </FadeIn>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="border-primary/30 text-primary">
              Pillars
            </Badge>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Four pillars, no shortcuts.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border/70 bg-card/60 p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-white">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-16">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="border-primary/30 text-primary">
              Operational controls
            </Badge>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              How we run day to day.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {controls.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-border/70 bg-card/60 p-5"
              >
                <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <c.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-4 font-display text-sm font-semibold">
                  {c.title}
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Common security questions
            </h2>
            <dl className="mt-8 divide-y divide-border/60 rounded-2xl border border-border/70 bg-card/60 px-6">
              {faqs.map((f) => (
                <div key={f.q} className="py-5">
                  <dt className="font-semibold">{f.q}</dt>
                  <dd className="mt-2 text-sm text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
