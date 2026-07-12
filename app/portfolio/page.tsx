import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies from GetNextSite Agency — websites, mobile apps, AI automation, eCommerce and branding projects with measurable business outcomes.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Portfolio", url: "/portfolio" },
        ]}
        title={
          <>
            Case studies with <span className="text-gradient-brand">measurable</span>{" "}
            outcomes.
          </>
        }
        description="A curated selection of client work — filter by category to explore."
      />
      <section className="py-16">
        <div className="container-wide">
          <PortfolioGrid />
        </div>
      </section>
      <Testimonials />
      <FinalCTA />
    </>
  );
}
