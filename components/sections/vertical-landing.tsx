import Link from "next/link";
import { Check, PhoneCall } from "lucide-react";
import type { Vertical } from "@/data/verticals";
import { PageHeader } from "@/components/sections/page-header";
import { Testimonials } from "@/components/sections/testimonials";
import { PricingCalculator } from "@/components/pricing/pricing-calculator";
import { FinalCTA } from "@/components/sections/final-cta";
import { FAQ } from "@/components/sections/faq";
import { InvoiceRequestTrigger } from "@/components/forms/invoice-request-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";

export function VerticalLanding({ vertical }: { vertical: Vertical }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              {
                name: vertical.keyword[0].toUpperCase() + vertical.keyword.slice(1),
                url: `/${vertical.slug}`,
              },
            ]),
          ),
        }}
      />
      {serviceJsonLd("web-development") && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceJsonLd("web-development")),
          }}
        />
      )}

      <PageHeader
        eyebrow={vertical.eyebrow}
        breadcrumbs={[
          { name: "Home", url: "/" },
          {
            name: vertical.keyword[0].toUpperCase() + vertical.keyword.slice(1),
            url: `/${vertical.slug}`,
          },
        ]}
        title={
          <>
            {vertical.headline}{" "}
            <span className="text-gradient-brand">{vertical.headlineAccent}</span>
          </>
        }
        description={vertical.intro}
      />

      <section className="pb-8">
        <div className="container-wide">
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="gradient" size="xl">
              <Link href="/book-consultation">
                <PhoneCall className="h-4 w-4" /> Book Free Consultation
              </Link>
            </Button>
            <InvoiceRequestTrigger>
              <Button variant="glass" size="xl">
                Send Me an Invoice
              </Button>
            </InvoiceRequestTrigger>
          </div>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Live in 3–5 weeks · No lock-in · Own your customer data
          </p>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-16">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="border-primary/30 text-primary">
              Purpose-built
            </Badge>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Every feature a modern {vertical.keyword} practice actually needs.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {vertical.features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.05}>
                <div className="h-full rounded-2xl border border-border/70 bg-card/60 p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 text-white">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Badge variant="outline" className="border-primary/30 text-primary">
                All-in-one plan
              </Badge>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Everything included, from{" "}
                <span className="text-gradient-brand">$39/mo.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                No surprise fees. No per-lead charges. Cancel any time — you
                keep your code, content and data.
              </p>
              <div className="mt-6 flex gap-2">
                <Button asChild variant="gradient" size="lg">
                  <Link href="/book-consultation">Book free call</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/pricing">See pricing</Link>
                </Button>
              </div>
            </div>
            <ul className="grid gap-2 sm:grid-cols-2">
              {vertical.included.map((i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 rounded-xl border border-border/70 bg-card/60 p-3 text-sm"
                >
                  <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-emerald-500/15 text-emerald-500">
                    <Check className="h-3 w-3" />
                  </span>
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-16">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="border-primary/30 text-primary">
              Real numbers
            </Badge>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What our {vertical.keyword} clients typically see
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {vertical.outcomes.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-border/70 bg-card/60 p-6 text-center"
              >
                <div className="font-display text-3xl font-bold text-gradient-brand">
                  {s.value}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="outline" className="border-primary/30 text-primary">
              Configure
            </Badge>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Build your plan.
            </h2>
            <p className="mt-3 text-muted-foreground">
              See the monthly cost update as you customize — starting from the
              features most {vertical.keyword} businesses select.
            </p>
          </div>
          <div className="mt-12">
            <PricingCalculator initialSelected={vertical.initialAddons} />
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ items={vertical.faq} eyebrow={`For ${vertical.keyword}`} />
      <FinalCTA />
    </>
  );
}
