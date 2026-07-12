export const clientProjects = [
  {
    id: "site-v2",
    name: "Marketing site redesign",
    stage: "Development",
    progress: 62,
    lead: "Priya Menon",
    due: "2026-08-05",
  },
  {
    id: "ai-recep",
    name: "AI receptionist rollout",
    stage: "Training",
    progress: 40,
    lead: "Julien Rossi",
    due: "2026-08-20",
  },
  {
    id: "seo-q3",
    name: "SEO program · Q3",
    stage: "Live",
    progress: 100,
    lead: "Rachel Kim",
    due: "2026-09-30",
  },
  {
    id: "mobile-app",
    name: "iOS + Android app",
    stage: "Design",
    progress: 22,
    lead: "Sarah Chen",
    due: "2026-11-15",
  },
];

export type Invoice = {
  id: string;
  date: string;
  amount: number;
  status: "Paid" | "Due" | "Overdue";
  description: string;
};

export const clientInvoices: Invoice[] = [
  {
    id: "INV-2026-0142",
    date: "2026-07-01",
    amount: 149,
    status: "Paid",
    description: "Monthly subscription · Growth",
  },
  {
    id: "INV-2026-0129",
    date: "2026-06-01",
    amount: 149,
    status: "Paid",
    description: "Monthly subscription · Growth",
  },
  {
    id: "INV-2026-0114",
    date: "2026-05-01",
    amount: 149,
    status: "Paid",
    description: "Monthly subscription · Growth",
  },
  {
    id: "INV-2026-0088",
    date: "2026-04-01",
    amount: 1900,
    status: "Paid",
    description: "iOS app setup · milestone 1",
  },
];

export const supportTickets = [
  {
    id: "T-2451",
    subject: "Update pricing page copy",
    status: "In progress",
    updated: "2h ago",
  },
  {
    id: "T-2447",
    subject: "Add French language toggle",
    status: "Awaiting client",
    updated: "yesterday",
  },
  {
    id: "T-2432",
    subject: "Migrate booking to new provider",
    status: "Closed",
    updated: "3 days ago",
  },
];
