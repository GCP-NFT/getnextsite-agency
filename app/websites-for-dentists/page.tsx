import type { Metadata } from "next";
import { verticals } from "@/data/verticals";
import { VerticalLanding } from "@/components/sections/vertical-landing";
import { siteConfig } from "@/config/site";

const vertical = verticals.find((v) => v.slug === "websites-for-dentists")!;

export const metadata: Metadata = {
  title: vertical.metaTitle,
  description: vertical.metaDescription,
  keywords: [
    "dental website design",
    "dentist online booking",
    "AI receptionist for dentists",
    "dental practice SEO",
  ],
  alternates: { canonical: `${siteConfig.url}/${vertical.slug}` },
};

export default function Page() {
  return <VerticalLanding vertical={vertical} />;
}
