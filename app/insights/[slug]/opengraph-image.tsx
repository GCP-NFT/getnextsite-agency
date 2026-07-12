import { notFound } from "next/navigation";
import { renderOG, ogSize, ogContentType } from "@/lib/og";
import { posts } from "@/data/insights";

export const size = ogSize;
export const contentType = ogContentType;
export const dynamic = "force-dynamic";
export const alt = "GetNextSite Agency — Insight";

export default async function OG({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return renderOG({
    eyebrow: `${post.category} · Insight`,
    title: post.title,
    tag: `${post.readTime} min read · ${post.author.name}`,
  });
}
