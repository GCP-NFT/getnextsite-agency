import { renderOG, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const dynamic = "force-dynamic";
export const alt = "Professional Website Development — GetNextSite Agency";

export default function OG() {
  return renderOG({
    eyebrow: "Web Development",
    title: "Professional websites that convert and rank.",
    tag: "Starting at $39/month",
  });
}
