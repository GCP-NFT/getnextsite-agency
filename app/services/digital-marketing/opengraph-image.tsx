import { renderOG, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const dynamic = "force-dynamic";
export const alt = "Digital Marketing — GetNextSite Agency";

export default function OG() {
  return renderOG({
    eyebrow: "Digital Marketing",
    title: "Predictable growth. Month after month.",
    tag: "SEO · Ads · Social · Reports",
    accent: "rgba(245, 158, 11, 0.5)",
  });
}
