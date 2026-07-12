import { DashboardTopbar } from "@/components/dashboard/topbar";
import { clientProjects } from "@/data/dashboard";
import { Badge } from "@/components/ui/badge";

const stageBadge: Record<string, "default" | "success" | "warning" | "outline"> = {
  Design: "warning",
  Development: "default",
  Training: "default",
  Live: "success",
};

export default function ProjectsPage() {
  return (
    <>
      <DashboardTopbar title="Projects" />
      <div className="flex-1 p-4 sm:p-6">
        <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/60">
          <table className="w-full min-w-[600px]">
            <thead className="border-b border-border/70 bg-muted/30 text-left text-xs uppercase tracking-widest text-muted-foreground">
              <tr>
                <th className="p-4">Project</th>
                <th className="p-4">Stage</th>
                <th className="p-4">Progress</th>
                <th className="p-4">Lead</th>
                <th className="p-4">Due</th>
              </tr>
            </thead>
            <tbody>
              {clientProjects.map((p) => (
                <tr
                  key={p.id}
                  className="border-b border-border/60 text-sm last:border-0"
                >
                  <td className="p-4 font-medium">{p.name}</td>
                  <td className="p-4">
                    <Badge variant={stageBadge[p.stage] ?? "outline"}>
                      {p.stage}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-32 rounded-full bg-muted">
                        <div
                          className="h-1.5 rounded-full bg-gradient-to-r from-brand-500 to-purple-500"
                          style={{ width: `${p.progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {p.progress}%
                      </span>
                    </div>
                  </td>
                  <td className="p-4 text-xs text-muted-foreground">{p.lead}</td>
                  <td className="p-4 text-xs text-muted-foreground">
                    {new Date(p.due).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
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
