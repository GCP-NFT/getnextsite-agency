import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { SiteSearch } from "@/components/sections/site-search";
import { FinalCTA } from "@/components/sections/final-cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Search",
  description:
    "Search everything on GetNextSite Agency — services, industries, case studies, insights and more.",
  alternates: { canonical: `${siteConfig.url}/search` },
  robots: { index: false, follow: true },
};

export default function SearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Search"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Search", url: "/search" },
        ]}
        title={<>Find anything on the site.</>}
        description="Services, industries, case studies, insights, comparisons, tools — all searchable in one place."
      />
      <section className="pb-24">
        <div className="container-wide">
          <SiteSearch />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
