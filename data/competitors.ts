export type ComparisonRow = {
  feature: string;
  us: string | boolean;
  them: string | boolean;
  note?: string;
};

export type Competitor = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  summary: string;
  bestFor: string;
  weaknesses: string[];
  our_edges: string[];
  rows: ComparisonRow[];
};

const commonRows = (them: string): ComparisonRow[] => [
  {
    feature: "Custom design",
    us: "Full custom UI",
    them: `Template-based on ${them}`,
  },
  {
    feature: "Speed on mobile (LCP)",
    us: "0.9s median",
    them: "3–5s median",
  },
  {
    feature: "SEO",
    us: "Technical SEO included, optional SEO program",
    them: "Basic controls only",
  },
  {
    feature: "AI receptionist / chatbot",
    us: true,
    them: false,
    note: "We include AI on Growth/Scale bundles.",
  },
  {
    feature: "Mobile app (iOS + Android)",
    us: true,
    them: false,
  },
  {
    feature: "Hosting, SSL, backups",
    us: "Enterprise-grade, included",
    them: "Included",
  },
  {
    feature: "You own your code",
    us: true,
    them: false,
    note: "Ship the code out any time. No lock-in.",
  },
  {
    feature: "Dedicated team",
    us: "Designer + engineer + PM",
    them: "Self-serve",
  },
  {
    feature: "Monthly starting price",
    us: "$39/mo",
    them: `${them}: $16–$49/mo (bare templates)`,
  },
];

export const competitors: Competitor[] = [
  {
    slug: "wix",
    name: "Wix",
    category: "Website builder",
    tagline: "Wix is fine for simple sites. GetNextSite is built for growth.",
    summary:
      "Wix is a drag-and-drop website builder. GetNextSite is a subscription studio — you get a design team, engineering, AI, hosting and marketing under one plan.",
    bestFor:
      "Wix is best for one-page sites or hobby projects where speed of setup outweighs long-term flexibility.",
    weaknesses: [
      "Slow on mobile — median LCP 3–5s",
      "Templated look — hard to stand out",
      "Vendor lock-in — you can't take your site elsewhere",
      "No AI receptionist or mobile app path",
      "SEO controls are limited",
    ],
    our_edges: [
      "Sub-second load times, engineered per client",
      "Custom design, not a template",
      "You own the code",
      "AI, mobile apps and marketing under one plan",
      "Real humans on your account",
    ],
    rows: commonRows("Wix"),
  },
  {
    slug: "squarespace",
    name: "Squarespace",
    category: "Website builder",
    tagline: "Beautiful templates. Growth ceiling.",
    summary:
      "Squarespace's design is prettier than most builders. But the moment your business needs custom flows, AI, or mobile apps, you hit the wall. GetNextSite starts where Squarespace stops.",
    bestFor:
      "Squarespace is a good fit for portfolios, wedding sites, and stores under 50 SKUs.",
    weaknesses: [
      "No AI, no mobile apps, no custom flows",
      "Locked hosting and CMS",
      "Search performance depends on template",
      "Every store looks similar to every other store",
    ],
    our_edges: [
      "Fully custom — your site looks like nobody else's",
      "One plan for site, app, AI and marketing",
      "Own your codebase",
      "Real engineering support",
    ],
    rows: commonRows("Squarespace"),
  },
  {
    slug: "webflow",
    name: "Webflow",
    category: "Visual builder",
    tagline: "Webflow gives you the studio. GetNextSite gives you the team.",
    summary:
      "Webflow is a great tool. The problem: you still need a designer, developer, SEO person and marketer to actually use it. GetNextSite bundles the team and the tools.",
    bestFor:
      "Webflow is great if you already have a full in-house team and just need a canvas.",
    weaknesses: [
      "You still have to hire the team",
      "No AI, no native mobile apps",
      "eCommerce still catching up",
      "You're stuck if the person who built it leaves",
    ],
    our_edges: [
      "Team included — no separate hires",
      "One partner for site, app, AI and marketing",
      "Continuous improvements built into the plan",
      "Your team doesn't disappear",
    ],
    rows: commonRows("Webflow"),
  },
];
