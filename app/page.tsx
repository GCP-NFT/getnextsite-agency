import { Hero } from "@/components/sections/hero";
import { ClientLogos } from "@/components/sections/client-logos";
import { Stats } from "@/components/sections/stats";
import { ServicesGrid } from "@/components/sections/services-grid";
import { Showcase } from "@/components/sections/showcase";
import { IndustriesStrip } from "@/components/sections/industries-strip";
import { PricingPreview } from "@/components/sections/pricing-preview";
import { Timeline } from "@/components/sections/timeline";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { Testimonials } from "@/components/sections/testimonials";
import { FAQ } from "@/components/sections/faq";
import { FinalCTA } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogos />
      <Stats />
      <ServicesGrid />
      <Showcase />
      <IndustriesStrip />
      <PricingPreview />
      <Timeline />
      <PortfolioPreview />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
