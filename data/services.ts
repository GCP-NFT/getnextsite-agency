import {
  Globe,
  Smartphone,
  Bot,
  Palette,
  BarChart3,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  color: string;
  features: string[];
  deliverables: string[];
  startingAt: string;
  href: string;
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Professional Website Development",
    shortTitle: "Web Development",
    tagline: "Fast, elegant, conversion-focused websites.",
    description:
      "Custom-designed websites built on modern stacks — engineered to load in under a second, rank on search, and convert visitors into customers.",
    icon: Globe,
    color: "from-blue-500 to-cyan-400",
    features: [
      "Business & Corporate Websites",
      "Landing Pages that convert",
      "eCommerce & Booking Systems",
      "Restaurant, Medical & Law Firm Sites",
      "Membership & Portfolio Sites",
      "Custom Web Applications",
      "Redesigns & speed optimization",
      "Technical SEO & Core Web Vitals",
    ],
    deliverables: [
      "Discovery workshop",
      "Wireframes & UI design",
      "Development & QA",
      "SSL, CDN, domain & email setup",
      "Launch & analytics",
    ],
    startingAt: "$39/month",
    href: "/services/web-development",
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    tagline: "Native-feel apps for iOS and Android.",
    description:
      "Cross-platform mobile applications that ship faster, feel native, and grow with your business — from concept to App Store.",
    icon: Smartphone,
    color: "from-violet-500 to-fuchsia-500",
    features: [
      "iOS & Android native apps",
      "Cross-platform (React Native / Flutter)",
      "Restaurant, delivery & booking apps",
      "Loyalty & membership apps",
      "Internal business tools & portals",
      "App Store & Play Store publishing",
      "Maintenance, updates & bug fixes",
      "Push notifications & analytics",
    ],
    deliverables: [
      "Product discovery",
      "UI/UX prototypes",
      "Native or cross-platform build",
      "TestFlight & Play Console setup",
      "Store publishing",
    ],
    startingAt: "$1,900 + $79/mo",
    href: "/services/mobile-apps",
  },
  {
    slug: "ai-solutions",
    title: "AI Business Automation",
    shortTitle: "AI Solutions",
    tagline: "Automate the work that slows you down.",
    description:
      "AI chatbots, voice agents, and workflow automation that answer calls, book appointments, qualify leads, and keep your CRM in sync — 24/7.",
    icon: Bot,
    color: "from-emerald-500 to-teal-400",
    features: [
      "AI Chatbots & Receptionists",
      "AI Voice Agents & phone answering",
      "24/7 appointment booking",
      "WhatsApp, Messenger & Instagram automation",
      "Email & marketing automation",
      "CRM integrations",
      "Lead qualification & routing",
      "Custom workflow automation",
    ],
    deliverables: [
      "Automation audit",
      "Conversation & flow design",
      "Model training on your data",
      "Integration with your stack",
      "Monitoring & continuous tuning",
    ],
    startingAt: "$149/month",
    href: "/services/ai-solutions",
  },
  {
    slug: "branding",
    title: "Branding & Identity",
    shortTitle: "Branding",
    tagline: "A brand that finally looks like your business.",
    description:
      "Logos, identity systems, and brand guidelines built to make you look established, credible and premium — everywhere your customers meet you.",
    icon: Palette,
    color: "from-pink-500 to-rose-400",
    features: [
      "Logo design & brand marks",
      "Complete visual identity",
      "Typography & color systems",
      "Brand guidelines & voice",
      "Business cards & stationery",
      "Flyers, brochures & menus",
      "Social media asset kits",
      "Presentation & pitch templates",
    ],
    deliverables: [
      "Brand strategy workshop",
      "Logo & identity concepts",
      "Full brand guideline PDF",
      "Print & digital asset library",
    ],
    startingAt: "$690",
    href: "/services/branding",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    tagline: "Predictable growth, month after month.",
    description:
      "SEO, Google Business Profile optimization, paid social, and content — measured against pipeline, not vanity metrics.",
    icon: BarChart3,
    color: "from-amber-500 to-orange-400",
    features: [
      "Local & national SEO",
      "Google Business Profile optimization",
      "Facebook, Instagram & TikTok",
      "Pinterest & LinkedIn campaigns",
      "Analytics & attribution",
      "Monthly performance reports",
      "Content strategy & production",
      "Landing page A/B testing",
    ],
    deliverables: [
      "Marketing audit",
      "12-month growth roadmap",
      "Campaigns launched",
      "Monthly reporting dashboard",
    ],
    startingAt: "$249/month",
    href: "/services/digital-marketing",
  },
  {
    slug: "hosting-care",
    title: "Hosting, Security & Care",
    shortTitle: "Hosting & Care",
    tagline: "Peace of mind on the infrastructure.",
    description:
      "Enterprise-grade hosting, SSL, daily backups, uptime monitoring and technical support — all included with every subscription.",
    icon: ShieldCheck,
    color: "from-slate-500 to-slate-400",
    features: [
      "Global CDN & edge hosting",
      "SSL certificates included",
      "Daily automated backups",
      "24/7 uptime monitoring",
      "DDoS & bot protection",
      "Malware scanning & removal",
      "Priority technical support",
      "Domain & email management",
    ],
    deliverables: [
      "Environment setup",
      "Monitoring dashboards",
      "Recovery playbook",
      "Monthly performance report",
    ],
    startingAt: "$39/month",
    href: "/services",
  },
];
