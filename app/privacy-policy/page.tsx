import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How GetNextSite Agency collects, uses and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Privacy Policy", url: "/privacy-policy" },
        ]}
        title={<>Privacy Policy</>}
        description="Last updated January 2026."
      />
      <section className="pb-24">
        <div className="container-tight prose prose-slate max-w-none dark:prose-invert">
          <h2>Summary</h2>
          <p>
            We only collect what we need to run the business — your contact
            details, project information, and product analytics. We never sell
            your data.
          </p>
          <h2>Information we collect</h2>
          <ul>
            <li>Details you submit through forms (name, email, phone, project brief).</li>
            <li>Basic usage data (page views, referrer, device) via privacy-friendly analytics.</li>
            <li>Billing details for invoicing and subscription management.</li>
          </ul>
          <h2>How we use it</h2>
          <ul>
            <li>To respond to inquiries and deliver services.</li>
            <li>To improve the site and our proposals.</li>
            <li>To send newsletters you opt into (unsubscribe any time).</li>
          </ul>
          <h2>Retention & rights</h2>
          <p>
            You can request access, correction or deletion of your data at any
            time by emailing{" "}
            <a href="mailto:privacy@nextsite-agency.com">
              privacy@nextsite-agency.com
            </a>
            . We keep records only for as long as needed to run the client
            relationship or comply with legal obligations.
          </p>
          <h2>Third parties</h2>
          <p>
            We use standard vendors (hosting, email, analytics) that meet
            enterprise security standards. We never share your data with
            advertisers.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about this policy? Email{" "}
            <a href="mailto:privacy@nextsite-agency.com">
              privacy@nextsite-agency.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
