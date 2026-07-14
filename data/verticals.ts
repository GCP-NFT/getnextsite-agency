import {
  UtensilsCrossed,
  HeartPulse,
  Scale,
  Hotel,
  Scissors,
  Bot,
  Search,
  CalendarClock,
  ShoppingCart,
  Star,
  MessageSquare,
  Sparkles,
  FileText,
  Stethoscope,
  Users,
  BadgeCheck,
  Gauge,
  type LucideIcon,
} from "lucide-react";

export type Vertical = {
  slug: string;
  keyword: string;
  title: string;
  headline: string;
  headlineAccent: string;
  eyebrow: string;
  intro: string;
  metaTitle: string;
  metaDescription: string;
  icon: LucideIcon;
  features: { icon: LucideIcon; title: string; body: string }[];
  included: string[];
  outcomes: { value: string; label: string }[];
  faq: { question: string; answer: string }[];
  initialAddons: string[];
};

export const verticals: Vertical[] = [
  {
    slug: "websites-for-restaurants",
    keyword: "restaurants",
    title: "Restaurant Website Design & Online Ordering",
    metaTitle: "Restaurant Website Design & Online Ordering",
    metaDescription:
      "Beautiful, fast restaurant websites with online reservations, direct ordering, menu management and an AI phone receptionist — starting at $39/month.",
    headline: "Restaurant websites that fill",
    headlineAccent: "every seat.",
    eyebrow: "For restaurants",
    intro:
      "Direct reservations, ordering, AI phone answering, and Maps SEO — under one $39/month subscription.",
    icon: UtensilsCrossed,
    features: [
      { icon: UtensilsCrossed, title: "Beautiful menus", body: "Menus your customers actually enjoy scrolling — with dietary tags, wine pairings, and Instagram-worthy photography." },
      { icon: CalendarClock, title: "Direct reservations", body: "Zero commissions. Table map, party size logic, deposits, waitlist. Google, Instagram and DMs all point here." },
      { icon: ShoppingCart, title: "Direct online ordering", body: "Cut third-party fees. Delivery integrations, pickup, tips, upsells, all under your brand." },
      { icon: Bot, title: "AI phone receptionist", body: "Books tables and answers questions 24/7. Never miss a call during service again." },
      { icon: Search, title: "Google Maps SEO", body: "Rank when locals search 'best pizza near me' — Google Business Profile, reviews, structured data." },
      { icon: Star, title: "Reviews on autopilot", body: "Send a smart post-visit request to happy diners. More 5-star reviews without asking staff to nudge." },
    ],
    included: [
      "Custom-designed menu pages",
      "Reservation & waitlist system",
      "Direct online ordering (pickup + delivery)",
      "AI phone receptionist",
      "Google Business Profile optimization",
      "SSL, hosting, backups, security",
      "Monthly performance reports",
      "Unlimited menu updates",
    ],
    outcomes: [
      { value: "+38%", label: "Direct reservations" },
      { value: "-52%", label: "3rd-party commissions" },
      { value: "24/7", label: "Phone answered" },
      { value: "4.9★", label: "Average review score" },
    ],
    faq: [
      { question: "Do you integrate with our POS?", answer: "We integrate with the major restaurant POS systems and can also feed orders via email/print for smaller operations." },
      { question: "How does the online ordering handle delivery?", answer: "You can do in-house delivery, or plug in DoorDash Drive / Uber Direct for zero-commission dispatch." },
      { question: "Do we still need Yelp / OpenTable?", answer: "You'll drive most reservations direct — but we still keep your listings healthy. On average, our restaurants cut third-party dependency in half within a quarter." },
      { question: "How long to launch?", answer: "Menus, photos and reservations live in 3–5 weeks from kick-off, including a full brand refresh if you need one." },
    ],
    initialAddons: ["booking", "ai-chatbot", "google-business", "seo"],
  },
  {
    slug: "websites-for-dentists",
    keyword: "dentists",
    title: "Dental Practice Website & AI Receptionist",
    metaTitle: "Dental Practice Website & AI Receptionist",
    metaDescription:
      "Modern dental websites with 24/7 online booking, AI phone answering, treatment pages and local SEO — starting at $39/month.",
    headline: "Dental websites that fill your",
    headlineAccent: "chair schedule.",
    eyebrow: "For dentists",
    intro:
      "24/7 online booking, an AI receptionist that never sleeps, and local SEO that puts your practice first on Google.",
    icon: HeartPulse,
    features: [
      { icon: CalendarClock, title: "24/7 online booking", body: "New patients book cleanings, exams and whitening from any device — synced to your practice management system." },
      { icon: Bot, title: "AI phone receptionist", body: "Answers questions, books appointments, handles reschedules and takes messages. Zero missed calls." },
      { icon: Sparkles, title: "Treatment pages that convert", body: "Cleanings, orthodontics, cosmetic, implants — each with its own SEO-optimized page and calls to book." },
      { icon: Search, title: "Local map pack SEO", body: "Rank in the top 3 for 'dentist near me' with structured data, review generation and GBP optimization." },
      { icon: Star, title: "Review pipeline", body: "Automated post-visit request via SMS. More 5-star reviews without asking staff to nag." },
      { icon: BadgeCheck, title: "HIPAA-aware", body: "Forms and integrations built with medical privacy in mind. BAAs available on request." },
    ],
    included: [
      "Modern homepage + treatment pages",
      "24/7 online booking",
      "AI phone + chat receptionist",
      "Google Business Profile optimization",
      "Review generation automation",
      "Insurance & financing pages",
      "HIPAA-aware forms",
      "SSL, hosting, backups, security",
    ],
    outcomes: [
      { value: "+64%", label: "New patient bookings" },
      { value: "-98%", label: "Missed calls" },
      { value: "3.1×", label: "Google reviews" },
      { value: "0.9s", label: "Page load" },
    ],
    faq: [
      { question: "Do you integrate with our practice management system?", answer: "Yes — we integrate with Dentrix, Eaglesoft, Open Dental and most cloud PMs via API or Zapier." },
      { question: "Is the AI receptionist HIPAA-compliant?", answer: "We deploy on HIPAA-eligible infrastructure and sign BAAs. We follow least-privilege access and encrypt every transcript." },
      { question: "Will we still need a receptionist?", answer: "Yes — but she'll be able to focus on in-person patients while the AI handles calls after hours and during busy times." },
      { question: "How long to launch?", answer: "3–5 weeks from discovery to launch, including brand refresh and photo shoot." },
    ],
    initialAddons: ["booking", "ai-receptionist", "google-business", "seo"],
  },
  {
    slug: "websites-for-lawyers",
    keyword: "lawyers",
    title: "Law Firm Website & Case-Intake Automation",
    metaTitle: "Law Firm Website & Case-Intake Automation",
    metaDescription:
      "Modern law firm websites with automated case intake, practice-area SEO and client portals — starting at $39/month.",
    headline: "Law firm sites that qualify",
    headlineAccent: "high-value cases.",
    eyebrow: "For lawyers",
    intro:
      "Practice-area pages that rank, an intake pipeline that qualifies leads, and a client portal that makes you look bigger than you are.",
    icon: Scale,
    features: [
      { icon: FileText, title: "Practice-area pages", body: "Personal injury, family, criminal, estate — each with an SEO-optimized page, faqs and matching intake form." },
      { icon: Bot, title: "AI intake qualifier", body: "24/7 chat that qualifies leads and routes urgent cases to a real attorney within minutes." },
      { icon: Search, title: "Local + statewide SEO", body: "Rank for 'personal injury lawyer <city>' and long-tail practice-area queries." },
      { icon: MessageSquare, title: "Client portal", body: "Secure document exchange, case updates, e-signing — looks like a much bigger firm." },
      { icon: Users, title: "Attorney bios", body: "Award-worthy profiles for each attorney — with case studies, publications and speaking history." },
      { icon: BadgeCheck, title: "ABA-conscious", body: "Copy vetted for state bar advertising rules. Disclaimers baked in where required." },
    ],
    included: [
      "Homepage + practice-area pages",
      "AI intake chatbot",
      "Practice-area SEO program",
      "Attorney bio pages",
      "Contact + intake forms",
      "Client portal (docs, e-sign)",
      "SSL, hosting, backups, security",
      "Monthly performance reports",
    ],
    outcomes: [
      { value: "3.1×", label: "Qualified case leads" },
      { value: "-42%", label: "Bounce rate" },
      { value: "+$1.8M", label: "Case value tracked" },
      { value: "24/7", label: "Intake coverage" },
    ],
    faq: [
      { question: "Do you handle state bar advertising rules?", answer: "Yes. Copy is vetted for your state's rules and we bake in the required disclaimers on every practice-area page." },
      { question: "Can leads be routed to specific attorneys?", answer: "Yes — the intake chatbot can route by practice area, urgency, or geography." },
      { question: "Do you build client portals from scratch?", answer: "We prefer to plug into your case management platform (Clio, MyCase, PracticePanther) — much less friction and no data duplication." },
      { question: "How long to launch?", answer: "4–6 weeks depending on the number of practice areas and attorneys." },
    ],
    initialAddons: ["ai-chatbot", "seo", "google-business", "crm"],
  },
  {
    slug: "websites-for-hotels",
    keyword: "hotels",
    title: "Hotel Direct-Booking Website",
    metaTitle: "Hotel Direct-Booking Website",
    metaDescription:
      "Beautiful hotel websites with direct booking engines that cut OTA commissions in half — starting at $39/month.",
    headline: "Hotel sites that reclaim",
    headlineAccent: "your direct bookings.",
    eyebrow: "For hotels",
    intro:
      "A booking engine that converts, a multilingual site that ranks in every market, and no more 25% commissions to the OTAs.",
    icon: Hotel,
    features: [
      { icon: CalendarClock, title: "Direct booking engine", body: "Room-type inventory, pricing, promo codes, tax + fees, upsells (breakfast, spa) — checkout in under 60 seconds." },
      { icon: Search, title: "Multilingual SEO", body: "English, Spanish, French, German — each with proper hreflang and localized content that ranks in the target market." },
      { icon: Sparkles, title: "Photo-first design", body: "Full-bleed galleries, immersive room pages, and a mood that makes travelers want to book right now." },
      { icon: Bot, title: "AI concierge chat", body: "Answers questions about parking, checkout, breakfast, activities — in every language your guests speak." },
      { icon: MessageSquare, title: "Post-booking upsells", body: "Automated pre-arrival emails offering upgrades, transfers and add-ons. Adds 8–14% to ADR." },
      { icon: Gauge, title: "Channel manager sync", body: "Two-way sync with SiteMinder, Cloudbeds, Little Hotelier — inventory stays in one place." },
    ],
    included: [
      "Homepage + room-type pages",
      "Direct booking engine",
      "Multilingual (up to 4 languages)",
      "AI concierge chat",
      "Google Hotel Ads integration",
      "Channel manager sync",
      "SSL, hosting, backups, security",
      "Monthly performance reports",
    ],
    outcomes: [
      { value: "+64%", label: "Direct bookings" },
      { value: "$180K/yr", label: "OTA fees saved" },
      { value: "0.9s", label: "Page load" },
      { value: "4 langs", label: "Multilingual" },
    ],
    faq: [
      { question: "Do you integrate with our PMS?", answer: "Yes — we integrate with the major PMS and channel managers so inventory and rates stay in sync." },
      { question: "Can we still list on Booking.com?", answer: "Absolutely — but our clients typically cut OTA dependency in half within 6 months of relaunching direct." },
      { question: "Do you handle Google Hotel Ads?", answer: "Yes, as an add-on. Integration + bid management + reporting is included on Growth+." },
      { question: "How long to launch?", answer: "4–8 weeks depending on the number of properties and languages." },
    ],
    initialAddons: ["booking", "ai-chatbot", "seo", "monthly-reports"],
  },
  {
    slug: "websites-for-salons",
    keyword: "salons and barbers",
    title: "Salon & Barbershop Booking Website",
    metaTitle: "Salon & Barbershop Booking Website",
    metaDescription:
      "Beautiful salon and barbershop websites with 24/7 booking, staff schedules, loyalty and SMS reminders — starting at $39/month.",
    headline: "Salon sites that fill",
    headlineAccent: "every chair.",
    eyebrow: "For salons & barbers",
    intro:
      "24/7 booking, staff schedules, loyalty rewards, SMS reminders — and a design that looks as good as your work.",
    icon: Scissors,
    features: [
      { icon: CalendarClock, title: "24/7 online booking", body: "Book by stylist, service and time. Deposits, cancellation policies, waitlist — all handled." },
      { icon: MessageSquare, title: "SMS reminders", body: "Cuts no-shows by 60%+. Two-way SMS so clients can reschedule with one tap." },
      { icon: Sparkles, title: "Loyalty program", body: "Points, tiers, referral rewards — built into checkout. Bring back your best clients without lifting a finger." },
      { icon: Users, title: "Staff pages", body: "Each stylist gets a bio, portfolio and direct-book link. Great for retention when someone books their favorite person." },
      { icon: Star, title: "Reviews on autopilot", body: "Post-visit SMS asking happy clients for a Google review. More 5-stars, no awkward asking at the register." },
      { icon: ShoppingCart, title: "Retail sales", body: "Optional online store for retail products — with in-salon pickup or shipping." },
    ],
    included: [
      "Homepage + service pages",
      "24/7 online booking",
      "Staff / stylist pages",
      "SMS reminder system",
      "Loyalty program",
      "Google Business Profile optimization",
      "SSL, hosting, backups, security",
      "Unlimited content updates",
    ],
    outcomes: [
      { value: "-60%", label: "No-shows (SMS)" },
      { value: "+31%", label: "Repeat visits" },
      { value: "24/7", label: "Booking coverage" },
      { value: "4.9★", label: "Average review" },
    ],
    faq: [
      { question: "Do you integrate with Fresha / Vagaro / Square?", answer: "We work with all of them. If you're already on one and it fits, we skin the site around it. If not, we can build a lighter booking layer that syncs to Google Calendar." },
      { question: "Can each stylist manage their own schedule?", answer: "Yes — every stylist gets a login to manage their availability, days off and services." },
      { question: "Do you handle the SMS costs?", answer: "SMS is charged at wholesale rate through our provider — typically $0.008/message. Included up to a threshold on the Growth plan." },
      { question: "How long to launch?", answer: "3–4 weeks including a full brand and photo refresh." },
    ],
    initialAddons: ["booking", "seo", "google-business", "whatsapp-automation"],
  },
];
