import {
  UtensilsCrossed,
  Hotel,
  Stethoscope,
  Scale,
  Home,
  HardHat,
  ShoppingBag,
  Car,
  Scissors,
  Dumbbell,
  GraduationCap,
  Briefcase,
  Plane,
  Rocket,
  Building2,
  Store,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  blurb: string;
  outcomes: string[];
};

export const industries: Industry[] = [
  {
    slug: "restaurants",
    name: "Restaurants",
    icon: UtensilsCrossed,
    blurb: "Online menus, reservations & delivery-ready websites.",
    outcomes: ["+38% reservations", "1s load time", "Direct online orders"],
  },
  {
    slug: "hotels",
    name: "Hotels",
    icon: Hotel,
    blurb: "Booking engines that reduce OTA commissions.",
    outcomes: ["+52% direct bookings", "Multi-language", "Channel manager"],
  },
  {
    slug: "dentists",
    name: "Dentists",
    icon: HeartPulse,
    blurb: "HIPAA-aware sites with 24/7 booking.",
    outcomes: ["+64% consultations", "Automated reminders", "Reviews on autopilot"],
  },
  {
    slug: "doctors",
    name: "Doctors & Clinics",
    icon: Stethoscope,
    blurb: "Medical sites with symptom triage AI.",
    outcomes: ["24/7 patient intake", "AI triage", "Telehealth-ready"],
  },
  {
    slug: "lawyers",
    name: "Lawyers",
    icon: Scale,
    blurb: "Practice-area sites that convert case leads.",
    outcomes: ["+3x qualified leads", "Case intake forms", "Client portal"],
  },
  {
    slug: "realtors",
    name: "Realtors",
    icon: Home,
    blurb: "IDX listings + AI-powered property discovery.",
    outcomes: ["MLS integration", "AI property matching", "Lead scoring"],
  },
  {
    slug: "construction",
    name: "Construction",
    icon: HardHat,
    blurb: "Trust-building sites with project galleries.",
    outcomes: ["Portfolio-first", "Quote workflow", "Client updates"],
  },
  {
    slug: "retail",
    name: "Retail & Boutiques",
    icon: ShoppingBag,
    blurb: "eCommerce that outperforms Shopify defaults.",
    outcomes: ["Custom checkout", "Loyalty built-in", "Fast on mobile"],
  },
  {
    slug: "automotive",
    name: "Automotive",
    icon: Car,
    blurb: "Inventory sites & AI booking for services.",
    outcomes: ["Inventory sync", "Service booking", "Trade-in workflows"],
  },
  {
    slug: "salons",
    name: "Salons & Barbers",
    icon: Scissors,
    blurb: "Booking-first sites with client CRM.",
    outcomes: ["24/7 booking", "Loyalty rewards", "SMS reminders"],
  },
  {
    slug: "gyms",
    name: "Gyms & Wellness",
    icon: Dumbbell,
    blurb: "Membership sites & class booking apps.",
    outcomes: ["Recurring memberships", "Class scheduling", "Coach profiles"],
  },
  {
    slug: "schools",
    name: "Schools",
    icon: GraduationCap,
    blurb: "Enrollment funnels that fill seats.",
    outcomes: ["Enrollment CRM", "Parent portal", "Event calendars"],
  },
  {
    slug: "consultants",
    name: "Consultants",
    icon: Briefcase,
    blurb: "Authority sites with lead-gen automation.",
    outcomes: ["Case studies", "Booking + CRM", "Content engine"],
  },
  {
    slug: "travel",
    name: "Travel Agencies",
    icon: Plane,
    blurb: "Booking engines & curated tour catalogs.",
    outcomes: ["Booking flows", "Multi-currency", "Package builder"],
  },
  {
    slug: "startups",
    name: "Startups",
    icon: Rocket,
    blurb: "Launch sites, product tours, waitlists.",
    outcomes: ["Design-forward", "Investor-ready", "Analytics built-in"],
  },
  {
    slug: "smes",
    name: "Small & Mid-Size Businesses",
    icon: Building2,
    blurb: "Everything you need under one subscription.",
    outcomes: ["All-in-one plan", "Predictable pricing", "Ongoing partnership"],
  },
  {
    slug: "ecommerce",
    name: "E-commerce",
    icon: Store,
    blurb: "Storefronts engineered for conversion.",
    outcomes: ["Sub-second speed", "Personalization", "Abandonment recovery"],
  },
];
