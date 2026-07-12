import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ServiceDetail } from "@/components/sections/service-detail";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { FinalCTA } from "@/components/sections/final-cta";
import { services } from "@/data/services";
import { serviceJsonLd } from "@/lib/seo";

const svc = services.find((s) => s.slug === "branding")!;

export const metadata: Metadata = {
  title: svc.title,
  description: svc.description,
  keywords: ["branding", "logo design", "brand identity", "typography"],
};

export default function Page() {
  const jsonLd = serviceJsonLd("branding");
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
            A <span className="text-gradient-brand">brand system</span> that
            makes you look established.
          </>
        }
        description={svc.description}
      />
      <ServiceDetail service={svc} />
      <PortfolioPreview />
      <FinalCTA />
    </>
  );
}
