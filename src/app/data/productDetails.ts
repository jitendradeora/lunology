import type { LucideIcon } from 'lucide-react';
import { Package, RefreshCw, Shield } from 'lucide-react';
import type { CatalogProduct, ShopCategory } from './catalog';
import { getCatalogProduct, SHOP_PRODUCTS } from './catalog';

export type ProductVariantGroup = {
  type: string;
  label: string;
  options: string[];
};

export type ProductDetailView = {
  id: number;
  name: string;
  nameAr?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  sku: string;
  /** Short label for breadcrumb (e.g. Physical Products). */
  categoryName: string;
  shopCategory: ShopCategory;
  subcategory: string;
  subcategoryAr?: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  variants: ProductVariantGroup[];
  inStock: boolean;
  stockCount?: number;
  features: string[];
  specifications?: Record<string, string>;
  shipping?: { title: string; description: string; icon: LucideIcon };
  returns?: { title: string; description: string; icon: LucideIcon };
  warranty?: { title: string; description: string; icon: LucideIcon };
};

const defaultShipping = {
  title: 'Fast Shipping',
  description: 'Your order will be delivered wherever you are',
  icon: Package,
};

const defaultReturns = {
  title: '14-Day Returns',
  description: 'Easy returns within 14 days of purchase',
  icon: RefreshCw,
};

const defaultWarranty = {
  title: 'Quality Guarantee',
  description: 'Authentic and high quality products',
  icon: Shield,
};

function categoryNameForShop(cat: ShopCategory): string {
  if (cat === 'digital') return 'Digital Products';
  if (cat === 'biogeometry') return 'BioGeometry';
  return 'Physical Products';
}

const RICH: Record<number, Partial<ProductDetailView>> = {
  1: {
    rating: 4.9,
    reviews: 84,
    sku: 'LUN-CAN-001',
    shortDescription:
      'Fire Element Candle - A quiet ritual crafted from 100% pure beeswax with organic frankincense infusion.',
    fullDescription:
      'Solar Flame is not a candle. It is a quiet ritual. Crafted from 100% pure beeswax with a light infusion of organic frankincense, this blend burns clean, steady, and close to nature. The scent is soft, grounding, and safe for both children and pets.\n\nThe wooden wick produces a gentle crackle, bringing warmth without excess. Each burn becomes intentional. Inspired by the fire element, Solar Flame represents transformation, focus, and inner direction.\n\n290ml, 40-50 hours burn time.',
    images: [
      'https://cdn.salla.sa/dPjdmy/a68964a8-6cbb-4aa6-b83b-dcf18df253b1-500x500-UkE3UytRBSfA3vByMINgHc75qvZaGGF2L4UR0bcJ.jpg',
      'https://cdn.salla.sa/dPjdmy/6d9e204f-107d-4f83-9dd0-f1af0eacc481-1000x1000-UkE3UytRBSfA3vByMINgHc75qvZaGGF2L4UR0bcJ.jpg',
      'https://cdn.salla.sa/dPjdmy/a243c6a6-997c-4071-8851-343ece156e03-1000x1000-OkRGfiqmnLVqhMC2Via62t9YWlSMxYGmwKaaBQuY.jpg',
    ],
    variants: [{ type: 'size', label: 'Size', options: ['290ml'] }],
    stockCount: 15,
    features: [
      '100% Pure Beeswax - natural and sustainable',
      'Organic Frankincense infusion for gentle aroma',
      'Wooden wick with gentle crackling sound',
      '40-50 hours of clean burning',
      'Safe for children and pets',
      'Fire element energy - transformation and focus',
      '290ml premium glass container',
      'Eco-friendly and toxin-free',
    ],
    specifications: {
      Volume: '290ml',
      'Burn Time': '40-50 hours',
      Material: '100% Pure Beeswax',
      Scent: 'Organic Frankincense',
      'Wick Type': 'Wooden Wick',
      Element: 'Fire',
    },
    shipping: defaultShipping,
    returns: defaultReturns,
    warranty: defaultWarranty,
  },
  5: {
    rating: 4.8,
    reviews: 67,
    sku: 'LUN-JRN-005',
    shortDescription:
      'Your cosmic companion for dream interpretation and self-discovery combining ancient wisdom with modern psychology.',
    fullDescription:
      "This comprehensive dream journal combines ancient wisdom with modern psychology. Features monthly calendars, dream tracking pages, symbol interpretation guides, and lunar phase tracking.\n\nIncludes guided prompts for deeper dream analysis and personal growth. The hardcover binding ensures durability while premium paper quality makes writing a pleasure.\n\nWhether you're exploring your subconscious or tracking patterns in your dreams, this journal provides the perfect structure for your journey of self-discovery.\n\nHardcover, 365 pages.",
    images: ['https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png'],
    variants: [
      {
        type: 'cover',
        label: 'Cover',
        options: ['Midnight Blue', 'Celestial Purple', 'Lunar Silver'],
      },
    ],
    stockCount: 28,
    features: [
      '365 pages for daily dream tracking',
      'Monthly calendar spreads with lunar phases',
      'Symbol interpretation guide section',
      'Guided prompts for dream analysis',
      'Personal growth reflection pages',
      'Hardcover binding for durability',
      'Premium quality paper',
      'Ribbon bookmark included',
    ],
    specifications: {
      Pages: '365 pages',
      Binding: 'Hardcover',
      'Paper Quality': 'Premium',
      'Cover Options': 'Midnight Blue, Celestial Purple, Lunar Silver',
      Features: 'Dream tracking, Lunar calendar, Symbol guide',
      Year: '2026',
    },
  },
  8: {
    rating: 4.9,
    reviews: 156,
    sku: 'LUN-DIG-008',
    shortDescription:
      'Comprehensive digital guide to understanding your dreams with over 500 symbols and their meanings.',
    fullDescription:
      "This downloadable PDF includes over 500 dream symbols and their meanings, guided dream analysis worksheets, lucid dreaming techniques, and journal templates. Combines ancient wisdom with modern psychology.\n\nPerfect for anyone interested in understanding the deeper meanings of their dreams. Includes practical exercises for developing dream recall, techniques for lucid dreaming, and frameworks for personal interpretation.\n\nInstant download, 150 pages.",
    images: ['https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png'],
    variants: [],
    features: [
      'Over 500 dream symbols with detailed meanings',
      'Guided dream analysis worksheets',
      'Lucid dreaming techniques and exercises',
      'Printable journal templates',
      'Ancient wisdom and modern psychology',
      'Instant PDF download - 150 pages',
      'Lifetime access and updates',
      'Mobile and desktop compatible',
    ],
  },
};

function buildFromCatalog(p: CatalogProduct): ProductDetailView {
  const lines = p.description.split(/[.]\s+/).filter(Boolean);
  const features = lines.slice(0, 8).map((line) => line.replace(/\.$/, ''));
  const bgNote =
    p.category === 'biogeometry'
      ? '\n\nRepresentative listing inspired by the personal and home BioGeometry® solutions described at biogeometry.ca. Lunology is an independent retailer; product names and science belong to their respective owners.'
      : '';
  return {
    id: p.id,
    name: p.name,
    nameAr: p.nameAr,
    price: p.price,
    rating: 4.8,
    reviews: 24 + (p.id % 40),
    sku: `LUN-${p.category === 'biogeometry' ? 'BG' : p.category === 'digital' ? 'DIG' : 'PHY'}-${String(p.id).padStart(3, '0')}`,
    categoryName: categoryNameForShop(p.category),
    shopCategory: p.category,
    subcategory: p.subcategory,
    subcategoryAr: p.subcategoryAr,
    shortDescription: p.description,
    fullDescription: `${p.description}\n\n${p.description}${bgNote}`,
    images: [p.image],
    variants: [],
    inStock: p.inStock,
    stockCount: p.inStock ? 12 : 0,
    features: features.length ? features : [p.description],
    specifications: {
      Category: p.subcategory,
      Availability: p.inStock ? 'In stock' : 'Out of stock',
    },
    shipping: defaultShipping,
    returns: defaultReturns,
    warranty: defaultWarranty,
  };
}

export function getProductDetail(id: string | undefined): ProductDetailView | null {
  const num = parseInt(id || '', 10);
  if (Number.isNaN(num)) return null;
  const base = getCatalogProduct(num);
  if (!base) return null;
  const rich = RICH[num];
  const merged = { ...buildFromCatalog(base), ...rich };
  merged.categoryName = categoryNameForShop(base.category);
  merged.shopCategory = base.category;
  merged.nameAr = base.nameAr;
  merged.price = base.price;
    merged.subcategory = base.subcategory;
    merged.subcategoryAr = base.subcategoryAr;
  if (!merged.images?.length) merged.images = [base.image];
  return merged;
}

export type RelatedProduct = {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
};

export function getRelatedProducts(
  currentId: number,
  shopCategory: ShopCategory,
  limit = 4,
): RelatedProduct[] {
  return SHOP_PRODUCTS.filter((p) => p.id !== currentId && p.category === shopCategory)
    .slice(0, limit)
    .map((p) => ({
      id: p.id,
      name: p.name,
      price: p.price,
      image: p.image,
      rating: 4.5 + (p.id % 5) * 0.1,
    }));
}
