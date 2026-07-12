export type AddonCategory =
  | "Website"
  | "AI"
  | "Apps"
  | "Marketing"
  | "Business";

export type Addon = {
  id: string;
  category: AddonCategory;
  name: string;
  description: string;
  monthly: number;
  setup: number;
  popular?: boolean;
};

export const basePlan = {
  name: "Foundation",
  price: 39,
  setup: 0,
  description:
    "Everything a professional site needs to stay online, fast, and secure.",
  features: [
    "Global CDN hosting",
    "SSL certificate",
    "Enterprise-grade security",
    "Daily automated backups",
    "24/7 uptime monitoring",
    "Performance optimization",
    "Minor content updates",
    "Priority technical support",
  ],
};

export const addons: Addon[] = [
  // Website
  {
    id: "web-pages",
    category: "Website",
    name: "Additional Pages (5)",
    description: "Extra designed pages beyond the core site.",
    monthly: 12,
    setup: 300,
  },
  {
    id: "blog",
    category: "Website",
    name: "Blog / Content Hub",
    description: "Full-featured blog with CMS, categories & RSS.",
    monthly: 15,
    setup: 450,
    popular: true,
  },
  {
    id: "store",
    category: "Website",
    name: "Online Store",
    description: "Products, checkout, payments and inventory.",
    monthly: 39,
    setup: 890,
    popular: true,
  },
  {
    id: "booking",
    category: "Website",
    name: "Booking System",
    description: "Calendar, staff, services, payments & reminders.",
    monthly: 29,
    setup: 590,
  },
  {
    id: "membership",
    category: "Website",
    name: "Membership / Portal",
    description: "Gated content, subscriptions and member area.",
    monthly: 39,
    setup: 890,
  },
  // AI
  {
    id: "ai-chatbot",
    category: "AI",
    name: "AI Chatbot",
    description: "Trained on your site, docs & FAQs. 24/7 support.",
    monthly: 49,
    setup: 290,
    popular: true,
  },
  {
    id: "ai-receptionist",
    category: "AI",
    name: "AI Receptionist",
    description: "Voice + chat that answers, books & routes calls.",
    monthly: 149,
    setup: 690,
  },
  {
    id: "whatsapp-automation",
    category: "AI",
    name: "WhatsApp Automation",
    description: "Auto-reply, booking & lead capture on WhatsApp.",
    monthly: 39,
    setup: 290,
  },
  {
    id: "crm",
    category: "AI",
    name: "CRM Integration",
    description: "Sync leads, deals & tasks with your CRM.",
    monthly: 25,
    setup: 350,
  },
  // Apps
  {
    id: "android-app",
    category: "Apps",
    name: "Android App",
    description: "Native or cross-platform Android app.",
    monthly: 79,
    setup: 1900,
  },
  {
    id: "ios-app",
    category: "Apps",
    name: "iOS App",
    description: "Native or cross-platform iOS app.",
    monthly: 79,
    setup: 1900,
    popular: true,
  },
  // Marketing
  {
    id: "seo",
    category: "Marketing",
    name: "SEO Program",
    description: "Ongoing on-page + technical SEO.",
    monthly: 249,
    setup: 0,
    popular: true,
  },
  {
    id: "google-business",
    category: "Marketing",
    name: "Google Business Profile",
    description: "Optimization, posts and review generation.",
    monthly: 79,
    setup: 149,
  },
  {
    id: "facebook",
    category: "Marketing",
    name: "Facebook Ads Management",
    description: "Campaign management + creative production.",
    monthly: 349,
    setup: 0,
  },
  {
    id: "instagram",
    category: "Marketing",
    name: "Instagram Growth",
    description: "Content strategy, posting & community.",
    monthly: 249,
    setup: 0,
  },
  {
    id: "pinterest",
    category: "Marketing",
    name: "Pinterest Marketing",
    description: "Board strategy, pin design & scheduling.",
    monthly: 149,
    setup: 0,
  },
  // Business
  {
    id: "email",
    category: "Business",
    name: "Professional Email (5)",
    description: "Custom @yourbrand.com inboxes.",
    monthly: 12,
    setup: 0,
  },
  {
    id: "domain",
    category: "Business",
    name: "Custom Domain",
    description: "Registration & management, .com/.io/.co.",
    monthly: 2,
    setup: 0,
  },
  {
    id: "analytics",
    category: "Business",
    name: "Analytics Dashboard",
    description: "Unified dashboard for site, ads & AI.",
    monthly: 29,
    setup: 190,
  },
  {
    id: "monthly-reports",
    category: "Business",
    name: "Monthly Reports",
    description: "Strategy call + performance report every month.",
    monthly: 79,
    setup: 0,
  },
];

export const addonCategories: AddonCategory[] = [
  "Website",
  "AI",
  "Apps",
  "Marketing",
  "Business",
];
