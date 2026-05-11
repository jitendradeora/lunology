export type ShopCategory = 'physical' | 'digital' | 'biogeometry';
import biogeometry_1 from '@/img/products/biogeometry_1.jpg';
import biogeometry_2 from '@/img/products/biogeometry_2.jpg';
import biogeometry_3 from '@/img/products/biogeometry_3.jpg';
import biogeometry_4 from '@/img/products/biogeometry_4.png';
import biogeometry_5 from '@/img/products/biogeometry_5.jpg';
import biogeometry_6 from '@/img/products/biogeometry_6.jpg';
import biogeometry_7 from '@/img/products/biogeometry_7.jpg';
import biogeometry_8 from '@/img/products/biogeometry_8.png';
import biogeometry_9 from '@/img/products/biogeometry_9.jpg';
import biogeometry_10 from '@/img/products/biogeometry_10.png';

export type CatalogProduct = {
  id: number;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  /** Unit price including 15% VAT (what the customer pays per unit). */
  price: number;
  image: string;
  category: ShopCategory;
  subcategory: string;
  subcategoryAr: string;
  inStock: boolean;
};

export const SHOP_PRODUCTS: CatalogProduct[] = [
  {
    id: 1,
    name: 'Solar Flame',
    nameAr: 'سولار فلايم',
    description:
      'Fire Element Candle - Crafted from 100% pure beeswax with organic frankincense, wooden wick, 40-50 hours burn time',
    descriptionAr:
      'شمعة عنصر النار - مصنوعة من شمع النحل الطبيعي 100% مع لبان الذكر العضوي، فتيل خشبي، 40-50 ساعة احتراق',
    price: 189,
    image:
      'https://cdn.salla.sa/dPjdmy/a68964a8-6cbb-4aa6-b83b-dcf18df253b1-500x500-UkE3UytRBSfA3vByMINgHc75qvZaGGF2L4UR0bcJ.jpg',
    category: 'physical',
    subcategory: 'Candles',
    subcategoryAr: 'شموع',
    inStock: true,
  },
  {
    id: 2,
    name: 'Lunar Glow',
    nameAr: 'التوهج القمري',
    description:
      'Water Element Candle - Pure beeswax with lavender and chamomile, perfect for meditation and dream work',
    descriptionAr:
      'شمعة عنصر الماء - شمع نحل نقي مع اللافندر والبابونج، مثالية للتأمل وعمل الأحلام',
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
    description:
      'Earth Element Candle - Beeswax infused with cedar and patchouli for grounding and stability',
    descriptionAr:
      'شمعة عنصر الأرض - شمع نحل مملوء بخشب الأرز والباتشولي للتأريض والاستقرار',
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
    description:
      'Air Element Candle - Pure beeswax with eucalyptus and mint for clarity and creative flow',
    descriptionAr:
      'شمعة عنصر الهواء - شمع نحل نقي مع الكافور والنعناع للوضوح والتدفق الإبداعي',
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
    description:
      'Comprehensive dream journal with monthly calendars, symbol interpretation guides, and lunar phase tracking',
    descriptionAr:
      'مفكرة أحلام شاملة مع تقاويم شهرية وأدلة تفسير الرموز وتتبع مراحل القمر',
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
    description:
      'Monthly and weekly spreads with goal-setting pages, habit trackers, and lunar phase calendars',
    descriptionAr:
      'جداول شهرية وأسبوعية مع صفحات تحديد الأهداف ومتتبعات العادات وتقاويم مراحل القمر',
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
    description:
      'Daily prompts for reflection, gratitude practices, meditation tracking, and mindful living exercises',
    descriptionAr:
      'مطالبات يومية للتأمل وممارسات الامتنان وتتبع التأمل وتمارين العيش الواعي',
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
    description:
      'Over 500 dream symbols, guided worksheets, lucid dreaming techniques - Instant PDF download',
    descriptionAr:
      'أكثر من 500 رمز للأحلام وأوراق عمل موجهة وتقنيات الأحلام الواضحة - تنزيل PDF فوري',
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
    description:
      'Moon phases, astrological insights, ritual suggestions - Printable PDF format',
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
    description:
      '30 guided meditation scripts, intention frameworks, chakra exercises - Digital download',
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
    description:
      'Premium wick trimmer, candle snuffer, wick dipper, and storage box - Sustainable materials',
    descriptionAr:
      'مقص فتيل متميز ومطفئ شموع وغماس فتيل وصندوق تخزين - مواد مستدامة',
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
    description:
      'Morning and evening prompts, weekly reflection pages, monthly intentions - Premium paper',
    descriptionAr:
      'مطالبات صباحية ومسائية وصفحات تأمل أسبوعية ونوايا شهرية - ورق متميز',
    price: 119,
    image: 'https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png',
    category: 'physical',
    subcategory: 'Journals',
    subcategoryAr: 'دفاتر',
    inStock: true,
  },
  // BioGeometry — inspired by biogeometry.ca product line (informational / representative listing)
  {
    id: 201,
    name: 'BioSignatures Pendant and Ring',
    nameAr: 'قلادة وخاتم البصمات الحيوية',
    description:
      'BioSignatures, a special branch of BioGeometry, are precisely constructed linear diagrams that have the same geometric resonant configurations as specific vital energy patterns within the organs in the body.',
    descriptionAr:
      'BioSignatures, فرع خاص من BioGeometry, هي رسومات خطية مبنية بدقة وتحتوي على التوازن الهندسي الحيوي لأنماط الطاقة الحيوية المحددة في الأعضاء.',
    price: 449,
    image: biogeometry_1,
    category: 'biogeometry',
    subcategory: 'Personal',
    subcategoryAr: 'شخصي',
    inStock: true,
  },
  {
    id: 202,
    name: 'L-90 Pendant',
    nameAr: 'قلادة L-90',
    description:
      'The “L90" pendant combines several BioGeometry forming principles to create a field of natural energy-balancing qualities.',
    descriptionAr:
      'يجمع “L90” البصمات الحيوية مع مبادئ التشكيل الهندسي الحيوي لإنشاء حقل من الطاقة الموازنة الطبيعية.',
    price: 519,
    image:
      biogeometry_2,
    category: 'biogeometry',
    subcategory: 'Pendants',
    subcategoryAr: 'شخصي',
    inStock: true,
  },
  {
    id: 203,
    name: 'BioGeometry Home Kit',
    nameAr: 'طاقم الطاقة المنزلية',
    description:
      'The BioGeometry Home Energy-Balancing Kit was developed and tested as an individual home solution, to be used to reduce the symptoms suffered from environmental stress.',
    descriptionAr:
      'طاقم لموازنة طاقة المنزل من الإجهاد البيئي؛ يجمع البصمات الحيوية مع مبادئ التشكيل الهندسي الحيوي لإنشاء حقل من الطاقة الموازنة الطبيعية.',
    price: 1189,
    image:
      biogeometry_3,
    category: 'biogeometry',
    subcategory: 'Home',
    subcategoryAr: 'منزل',
    inStock: true,
  },
  {
    id: 204,
    name: 'L90 Stickers (Set)',
    nameAr: 'ملصقات L90 (طقم)',
    description:
      'The 90 Degree Sticker helps balance emotions and mental subtle energy levels from environmental stressors such as electromagnetic fields and geopathic stress.',
    descriptionAr:
      'يساعد ملصق الزاوية 90 درجة في موازنة مستويات الطاقة العاطفية والذهنية من الإجهادات البيئية مثل المجالات الكهرومغناطيسية والإجهادات الجيوبيئية.',
    price: 129,
    image:
      biogeometry_4,
    category: 'biogeometry',
    subcategory: 'Stickers',
    subcategoryAr: 'ملصقات',
    inStock: true,
  },
  {
    id: 205,
    name: 'WiFi L Sticker',
    nameAr: 'ملصق WiFi L',
    description:
      'The "L" Stickers superimpose the natural energy-balancing quality of BioGeometry onto electromagnetic fields.',
    descriptionAr:
      'يجمع الملصقات "L" البصمات الحيوية مع مبادئ التشكيل الهندسي الحيوي لإنشاء حقل من الطاقة الموازنة الطبيعية.',
    price: 49,
    image:
      biogeometry_5,
    category: 'biogeometry',
    subcategory: 'Stickers',
    subcategoryAr: 'ملصقات',
    inStock: true,
  },
  {
    id: 206,
    name: 'Electrical L66 Stickers',
    nameAr: 'ملصقات L66 الكهربائية',
    description:
      'The Electrical Energy Balancing "L" Stickers superimpose the natural energy-balancing quality of BioGeometry onto electro-magnetic fields',
    descriptionAr:
      'يجمع الملصقات "L" البصمات الحيوية مع مبادئ التشكيل الهندسي الحيوي لإنشاء حقل من الطاقة الموازنة الطبيعية.',
    price: 99,
    image:
      biogeometry_6,
    category: 'biogeometry',
    subcategory: 'Stickers',
    subcategoryAr: 'ملصقات',
    inStock: true,
  },
  {
    id: 207,
    name: 'Cell Phone Harmonization Sticker',
    nameAr: 'ملصق توازن الهاتف المحمول',
    description:
      'The BioGeometry Mobile Phone Energy Balancing Sticker and Chain harmonize the energy interaction between the mobile',
    descriptionAr:
      'يوائم الملصقات "L" البصمات الحيوية مع مبادئ التشكيل الهندسي الحيوي لإنشاء حقل من الطاقة الموازنة الطبيعية.',
    price: 89,
    image:
      biogeometry_7,
    category: 'biogeometry',
    subcategory: 'Mobile',
    subcategoryAr: 'جوال',
    inStock: true,
  },
  {
    id: 208,
    name: 'Car Strip',
    nameAr: 'شريط السيارة',
    description:
      'The BioGeometry Car Strip includes selected BioSignatures and the new Wi-Fi L angle, in order to harmonize the effects',
    descriptionAr:
      'يجمع الشريط السياري البصمات الحيوية مع الزاوية Wi-Fi L لموازنة الإجهاد الكهرومغناطيسي داخل السيارة.',
    price: 179,
    image:
      biogeometry_8,
    category: 'biogeometry',
    subcategory: 'Travel',
    subcategoryAr: 'سفر',
    inStock: true,
  },
  {
    id: 209,
    name: 'BG3 Charging Tray',
    nameAr: 'صندوق شحن BG3',
    description:
      'The BG3 Charging Tray is a BioGeometry-designed tray that helps to balance the energy of the device while it is charging.',
    descriptionAr: ' يساعد الصندوق الشحن BG3 في موازنة الطاقة للجهاز أثناء الشحن.',
    price: 179,
    image:
      biogeometry_9,
    category: 'biogeometry',
    subcategory: 'Trays',
    subcategoryAr: 'شحن',
    inStock: true,
  },
   {
    id: 210,
    name: 'Sirius Odyssey CD',
    nameAr: 'CD سيريوس أوديسي الموسيقي',
    description:
      'n the Ancient Egyptian temple science music was used to enter into resonance with the Divine laws of creation.',
    descriptionAr: 'في علم المعادن المصري القديم، كانت الموسيقى تستخدم للدخول في الرنين مع قوانين الخلق الشرعي.',
    price: 179,
    image:
      biogeometry_10,
    category: 'biogeometry',
    subcategory: 'CDs',
    subcategoryAr: 'CDs',
    inStock: true,
  },
];

const byId = new Map(SHOP_PRODUCTS.map((p) => [p.id, p]));

export function getCatalogProduct(id: number): CatalogProduct | undefined {
  return byId.get(id);
}

export function getBioGeometryProducts(): CatalogProduct[] {
  return SHOP_PRODUCTS.filter((p) => p.category === 'biogeometry');
}
