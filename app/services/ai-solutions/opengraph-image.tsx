import { renderOG, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const dynamic = "force-dynamic";
export const alt = "AI Business Automation — GetNextSite Agency";

export default function OG() {
  return renderOG({
    eyebrow: "AI Automation",
    title: "An AI teammate that never sleeps.",
    tag: "AI Chatbots · Receptionists · WhatsApp",
    accent: "rgba(16, 185, 129, 0.5)",
  });
}
