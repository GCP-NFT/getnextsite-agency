import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import type { Service } from "@/data/services";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/animations/fade-in";
import { InvoiceRequestTrigger } from "@/components/forms/invoice-request-dialog";

export function ServiceDetail({ service }: { service: Service }) {
  return (
    <section className="py-24">
      <div className="container-wide">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <FadeIn>
              <Badge variant="gradient" className="mb-4 gap-1.5">
                <service.icon className="h-3.5 w-3.5" />
                {service.shortTitle}
              </Badge>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="text-lg text-primary">{service.tagline}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="mt-4 text-base text-muted-foreground">
                {service.description}
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <h2 className="mt-10 font-display text-2xl font-semibold">
                What's included
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-emerald-500/15 text-emerald-500">
                      <Check className="h-3 w-3" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
            </FadeIn>

            <FadeIn delay={0.2}>
              <h2 className="mt-10 font-display text-2xl font-semibold">
                How we deliver
              </h2>
              <ol className="mt-4 space-y-3 border-l border-border/70 pl-6">
                {service.deliverables.map((d, i) => (
                  <li
                    key={d}
                    className="relative before:absolute before:-left-[26px] before:top-1 before:grid before:h-4 before:w-4 before:place-items-center before:rounded-full before:bg-primary before:text-[10px] before:font-bold before:text-primary-foreground before:content-[attr(data-step)]"
                    data-step={i + 1}
                  >
                    <div className="text-sm font-medium">{d}</div>
                  </li>
                ))}
              </ol>
            </FadeIn>
          </div>

          <aside className="lg:col-span-5">
            <div className="sticky top-24 gradient-border rounded-2xl">
              <div className="rounded-2xl bg-card/70 p-6 backdrop-blur">
                <div className="text-xs uppercase tracking-widest text-muted-foreground">
                  Starting at
                </div>
                <div className="mt-1 font-display text-3xl font-bold text-gradient-brand">
                  {service.startingAt}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Bundled into a single subscription with your other services.
                </p>
                <div className="mt-6 space-y-2">
                  <Button asChild variant="gradient" size="lg" className="w-full">
                    <Link href="/pricing">
                      Configure my plan <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <InvoiceRequestTrigger>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full rounded-full"
                    >
                      Send Me an Invoice
                    </Button>
                  </InvoiceRequestTrigger>
                  <Button
                    asChild
                    variant="ghost"
                    size="lg"
                    className="w-full rounded-full"
                  >
                    <Link href="/book-consultation">Book free consultation</Link>
                  </Button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
