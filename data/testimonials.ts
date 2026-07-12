export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar?: string;
  industry?: string;
  service?:
    | "Website"
    | "Mobile App"
    | "AI"
    | "Marketing"
    | "Branding";
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "GetNextSite rebuilt our booking flow and we saw a 64% lift in direct bookings the following quarter. They think like operators, not just designers.",
    author: "Marta Alvarez",
    role: "CMO",
    company: "Lumen Hotels",
    rating: 5,
  },
  {
    quote:
      "The AI receptionist has completely changed how our practice runs. We haven't missed a call in six months.",
    author: "Dr. Priya Menon",
    role: "Founder",
    company: "North Dental",
    rating: 5,
  },
  {
    quote:
      "Their subscription model gave us Fortune-500 quality on a small-business budget. It's the single best partnership we have.",
    author: "Julien Rossi",
    role: "Owner",
    company: "Canela Cocina",
    rating: 5,
  },
  {
    quote:
      "From brand to app to marketing, they run our entire digital function. I sleep better because of them.",
    author: "Sarah Chen",
    role: "Founder",
    company: "Kite Fitness",
    rating: 5,
  },
  {
    quote:
      "We tried three agencies before GetNextSite. None of them could match the design polish or delivery speed.",
    author: "Ahmed Farouk",
    role: "CEO",
    company: "Atlas Realty",
    rating: 5,
  },
  {
    quote:
      "Their SEO work paid for the retainer in the first month. Ranking #1 for our top 8 keywords.",
    author: "Rachel Kim",
    role: "Marketing Director",
    company: "Verano Legal",
    rating: 5,
    industry: "Lawyers",
    service: "Marketing",
  },
  {
    quote:
      "The mobile app took our loyalty program from PDF punch cards to real business — 41% repeat rate now.",
    author: "Diego Reyes",
    role: "Owner",
    company: "Vela Fashion",
    rating: 5,
    industry: "E-commerce",
    service: "Mobile App",
  },
  {
    quote:
      "They rewired our booking flow overnight. On Monday the number of missed reservations dropped by half.",
    author: "Elena Costa",
    role: "General Manager",
    company: "Harvest Market",
    rating: 5,
    industry: "Retail",
    service: "Website",
  },
  {
    quote:
      "A single point of contact for our web, app, marketing and AI — this is what agencies should feel like.",
    author: "Idris Bello",
    role: "Founder",
    company: "Orbit Studios",
    rating: 5,
    industry: "Startups",
    service: "Website",
  },
  {
    quote:
      "The rebrand felt more like therapy than design work — in the best way. We know exactly who we are now.",
    author: "Karim Haddad",
    role: "Chef & Owner",
    company: "Canela Cocina",
    rating: 5,
    industry: "Restaurants",
    service: "Branding",
  },
  {
    quote:
      "Our new site scores 100 on Lighthouse. Not a marketing number — an engineering number.",
    author: "Julia Novák",
    role: "CTO",
    company: "Northwind Group",
    rating: 5,
    industry: "SMEs",
    service: "Website",
  },
];

export const stats = [
  { value: 250, suffix: "+", label: "Websites Launched" },
  { value: 40, suffix: "+", label: "Mobile Apps Shipped" },
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 4.9, suffix: "★", label: "Average Rating", decimals: 1 },
];

export const clientLogos = [
  "Lumen Hotels",
  "North Dental",
  "Harvest Market",
  "Kite Fitness",
  "Verano Legal",
  "Canela Cocina",
  "Atlas Realty",
  "Vela Fashion",
  "Orbit Studios",
  "Northwind Group",
  "Meridian Motors",
  "Pine & Oak",
];
