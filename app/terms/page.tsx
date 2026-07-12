import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/page-header";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms governing your use of GetNextSite Agency services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Terms of Service", url: "/terms" },
        ]}
        title={<>Terms of Service</>}
        description="Last updated January 2026."
      />
      <section className="pb-24">
        <div className="container-tight prose prose-slate max-w-none dark:prose-invert">
          <h2>Overview</h2>
          <p>
            These Terms govern the use of GetNextSite Agency's website and
            subscription services. By engaging with us, you agree to these
            terms.
          </p>
          <h2>Subscriptions</h2>
          <p>
            Subscriptions renew automatically at the interval you selected until
            cancelled. Upgrades and downgrades take effect on the next billing
            cycle. Setup fees are non-refundable once discovery has started.
          </p>
          <h2>Ownership</h2>
          <p>
            You own the code, content and creative work produced for your
            business. We retain rights to reusable libraries and design system
            primitives that predate the engagement.
          </p>
          <h2>Cancellation</h2>
          <p>
            You can cancel any time. When your subscription ends, hosting,
            monitoring, security and maintenance stop — but we hand over your
            files so you can host elsewhere.
          </p>
          <h2>Uptime & SLA</h2>
          <p>
            We target 99.9% uptime. If we miss it, we credit the corresponding
            portion of your subscription for that month.
          </p>
          <h2>Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, our liability is limited to
            the amount you paid in the previous three months of subscription.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href="mailto:legal@nextsite-agency.com">
              legal@nextsite-agency.com
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
