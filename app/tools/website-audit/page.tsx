import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { WebsiteAudit } from "@/components/tools/website-audit";
import { FinalCTA } from "@/components/sections/final-cta";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Free Website Audit",
  description:
    "Score any website in 30 seconds — performance, SEO, accessibility, security. Free, no signup.",
  alternates: { canonical: `${siteConfig.url}/tools/website-audit` },
};

export default function WebsiteAuditPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tool · Website Audit"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Free tools", url: "/tools" },
          { name: "Website Audit", url: "/tools/website-audit" },
        ]}
        title={
          <>
            How healthy is <span className="text-gradient-brand">your website?</span>
          </>
        }
        description="A quick heuristic score across performance, SEO, accessibility and security. Paste a URL — you'll see the report in 30 seconds."
      />
      <section className="pb-24">
        <div className="container-wide">
          <WebsiteAudit />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
