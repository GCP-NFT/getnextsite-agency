import type { Metadata } from "next";
import { verticals } from "@/data/verticals";
import { VerticalLanding } from "@/components/sections/vertical-landing";
import { siteConfig } from "@/config/site";

const vertical = verticals.find((v) => v.slug === "websites-for-lawyers")!;

export const metadata: Metadata = {
  title: vertical.metaTitle,
  description: vertical.metaDescription,
  keywords: [
    "law firm website design",
    "lawyer SEO",
    "case intake automation",
    "law firm client portal",
  ],
  alternates: { canonical: `${siteConfig.url}/${vertical.slug}` },
};

export default function Page() {
  return <VerticalLanding vertical={vertical} />;
}
