import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Stats } from "@/components/sections/stats";
import { Timeline } from "@/components/sections/timeline";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/final-cta";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About",
  description:
    "GetNextSite Agency is a global product studio helping small and mid-size businesses launch, modernize and scale their digital presence with a single subscription.",
};

const values = [
  {
    title: "Operators, not vendors",
    body: "We think in metrics, not deliverables. Success looks like your revenue, not our invoices.",
  },
  {
    title: "One team, one bill",
    body: "One partner for websites, apps, AI and marketing — with a single invoice and one calendar.",
  },
  {
    title: "Ship fast, ship polished",
    body: "We compress six-month projects into six-week sprints, without compromising craft.",
  },
  {
    title: "No lock-in, ever",
    body: "You always own your code and content. Cancel any time and we hand everything over.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About", url: "/about" },
        ]}
        title={
          <>
            We're a modern studio for businesses that want a{" "}
            <span className="text-gradient-brand">real digital partner.</span>
          </>
        }
        description="Since day one, we've had a single mission: make top-tier design, engineering and AI accessible to every business — not just Fortune 500s."
      />
      <Stats />

      <section className="py-24">
        <div className="container-wide">
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Our mission
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                We help businesses launch, modernize, automate and scale their
                digital presence through websites, mobile applications, AI
                solutions, branding, hosting and ongoing maintenance. We become
                our clients' long-term digital transformation partner — not just
                another web design company.
              </p>
              <p className="mt-4 text-base text-muted-foreground">
                Our subscription model bundles design, engineering, hosting,
                security, marketing and AI into a single predictable monthly
                plan. No surprise invoices. No 60-page proposals. Just steady,
                measurable growth month after month.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v) => (
                <Card key={v.title} className="bg-card/60 backdrop-blur">
                  <CardContent className="p-5">
                    <h3 className="font-display font-semibold">{v.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {v.body}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Timeline />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
