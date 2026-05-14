import { useEffect } from "react";
import { useLocation } from "react-router";

/** Public site origin for canonical URLs, Open Graph, and JSON-LD. */
export const SITE_URL = "https://lunology.com";

const JSON_LD_SCRIPT_ID = "lunology-jsonld";

export function stripUndefinedDeep<T>(value: T): T {
  if (value === undefined || value === null) {
    return value;
  }
  if (Array.isArray(value)) {
    return value
      .map((v) => stripUndefinedDeep(v))
      .filter((v) => v !== undefined) as T;
  }
  if (typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (v === undefined) continue;
      const next = stripUndefinedDeep(v);
      if (next !== undefined) out[k] = next;
    }
    return out as T;
  }
  return value;
}

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  canonicalUrl?: string;
  /** Full URL or path starting with `/`. Defaults to `${SITE_URL}${pathname}`. */
  canonicalPathOrUrl?: string;
  schema?: object;
  /** e.g. `noindex, nofollow` for checkout, 404, and post-checkout pages */
  robots?: string;
}

export function SEO({
  title = "Lunology - Your Cosmic Companion for Self-Discovery",
  description = "Discover Lunology - a cosmic companion on your journey of self-discovery, intuition, and inner connection. Explore dream journals, lunar planners, meditation guides, and spiritual products combining ancient wisdom with modern thought.",
  keywords = "Lunology, moon phases, dream interpretation, lunar calendar, meditation, spiritual products, cosmic wisdom, self-discovery, mindfulness, astrology, zodiac houses, dream journal, annual planner",
  image = "https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png",
  type = "website",
  canonicalUrl,
  canonicalPathOrUrl,
  schema,
  robots = "index, follow",
}: SEOProps) {
  const location = useLocation();

  const currentUrl =
    canonicalUrl ||
    (canonicalPathOrUrl
      ? canonicalPathOrUrl.startsWith("http")
        ? canonicalPathOrUrl
        : `${SITE_URL}${canonicalPathOrUrl.startsWith("/") ? "" : "/"}${canonicalPathOrUrl}`
      : `${SITE_URL}${location.pathname}`);

  useEffect(() => {
    document.title = title;

    const updateMetaTag = (
      name: string,
      content: string,
      isProperty = false,
    ) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(
        `meta[${attribute}="${name}"]`,
      ) as HTMLMetaElement | null;

      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute("content", content);
    };

    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", "Lunology");
    updateMetaTag("robots", robots);
    updateMetaTag("googlebot", robots);

    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:url", currentUrl, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:image:width", "1200", true);
    updateMetaTag("og:image:height", "630", true);
    updateMetaTag("og:site_name", "Lunology", true);
    updateMetaTag("og:locale", "en_US", true);
    updateMetaTag("og:locale:alternate", "ar_SA", true);

    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);

    updateMetaTag("theme-color", "#4c5578");
    updateMetaTag("apple-mobile-web-app-capable", "yes");
    updateMetaTag("apple-mobile-web-app-status-bar-style", "black-translucent");
    updateMetaTag("format-detection", "telephone=no");

    let canonicalLink = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = currentUrl;

    const existing = document.getElementById(
      JSON_LD_SCRIPT_ID,
    ) as HTMLScriptElement | null;
    if (schema) {
      const cleaned = stripUndefinedDeep(schema);
      let scriptTag =
        existing ||
        (() => {
          const s = document.createElement("script");
          s.id = JSON_LD_SCRIPT_ID;
          s.type = "application/ld+json";
          document.head.appendChild(s);
          return s;
        })();
      scriptTag.textContent = JSON.stringify(cleaned);
    } else if (existing) {
      existing.remove();
    }

    return () => {
      /* keep meta tags; next route's SEO will overwrite */
    };
  }, [
    title,
    description,
    keywords,
    image,
    type,
    currentUrl,
    schema,
    robots,
  ]);

  return null;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Lunology",
  url: SITE_URL,
  logo: "https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png",
  description:
    "A cosmic companion on the journey of discovery, intuition, and inner connection",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+966-573-639-083",
    contactType: "Customer Service",
    email: "lunology5@gmail.com",
    availableLanguage: ["English", "Arabic"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "SA",
    addressRegion: "Riyadh",
  },
  sameAs: [
    "https://instagram.com/lunology",
    "https://twitter.com/lunology",
    "https://facebook.com/lunology",
  ],
  vatID: "314526248600003",
  taxID: "1010578591",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Lunology",
  url: SITE_URL,
  description:
    "Discover cosmic wisdom, dream interpretation, and spiritual products",
  publisher: {
    "@type": "Organization",
    name: "Lunology",
    logo: {
      "@type": "ImageObject",
      url: "https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png",
    },
  },
};

export function generateProductSchema(product: {
  id: number;
  name: string;
  description?: string;
  shortDescription?: string;
  image?: string;
  images?: string[];
  sku?: string;
  price: number;
  inStock?: boolean;
  rating?: number;
  reviews?: number;
}) {
  const images: string[] = Array.isArray(product.images)
    ? product.images.filter(Boolean)
    : product.image
      ? [product.image]
      : [];

  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description || product.shortDescription,
    image: images.length ? images : undefined,
    sku: product.sku || `LUN-${product.id}`,
    url: `${SITE_URL}/product/${product.id}`,
    brand: {
      "@type": "Brand",
      name: "Lunology",
    },
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/product/${product.id}`,
      priceCurrency: "SAR",
      price: product.price,
      availability:
        product.inStock !== false
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      seller: {
        "@type": "Organization",
        name: "Lunology",
      },
    },
  };

  const reviewCount = product.reviews ?? 0;
  if (product.rating != null && product.rating > 0 && reviewCount > 0) {
    base.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount,
      bestRating: 5,
      worstRating: 1,
    };
  }

  return stripUndefinedDeep(base);
}

export function generateFAQPageSchema(
  faqs: Array<{ question: string; answer: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

/** Merge multiple JSON-LD roots into one `@graph` (strips nested `@context`). */
export function combineJsonLdGraph(...entities: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": entities.map((e) => {
      const obj = stripUndefinedDeep(e) as Record<string, unknown>;
      const { ["@context"]: _c, ...rest } = obj;
      return rest;
    }),
  };
}

export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((crumb, index) => {
      const path = crumb.url.startsWith("/") ? crumb.url : `/${crumb.url}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: `${SITE_URL}${path}`,
      };
    }),
  };
}
