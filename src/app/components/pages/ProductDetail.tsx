import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { motion } from 'motion/react';
import { ShoppingCart, Heart, Check, ChevronLeft } from 'lucide-react';

const productData: Record<string, any> = {
  '1': {
    id: 1,
    name: 'Lunar Phase Journal',
    price: 299,
    sku: 'LUN-JRN-001',
    category: 'Physical Products',
    subcategory: 'Journals',
    shortDescription:
      'A beautifully crafted journal designed to align with the lunar cycles, helping you track your intentions, manifestations, and inner journey.',
    fullDescription:
      'The Lunar Phase Journal is more than a notebook—it\'s a sacred companion for your spiritual practice. Each page is thoughtfully designed to guide you through the phases of the moon, offering prompts for reflection, intention-setting, and manifestation work. The journal features premium acid-free paper, a ribbon bookmark, and a protective slipcase adorned with celestial artwork.',
    images: [
      'https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=800&q=80',
      'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=800&q=80',
      'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=800&q=80',
    ],
    variants: [
      { type: 'size', options: ['A5', 'A4'] },
      { type: 'color', options: ['Midnight Blue', 'Silver Moon', 'Deep Purple'] },
    ],
    inStock: true,
    features: [
      '180 pages of premium acid-free paper',
      'Lunar phase tracking spreads',
      'Monthly intention-setting pages',
      'Ribbon bookmark',
      'Protective slipcase',
      'Celestial artwork throughout',
    ],
  },
  '2': {
    id: 2,
    name: 'Cosmic Meditation Guide',
    price: 149,
    sku: 'LUN-DIG-002',
    category: 'Digital Products',
    subcategory: 'Guides',
    shortDescription:
      'A comprehensive digital guide to meditation practices aligned with cosmic energies and lunar phases.',
    fullDescription:
      'This extensive digital guide offers meditation techniques, breathing exercises, and mindfulness practices specifically designed to harmonize with lunar and cosmic cycles. Includes audio meditations, PDF workbooks, and monthly lunar calendars. Perfect for both beginners and experienced practitioners.',
    images: [
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80',
      'https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80',
    ],
    variants: [],
    inStock: true,
    features: [
      '12 guided audio meditations',
      'PDF workbook with 50+ pages',
      'Monthly lunar meditation calendar',
      'Breathing technique videos',
      'Lifetime access and updates',
    ],
  },
};

const relatedProducts = [
  {
    id: 3,
    name: 'Celestial Tarot Deck',
    price: 399,
    image: 'https://images.unsplash.com/photo-1591328194231-d5e1f2c78c2f?w=800&q=80',
  },
  {
    id: 4,
    name: 'Moon Ritual Kit',
    price: 499,
    image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=800&q=80',
  },
  {
    id: 6,
    name: 'Crystal Healing Set',
    price: 349,
    image: 'https://images.unsplash.com/photo-1602524206684-76b7ba355c3f?w=800&q=80',
  },
];

export function ProductDetail() {
  const { id } = useParams();
  const product = productData[id || '1'] || productData['1'];

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariants, setSelectedVariants] = useState<Record<string, string>>({});
  const [quantity, setQuantity] = useState(1);
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <div className="pt-20 min-h-screen">
      {/* Breadcrumb */}
      <div className="py-6 px-4 border-b border-border">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-foreground transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>
      </div>

      {/* Product Detail */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              <motion.div
                className="relative overflow-hidden rounded-lg aspect-square"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {product.images.length > 1 && (
                <div className="flex gap-4">
                  {product.images.map((image: string, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative overflow-hidden rounded-lg w-24 h-24 border-2 transition-all ${
                        selectedImage === index ? 'border-primary' : 'border-transparent'
                      }`}
                    >
                      <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-xs text-primary tracking-wider uppercase mb-2">{product.subcategory}</p>
                <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  {product.name}
                </h1>
                <div className="flex items-baseline gap-4 mb-4">
                  <p className="text-3xl">SAR {product.price}</p>
                  {product.inStock ? (
                    <span className="flex items-center gap-1 text-sm text-green-500">
                      <Check className="w-4 h-4" />
                      In Stock
                    </span>
                  ) : (
                    <span className="text-sm text-destructive">Out of Stock</span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">SKU: {product.sku}</p>
              </div>

              {/* Short Description */}
              <div className="p-6 bg-card/50 rounded-lg border border-border">
                <p className="leading-relaxed">{product.shortDescription}</p>
              </div>

              {/* Variants */}
              {product.variants.map((variant: any) => (
                <div key={variant.type}>
                  <h3 className="mb-3 text-sm tracking-wider uppercase text-secondary capitalize">{variant.type}</h3>
                  <div className="flex flex-wrap gap-3">
                    {variant.options.map((option: string) => (
                      <button
                        key={option}
                        onClick={() => setSelectedVariants({ ...selectedVariants, [variant.type]: option })}
                        className={`px-4 py-2 border rounded-lg transition-all ${
                          selectedVariants[variant.type] === option
                            ? 'border-primary bg-primary text-primary-foreground'
                            : 'border-border hover:border-primary'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}

              {/* Quantity */}
              <div>
                <h3 className="mb-3 text-sm tracking-wider uppercase text-secondary">Quantity</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 border border-border rounded-lg hover:bg-muted transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all disabled:opacity-50" disabled={!product.inStock}>
                  <ShoppingCart className="w-5 h-5" />
                  Add to Cart
                </button>
                <button className="p-4 border border-border rounded-lg hover:bg-muted transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Features */}
              {product.features && (
                <div className="pt-6 border-t border-border">
                  <h3 className="mb-4 text-sm tracking-wider uppercase text-secondary">Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Full Description */}
          <div className="mt-16 max-w-4xl">
            <h2 className="text-3xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Description
            </h2>
            <div className={`prose prose-invert max-w-none ${!showFullDescription ? 'line-clamp-4' : ''}`}>
              <p className="text-muted-foreground leading-relaxed">{product.fullDescription}</p>
            </div>
            {product.fullDescription.length > 300 && (
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="mt-4 text-primary hover:underline"
              >
                {showFullDescription ? 'Show Less' : 'Read More'}
              </button>
            )}
          </div>

          {/* Related Products */}
          <div className="mt-24">
            <h2 className="text-3xl mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/product/${relatedProduct.id}`} className="group block">
                    <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-lg mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                      {relatedProduct.name}
                    </h3>
                    <p className="text-muted-foreground">SAR {relatedProduct.price}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
