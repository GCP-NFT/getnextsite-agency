import { renderOG, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const dynamic = "force-dynamic";
export const alt = "Branding & Identity — GetNextSite Agency";

export default function OG() {
  return renderOG({
    eyebrow: "Branding & Identity",
    title: "A brand system that makes you look established.",
    tag: "Starting at $690",
    accent: "rgba(236, 72, 153, 0.5)",
  });
}
