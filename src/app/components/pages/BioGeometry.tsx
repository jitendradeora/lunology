import { Link } from "react-router";
import { motion } from "motion/react";
import { SEO } from "../SEO";
import { Hexagon, Waves, Zap, Shield, ShoppingBag } from "lucide-react";
import { useLanguage } from "../LanguageProvider";
import { getBioGeometryProducts } from "../../data/catalog";

export function BioGeometry() {
  const { language, t } = useLanguage();
  const bioProducts = getBioGeometryProducts();

  const principles = [
    {
      icon: Hexagon,
      titleEn: "Sacred Geometry",
      titleAr: "الهندسة المقدسة",
      descriptionEn:
        "Ancient geometric patterns that carry universal energy and harmony. These shapes resonate with the fundamental structure of creation.",
      descriptionAr:
        "الأنماط الهندسية القديمة التي تحمل الطاقة والانسجام الكوني. هذه الأشكال تتردد مع البنية الأساسية للخلق.",
    },
    {
      icon: Waves,
      titleEn: "Energy Balancing",
      titleAr: "توازن الطاقة",
      descriptionEn:
        "Harmonizing the subtle energies in our environment and within ourselves for optimal wellbeing and spiritual clarity.",
      descriptionAr:
        "مواءمة الطاقات الدقيقة في بيئتنا وداخل أنفسنا لتحقيق الرفاهية المثلى والوضوح الروحي.",
    },
    {
      icon: Zap,
      titleEn: "Vibrational Resonance",
      titleAr: "الرنين الاهتزازي",
      descriptionEn:
        "Understanding how shapes, colors, and patterns influence our energetic field and consciousness through resonance.",
      descriptionAr:
        "فهم كيف تؤثر الأشكال والألوان والأنماط على مجالنا الطاقي والوعي من خلال الرنين.",
    },
    {
      icon: Shield,
      titleEn: "Environmental Harmony",
      titleAr: "الانسجام البيئي",
      descriptionEn:
        "Creating balanced spaces that support health, creativity, and spiritual growth through conscious design.",
      descriptionAr:
        "خلق مساحات متوازنة تدعم الصحة والإبداع والنمو الروحي من خلال التصميم الواعي.",
    },
  ];

  return (
    <>
      <SEO
        title={
          language === "ar"
            ? "الهندسة الحيوية - لونولوجي"
            : "BioGeometry - Lunology"
        }
        description={
          language === "ar"
            ? "اكتشف علم الهندسة الحيوية وكيف تؤثر الأشكال والأنماط الهندسية على طاقتنا ورفاهيتنا"
            : "Discover the science of BioGeometry and how geometric shapes and patterns affect our energy and wellbeing"
        }
        keywords="biogeometry, sacred geometry, energy healing, vibrational medicine, environmental harmony, consciousness"
        canonicalPathOrUrl="/biogeometry"
      />

      <div className="pt-20 min-h-screen">
        {/* Hero Banner */}
        <section
          className="relative py-24 px-4 overflow-hidden"
          style={{
            backgroundColor: "var(--banner-bg)",
            color: "var(--banner-foreground)",
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
          </div>

          <div className="relative max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1
                className="text-5xl md:text-6xl mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {language === "ar" ? "الهندسة الحيوية" : "BioGeometry"}
              </h1>
              <p className="text-xl opacity-90">
                {language === "ar"
                  ? "علم الأشكال والطاقة والانسجام الكوني"
                  : "The science of shapes, energy, and cosmic harmony"}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 mb-16"
            >
              <h2
                className="text-4xl text-center"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {language === "ar"
                  ? "ما هي الهندسة الحيوية؟"
                  : "What is BioGeometry?"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "ar"
                  ? "الهندسة الحيوية هي علم يدرس تأثير الأشكال والألوان والأصوات والحركات الهندسية على الطاقة الحيوية للإنسان والبيئة. تم تطوير هذا العلم من قبل الدكتور إبراهيم كريم، ويجمع بين الحكمة القديمة والعلم الحديث لخلق الانسجام والتوازن في حياتنا."
                  : "BioGeometry is a science that studies the effect of geometric shapes, colors, sounds, and motions on the vital energy of humans and the environment. Developed by Dr. Ibrahim Karim, this science combines ancient wisdom with modern understanding to create harmony and balance in our lives."}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {language === "ar"
                  ? "من خلال استخدام مبادئ الهندسة المقدسة والتصميم الواعي، تساعدنا الهندسة الحيوية على تحويل بيئاتنا إلى فضاءات داعمة تعزز الصحة والرفاهية والوعي الروحي."
                  : "Through the use of sacred geometry principles and conscious design, BioGeometry helps us transform our environments into supportive spaces that enhance health, wellbeing, and spiritual awareness."}
              </p>
            </motion.div>

            {/* Principles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card/50 border border-border backdrop-blur-sm hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <principle.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      <h3
                        className="text-xl"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {language === "ar"
                          ? principle.titleAr
                          : principle.titleEn}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {language === "ar"
                          ? principle.descriptionAr
                          : principle.descriptionEn}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* BioGeometry shop — separate category; product line informed by biogeometry.ca */}
        <section className="py-16 px-4 bg-muted/20 border-y border-border">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12 space-y-4"
            >
              <h2
                className="text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {language === "ar"
                  ? "متجر الهندسة الحيوية"
                  : "BioGeometry Shop"}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                {language === "ar"
                  ? "منتجات موازنة الطاقة للاستخدام الشخصي والمنزلي. الأسعار تشمل ضريبة القيمة المضافة ١٥٪. تصفح التفاصيل لكل منتج."
                  : "Environmental energy-balancing products for personal and home use. Prices include 15% VAT. Open any item for full details."}
              </p>
              <Link
                to="/shop/biogeometry"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:shadow-lg transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                {language === "ar"
                  ? "عرض الفئة في المتجر"
                  : "View category in shop"}
              </Link>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {bioProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link to={`/product/${product.id}`} className="group block">
                    <div className="relative overflow-hidden rounded-2xl mb-3 aspect-square border border-border/50 group-hover:border-primary/30 transition-all shadow-sm group-hover:shadow-lg">
                      <img
                        src={product.image}
                        alt={language === "ar" ? product.nameAr : product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-[10px] md:text-xs text-primary uppercase tracking-wider mb-1">
                      {language === "ar"
                        ? product.subcategoryAr
                        : product.subcategory}
                    </p>
                    <h3
                      className="text-sm md:text-base group-hover:text-primary transition-colors line-clamp-2"
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {language === "ar" ? product.nameAr : product.name}
                    </h3>
                    <p className="text-sm mt-1">
                      {t("common.sar")} {product.price}
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      {language === "ar"
                        ? "شامل ضريبة القيمة المضافة"
                        : "Incl. 15% VAT"}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2
                className="text-4xl text-center"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {language === "ar"
                  ? "التطبيقات العملية"
                  : "Practical Applications"}
              </h2>

              <div className="space-y-6">
                <div className="p-6 rounded-xl bg-background/50 border border-border">
                  <h3
                    className="text-xl mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {language === "ar" ? "التصميم الشخصي" : "Personal Design"}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === "ar"
                      ? "استخدام الهندسة الحيوية في تصميم المساحات الشخصية، المجوهرات، والأدوات اليومية لتعزيز الطاقة الإيجابية والرفاهية."
                      : "Using BioGeometry in designing personal spaces, jewelry, and daily tools to enhance positive energy and wellbeing."}
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-background/50 border border-border">
                  <h3
                    className="text-xl mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {language === "ar"
                      ? "الشفاء البيئي"
                      : "Environmental Healing"}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === "ar"
                      ? "موازنة الطاقات البيئية في المنازل والمكاتب والمساحات العامة لخلق جو من الانسجام والسلام."
                      : "Balancing environmental energies in homes, offices, and public spaces to create an atmosphere of harmony and peace."}
                  </p>
                </div>

                <div className="p-6 rounded-xl bg-background/50 border border-border">
                  <h3
                    className="text-xl mb-3"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {language === "ar" ? "النمو الروحي" : "Spiritual Growth"}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {language === "ar"
                      ? "دمج الأشكال الهندسية المقدسة في الممارسات الروحية والتأمل لتعميق الاتصال بالوعي الأعلى."
                      : "Integrating sacred geometric shapes into spiritual practices and meditation to deepen connection with higher consciousness."}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Closing Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-6 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-border"
            >
              <h2
                className="text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {language === "ar"
                  ? "انسجام من خلال التصميم"
                  : "Harmony Through Design"}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {language === "ar"
                  ? "الهندسة الحيوية تذكرنا بأن كل شيء في الكون مترابط ويتأثر بالأشكال والأنماط من حولنا. من خلال العمل الواعي مع هذه المبادئ، نستطيع خلق حياة أكثر توازنًا وانسجامًا ووعيًا."
                  : "BioGeometry reminds us that everything in the universe is interconnected and influenced by the shapes and patterns around us. By consciously working with these principles, we can create a more balanced, harmonious, and aware life."}
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
