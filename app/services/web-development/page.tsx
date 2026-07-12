import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ServiceDetail } from "@/components/sections/service-detail";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/final-cta";
import { services } from "@/data/services";
import { serviceJsonLd } from "@/lib/seo";

const svc = services.find((s) => s.slug === "web-development")!;

export const metadata: Metadata = {
  title: svc.title,
  description: svc.description,
  keywords: [
    "professional website development",
    "website design for small businesses",
    "website redesign",
    "next.js website",
  ],
};

export default function Page() {
  const jsonLd = serviceJsonLd("web-development");
  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <PageHeader
        eyebrow={svc.shortTitle}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: svc.shortTitle, url: svc.href },
        ]}
        title={
          <>
            Professional{" "}
            <span className="text-gradient-brand">website development</span> for
            businesses.
          </>
        }
        description={svc.description}
      />
      <ServiceDetail service={svc} />
      <PortfolioPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
