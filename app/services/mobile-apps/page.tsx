import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ServiceDetail } from "@/components/sections/service-detail";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/final-cta";
import { services } from "@/data/services";
import { serviceJsonLd } from "@/lib/seo";

const svc = services.find((s) => s.slug === "mobile-apps")!;

export const metadata: Metadata = {
  title: svc.title,
  description: svc.description,
  keywords: [
    "mobile app development",
    "iOS app development",
    "Android app development",
    "React Native",
  ],
};

export default function Page() {
  const jsonLd = serviceJsonLd("mobile-apps");
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
            Native-feel <span className="text-gradient-brand">mobile apps</span>{" "}
            for iOS and Android.
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
