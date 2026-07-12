export type PostSection =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; source?: string }
  | { type: "list"; items: string[] }
  | { type: "callout"; title: string; body: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  category: string;
  tags: string[];
  author: { name: string; role: string };
  publishedAt: string; // ISO date
  readTime: number;
  sections: PostSection[];
};

export const insightCategories = [
  "Growth",
  "AI",
  "Design",
  "Engineering",
  "Playbooks",
] as const;

export const posts: Post[] = [
  {
    slug: "why-subscriptions-beat-project-pricing",
    title: "Why subscriptions beat project pricing for small businesses",
    excerpt:
      "Three years of client data on why a flat monthly plan produces better outcomes than one-off projects — for both agency and client.",
    cover:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80",
    category: "Growth",
    tags: ["pricing", "operations", "SMB"],
    author: { name: "Marta Alvarez", role: "Head of Client Strategy" },
    publishedAt: "2025-11-14",
    readTime: 6,
    sections: [
      {
        type: "p",
        text: "The default in agency-land is still fixed-scope project pricing. It looks precise on paper, and it fails almost everyone. Here's what three years of data on 240+ engagements told us — and why we now operate a single subscription for every client.",
      },
      { type: "h2", text: "Fixed scope solves the wrong problem" },
      {
        type: "p",
        text: "Fixed scope tries to make software feel like a physical product. The problem: the value of a website or app compounds over time. A launch is a starting point, not a finish line. When the money runs out, the value curve flattens — right at the moment your customers start using the thing.",
      },
      {
        type: "quote",
        text: "The best-performing sites in our portfolio have all shipped 40+ post-launch improvements. The worst never got any.",
        source: "Internal client review, Q4 2024",
      },
      { type: "h2", text: "What subscriptions actually change" },
      {
        type: "list",
        items: [
          "The client stops rationing change requests.",
          "The team keeps working on the same product for years.",
          "Bugs get fixed the day they're spotted, not next quarter.",
          "Growth ideas land in a two-week cycle, not a two-month RFP.",
        ],
      },
      {
        type: "callout",
        title: "How to pilot it",
        body: "Start with a small monthly retainer for post-launch care, then measure change velocity vs. a fixed-scope control. Every team we've talked to has expanded to the full model within six months.",
      },
    ],
  },
  {
    slug: "ai-receptionist-payback-math",
    title: "The AI receptionist payback math (with real numbers)",
    excerpt:
      "A 15-minute breakdown of the ROI on an AI receptionist for a dental practice, a plumber, and a hotel — with the assumptions you can copy.",
    cover:
      "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1600&q=80",
    category: "AI",
    tags: ["AI", "ROI", "automation"],
    author: { name: "Julien Rossi", role: "AI Solutions Lead" },
    publishedAt: "2025-12-02",
    readTime: 5,
    sections: [
      {
        type: "p",
        text: "Every SMB with a phone number pays for missed calls. AI receptionists have gotten good enough that the payback is short and defensible. Here are the three cases we've actually run.",
      },
      { type: "h2", text: "Case 1: Dental practice" },
      {
        type: "list",
        items: [
          "Baseline: 18% of calls missed after hours, 6% during hours.",
          "New booked appointment value: $180 average.",
          "AI captured 74% of previously missed calls, booking 62% of those.",
          "Net gain: $22K/mo revenue on an $149/mo subscription.",
        ],
      },
      { type: "h2", text: "Case 2: Local plumber" },
      {
        type: "p",
        text: "Emergency calls at 11pm turn into either a paid callout or a lost customer. The AI classifies urgency and dispatches — with a 3-minute average time to human handoff on genuine emergencies.",
      },
      { type: "h2", text: "Case 3: Boutique hotel" },
      {
        type: "p",
        text: "Fewer voice calls, more WhatsApp inquiries. AI reduced staff time on repeat questions by 61% and increased direct booking conversion by 34%.",
      },
      {
        type: "callout",
        title: "The template",
        body: "Missed calls × booking rate × ticket value = monthly ceiling. Multiply by 12 for the annual case. If your ceiling ÷ subscription is > 5x, it's an obvious yes.",
      },
    ],
  },
  {
    slug: "core-web-vitals-in-2026",
    title: "Core Web Vitals in 2026: what still moves rankings",
    excerpt:
      "Six years in, LCP still dominates. INP is now the honest one. CLS has quietly become table stakes. What we tune first when auditing a site.",
    cover:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    category: "Engineering",
    tags: ["performance", "SEO", "Next.js"],
    author: { name: "Priya Menon", role: "Principal Engineer" },
    publishedAt: "2026-01-08",
    readTime: 7,
    sections: [
      {
        type: "p",
        text: "The metric names change. The physics don't. Here's the shortlist of interventions that actually move Core Web Vitals scores in 2026.",
      },
      { type: "h2", text: "LCP — still the boss" },
      {
        type: "list",
        items: [
          "Serve the hero image from the CDN as AVIF with priority=true.",
          "Preload the hero font. Serve it as a WOFF2 subset.",
          "Kill above-the-fold client JS. Server components help here.",
        ],
      },
      { type: "h2", text: "INP — the new honest one" },
      {
        type: "p",
        text: "INP replaced FID and is unforgiving of janky handlers. Debounce anything on-input, and audit your React re-render cost during typing. React Compiler is a real win here.",
      },
      { type: "h2", text: "CLS — table stakes" },
      {
        type: "p",
        text: "There is no excuse for CLS > 0.1 in 2026. Always size images, reserve font-metrics slots, and don't inject cookie banners without a placeholder.",
      },
    ],
  },
  {
    slug: "designing-a-pricing-page-that-converts",
    title: "Designing a pricing page that converts",
    excerpt:
      "The 8-step template we use for every pricing page — from the eyebrow line to the sticky checkout CTA.",
    cover:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1600&q=80",
    category: "Design",
    tags: ["pricing", "conversion", "UI"],
    author: { name: "Sarah Chen", role: "Design Director" },
    publishedAt: "2026-02-02",
    readTime: 4,
    sections: [
      {
        type: "p",
        text: "Pricing pages carry more revenue weight than any other page on the site. Yet most are afterthoughts. The eight ingredients we ship every time.",
      },
      {
        type: "list",
        items: [
          "A single line above the H1 that names the buyer.",
          "A dominant hero price, not a wall of tiers.",
          "A configurator, not a static grid, when there are add-ons.",
          "A sticky total on the right on desktop, a sticky CTA on mobile.",
          "One primary CTA color across the page.",
          "Trust badges directly under the total.",
          "Three FAQ answers about pricing right below the fold.",
          "A comparison table at the bottom for buyers in evaluation mode.",
        ],
      },
    ],
  },
];
