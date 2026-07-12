import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { ServiceDetail } from "@/components/sections/service-detail";
import { Testimonials } from "@/components/sections/testimonials";
import { FinalCTA } from "@/components/sections/final-cta";
import { services } from "@/data/services";
import { serviceJsonLd } from "@/lib/seo";

const svc = services.find((s) => s.slug === "digital-marketing")!;

export const metadata: Metadata = {
  title: svc.title,
  description: svc.description,
  keywords: [
    "digital marketing agency",
    "SEO",
    "Google Business",
    "social media marketing",
  ],
};

export default function Page() {
  const jsonLd = serviceJsonLd("digital-marketing");
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
            Predictable <span className="text-gradient-brand">growth</span>,
            month after month.
          </>
        }
        description={svc.description}
      />
      <ServiceDetail service={svc} />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
