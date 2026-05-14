import { createContext, useContext, useEffect, useState } from 'react';

type Language = 'en' | 'ar';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.ourStory': 'Our Story',
    'nav.shop': 'Shop',
    'nav.allProducts': 'All Products',
    'nav.digitalProducts': 'Digital Products',
    'nav.faqs': 'FAQs',
    'nav.contactUs': 'Contact Us',
    'nav.lightMode': 'Light Mode',
    'nav.darkMode': 'Dark Mode',

    // Hero
    'hero.title': 'Lunology',
    'hero.tagline': 'A cosmic companion on the journey of discovery, intuition, and inner connection',
    'hero.cta': 'Explore the Shop',

    // Home sections
    'home.aboutTitle': 'A Space of Consciousness',
    'home.aboutText': 'Lunology brings together knowledge, culture, and spirituality in a harmonious blend. We believe in the power of lunar cycles, cosmic wisdom, and the journey toward self-discovery and inner peace.',
    'home.aboutCta': 'Our Story',
    'home.featuredTitle': 'Featured Products',
    'home.featuredSubtitle': 'Discover tools for your spiritual journey',
    'home.viewAll': 'View All Products',
    'home.philosophyTitle': 'The Journey Within',
    'home.philosophyText1': 'We honor the natural rhythms of life, the wisdom of the moon, and the infinite potential of consciousness. Each product is carefully curated to support your path toward awareness, intuition, and spiritual growth.',
    'home.philosophyText2': 'Whether you\'re just beginning your journey or deepening your practice, Lunology offers companions for every phase of your cosmic exploration.',
    'home.newsletterTitle': 'Join the Journey',
    'home.newsletterSubtitle': 'Subscribe to receive lunar insights, new arrivals, and exclusive offerings',
    'home.emailPlaceholder': 'Your email',
    'home.subscribe': 'Subscribe',

    // Shop
    'shop.title': 'Shop',
    'shop.subtitle': 'Tools and treasures for your spiritual journey',
    'shop.filters': 'Filters',
    'shop.category': 'Category',
    'shop.allProducts': 'All Products',
    'shop.physical': 'Physical Products',
    'shop.digital': 'Digital Products',
    'shop.priceRange': 'Price Range',
    'shop.min': 'Min',
    'shop.max': 'Max',
    'shop.products': 'products',
    'shop.product': 'product',
    'shop.noProducts': 'No products found matching your criteria.',
    'shop.sortBy': 'Sort By',
    'shop.newest': 'Newest',
    'shop.priceLowToHigh': 'Price: Low to High',
    'shop.priceHighToLow': 'Price: High to Low',

    // Product Detail
    'product.backToShop': 'Back to Shop',
    'product.inStock': 'In Stock',
    'product.outOfStock': 'Out of Stock',
    'product.itemsAvailable': 'items available',
    'product.reviews': 'reviews',
    'product.quantity': 'Quantity',
    'product.addToCart': 'Add to Cart',
    'product.buyNow': 'Buy Now',
    'product.description': 'Description',
    'product.features': 'Features',
    'product.specifications': 'Specifications',
    'product.relatedProducts': 'You May Also Like',
    'product.viewAll': 'View All',
    'product.freeShipping': 'Free Shipping',
    'product.freeShippingDesc': 'Free standard shipping on orders over SAR 200',
    'product.returns': '14-Day Returns',
    'product.returnsDesc': 'Easy returns within 14 days of purchase',
    'product.warranty': 'Quality Guarantee',
    'product.warrantyDesc': 'Premium materials and craftsmanship',
    'product.save': 'Save',

    // About
    'about.title': 'Our Story',
    'about.subtitle': 'A journey into consciousness, wisdom, and cosmic connection',
    'about.intro': 'A Space of Consciousness',
    'about.introText': 'Lunology is a space of consciousness that brings together knowledge, culture, and spirituality in a harmonious blend. We are dedicated to exploring the profound connections between cosmic wisdom and personal growth, honoring the ancient rhythms that guide our existence.',
    'about.visionTitle': 'Our Vision',
    'about.visionText': 'We believe in the transformative power of awareness and the deep wisdom that resides within each individual. Through our carefully curated products and resources, we aim to support seekers on their journey toward self-discovery, intuition, and inner peace.',
    'about.philosophyTitle': 'Our Philosophy',
    'about.lunarWisdom': 'Lunar Wisdom',
    'about.lunarWisdomText': 'We honor the natural cycles of the moon and its influence on consciousness, emotion, and spiritual practice.',
    'about.innerJourney': 'Inner Journey',
    'about.innerJourneyText': 'Every product is designed to facilitate deeper self-awareness and support your personal path of spiritual exploration.',
    'about.cosmicConnection': 'Cosmic Connection',
    'about.cosmicConnectionText': 'We celebrate the interconnectedness of all things and the wisdom found in celestial patterns and universal energies.',
    'about.commitmentTitle': 'Our Commitment',
    'about.commitmentText1': 'Each product in our collection is thoughtfully curated or created with intention, quality, and spiritual significance in mind. We are committed to providing tools and resources that genuinely support your growth, awareness, and connection to the cosmic rhythms that surround us.',
    'about.commitmentText2': 'Whether you are just beginning your spiritual journey or have been walking this path for years, Lunology is here as your companion, offering guidance, inspiration, and sacred tools for every phase of your evolution.',
    'about.ctaText': 'Join us on this cosmic journey',
    'about.ctaShop': 'Explore the Shop',
    'about.ctaContact': 'Get in Touch',

    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We\'d love to hear from you',
    'contact.getInTouch': 'Get in Touch',
    'contact.intro': 'Whether you have a question about products, need spiritual guidance, or just want to connect, we\'re here for you.',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.businessHours': 'Business Hours',
    'contact.businessHoursText': 'We typically respond within 24-48 hours. For immediate assistance, please reach out via WhatsApp.',
    'contact.name': 'Name',
    'contact.namePlaceholder': 'Your name',
    'contact.emailPlaceholder': 'your@email.com',
    'contact.subject': 'Subject',
    'contact.subjectPlaceholder': 'How can we help?',
    'contact.message': 'Message',
    'contact.messagePlaceholder': 'Your message...',
    'contact.send': 'Send Message',

    // Footer
    'footer.quickLinks': 'Quick Links',
    'footer.legal': 'Legal',
    'footer.refundPolicy': 'Refund Policy',
    'footer.termsConditions': 'Terms & Conditions',
    'footer.privacyPolicy': 'Privacy Policy',
    'footer.payment': 'Payment',
    'footer.allRights': 'All rights reserved',

    // Common
    'common.home': 'Home',
    'common.loading': 'Loading...',
    'common.readMore': 'Read More',
    'common.showLess': 'Show Less',
    'common.sar': 'SAR',
  },
  ar: {
    // Navigation
    'nav.ourStory': 'قصتنا',
    'nav.shop': 'المتجر',
    'nav.allProducts': 'جميع المنتجات',
    'nav.digitalProducts': 'المنتجات الرقمية',
    'nav.faqs': 'الأسئلة الشائعة',
    'nav.contactUs': 'اتصل بنا',
    'nav.lightMode': 'الوضع النهاري',
    'nav.darkMode': 'الوضع الليلي',

    // Hero
    'hero.title': 'لونولوجي',
    'hero.tagline': 'رفيق كوني في رحلة الاكتشاف والحدس والاتصال الداخلي',
    'hero.cta': 'استكشف المتجر',

    // Home sections
    'home.aboutTitle': 'فضاء الوعي',
    'home.aboutText': 'لونولوجي يجمع بين المعرفة والثقافة والروحانية في مزيج متناغم. نؤمن بقوة الدورات القمرية والحكمة الكونية والرحلة نحو اكتشاف الذات والسلام الداخلي.',
    'home.aboutCta': 'قصتنا',
    'home.featuredTitle': 'منتجات مميزة',
    'home.featuredSubtitle': 'اكتشف أدوات رحلتك الروحية',
    'home.viewAll': 'عرض جميع المنتجات',
    'home.philosophyTitle': 'الرحلة الداخلية',
    'home.philosophyText1': 'نحترم إيقاعات الحياة الطبيعية وحكمة القمر والإمكانات اللانهائية للوعي. كل منتج منتقى بعناية لدعم طريقك نحو الوعي والحدس والنمو الروحي.',
    'home.philosophyText2': 'سواء كنت في بداية رحلتك أو تعمق ممارستك، لونولوجي يقدم رفاقًا لكل مرحلة من استكشافك الكوني.',
    'home.newsletterTitle': 'انضم إلى الرحلة',
    'home.newsletterSubtitle': 'اشترك لتلقي رؤى قمرية ومنتجات جديدة وعروض حصرية',
    'home.emailPlaceholder': 'بريدك الإلكتروني',
    'home.subscribe': 'اشترك',

    // Shop
    'shop.title': 'المتجر',
    'shop.subtitle': 'أدوات وكنوز لرحلتك الروحية',
    'shop.filters': 'الفلاتر',
    'shop.category': 'الفئة',
    'shop.allProducts': 'جميع المنتجات',
    'shop.physical': 'المنتجات المادية',
    'shop.digital': 'المنتجات الرقمية',
    'shop.priceRange': 'نطاق السعر',
    'shop.min': 'الأدنى',
    'shop.max': 'الأعلى',
    'shop.products': 'منتجات',
    'shop.product': 'منتج',
    'shop.noProducts': 'لم يتم العثور على منتجات تطابق معاييرك.',
    'shop.sortBy': 'ترتيب حسب',
    'shop.newest': 'الأحدث',
    'shop.priceLowToHigh': 'السعر: من الأقل إلى الأعلى',
    'shop.priceHighToLow': 'السعر: من الأعلى إلى الأقل',

    // Product Detail
    'product.backToShop': 'العودة إلى المتجر',
    'product.inStock': 'متوفر',
    'product.outOfStock': 'غير متوفر',
    'product.itemsAvailable': 'قطعة متاحة',
    'product.reviews': 'تقييم',
    'product.quantity': 'الكمية',
    'product.addToCart': 'أضف إلى السلة',
    'product.buyNow': 'اشتري الآن',
    'product.description': 'الوصف',
    'product.features': 'المميزات',
    'product.specifications': 'المواصفات',
    'product.relatedProducts': 'قد يعجبك أيضاً',
    'product.viewAll': 'عرض الكل',
    'product.freeShipping': 'شحن مجاني',
    'product.freeShippingDesc': 'شحن مجاني للطلبات فوق 200 ريال',
    'product.returns': 'إرجاع خلال 14 يوم',
    'product.returnsDesc': 'إرجاع سهل خلال 14 يوم من الشراء',
    'product.warranty': 'ضمان الجودة',
    'product.warrantyDesc': 'مواد ممتازة وحرفية عالية',
    'product.save': 'وفر',

    // About
    'about.title': 'قصتنا',
    'about.subtitle': 'رحلة إلى الوعي والحكمة والاتصال الكوني',
    'about.intro': 'فضاء الوعي',
    'about.introText': 'لونولوجي هو فضاء وعي يجمع بين المعرفة والثقافة والروحانية في مزيج متناغم. نحن ملتزمون باستكشاف الروابط العميقة بين الحكمة الكونية والنمو الشخصي، مع احترام الإيقاعات القديمة التي توجه وجودنا.',
    'about.visionTitle': 'رؤيتنا',
    'about.visionText': 'نؤمن بالقوة التحويلية للوعي والحكمة العميقة الموجودة داخل كل فرد. من خلال منتجاتنا ومواردنا المنتقاة بعناية، نهدف إلى دعم الباحثين في رحلتهم نحو اكتشاف الذات والحدس والسلام الداخلي.',
    'about.philosophyTitle': 'فلسفتنا',
    'about.lunarWisdom': 'الحكمة القمرية',
    'about.lunarWisdomText': 'نحترم الدورات الطبيعية للقمر وتأثيرها على الوعي والعاطفة والممارسة الروحية.',
    'about.innerJourney': 'الرحلة الداخلية',
    'about.innerJourneyText': 'كل منتج مصمم لتسهيل الوعي الذاتي الأعمق ودعم مسارك الشخصي للاستكشاف الروحي.',
    'about.cosmicConnection': 'الاتصال الكوني',
    'about.cosmicConnectionText': 'نحتفل بالترابط بين جميع الأشياء والحكمة الموجودة في الأنماط السماوية والطاقات الكونية.',
    'about.commitmentTitle': 'التزامنا',
    'about.commitmentText1': 'كل منتج في مجموعتنا منتقى أو مُنشأ بعناية مع النية والجودة والأهمية الروحية في الاعتبار. نحن ملتزمون بتوفير أدوات وموارد تدعم حقًا نموك ووعيك واتصالك بالإيقاعات الكونية المحيطة بنا.',
    'about.commitmentText2': 'سواء كنت في بداية رحلتك الروحية أو كنت تسير في هذا الطريق لسنوات، لونولوجي موجود كرفيقك، ويقدم التوجيه والإلهام والأدوات المقدسة لكل مرحلة من تطورك.',
    'about.ctaText': 'انضم إلينا في هذه الرحلة الكونية',
    'about.ctaShop': 'استكشف المتجر',
    'about.ctaContact': 'ابقَ على تواصل',

    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'نحب أن نسمع منك',
    'contact.getInTouch': 'تواصل معنا',
    'contact.intro': 'سواء كان لديك سؤال حول المنتجات، أو تحتاج إلى إرشاد روحي، أو تريد فقط التواصل، نحن هنا من أجلك.',
    'contact.email': 'البريد الإلكتروني',
    'contact.whatsapp': 'واتساب',
    'contact.businessHours': 'ساعات العمل',
    'contact.businessHoursText': 'عادة نرد خلال 24-48 ساعة. للمساعدة الفورية، يرجى التواصل عبر واتساب.',
    'contact.name': 'الاسم',
    'contact.namePlaceholder': 'اسمك',
    'contact.emailPlaceholder': 'بريدك@الإلكتروني.com',
    'contact.subject': 'الموضوع',
    'contact.subjectPlaceholder': 'كيف يمكننا المساعدة؟',
    'contact.message': 'الرسالة',
    'contact.messagePlaceholder': 'رسالتك...',
    'contact.send': 'إرسال الرسالة',

    // Footer
    'footer.quickLinks': 'روابط سريعة',
    'footer.legal': 'قانوني',
    'footer.refundPolicy': 'سياسة الاسترداد',
    'footer.termsConditions': 'الشروط والأحكام',
    'footer.privacyPolicy': 'سياسة الخصوصية',
    'footer.payment': 'الدفع',
    'footer.allRights': 'جميع الحقوق محفوظة',

    // Common
    'common.home': 'الرئيسية',
    'common.loading': 'جاري التحميل...',
    'common.readMore': 'اقرأ المزيد',
    'common.showLess': 'عرض أقل',
    'common.sar': 'ر.س',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('lunology-language');
      return (stored as Language) || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    const root = document.documentElement;
    const dir = language === 'ar' ? 'rtl' : 'ltr';
    root.setAttribute('dir', dir);
    root.setAttribute('lang', language);

    if (typeof window !== 'undefined') {
      localStorage.setItem('lunology-language', language);
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
