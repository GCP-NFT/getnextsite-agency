import { Download } from "lucide-react";
import { DashboardTopbar } from "@/components/dashboard/topbar";
import { clientInvoices } from "@/data/dashboard";
import { Badge } from "@/components/ui/badge";
import { formatCurrency } from "@/lib/utils";

const statusBadge: Record<string, "success" | "warning" | "outline"> = {
  Paid: "success",
  Due: "warning",
  Overdue: "outline",
};

export default function InvoicesPage() {
  return (
    <>
      <DashboardTopbar title="Invoices" />
      <div className="flex-1 p-4 sm:p-6">
        <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/60">
          <table className="w-full min-w-[600px]">
            <thead className="border-b border-border/70 bg-muted/30 text-left text-xs uppercase tracking-widest text-muted-foreground">
              <tr>
                <th className="p-4">Invoice</th>
                <th className="p-4">Description</th>
                <th className="p-4">Date</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {clientInvoices.map((inv) => (
                <tr
                  key={inv.id}
                  className="border-b border-border/60 text-sm last:border-0"
                >
                  <td className="p-4 font-mono text-xs">{inv.id}</td>
                  <td className="p-4">{inv.description}</td>
                  <td className="p-4 text-xs text-muted-foreground">
                    {new Date(inv.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </td>
                  <td className="p-4 font-medium">
                    {formatCurrency(inv.amount)}
                  </td>
                  <td className="p-4">
                    <Badge variant={statusBadge[inv.status] ?? "outline"}>
                      {inv.status}
                    </Badge>
                  </td>
                  <td className="p-4 text-right">
                    <button className="inline-flex items-center gap-1 rounded-full border border-border/70 bg-background px-3 py-1 text-xs hover:border-primary/40">
                      <Download className="h-3 w-3" /> PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
