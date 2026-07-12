export type Role = {
  id: string;
  title: string;
  team: string;
  location: string;
  type: "Full-time" | "Contract";
  seniority: string;
  summary: string;
};

export const openRoles: Role[] = [
  {
    id: "senior-fullstack-nextjs",
    title: "Senior Full-Stack Engineer (Next.js)",
    team: "Engineering",
    location: "Remote (US · EU)",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "Ship marketing sites and SaaS dashboards on Next.js 15 + edge infrastructure. Own perf and DX end-to-end.",
  },
  {
    id: "ai-solutions-engineer",
    title: "AI Solutions Engineer",
    team: "AI",
    location: "Remote (worldwide)",
    type: "Full-time",
    seniority: "Mid–Senior",
    summary:
      "Design and deploy AI receptionists, chatbots and workflow automations for our SMB clients. Python + TypeScript.",
  },
  {
    id: "senior-product-designer",
    title: "Senior Product Designer",
    team: "Design",
    location: "Remote (US · EU)",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "Own the visual quality of our client work — from strategy to shipped pixels. Figma to Framer to production.",
  },
  {
    id: "seo-content-strategist",
    title: "SEO & Content Strategist",
    team: "Marketing",
    location: "Remote (US · EU · LATAM)",
    type: "Full-time",
    seniority: "Mid",
    summary:
      "Run search and content programs for a portfolio of subscription clients. Metrics-driven.",
  },
  {
    id: "client-partner",
    title: "Client Partner",
    team: "Growth",
    location: "Remote (Americas)",
    type: "Full-time",
    seniority: "Senior",
    summary:
      "Own 8–12 subscription accounts, drive expansion, and become the trusted digital advisor for each business.",
  },
];

export const values = [
  {
    title: "Ship the thing",
    body: "We move faster than an agency and think longer than a freelancer. Every quarter, our clients see the compound.",
  },
  {
    title: "Operators, not vendors",
    body: "We think in revenue and outcomes, not deliverables. Every role at GetNextSite carries the P&L in the back of the mind.",
  },
  {
    title: "Craft over gloss",
    body: "Beautiful is table stakes. Fast, accessible, robust — that's craft. We tune the boring metrics obsessively.",
  },
  {
    title: "Kindness scales",
    body: "Bar for the work is high. Bar for how we treat clients and each other is higher.",
  },
];

export const benefits = [
  "Full-remote, work from anywhere in your timezone",
  "Home-office & hardware budget",
  "Unlimited PTO with a 4-week floor",
  "Learning budget: $1,500/yr",
  "Quarterly retreats (past: Lisbon, Mexico City, Kyoto)",
  "Fair, transparent salary bands",
  "Health & vision (US) or equivalent stipend",
  "Meaningful equity",
];
