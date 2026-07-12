import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Timeline } from "@/components/sections/timeline";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, mobile apps, AI automation, digital marketing, branding and hosting — all delivered under one predictable monthly subscription.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
        ]}
        title={
          <>
            A full <span className="text-gradient-brand">digital department,</span>{" "}
            without the overhead.
          </>
        }
        description="Six services, one team, one subscription. Assemble your plan — expand it as you grow."
      />
      <ServicesGrid />
      <Timeline />
      <FAQ />
      <FinalCTA />
    </>
  );
}
