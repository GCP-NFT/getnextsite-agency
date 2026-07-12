import type { Metadata } from "next";
import { CalendarCheck, Clock3, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/sections/page-header";
import { BookingForm } from "@/components/forms/booking-form";
import { Testimonials } from "@/components/sections/testimonials";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Book a free 30-minute consultation with GetNextSite Agency. We'll map your growth plan and show you what your custom subscription would look like.",
};

const perks = [
  {
    icon: Clock3,
    title: "30 minutes",
    body: "Focused, honest and jargon-free.",
  },
  {
    icon: CalendarCheck,
    title: "Live plan review",
    body: "We build a proposed plan on screen together.",
  },
  {
    icon: ShieldCheck,
    title: "No pressure",
    body: "You walk away with the plan, whether you sign or not.",
  },
];

export default function BookConsultationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Book a call"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Book a Consultation", url: "/book-consultation" },
        ]}
        title={
          <>
            30 minutes with a{" "}
            <span className="text-gradient-brand">senior strategist.</span>
          </>
        }
        description="Pick a time, tell us what you're building, and we'll come prepared with a plan you can act on the same day."
      />

      <section className="pb-16">
        <div className="container-wide">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <BookingForm />
            </div>
            <aside className="lg:col-span-5">
              <div className="space-y-4">
                {perks.map((p) => (
                  <div
                    key={p.title}
                    className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card/70 p-5 backdrop-blur"
                  >
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary">
                      <p.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{p.title}</h3>
                      <p className="text-sm text-muted-foreground">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
