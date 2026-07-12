export type ProjectCategory =
  | "Website"
  | "Mobile App"
  | "AI Automation"
  | "eCommerce"
  | "Branding";

export type Project = {
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: ProjectCategory;
  image: string;
  color: string;
  tech: string[];
  results: { label: string; value: string }[];
  summary: string;
  testimonial?: { quote: string; author: string; role: string };
  liveUrl?: string;
  year: number;
};

export const projects: Project[] = [
  {
    slug: "lumen-hotels",
    title: "Lumen Hotels — Direct Booking Platform",
    client: "Lumen Hotels Group",
    industry: "Hotels",
    category: "Website",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1600&q=80",
    color: "from-blue-500 to-cyan-400",
    tech: ["Next.js", "Sanity", "Stripe", "Vercel"],
    results: [
      { label: "Direct bookings", value: "+64%" },
      { label: "Page speed", value: "0.9s" },
      { label: "OTA fees saved", value: "$180K/yr" },
    ],
    summary:
      "A multi-property booking engine that cut OTA commissions in half within the first quarter.",
    testimonial: {
      quote:
        "The new booking flow paid for itself in six weeks. It's the single best investment we've made all year.",
      author: "Marta Alvarez",
      role: "CMO, Lumen Hotels",
    },
    liveUrl: "#",
    year: 2025,
  },
  {
    slug: "north-dental",
    title: "North Dental — AI Reception & Booking",
    client: "North Dental Group",
    industry: "Dentists",
    category: "AI Automation",
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1600&q=80",
    color: "from-emerald-500 to-teal-400",
    tech: ["Next.js", "OpenAI", "Twilio", "Supabase"],
    results: [
      { label: "Calls handled", value: "24/7" },
      { label: "Booked visits", value: "+112%" },
      { label: "Missed calls", value: "-98%" },
    ],
    summary:
      "AI voice receptionist that books, reschedules, and syncs to the practice management system in real time.",
    testimonial: {
      quote:
        "It's like having a full-time receptionist on every line, at every hour — for a fraction of the cost.",
      author: "Dr. Priya Menon",
      role: "Founder, North Dental",
    },
    year: 2025,
  },
  {
    slug: "harvest-market",
    title: "Harvest Market — Headless eCommerce",
    client: "Harvest Market",
    industry: "Retail",
    category: "eCommerce",
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1600&q=80",
    color: "from-amber-500 to-orange-400",
    tech: ["Next.js", "Shopify", "Algolia", "Sanity"],
    results: [
      { label: "Conversion", value: "+47%" },
      { label: "AOV", value: "+22%" },
      { label: "LCP", value: "1.1s" },
    ],
    summary:
      "A headless storefront with instant search and personalized product feeds.",
    year: 2024,
  },
  {
    slug: "kite-fitness",
    title: "Kite Fitness — Class Booking App",
    client: "Kite Fitness Studios",
    industry: "Gyms",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&w=1600&q=80",
    color: "from-violet-500 to-fuchsia-500",
    tech: ["React Native", "Expo", "Stripe", "Firebase"],
    results: [
      { label: "Members", value: "12,400+" },
      { label: "App rating", value: "4.9★" },
      { label: "MRR growth", value: "+3.4x" },
    ],
    summary:
      "iOS + Android class booking, memberships, and social feed for a 14-location studio group.",
    year: 2024,
  },
  {
    slug: "verano-legal",
    title: "Verano Legal — Practice Site",
    client: "Verano Legal",
    industry: "Lawyers",
    category: "Website",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1600&q=80",
    color: "from-slate-500 to-slate-400",
    tech: ["Next.js", "Sanity", "Resend"],
    results: [
      { label: "Qualified leads", value: "3.1x" },
      { label: "Case value", value: "+$1.8M" },
      { label: "Bounce", value: "-42%" },
    ],
    summary:
      "A practice-area-driven site with intake automation and lawyer-friendly CMS.",
    year: 2025,
  },
  {
    slug: "canela-cocina",
    title: "Canela Cocina — Restaurant Rebrand",
    client: "Canela Cocina",
    industry: "Restaurants",
    category: "Branding",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80",
    color: "from-pink-500 to-rose-400",
    tech: ["Figma", "After Effects", "Print"],
    results: [
      { label: "Foot traffic", value: "+31%" },
      { label: "Instagram", value: "+18K" },
      { label: "Avg. ticket", value: "+$7.20" },
    ],
    summary:
      "Complete rebrand — logo, identity, menus, uniforms, storefront, and social kit.",
    year: 2025,
  },
  {
    slug: "atlas-realty",
    title: "Atlas Realty — AI Property Discovery",
    client: "Atlas Realty",
    industry: "Realtors",
    category: "AI Automation",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1600&q=80",
    color: "from-cyan-500 to-sky-400",
    tech: ["Next.js", "Pinecone", "OpenAI", "MLS API"],
    results: [
      { label: "Match rate", value: "+72%" },
      { label: "Time-to-tour", value: "-56%" },
      { label: "Agents onboarded", value: "180" },
    ],
    summary:
      "Natural-language property discovery on top of live MLS data.",
    year: 2025,
  },
  {
    slug: "vela-fashion",
    title: "Vela Fashion — Mobile Loyalty App",
    client: "Vela Fashion",
    industry: "E-commerce",
    category: "Mobile App",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80",
    color: "from-fuchsia-500 to-pink-500",
    tech: ["Flutter", "Firebase", "Stripe"],
    results: [
      { label: "Repeat rate", value: "+41%" },
      { label: "LTV", value: "+$96" },
      { label: "App rating", value: "4.8★" },
    ],
    summary:
      "Loyalty program with points, tiers, personalized drops, and in-app purchases.",
    year: 2024,
  },
];

export const projectCategories: ProjectCategory[] = [
  "Website",
  "Mobile App",
  "AI Automation",
  "eCommerce",
  "Branding",
];
