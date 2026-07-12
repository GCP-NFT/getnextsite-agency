import { Check, Minus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type Plan = { name: string; price: string; blurb: string; featured?: boolean };
type Row = { label: string; values: (string | boolean)[] };

const plans: Plan[] = [
  {
    name: "Foundation",
    price: "$39/mo",
    blurb: "Everything a modern website needs to stay online, fast and safe.",
  },
  {
    name: "Growth",
    price: "$149/mo",
    blurb: "Adds content, booking, chatbot and SEO for growing businesses.",
    featured: true,
  },
  {
    name: "Scale",
    price: "$499/mo",
    blurb: "AI receptionist, mobile app, marketing management and reporting.",
  },
];

const rows: Row[] = [
  { label: "Hosting, SSL & backups", values: [true, true, true] },
  { label: "Daily backups", values: [true, true, true] },
  { label: "Uptime monitoring", values: [true, true, true] },
  { label: "Priority tech support", values: ["Email", "Same-day", "1h SLA"] },
  { label: "Content updates / month", values: ["2", "10", "Unlimited"] },
  { label: "Blog / content hub", values: [false, true, true] },
  { label: "Booking system", values: [false, true, true] },
  { label: "AI chatbot", values: [false, true, true] },
  { label: "AI receptionist (voice)", values: [false, false, true] },
  { label: "SEO program", values: [false, "Local", "Local + national"] },
  { label: "Google Business Profile", values: [false, true, true] },
  { label: "Mobile app (iOS + Android)", values: [false, false, true] },
  { label: "Analytics dashboard", values: ["Basic", "Full", "Full + monthly reports"] },
  { label: "Monthly strategy call", values: [false, "Quarterly", "Monthly"] },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
        <Check className="h-3.5 w-3.5" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center text-muted-foreground/60">
        <Minus className="h-3.5 w-3.5" />
      </span>
    );
  }
  return <span className="text-sm">{value}</span>;
}

export function ComparisonTable() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border/70 bg-card/60">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[640px]">
          <thead className="border-b border-border/70 bg-muted/30">
            <tr>
              <th className="p-5 text-left text-xs uppercase tracking-widest text-muted-foreground">
                Features
              </th>
              {plans.map((p) => (
                <th
                  key={p.name}
                  className={cn(
                    "border-l border-border/70 p-5 text-left",
                    p.featured && "bg-primary/5",
                  )}
                >
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-display text-base font-semibold">
                        {p.name}
                      </span>
                      {p.featured && (
                        <Badge variant="gradient" className="text-[10px]">
                          Popular
                        </Badge>
                      )}
                    </div>
                    <span className="text-lg font-bold text-gradient-brand">
                      {p.price}
                    </span>
                    <span className="text-[11px] font-normal text-muted-foreground">
                      {p.blurb}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.label}
                className={cn(
                  "border-b border-border/50 last:border-0",
                  i % 2 === 1 && "bg-muted/10",
                )}
              >
                <td className="p-4 text-sm font-medium">{r.label}</td>
                {r.values.map((v, j) => (
                  <td
                    key={j}
                    className={cn(
                      "border-l border-border/50 p-4 text-center",
                      j === 1 && "bg-primary/5",
                    )}
                  >
                    <Cell value={v} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
