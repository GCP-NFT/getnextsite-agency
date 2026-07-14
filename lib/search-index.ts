import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { projects } from "@/data/portfolio";
import { posts } from "@/data/insights";
import { verticals } from "@/data/verticals";
import { competitors } from "@/data/competitors";

export type SearchDoc = {
  id: string;
  title: string;
  description: string;
  href: string;
  group:
    | "Service"
    | "Industry"
    | "Case study"
    | "Insight"
    | "Landing"
    | "Compare"
    | "Page";
  keywords: string[];
};

const staticPages: SearchDoc[] = [
  {
    id: "home",
    title: "GetNextSite Agency — Home",
    description:
      "Building the Future of Your Business Online. Websites, apps, AI, marketing under one subscription.",
    href: "/",
    group: "Page",
    keywords: ["home", "agency", "subscription"],
  },
  {
    id: "about",
    title: "About",
    description:
      "A modern studio for businesses that want a real digital partner.",
    href: "/about",
    group: "Page",
    keywords: ["team", "mission", "story"],
  },
  {
    id: "pricing",
    title: "Pricing calculator",
    description:
      "Interactive plan builder. Configure the exact bundle you need — see live totals.",
    href: "/pricing",
    group: "Page",
    keywords: ["price", "cost", "plan", "subscription", "monthly"],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    description: "Selected case studies with measurable outcomes.",
    href: "/portfolio",
    group: "Page",
    keywords: ["work", "case studies", "projects"],
  },
  {
    id: "insights",
    title: "Insights",
    description:
      "Playbooks and field notes on websites, apps, AI, growth, design.",
    href: "/insights",
    group: "Page",
    keywords: ["blog", "articles", "writing"],
  },
  {
    id: "testimonials",
    title: "Testimonials",
    description: "What long-term partners say — filtered by service.",
    href: "/testimonials",
    group: "Page",
    keywords: ["reviews", "quotes", "social proof"],
  },
  {
    id: "careers",
    title: "Careers",
    description: "Remote-first roles building for SMBs worldwide.",
    href: "/careers",
    group: "Page",
    keywords: ["jobs", "hiring", "team"],
  },
  {
    id: "tools",
    title: "Free tools",
    description: "Website audit, invoice generator — no signup.",
    href: "/tools",
    group: "Page",
    keywords: ["tools", "audit", "invoice"],
  },
  {
    id: "security",
    title: "Security & trust",
    description:
      "Enterprise-grade infrastructure, SOC 2-aligned practices, uptime and compliance.",
    href: "/security",
    group: "Page",
    keywords: ["security", "compliance", "gdpr", "hipaa", "soc2"],
  },
  {
    id: "contact",
    title: "Contact",
    description: "Same-day response. No long-form proposals.",
    href: "/contact",
    group: "Page",
    keywords: ["contact", "email", "phone", "get in touch"],
  },
  {
    id: "book",
    title: "Book a free consultation",
    description: "30 minutes with a senior strategist.",
    href: "/book-consultation",
    group: "Page",
    keywords: ["consultation", "call", "book", "demo"],
  },
  {
    id: "faq",
    title: "FAQ",
    description: "Everything you'd ask a good agency before signing.",
    href: "/faq",
    group: "Page",
    keywords: ["faq", "questions"],
  },
];

export const searchIndex: SearchDoc[] = [
  ...staticPages,
  ...services.map<SearchDoc>((s) => ({
    id: `svc-${s.slug}`,
    title: s.title,
    description: s.tagline + " " + s.description,
    href: s.href,
    group: "Service",
    keywords: s.features,
  })),
  ...industries.map<SearchDoc>((i) => ({
    id: `ind-${i.slug}`,
    title: i.name,
    description: i.blurb,
    href: `/industries/${i.slug}`,
    group: "Industry",
    keywords: i.outcomes,
  })),
  ...projects.map<SearchDoc>((p) => ({
    id: `proj-${p.slug}`,
    title: p.title,
    description: p.summary,
    href: `/portfolio/${p.slug}`,
    group: "Case study",
    keywords: [p.industry, p.client, p.category, ...p.tech],
  })),
  ...posts.map<SearchDoc>((p) => ({
    id: `post-${p.slug}`,
    title: p.title,
    description: p.excerpt,
    href: `/insights/${p.slug}`,
    group: "Insight",
    keywords: [p.category, ...p.tags, p.author.name],
  })),
  ...verticals.map<SearchDoc>((v) => ({
    id: `vert-${v.slug}`,
    title: v.metaTitle,
    description: v.metaDescription,
    href: `/${v.slug}`,
    group: "Landing",
    keywords: [v.keyword, ...v.included.slice(0, 4)],
  })),
  ...competitors.map<SearchDoc>((c) => ({
    id: `vs-${c.slug}`,
    title: `GetNextSite vs ${c.name}`,
    description: c.tagline,
    href: `/vs/${c.slug}`,
    group: "Compare",
    keywords: [c.name, c.category, "vs", "compare"],
  })),
];

export function search(query: string, limit = 30): SearchDoc[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const terms = q.split(/\s+/).filter(Boolean);

  const scored: { doc: SearchDoc; score: number }[] = [];
  for (const doc of searchIndex) {
    const hay = [doc.title, doc.description, ...(doc.keywords ?? [])]
      .join(" ")
      .toLowerCase();
    let score = 0;
    for (const t of terms) {
      if (!hay.includes(t)) {
        score = -1;
        break;
      }
      // Weight matches in title higher.
      if (doc.title.toLowerCase().includes(t)) score += 3;
      if (doc.description.toLowerCase().includes(t)) score += 1;
      score += 1;
    }
    if (score > 0) scored.push({ doc, score });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, limit).map((s) => s.doc);
}
