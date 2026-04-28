import { useEffect } from 'react';
import { useLocation } from 'react-router';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  canonicalUrl?: string;
  schema?: object;
}

export function SEO({
  title = 'Lunology - Your Cosmic Companion for Self-Discovery',
  description = 'Discover Lunology - a cosmic companion on your journey of self-discovery, intuition, and inner connection. Explore dream journals, lunar planners, meditation guides, and spiritual products combining ancient wisdom with modern thought.',
  keywords = 'Lunology, moon phases, dream interpretation, lunar calendar, meditation, spiritual products, cosmic wisdom, self-discovery, mindfulness, astrology, zodiac houses, dream journal, annual planner',
  image = 'https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png',
  type = 'website',
  canonicalUrl,
  schema,
}: SEOProps) {
  const location = useLocation();
  const currentUrl = canonicalUrl || `https://lunology.com${location.pathname}`;

  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }

      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'Lunology');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('googlebot', 'index, follow');

    // Open Graph tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:site_name', 'Lunology', true);
    updateMetaTag('og:locale', 'en_US', true);
    updateMetaTag('og:locale:alternate', 'ar_SA', true);

    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:site', '@Lunology');
    updateMetaTag('twitter:creator', '@Lunology');

    // Additional SEO tags
    updateMetaTag('theme-color', '#4c5578');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    updateMetaTag('format-detection', 'telephone=no');

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = currentUrl;

    // Structured Data (JSON-LD)
    if (schema) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, image, type, currentUrl, schema]);

  return null;
}

// Organization Schema
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Lunology',
  url: 'https://lunology.com',
  logo: 'https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png',
  description: 'A cosmic companion on the journey of discovery, intuition, and inner connection',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+966-573-639-083',
    contactType: 'Customer Service',
    email: 'lunology5@gmail.com',
    availableLanguage: ['English', 'Arabic'],
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'SA',
    addressRegion: 'Riyadh',
  },
  sameAs: [
    'https://instagram.com/lunology',
    'https://twitter.com/lunology',
    'https://facebook.com/lunology',
  ],
  vatID: '314526248600003',
  taxID: '1010578591',
};

// Website Schema
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Lunology',
  url: 'https://lunology.com',
  description: 'Discover cosmic wisdom, dream interpretation, and spiritual products',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://lunology.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Lunology',
    logo: {
      '@type': 'ImageObject',
      url: 'https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png',
    },
  },
};

// Product Schema Generator
export const generateProductSchema = (product: any) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: product.name,
  description: product.description || product.shortDescription,
  image: product.images || [product.image],
  sku: product.sku,
  brand: {
    '@type': 'Brand',
    name: 'Lunology',
  },
  offers: {
    '@type': 'Offer',
    url: `https://lunology.com/product/${product.id}`,
    priceCurrency: 'SAR',
    price: product.price,
    availability: product.inStock
      ? 'https://schema.org/InStock'
      : 'https://schema.org/OutOfStock',
    seller: {
      '@type': 'Organization',
      name: 'Lunology',
    },
  },
  aggregateRating: product.rating
    ? {
        '@type': 'AggregateRating',
        ratingValue: product.rating,
        reviewCount: product.reviews || 0,
        bestRating: 5,
        worstRating: 1,
      }
    : undefined,
});

// Breadcrumb Schema Generator
export const generateBreadcrumbSchema = (breadcrumbs: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: breadcrumbs.map((crumb, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: crumb.name,
    item: `https://lunology.com${crumb.url}`,
  })),
});
