import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";
import { generalFAQ, pricingFAQ } from "@/data/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about GetNextSite Agency — subscriptions, pricing, timelines, ownership, cancellation and more.",
};

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="Answers"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ]}
        title={
          <>
            Everything you'd ask a{" "}
            <span className="text-gradient-brand">good agency</span> before signing.
          </>
        }
        description="Still have questions? Book a free call — we'll walk you through anything specific to your business."
      />
      <FAQ items={generalFAQ} eyebrow="General" title={<>General questions.</>} />
      <FAQ items={pricingFAQ} eyebrow="Pricing" title={<>About the subscription.</>} />
      <FinalCTA />
    </>
  );
}
