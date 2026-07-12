import { siteConfig } from "@/config/site";
import { posts } from "@/data/insights";

function escape(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const base = siteConfig.url;
  const items = posts
    .slice()
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() -
        new Date(a.publishedAt).getTime(),
    )
    .map(
      (p) => `
    <item>
      <title>${escape(p.title)}</title>
      <link>${base}/insights/${p.slug}</link>
      <guid isPermaLink="true">${base}/insights/${p.slug}</guid>
      <description>${escape(p.excerpt)}</description>
      <category>${escape(p.category)}</category>
      <author>${escape(p.author.name)}</author>
      <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
    </item>`,
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(siteConfig.name)} — Insights</title>
    <link>${base}/insights</link>
    <atom:link href="${base}/insights/rss.xml" rel="self" type="application/rss+xml" />
    <description>Playbooks and field notes from the ${escape(siteConfig.name)} team.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
