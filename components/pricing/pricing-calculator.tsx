"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Plus, Sparkles, ShieldCheck, Zap } from "lucide-react";
import { addonCategories, addons, basePlan } from "@/data/pricing";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { cn, formatCurrency } from "@/lib/utils";
import { InvoiceRequestTrigger } from "@/components/forms/invoice-request-dialog";

export function PricingCalculator({
  initialSelected = [],
}: {
  initialSelected?: string[];
}) {
  const [selected, setSelected] = React.useState<Set<string>>(
    new Set(initialSelected),
  );
  const [yearly, setYearly] = React.useState(true);

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  const chosen = addons.filter((a) => selected.has(a.id));
  const monthly =
    basePlan.price + chosen.reduce((sum, a) => sum + a.monthly, 0);
  const setup = basePlan.setup + chosen.reduce((sum, a) => sum + a.setup, 0);
  const yearlyDiscount = yearly ? Math.round(monthly * 12 * 0.15) : 0;
  const annual = monthly * 12 - yearlyDiscount;

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      {/* LEFT — configurator */}
      <div className="lg:col-span-8">
        <div className="rounded-3xl border border-border/70 bg-card/60 p-6 shadow-sm backdrop-blur">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <Badge variant="gradient" className="mb-2 gap-1.5">
                <Sparkles className="h-3 w-3" /> Build your plan
              </Badge>
              <h3 className="font-display text-2xl font-semibold">
                Everything included in {basePlan.name}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Base plan starting at{" "}
                <span className="font-semibold text-foreground">
                  {formatCurrency(basePlan.price)}/mo
                </span>
                . Add exactly what you need — no over-buying.
              </p>
            </div>
            <label className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1.5 text-xs">
              <span className={cn(!yearly && "font-semibold text-foreground")}>
                Monthly
              </span>
              <Switch checked={yearly} onCheckedChange={setYearly} />
              <span className={cn(yearly && "font-semibold text-foreground")}>
                Annual{" "}
                <span className="text-emerald-500">−15%</span>
              </span>
            </label>
          </div>

          <ul className="mt-5 grid gap-2 sm:grid-cols-2">
            {basePlan.features.map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 grid h-4 w-4 place-items-center rounded-full bg-emerald-500/15 text-emerald-500">
                  <Check className="h-3 w-3" />
                </span>
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Tabs defaultValue={addonCategories[0]}>
              <TabsList className="flex flex-wrap gap-1">
                {addonCategories.map((c) => (
                  <TabsTrigger key={c} value={c}>
                    {c}
                  </TabsTrigger>
                ))}
              </TabsList>

              {addonCategories.map((cat) => (
                <TabsContent key={cat} value={cat} className="mt-6">
                  <div className="grid gap-3 sm:grid-cols-2">
                    {addons
                      .filter((a) => a.category === cat)
                      .map((addon) => {
                        const isSelected = selected.has(addon.id);
                        return (
                          <button
                            key={addon.id}
                            onClick={() => toggle(addon.id)}
                            type="button"
                            className={cn(
                              "group relative flex flex-col rounded-2xl border p-4 text-left transition-all",
                              isSelected
                                ? "border-primary/60 bg-primary/5 shadow-md"
                                : "border-border/70 bg-background/60 hover:border-primary/40 hover:bg-background",
                            )}
                          >
                            {addon.popular && (
                              <Badge
                                variant="gradient"
                                className="absolute right-3 top-3 gap-1 text-[10px]"
                              >
                                Popular
                              </Badge>
                            )}
                            <div className="flex items-center justify-between">
                              <div className="text-sm font-semibold">
                                {addon.name}
                              </div>
                              <div
                                className={cn(
                                  "grid h-5 w-5 place-items-center rounded-full border transition",
                                  isSelected
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : "border-border/70",
                                )}
                              >
                                {isSelected ? (
                                  <Check className="h-3 w-3" />
                                ) : (
                                  <Plus className="h-3 w-3 text-muted-foreground" />
                                )}
                              </div>
                            </div>
                            <p className="mt-1 text-xs text-muted-foreground">
                              {addon.description}
                            </p>
                            <div className="mt-3 flex items-center justify-between text-xs">
                              <span className="rounded-full bg-muted px-2 py-0.5 font-medium">
                                {formatCurrency(addon.monthly)}/mo
                              </span>
                              {addon.setup > 0 && (
                                <span className="text-muted-foreground">
                                  + {formatCurrency(addon.setup)} setup
                                </span>
                              )}
                            </div>
                          </button>
                        );
                      })}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>

      {/* RIGHT — sticky summary */}
      <div className="lg:col-span-4">
        <div className="sticky top-24 space-y-4">
          <div className="gradient-border rounded-3xl shadow-lg">
            <div className="rounded-3xl bg-card/70 p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground">
                <ShieldCheck className="h-3.5 w-3.5" /> Your custom plan
              </div>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold tracking-tight text-gradient-brand">
                  {formatCurrency(monthly)}
                </span>
                <span className="text-sm text-muted-foreground">/month</span>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                One-time setup: {" "}
                <span className="font-semibold text-foreground">
                  {formatCurrency(setup)}
                </span>
              </div>
              <AnimatePresence>
                {yearly && yearlyDiscount > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-3 text-xs"
                  >
                    <div className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-300">
                      <Zap className="h-3.5 w-3.5" /> Save{" "}
                      {formatCurrency(yearlyDiscount)} a year
                    </div>
                    <div className="mt-1 text-muted-foreground">
                      Annual pricing works out to{" "}
                      <span className="font-semibold text-foreground">
                        {formatCurrency(annual)}
                      </span>{" "}
                      total.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="mt-5 space-y-2 border-t border-border/60 pt-4 text-sm">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{basePlan.name} plan</span>
                  <span>{formatCurrency(basePlan.price)}/mo</span>
                </div>
                <AnimatePresence initial={false}>
                  {chosen.map((a) => (
                    <motion.div
                      key={a.id}
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center justify-between text-xs"
                    >
                      <span className="truncate pr-2">{a.name}</span>
                      <span className="whitespace-nowrap">
                        {formatCurrency(a.monthly)}/mo
                      </span>
                    </motion.div>
                  ))}
                </AnimatePresence>
                {chosen.length === 0 && (
                  <p className="text-xs italic text-muted-foreground">
                    Select add-ons on the left to customize your plan.
                  </p>
                )}
              </div>

              <div className="mt-6 space-y-2">
                <InvoiceRequestTrigger selected={Array.from(selected)}>
                  <Button variant="gradient" size="lg" className="w-full">
                    Send Me an Invoice
                  </Button>
                </InvoiceRequestTrigger>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full"
                >
                  <a href="/book-consultation">Book Free Consultation</a>
                </Button>
              </div>

              <p className="mt-4 text-center text-[11px] text-muted-foreground">
                No credit card. Cancel any time. You own your data.
              </p>
            </div>
          </div>

          <ul className="rounded-2xl border border-border/70 bg-card/60 p-4 text-xs text-muted-foreground">
            <li className="flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-emerald-500" /> Priority
              technical support
            </li>
            <li className="mt-2 flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-emerald-500" /> Setup billed at
              kickoff
            </li>
            <li className="mt-2 flex items-center gap-2">
              <Check className="h-3.5 w-3.5 text-emerald-500" /> Pause or resize
              any month
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
