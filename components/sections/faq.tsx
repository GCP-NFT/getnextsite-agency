import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/sections/section-header";
import { FadeIn } from "@/components/animations/fade-in";
import type { FAQItem } from "@/data/faq";
import { generalFAQ } from "@/data/faq";
import { faqJsonLd } from "@/lib/seo";

export function FAQ({
  items = generalFAQ,
  eyebrow = "Answers",
  title,
}: {
  items?: FAQItem[];
  eyebrow?: string;
  title?: React.ReactNode;
}) {
  return (
    <section className="relative py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd(items)),
        }}
      />
      <div className="container-wide">
        <SectionHeader
          eyebrow={eyebrow}
          title={
            title ?? (
              <>
                Frequently asked <span className="text-gradient-brand">questions.</span>
              </>
            )
          }
        />
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border/70 bg-card/60 px-6 backdrop-blur">
          <FadeIn>
            <Accordion type="single" collapsible>
              {items.map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger>{f.question}</AccordionTrigger>
                  <AccordionContent>{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
