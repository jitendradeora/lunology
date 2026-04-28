import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "../LanguageProvider";
import { HeroWithMoon } from "../HeroWithMoon";
import { MoonPhaseWidget } from "../MoonPhaseWidget";
import { SEO, organizationSchema, websiteSchema } from "../SEO";

const featuredProducts = [
  {
    id: 1,
    name: "Solar Flame",
    price: 189,
    image:
      "https://cdn.salla.sa/dPjdmy/a68964a8-6cbb-4aa6-b83b-dcf18df253b1-500x500-UkE3UytRBSfA3vByMINgHc75qvZaGGF2L4UR0bcJ.jpg",
    category: "Physical",
    description:
      "Fire Element Candle - Crafted from 100% pure beeswax with organic frankincense, wooden wick, 40-50 hours burn time",
    descriptionAr:
      "شمعة عنصر النار - مصنوعة من شمع النحل الطبيعي 100% مع لبان الذكر العضوي، فتيل خشبي، 40-50 ساعة احتراق",
  },
  {
    id: 5,
    name: "Dreamology Journal 2026",
    price: 159,
    image:
      "https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png",
    category: "Physical",
    description:
      "Comprehensive dream journal with monthly calendars, symbol interpretation guides, and lunar phase tracking",
    descriptionAr:
      "مفكرة أحلام شاملة مع تقاويم شهرية وأدلة تفسير الرموز وتتبع مراحل القمر",
  },
  {
    id: 6,
    name: "Annual Planner 2026 - Cosmic Edition",
    price: 179,
    image:
      "https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png",
    category: "Physical",
    description:
      "Monthly and weekly spreads with goal-setting pages, habit trackers, and lunar phase calendars",
    descriptionAr:
      "جداول شهرية وأسبوعية مع صفحات تحديد الأهداف ومتتبعات العادات وتقاويم مراحل القمر",
  },
  {
    id: 8,
    name: "Digital Dream Interpretation Guide",
    price: 79,
    image:
      "https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png",
    category: "Digital",
    description:
      "Over 500 dream symbols, guided worksheets, lucid dreaming techniques - Instant PDF download",
    descriptionAr:
      "أكثر من 500 رمز للأحلام وأوراق عمل موجهة وتقنيات الأحلام الواضحة - تنزيل PDF فوري",
  },
];

export function Home() {
  const { t, language } = useLanguage();

  const productNames: Record<number, { en: string; ar: string }> = {
    1: { en: "Solar Flame", ar: "سولار فلايم" },
    5: { en: "Dreamology Journal 2026", ar: "مفكرة دريمولوجي 2026" },
    6: {
      en: "Annual Planner 2026 - Cosmic Edition",
      ar: "المفكرة السنوية 2026 - الإصدار الكوني",
    },
    8: {
      en: "Digital Dream Interpretation Guide",
      ar: "الدليل الرقمي لتفسير الأحلام",
    },
  };

  const categoryNames: Record<string, { en: string; ar: string }> = {
    Physical: { en: "Physical", ar: "مادي" },
    Digital: { en: "Digital", ar: "رقمي" },
  };

  const homeSchema = {
    "@context": "https://schema.org",
    "@graph": [organizationSchema, websiteSchema],
  };

  return (
    <div className="pt-20">
      <SEO
        title="Lunology - Your Cosmic Companion for Self-Discovery & Spiritual Growth"
        description="Discover Lunology - a cosmic companion on your journey of self-discovery, intuition, and inner connection. Explore dream journals, lunar planners, meditation guides, and spiritual products combining ancient wisdom with modern thought."
        keywords="Lunology, moon phases, dream interpretation, lunar calendar, meditation, spiritual products, cosmic wisdom, self-discovery, mindfulness, astrology, zodiac houses, dream journal, annual planner, BioGeometry, Elements of Life"
        schema={homeSchema}
      />

      {/* Enhanced Hero with Animated Moon */}
      <HeroWithMoon />

      {/* Moon Phase Widget */}
      <MoonPhaseWidget />

      {/* About Preview */}
      <section className="py-24 px-4 relative">
        <div
          className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"
          aria-hidden="true"
        ></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="text-4xl md:text-5xl mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              A Space of Consciousness
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Lunology brings together knowledge, culture, and spirituality in a
              harmonious blend. We believe in the power of lunar cycles, cosmic
              wisdom, and the journey toward self-discovery and inner peace.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-full transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Our Story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 px-4 bg-muted/30 bg-gradient-to-br from-primary/5 via-primary/5 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Featured Products
            </h2>
            <p className="text-muted-foreground">
              Discover tools for your spiritual journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/product/${product.id}`} className="group block">
                  <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square border border-border/50 group-hover:border-primary/30 transition-all shadow-sm group-hover:shadow-xl group-hover:shadow-primary/10">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs text-primary tracking-wider uppercase">
                      {language === "ar"
                        ? categoryNames[product.category].ar
                        : categoryNames[product.category].en}
                    </p>
                    <h3
                      className="text-lg group-hover:text-primary transition-colors"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {language === "ar"
                        ? productNames[product.id].ar
                        : productNames[product.id].en}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {language === "ar"
                        ? product.descriptionAr
                        : product.description}
                    </p>
                    <p className="text-muted-foreground">
                      {t("common.sar")} {product.price}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full hover:bg-muted transition-colors"
            >
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[150px]"></div>
        </div>

        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-4xl md:text-5xl mb-8"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The Journey Within
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                We honor the natural rhythms of life, the wisdom of the moon,
                and the infinite potential of consciousness. Each product is
                carefully curated to support your path toward awareness,
                intuition, and spiritual growth.
              </p>
              <p>
                Whether you're just beginning your journey or deepening your
                practice, Lunology offers companions for every phase of your
                cosmic exploration.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-4 relative overflow-hidden bg-gradient-to-br from-primary/5 via-primary/5 to-primary/5 border-t border-border">
        <div className="relative max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-3xl md:text-4xl mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Join the Journey
            </h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive lunar insights, new arrivals, and exclusive
              offerings
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email"
                autoComplete="email"
                required
                className="flex-1 px-6 py-3.5 bg-input-background border-2 border-border rounded-full focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-primary text-primary-foreground rounded-full hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
