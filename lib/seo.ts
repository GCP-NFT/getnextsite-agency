import { siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { generalFAQ } from "@/data/faq";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [
      siteConfig.social.twitter,
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.github,
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.contact.email,
        telephone: siteConfig.contact.phone,
        areaServed: "Worldwide",
        availableLanguage: ["English", "French", "Spanish"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressCountry: "US",
    },
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function serviceJsonLd(slug: string) {
  const svc = services.find((s) => s.slug === slug);
  if (!svc) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.title,
    description: svc.description,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Worldwide",
    url: `${siteConfig.url}${svc.href}`,
  };
}

export function faqJsonLd(items: { question: string; answer: string }[] = generalFAQ) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function aggregateRatingJsonLd(
  testimonials: { author: string; rating: number; quote: string }[],
) {
  const ratingValue =
    testimonials.reduce((s, t) => s + t.rating, 0) / testimonials.length;
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: ratingValue.toFixed(2),
      bestRating: 5,
      ratingCount: testimonials.length,
    },
    review: testimonials.slice(0, 6).map((t) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
      },
      author: { "@type": "Person", name: t.author },
      reviewBody: t.quote,
    })),
  };
}

export function breadcrumbJsonLd(
  items: { name: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}
