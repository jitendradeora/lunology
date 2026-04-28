import { useState } from 'react';
import { Link, useParams } from 'react-router';
import { motion } from 'motion/react';
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';
import { SEO, generateBreadcrumbSchema } from '../SEO';

const products = [
  {
    id: 1,
    name: 'Solar Flame',
    nameAr: 'سولار فلايم',
    description: 'Fire Element Candle - Crafted from 100% pure beeswax with organic frankincense, wooden wick, 40-50 hours burn time',
    descriptionAr: 'شمعة عنصر النار - مصنوعة من شمع النحل الطبيعي 100% مع لبان الذكر العضوي، فتيل خشبي، 40-50 ساعة احتراق',
    price: 189,
    image: 'https://cdn.salla.sa/dPjdmy/a68964a8-6cbb-4aa6-b83b-dcf18df253b1-500x500-UkE3UytRBSfA3vByMINgHc75qvZaGGF2L4UR0bcJ.jpg',
    category: 'physical',
    subcategory: 'Candles',
    subcategoryAr: 'شموع',
    inStock: true,
  },
  {
    id: 2,
    name: 'Lunar Glow',
    nameAr: 'التوهج القمري',
    description: 'Water Element Candle - Pure beeswax with lavender and chamomile, perfect for meditation and dream work',
    descriptionAr: 'شمعة عنصر الماء - شمع نحل نقي مع اللافندر والبابونج، مثالية للتأمل وعمل الأحلام',
    price: 189,
    image: 'https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png',
    category: 'physical',
    subcategory: 'Candles',
    subcategoryAr: 'شموع',
    inStock: true,
  },
  {
    id: 3,
    name: 'Earth Roots',
    nameAr: 'جذور الأرض',
    description: 'Earth Element Candle - Beeswax infused with cedar and patchouli for grounding and stability',
    descriptionAr: 'شمعة عنصر الأرض - شمع نحل مملوء بخشب الأرز والباتشولي للتأريض والاستقرار',
    price: 189,
    image: 'https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png',
    category: 'physical',
    subcategory: 'Candles',
    subcategoryAr: 'شموع',
    inStock: true,
  },
  {
    id: 4,
    name: 'Air Whisper',
    nameAr: 'همسة الهواء',
    description: 'Air Element Candle - Pure beeswax with eucalyptus and mint for clarity and creative flow',
    descriptionAr: 'شمعة عنصر الهواء - شمع نحل نقي مع الكافور والنعناع للوضوح والتدفق الإبداعي',
    price: 189,
    image: 'https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png',
    category: 'physical',
    subcategory: 'Candles',
    subcategoryAr: 'شموع',
    inStock: true,
  },
  {
    id: 5,
    name: 'Dreamology Journal 2026',
    nameAr: 'مفكرة دريمولوجي 2026',
    description: 'Comprehensive dream journal with monthly calendars, symbol interpretation guides, and lunar phase tracking',
    descriptionAr: 'مفكرة أحلام شاملة مع تقاويم شهرية وأدلة تفسير الرموز وتتبع مراحل القمر',
    price: 159,
    image: 'https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png',
    category: 'physical',
    subcategory: 'Journals',
    subcategoryAr: 'دفاتر',
    inStock: true,
  },
  {
    id: 6,
    name: 'Annual Planner 2026 - Cosmic Edition',
    nameAr: 'المفكرة السنوية 2026 - الإصدار الكوني',
    description: 'Monthly and weekly spreads with goal-setting pages, habit trackers, and lunar phase calendars',
    descriptionAr: 'جداول شهرية وأسبوعية مع صفحات تحديد الأهداف ومتتبعات العادات وتقاويم مراحل القمر',
    price: 179,
    image: 'https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png',
    category: 'physical',
    subcategory: 'Planners',
    subcategoryAr: 'مخططات',
    inStock: true,
  },
  {
    id: 7,
    name: 'Mindfulness Journal',
    nameAr: 'مفكرة اليقظة الذهنية',
    description: 'Daily prompts for reflection, gratitude practices, meditation tracking, and mindful living exercises',
    descriptionAr: 'مطالبات يومية للتأمل وممارسات الامتنان وتتبع التأمل وتمارين العيش الواعي',
    price: 129,
    image: 'https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png',
    category: 'physical',
    subcategory: 'Journals',
    subcategoryAr: 'دفاتر',
    inStock: true,
  },
  {
    id: 8,
    name: 'Digital Dream Interpretation Guide',
    nameAr: 'الدليل الرقمي لتفسير الأحلام',
    description: 'Over 500 dream symbols, guided worksheets, lucid dreaming techniques - Instant PDF download',
    descriptionAr: 'أكثر من 500 رمز للأحلام وأوراق عمل موجهة وتقنيات الأحلام الواضحة - تنزيل PDF فوري',
    price: 79,
    image: 'https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png',
    category: 'digital',
    subcategory: 'Guides',
    subcategoryAr: 'أدلة',
    inStock: true,
  },
  {
    id: 9,
    name: 'Digital Lunar Calendar 2026',
    nameAr: 'التقويم القمري الرقمي 2026',
    description: 'Moon phases, astrological insights, ritual suggestions - Printable PDF format',
    descriptionAr: 'مراحل القمر ورؤى فلكية واقتراحات طقوس - بصيغة PDF قابلة للطباعة',
    price: 59,
    image: 'https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png',
    category: 'digital',
    subcategory: 'Calendars',
    subcategoryAr: 'تقاويم',
    inStock: true,
  },
  {
    id: 10,
    name: 'Meditation & Intention Setting Workbook',
    nameAr: 'كتاب عمل التأمل وتحديد النية',
    description: '30 guided meditation scripts, intention frameworks, chakra exercises - Digital download',
    descriptionAr: '30 نصًا موجهًا للتأمل وأطر عمل تحديد النية وتمارين الشاكرات - تنزيل رقمي',
    price: 89,
    image: 'https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png',
    category: 'digital',
    subcategory: 'Workbooks',
    subcategoryAr: 'كتب عمل',
    inStock: true,
  },
  {
    id: 11,
    name: 'Candle Care Accessory Set',
    nameAr: 'طقم إكسسوارات العناية بالشمع',
    description: 'Premium wick trimmer, candle snuffer, wick dipper, and storage box - Sustainable materials',
    descriptionAr: 'مقص فتيل متميز ومطفئ شموع وغماس فتيل وصندوق تخزين - مواد مستدامة',
    price: 99,
    image: 'https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png',
    category: 'physical',
    subcategory: 'Accessories',
    subcategoryAr: 'إكسسوارات',
    inStock: true,
  },
  {
    id: 12,
    name: 'Gratitude & Reflection Journal',
    nameAr: 'مفكرة الامتنان والتأمل',
    description: 'Morning and evening prompts, weekly reflection pages, monthly intentions - Premium paper',
    descriptionAr: 'مطالبات صباحية ومسائية وصفحات تأمل أسبوعية ونوايا شهرية - ورق متميز',
    price: 119,
    image: 'https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png',
    category: 'physical',
    subcategory: 'Journals',
    subcategoryAr: 'دفاتر',
    inStock: true,
  },
];

export function Shop() {
  const { category } = useParams();
  const { t, language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState(category || 'all');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high'>('newest');
  const [showFilters, setShowFilters] = useState(false);

  // Generate breadcrumb and SEO
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Shop', url: '/shop' },
  ];

  if (category && category !== 'all') {
    breadcrumbs.push({ name: category, url: `/shop/${category}` });
  }

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  const shopTitle = category === 'digital'
    ? 'Digital Books & Guides - Lunology'
    : category === 'physical'
    ? 'Printed Books & Products - Lunology'
    : 'Shop - Lunology | Spiritual Products & Cosmic Wisdom';

  const shopDescription = category === 'digital'
    ? 'Explore our collection of digital dream interpretation guides, lunar calendars, and meditation workbooks. Instant download, lifetime access.'
    : category === 'physical'
    ? 'Browse our printed journals, planners, candles, and spiritual accessories. Premium quality products for your cosmic journey.'
    : 'Shop Lunology\'s complete collection of spiritual products, dream journals, lunar planners, element candles, and cosmic wisdom guides.';

  const filteredProducts = products
    .filter((product) => {
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      return categoryMatch && priceMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });

  return (
    <>
      <SEO
        title={shopTitle}
        description={shopDescription}
        keywords="Lunology shop, spiritual products, dream journals, lunar planners, meditation guides, element candles, cosmic wisdom, digital books, printed books"
        schema={breadcrumbSchema}
      />
      <div className="pt-20 min-h-screen">
        {/* Hero Banner */}
      <section className="relative py-16 md:py-20 px-4" style={{ backgroundColor: 'var(--banner-bg)', color: 'var(--banner-foreground)' }}>
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            {t('shop.title')}
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            {t('shop.subtitle')}
          </p>
        </div>
      </section>

      {/* Filters Bar */}
      <section className="sticky top-20 z-40 bg-background/95 backdrop-blur-xl border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Left side - Category filters */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 border-2 border-border rounded-xl hover:border-primary transition-colors"
                aria-expanded={showFilters}
                aria-controls="shop-filter-controls"
              >
                <SlidersHorizontal className="w-4 h-4" />
                {t('shop.filters')}
              </button>

              <div id="shop-filter-controls" className={`${showFilters ? 'flex' : 'hidden lg:flex'} flex-wrap items-center gap-2`}>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('all')}
                  aria-pressed={selectedCategory === 'all'}
                  className={`px-4 py-2 rounded-xl transition-all text-sm ${
                    selectedCategory === 'all'
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {t('shop.allProducts')}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('physical')}
                  aria-pressed={selectedCategory === 'physical'}
                  className={`px-4 py-2 rounded-xl transition-all text-sm ${
                    selectedCategory === 'physical'
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {t('shop.physical')}
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('digital')}
                  aria-pressed={selectedCategory === 'digital'}
                  className={`px-4 py-2 rounded-xl transition-all text-sm ${
                    selectedCategory === 'digital'
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {t('shop.digital')}
                </button>
              </div>
            </div>

            {/* Right side - Sort and Price */}
            <div className={`${showFilters ? 'flex' : 'hidden lg:flex'} flex-wrap items-center gap-3 w-full lg:w-auto`}>
              {/* Price Range */}
              <div className="flex items-center gap-2 px-4 py-2 bg-muted rounded-xl">
                <span className="text-sm text-muted-foreground whitespace-nowrap">{t('shop.priceRange')}:</span>
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  className="w-16 px-2 py-1 bg-background border border-border rounded text-sm"
                  placeholder={t('shop.min')}
                  aria-label={language === 'ar' ? 'الحد الأدنى للسعر' : 'Minimum price'}
                />
                <span>-</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 500])}
                  className="w-16 px-2 py-1 bg-background border border-border rounded text-sm"
                  placeholder={t('shop.max')}
                  aria-label={language === 'ar' ? 'الحد الأقصى للسعر' : 'Maximum price'}
                />
              </div>

              {/* Sort */}
              <label htmlFor="shop-sort-select" className="sr-only">
                {language === 'ar' ? 'ترتيب المنتجات' : 'Sort products'}
              </label>
              <select
                id="shop-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2 bg-muted border-2 border-transparent rounded-xl hover:border-primary transition-colors text-sm cursor-pointer"
                aria-label={language === 'ar' ? 'ترتيب المنتجات' : 'Sort products'}
              >
                <option value="newest">{t('shop.newest')}</option>
                <option value="price-low">{t('shop.priceLowToHigh')}</option>
                <option value="price-high">{t('shop.priceHighToLow')}</option>
              </select>
            </div>
          </div>

          {showFilters && (
            <button
              type="button"
              onClick={() => setShowFilters(false)}
              className="lg:hidden mt-3 text-sm text-primary flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              Close Filters
            </button>
          )}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-muted-foreground">
              {filteredProducts.length} {filteredProducts.length === 1 ? t('shop.product') : t('shop.products')}
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <Link to={`/product/${product.id}`} className="group block">
                    <div className="relative overflow-hidden rounded-2xl mb-3 aspect-square border border-border/50 group-hover:border-primary/30 transition-all shadow-sm group-hover:shadow-xl group-hover:shadow-primary/10">
                      <img
                        src={product.image}
                        alt={language === 'ar' ? product.nameAr : product.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {!product.inStock && (
                        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center">
                          <span className="px-3 py-1.5 bg-muted border border-border text-xs rounded-full">
                            {t('product.outOfStock')}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-1">
                      <p className="text-[10px] md:text-xs text-primary tracking-wider uppercase">
                        {language === 'ar' ? product.subcategoryAr : product.subcategory}
                      </p>
                      <h3 className="text-sm md:text-base group-hover:text-primary transition-colors line-clamp-1" style={{ fontFamily: 'var(--font-heading)' }}>
                        {language === 'ar' ? product.nameAr : product.name}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        {language === 'ar' ? product.descriptionAr : product.description}
                      </p>
                      <p className="text-sm text-foreground pt-1">
                        {t('common.sar')} {product.price}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">{t('shop.noProducts')}</p>
            </div>
          )}
        </div>
      </section>
    </div>
    </>
  );
}
