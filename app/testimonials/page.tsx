import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { Stats } from "@/components/sections/stats";
import { TestimonialsWall } from "@/components/sections/testimonials-wall";
import { FinalCTA } from "@/components/sections/final-cta";
import { siteConfig } from "@/config/site";
import { testimonials } from "@/data/testimonials";
import { aggregateRatingJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "What GetNextSite Agency's long-term partners say — filtered by service and industry.",
  alternates: { canonical: `${siteConfig.url}/testimonials` },
};

export default function TestimonialsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aggregateRatingJsonLd(testimonials)),
        }}
      />
      <PageHeader
        eyebrow="Loved by operators"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Testimonials", url: "/testimonials" },
        ]}
        title={
          <>
            Real founders. <span className="text-gradient-brand">Real numbers.</span>
          </>
        }
        description="A curated wall of quotes from clients who have been with us for a year or more."
      />
      <Stats />
      <section className="py-16">
        <div className="container-wide">
          <TestimonialsWall />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
