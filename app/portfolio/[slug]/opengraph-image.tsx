import { notFound } from "next/navigation";
import { renderOG, ogSize, ogContentType } from "@/lib/og";
import { projects } from "@/data/portfolio";

export const size = ogSize;
export const contentType = ogContentType;
export const dynamic = "force-dynamic";
export const alt = "Case study — GetNextSite Agency";

export default async function OG({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return renderOG({
    eyebrow: `${project.category} · ${project.industry}`,
    title: project.title,
    tag:
      project.results[0]?.value +
      " " +
      project.results[0]?.label +
      " · " +
      project.year,
  });
}
