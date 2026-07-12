import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import { renderOG, ogSize, ogContentType } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const dynamic = "force-dynamic";
export const alt = "Industry solutions — GetNextSite Agency";

export default async function OG({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  return renderOG({
    eyebrow: `Industry · ${industry.name}`,
    title: `Digital solutions built for ${industry.name.toLowerCase()}.`,
    tag: industry.outcomes[0] ?? "One partner. One subscription.",
    accent: "rgba(6, 182, 212, 0.5)",
  });
}
