import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ShoppingCart,
  Heart,
  Check,
  ChevronLeft,
  X,
  ZoomIn,
  Star,
} from "lucide-react";
import { useCart } from "../CartProvider";
import { useLanguage } from "../LanguageProvider";
import { SEO, generateProductSchema, generateBreadcrumbSchema } from "../SEO";
import { getProductDetail, getRelatedProducts } from "../../data/productDetails";
import { SHOP_PRODUCTS } from "../../data/catalog";
import { NotFound } from "./NotFound";

export function ProductDetail() {
  const { id } = useParams();
  const product = getProductDetail(id);
  const { addToCart } = useCart();
  const { t, language } = useLanguage();

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    let list = getRelatedProducts(product.id, product.shopCategory, 4);
    if (list.length >= 4) return list;
    const ids = new Set(list.map((r) => r.id));
    for (const p of SHOP_PRODUCTS) {
      if (p.id === product.id || ids.has(p.id)) continue;
      list.push({
        id: p.id,
        name: p.name,
        price: p.price,
        image: p.image,
        rating: 4.6 + (p.id % 4) * 0.1,
      });
      ids.add(p.id);
      if (list.length >= 4) break;
    }
    return list;
  }, [product]);

  const [selectedImage, setSelectedImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedVariants, setSelectedVariants] = useState<
    Record<string, string>
  >({});
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "description" | "features" | "specs"
  >("description");
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setSelectedImage(0);
    setSelectedVariants({});
    setQuantity(1);
    setActiveTab("description");
  }, [id]);

  if (!product) {
    return <NotFound />;
  }

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100,
      )
    : 0;

  // Check if all required variants are selected
  const hasVariants = product.variants && product.variants.length > 0;
  const allVariantsSelected = hasVariants
    ? product.variants.every((variant: any) => selectedVariants[variant.type])
    : true;

  const handleAddToCart = () => {
    if (!product.inStock || (hasVariants && !allVariantsSelected)) {
      return;
    }

    addToCart({
      id: product.id,
      name: product.name,
      nameAr: product.nameAr,
      price: product.price,
      image: product.images[0],
      variants: hasVariants ? selectedVariants : undefined,
      quantity,
    });

    // Optional: Show success message or animation
    // You could add a toast notification here
  };

  // Generate breadcrumb schema
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Shop", url: "/shop" },
    {
      name: product.categoryName,
      url: `/shop/${product.shopCategory}`,
    },
    { name: product.name, url: `/product/${product.id}` },
  ];

  const productSchema = generateProductSchema({
    ...product,
    image: product.images[0],
    description: product.fullDescription,
  });

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  const combinedSchema = {
    "@context": "https://schema.org",
    "@graph": [productSchema, breadcrumbSchema],
  };

  return (
    <>
      <SEO
        title={`${product.name} - Lunology | ${product.shortDescription}`}
        description={product.fullDescription}
        keywords={`${product.name}, ${product.categoryName}, ${product.subcategory}, Lunology, spiritual products, cosmic wisdom`}
        image={product.images[0]}
        type="product"
        schema={combinedSchema}
      />
      <div className="pt-20 min-h-screen">
        {/* Breadcrumb */}
        <div
          className="py-4 px-4 border-b border-border"
          style={{
            backgroundColor: "var(--banner-bg)",
            color: "var(--banner-foreground)",
          }}
        >
          <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm opacity-90">
            <Link to="/" className="hover:opacity-100 transition-opacity">
              {t("common.home")}
            </Link>
            <span>/</span>
            <Link to="/shop" className="hover:opacity-100 transition-opacity">
              {t("nav.shop")}
            </Link>
            <span>/</span>
            <span className="opacity-100">{product.name}</span>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-8 md:py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <Link
              to={`/shop/${product.shopCategory}`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors group"
            >
              <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {language === "ar" ? "العودة للمتجر" : "Back to Shop"}
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Image Gallery */}
              <div className="space-y-4">
                <motion.div
                  className="relative overflow-hidden rounded-2xl aspect-square bg-muted/30 cursor-pointer group"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={() => setLightboxOpen(true)}
                >
                  <img
                    src={product.images[selectedImage]}
                    alt={
                      language === "ar"
                        ? product.nameAr || product.name
                        : product.name
                    }
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity text-white" />
                  </div>

                  {product.originalPrice && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-destructive text-destructive-foreground rounded-full text-sm">
                      Save {discount}%
                    </div>
                  )}
                </motion.div>

                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-3">
                    {product.images.map((image: string, index: number) => (
                      <button
                        type="button"
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`relative overflow-hidden rounded-lg aspect-square border-2 transition-all ${
                          selectedImage === index
                            ? "border-primary ring-2 ring-primary/20"
                            : "border-transparent hover:border-border"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Product Info - Sticky on desktop */}
              <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
                <div>
                  <p className="text-xs text-primary tracking-wider uppercase mb-2">
                    {language === "ar"
                      ? product.subcategoryAr || product.subcategory
                      : product.subcategory}
                  </p>
                  <h1
                    className="text-3xl md:text-4xl lg:text-5xl mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {language === "ar"
                      ? product.nameAr || product.name
                      : product.name}
                  </h1>

                  {/* Rating */}
                  {product.rating && (
                    <div className="flex items-center gap-3 mb-4">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "fill-primary text-primary"
                                : "text-border"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                  )}

                  {/* Price */}
                  <div className="flex flex-col gap-1 mb-4">
                    <div className="flex items-baseline gap-3">
                      <p
                        className="text-4xl"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {t("common.sar")} {product.price}
                      </p>
                      {product.originalPrice && (
                        <p className="text-2xl text-muted-foreground line-through">
                          {t("common.sar")} {product.originalPrice}
                        </p>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {language === "ar"
                        ? "شامل ضريبة القيمة المضافة (١٥٪)"
                        : "Including 15% VAT"}
                    </p>
                  </div>

                  {/* Stock Status */}
                  <div className="flex items-center gap-4 mb-4">
                    {product.inStock ? (
                      <>
                        <span className="flex items-center gap-2 text-sm text-green-600 dark:text-green-500">
                          <Check className="w-4 h-4" />
                          In Stock
                        </span>
                        {product.stockCount && (
                          <span className="text-sm text-muted-foreground">
                            {product.stockCount} items available
                          </span>
                        )}
                      </>
                    ) : (
                      <span className="text-sm text-destructive">
                        Out of Stock
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-muted-foreground mb-6">
                    SKU: {product.sku}
                  </p>
                </div>

                {/* Short Description */}
                <div className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/10">
                  <p className="leading-relaxed">{product.shortDescription}</p>
                </div>

                {/* Variants */}
                {product.variants?.map((variant: any) => (
                  <div key={variant.type}>
                    <h3 className="mb-3 text-sm tracking-wider uppercase text-secondary">
                      {variant.label || variant.type}
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {variant.options.map((option: string) => (
                        <button
                          type="button"
                          key={option}
                          onClick={() =>
                            setSelectedVariants({
                              ...selectedVariants,
                              [variant.type]: option,
                            })
                          }
                          className={`px-5 py-2.5 border-2 rounded-xl transition-all ${
                            selectedVariants[variant.type] === option
                              ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                              : "border-border hover:border-primary hover:bg-muted"
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
                  <h3 className="mb-3 text-sm tracking-wider uppercase text-secondary">
                    Quantity
                  </h3>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-12 border-2 border-border rounded-xl hover:border-primary hover:bg-muted transition-colors"
                    >
                      -
                    </button>
                    <span className="w-16 text-center text-lg">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-12 border-2 border-border rounded-xl hover:border-primary hover:bg-muted transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={handleAddToCart}
                    className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-xl hover:shadow-xl hover:shadow-primary/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={
                      !product.inStock || (hasVariants && !allVariantsSelected)
                    }
                    title={
                      !product.inStock
                        ? t("product.outOfStock")
                        : hasVariants && !allVariantsSelected
                          ? language === "ar"
                            ? "يرجى اختيار جميع الخيارات"
                            : "Please select all options"
                          : ""
                    }
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {t("product.addToCart")}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`p-4 border-2 rounded-xl transition-all ${
                      isFavorite
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border hover:border-primary hover:bg-muted"
                    }`}
                    aria-label="Add to favorites"
                  >
                    <Heart
                      className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`}
                    />
                  </button>
                </div>

                {/* Variant Selection Helper */}
                {hasVariants && !allVariantsSelected && (
                  <p className="text-sm text-muted-foreground text-center">
                    {language === "ar"
                      ? "* يرجى اختيار جميع الخيارات قبل الإضافة إلى السلة"
                      : "* Please select all options before adding to cart"}
                  </p>
                )}
              </div>
            </div>

            {/* Tabs Section */}
            <div className="mt-16 lg:mt-24">
              <div className="border-b border-border mb-8">
                <div className="flex gap-8">
                  <button
                    type="button"
                    onClick={() => setActiveTab("description")}
                    aria-pressed={activeTab === "description"}
                    className={`pb-4 text-sm tracking-wide uppercase transition-colors relative ${
                      activeTab === "description"
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Description
                    {activeTab === "description" && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("features")}
                    aria-pressed={activeTab === "features"}
                    className={`pb-4 text-sm tracking-wide uppercase transition-colors relative ${
                      activeTab === "features"
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Features
                    {activeTab === "features" && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                  {product.specifications && (
                    <button
                      type="button"
                      onClick={() => setActiveTab("specs")}
                      aria-pressed={activeTab === "specs"}
                      className={`pb-4 text-sm tracking-wide uppercase transition-colors relative ${
                        activeTab === "specs"
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Specifications
                      {activeTab === "specs" && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        />
                      )}
                    </button>
                  )}
                </div>
              </div>

              <AnimatePresence mode="wait">
                {activeTab === "description" && (
                  <motion.div
                    key="description"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="max-w-4xl"
                  >
                    <div className="p-8 bg-gradient-to-br from-card via-card to-muted/30 rounded-2xl border border-border">
                      <div className="prose prose-lg max-w-none">
                        {product.fullDescription.split("\n").map(
                          (paragraph: string, index: number) =>
                            paragraph.trim() && (
                              <p
                                key={index}
                                className="text-foreground/80 leading-relaxed mb-4 last:mb-0"
                              >
                                {paragraph}
                              </p>
                            ),
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === "features" && (
                  <motion.div
                    key="features"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="max-w-4xl"
                  >
                    <div className="p-8 bg-gradient-to-br from-primary/5 via-accent/5 to-card rounded-2xl border border-primary/10">
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.features?.map(
                          (feature: string, index: number) => (
                            <motion.li
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="flex items-start gap-3 p-5 bg-background/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 transition-all shadow-sm hover:shadow-md"
                            >
                              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                <Check className="w-4 h-4 text-primary" />
                              </div>
                              <span className="text-foreground/80 leading-relaxed">
                                {feature}
                              </span>
                            </motion.li>
                          ),
                        )}
                      </ul>
                    </div>
                  </motion.div>
                )}

                {activeTab === "specs" && product.specifications && (
                  <motion.div
                    key="specs"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="max-w-3xl"
                  >
                    <div className="p-8 bg-card rounded-2xl border border-border">
                      <div className="space-y-1">
                        {Object.entries(product.specifications).map(
                          ([key, value]: [string, any], index: number) => (
                            <motion.div
                              key={key}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                              className="flex py-4 border-b border-border last:border-0 hover:bg-muted/30 px-4 -mx-4 rounded-lg transition-colors"
                            >
                              <dt className="w-1/3 font-medium text-foreground/90">
                                {key}
                              </dt>
                              <dd className="w-2/3 text-foreground/70">
                                {value}
                              </dd>
                            </motion.div>
                          ),
                        )}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Related Products */}
            <div className="mt-24">
              <div className="flex items-center justify-between mb-8">
                <h2
                  className="text-3xl md:text-4xl"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  You May Also Like
                </h2>
                <Link
                  to="/shop"
                  className="text-sm text-primary hover:underline"
                >
                  View All
                </Link>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {relatedProducts.map((relatedProduct, index) => (
                  <motion.div
                    key={relatedProduct.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={`/product/${relatedProduct.id}`}
                      className="group block"
                    >
                      <div className="relative overflow-hidden rounded-xl mb-3 aspect-square border border-border/50 group-hover:border-primary/30 transition-all shadow-sm group-hover:shadow-xl group-hover:shadow-primary/10">
                        <img
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <div className="space-y-1">
                        <h3
                          className="text-sm md:text-base"
                          style={{ fontFamily: "var(--font-heading)" }}
                        >
                          {(() => {
                            const row = SHOP_PRODUCTS.find(
                              (p) => p.id === relatedProduct.id,
                            );
                            return language === "ar" && row
                              ? row.nameAr
                              : relatedProduct.name;
                          })()}
                        </h3>

                        <div className="flex items-center gap-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${
                                  i < Math.floor(relatedProduct.rating)
                                    ? "fill-primary text-primary"
                                    : "text-border"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm md:text-base text-muted-foreground">
                          {t("common.sar")} {relatedProduct.price}
                        </p>
                        <p className="text-[10px] text-muted-foreground">
                          {language === "ar"
                            ? "شامل ضريبة القيمة المضافة"
                            : "Incl. VAT"}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
              onClick={() => setLightboxOpen(false)}
            >
              <button
                type="button"
                onClick={() => setLightboxOpen(false)}
                className="absolute top-4 right-4 p-2 text-white hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <motion.img
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                src={product.images[selectedImage]}
                alt={product.name}
                className="max-w-full max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
