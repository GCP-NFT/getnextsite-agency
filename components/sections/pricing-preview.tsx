import { SectionHeader } from "@/components/sections/section-header";
import { PricingCalculator } from "@/components/pricing/pricing-calculator";

export function PricingPreview() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="container-wide">
        <SectionHeader
          eyebrow="Simple, honest pricing"
          title={<>Configure your plan. <span className="text-gradient-brand">See the price update live.</span></>}
          description="One flat monthly subscription combining everything you need. No surprise invoices — ever."
        />
        <div className="mt-14">
          <PricingCalculator />
        </div>
      </div>
    </section>
  );
}
