import {
  Search,
  Palette,
  Code2,
  TestTube2,
  Rocket,
  LineChart,
  type LucideIcon,
} from "lucide-react";

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
  duration: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We map goals, audiences, competitors and success metrics. You leave the room with a clear scope and delivery calendar.",
    icon: Search,
    duration: "Week 1",
  },
  {
    step: "02",
    title: "Design",
    description:
      "Wireframes → high-fidelity UI in Figma. You review clickable prototypes before we write a line of code.",
    icon: Palette,
    duration: "Week 2–3",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Next.js frontend, integrations, CMS, payments, AI. Delivered on a staging URL you can watch progress on.",
    icon: Code2,
    duration: "Week 3–5",
  },
  {
    step: "04",
    title: "Testing",
    description:
      "Cross-browser QA, accessibility (WCAG AA), Core Web Vitals, and a 24-hour user acceptance window.",
    icon: TestTube2,
    duration: "Week 5",
  },
  {
    step: "05",
    title: "Launch",
    description:
      "Domain, SSL, CDN, analytics, monitoring — go-live with a war-room on standby. Confetti optional.",
    icon: Rocket,
    duration: "Week 6",
  },
  {
    step: "06",
    title: "Grow",
    description:
      "Monthly reporting, continuous improvements, and the option to add AI, apps or marketing at any time.",
    icon: LineChart,
    duration: "Ongoing",
  },
];
