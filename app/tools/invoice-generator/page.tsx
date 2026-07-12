import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";
import { InvoiceGenerator } from "@/components/tools/invoice-generator";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Free Invoice Generator",
  description:
    "Create a clean, print-ready invoice PDF in one minute. Free forever, no signup.",
  alternates: { canonical: `${siteConfig.url}/tools/invoice-generator` },
};

export default function InvoiceGeneratorPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tool · Invoice Generator"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Free tools", url: "/tools" },
          { name: "Invoice Generator", url: "/tools/invoice-generator" },
        ]}
        title={
          <>
            Create a{" "}
            <span className="text-gradient-brand">professional invoice</span> in
            a minute.
          </>
        }
        description="Fill in your details, add line items, and hit print — save as PDF and send. No signup, no logo watermark."
      />
      <section className="pb-24">
        <div className="container-wide">
          <InvoiceGenerator />
        </div>
      </section>
    </>
  );
}
