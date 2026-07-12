import { Send, MessagesSquare } from "lucide-react";
import { DashboardTopbar } from "@/components/dashboard/topbar";
import { supportTickets } from "@/data/dashboard";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const statusBadge: Record<string, "success" | "warning" | "outline"> = {
  "In progress": "warning",
  "Awaiting client": "outline",
  Closed: "success",
};

export default function SupportPage() {
  return (
    <>
      <DashboardTopbar title="Support" />
      <div className="grid flex-1 gap-6 p-4 sm:p-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-border/70 bg-card/60">
            <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3 text-sm font-semibold">
              <MessagesSquare className="h-4 w-4 text-primary" />
              Open tickets
            </div>
            <ul className="divide-y divide-border/60">
              {supportTickets.map((t) => (
                <li
                  key={t.id}
                  className="flex items-center justify-between gap-3 px-4 py-3 text-sm hover:bg-muted/30"
                >
                  <div>
                    <div className="font-medium">
                      {t.id} · {t.subject}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Updated {t.updated}
                    </div>
                  </div>
                  <Badge variant={statusBadge[t.status] ?? "outline"}>
                    {t.status}
                  </Badge>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="lg:col-span-5">
          <div className="rounded-2xl border border-border/70 bg-card/60 p-5">
            <h2 className="font-display text-base font-semibold">
              Open a new ticket
            </h2>
            <p className="mt-1 text-xs text-muted-foreground">
              Same-day response Mon–Fri. Urgent hosting issues answered within 1
              hour, 24/7.
            </p>
            <form className="mt-4 space-y-3">
              <Input placeholder="Subject" />
              <Textarea placeholder="Describe what you'd like us to do…" rows={5} />
              <Button variant="gradient" className="w-full">
                <Send className="h-3.5 w-3.5" /> Send to team
              </Button>
            </form>
          </div>
        </aside>
      </div>
    </>
  );
}
