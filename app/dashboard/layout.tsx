import type { Metadata } from "next";
import { DashboardSidebar } from "@/components/dashboard/sidebar";

export const metadata: Metadata = {
  title: "Client Portal",
  description:
    "Manage your projects, invoices and support tickets with GetNextSite Agency.",
  robots: { index: false, follow: false },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="-mt-24 flex min-h-screen">
      <DashboardSidebar />
      <div className="flex min-w-0 flex-1 flex-col">{children}</div>
    </div>
  );
}
