import type { Metadata } from "next";
import Link from "next/link";
import {
  UtensilsCrossed,
  Bot,
  Search,
  CalendarClock,
  ShoppingCart,
  Star,
  Check,
  PhoneCall,
} from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { Testimonials } from "@/components/sections/testimonials";
import { PricingCalculator } from "@/components/pricing/pricing-calculator";
import { FinalCTA } from "@/components/sections/final-cta";
import { FAQ } from "@/components/sections/faq";
import { InvoiceRequestTrigger } from "@/components/forms/invoice-request-dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { siteConfig } from "@/config/site";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Restaurant Website Design & Online Ordering",
  description:
    "Beautiful, fast restaurant websites with online reservations, direct ordering, menu management and an AI phone receptionist — starting at $39/month.",
  keywords: [
    "restaurant website design",
    "restaurant online ordering",
    "restaurant reservations software",
    "AI phone receptionist for restaurants",
  ],
  alternates: {
    canonical: `${siteConfig.url}/websites-for-restaurants`,
  },
};

const features = [
  {
    icon: UtensilsCrossed,
    title: "Beautiful menus",
    body: "Menus your customers actually enjoy scrolling — with dietary tags, wine pairings, and Instagram-worthy photography.",
  },
  {
    icon: CalendarClock,
    title: "Direct reservations",
    body: "Zero commissions. Table map, party size logic, deposits, waitlist. Google, Instagram and DMs all point here.",
  },
  {
    icon: ShoppingCart,
    title: "Direct online ordering",
    body: "Cut third-party fees. Delivery integrations, pickup, tips, upsells, all under your brand.",
  },
  {
    icon: Bot,
    title: "AI phone receptionist",
    body: "Books tables and answers questions 24/7. Never miss a call during service again.",
  },
  {
    icon: Search,
    title: "Google Maps SEO",
    body: "Rank when locals search 'best pizza near me' — Google Business Profile, reviews, structured data.",
  },
  {
    icon: Star,
    title: "Reviews on autopilot",
    body: "Send a smart post-visit request to happy diners. More 5-star reviews without asking staff to nudge.",
  },
];

const included = [
  "Custom-designed menu pages",
  "Reservation & waitlist system",
  "Direct online ordering (pickup + delivery)",
  "AI phone receptionist",
  "Google Business Profile optimization",
  "SSL, hosting, backups, security",
  "Monthly performance reports",
  "Unlimited menu updates",
];

const restaurantFAQ = [
  {
    question: "Do you integrate with our POS?",
    answer:
      "We integrate with the major restaurant POS systems and can also feed orders via email/print for smaller operations.",
  },
  {
    question: "How does the online ordering handle delivery?",
    answer:
      "You can do in-house delivery, or plug in DoorDash Drive / Uber Direct for zero-commission dispatch. We help pick the right option.",
  },
  {
    question: "Do we still need Yelp / OpenTable?",
    answer:
      "You'll drive most reservations direct — but we still keep your listings healthy. On average, our restaurants cut third-party dependency in half within a quarter.",
  },
  {
    question: "How long to launch?",
    answer:
      "Menus, photos and reservations live in 3–5 weeks from kick-off, including a full brand refresh if you need one.",
  },
];

export default function RestaurantsLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Restaurants", url: "/websites-for-restaurants" },
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
        eyebrow="For restaurants"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Restaurants", url: "/websites-for-restaurants" },
        ]}
        title={
          <>
            Restaurant websites that fill{" "}
            <span className="text-gradient-brand">every seat.</span>
          </>
        }
        description="Direct reservations, ordering, AI phone answering, and Maps SEO — under one $39/month subscription."
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
            Live in 3–5 weeks · Zero commissions · Own your customer data
          </p>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/20 py-16">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="outline"
              className="border-primary/30 text-primary"
            >
              Purpose-built
            </Badge>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Every feature a modern restaurant actually needs.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
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
              <Badge
                variant="outline"
                className="border-primary/30 text-primary"
              >
                All-in-one plan
              </Badge>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Everything included, from{" "}
                <span className="text-gradient-brand">$39/mo.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                No surprise fees. No per-order charges. Cancel any time — you
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
              {included.map((i) => (
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
            <Badge
              variant="outline"
              className="border-primary/30 text-primary"
            >
              Real numbers
            </Badge>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What our restaurants typically see
            </h2>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: "+38%", l: "Direct reservations" },
              { v: "-52%", l: "3rd-party commissions" },
              { v: "24/7", l: "Phone answered" },
              { v: "4.9★", l: "Average review score" },
            ].map((s) => (
              <div
                key={s.l}
                className="rounded-2xl border border-border/70 bg-card/60 p-6 text-center"
              >
                <div className="font-display text-3xl font-bold text-gradient-brand">
                  {s.v}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <Badge
              variant="outline"
              className="border-primary/30 text-primary"
            >
              Configure
            </Badge>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Build your restaurant's plan.
            </h2>
            <p className="mt-3 text-muted-foreground">
              Base plan + reservation, ordering and AI — see the monthly cost
              update as you customize.
            </p>
          </div>
          <div className="mt-12">
            <PricingCalculator
              initialSelected={[
                "booking",
                "ai-chatbot",
                "google-business",
                "seo",
              ]}
            />
          </div>
        </div>
      </section>

      <Testimonials />
      <FAQ items={restaurantFAQ} eyebrow="For restaurants" />
      <FinalCTA />
    </>
  );
}
