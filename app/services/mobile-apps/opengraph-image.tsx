import { renderOG, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const dynamic = "force-dynamic";
export const alt = "Mobile App Development — GetNextSite Agency";

export default function OG() {
  return renderOG({
    eyebrow: "Mobile Apps",
    title: "Native-feel iOS + Android apps that ship in weeks.",
    tag: "iOS · Android · Cross-platform",
    accent: "rgba(139, 92, 246, 0.5)",
  });
}
