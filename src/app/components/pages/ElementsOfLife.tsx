import { motion } from 'motion/react';
import { SEO } from '../SEO';
import { Droplet, Wind, Flame, Mountain, Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageProvider';

export function ElementsOfLife() {
  const { language } = useLanguage();

  const elements = [
    {
      icon: Droplet,
      titleEn: 'Water',
      titleAr: 'الماء',
      descriptionEn: 'Flow, emotion, intuition, and the depths of consciousness. Water teaches us adaptability, cleansing, and emotional healing.',
      descriptionAr: 'التدفق، العاطفة، الحدس، وأعماق الوعي. الماء يعلمنا القدرة على التكيف والتطهير والشفاء العاطفي.',
      color: 'from-blue-500/20 to-cyan-500/20'
    },
    {
      icon: Wind,
      titleEn: 'Air',
      titleAr: 'الهواء',
      descriptionEn: 'Thought, communication, freedom, and breath of life. Air represents intellect, inspiration, and the power of the mind.',
      descriptionAr: 'الفكر، التواصل، الحرية، ونفس الحياة. الهواء يمثل العقل والإلهام وقوة الذهن.',
      color: 'from-sky-500/20 to-indigo-500/20'
    },
    {
      icon: Flame,
      titleEn: 'Fire',
      titleAr: 'النار',
      descriptionEn: 'Transformation, passion, willpower, and creative energy. Fire ignites our spirit and drives our purpose.',
      descriptionAr: 'التحول، الشغف، الإرادة، والطاقة الإبداعية. النار تشعل روحنا وتدفع هدفنا.',
      color: 'from-orange-500/20 to-red-500/20'
    },
    {
      icon: Mountain,
      titleEn: 'Earth',
      titleAr: 'الأرض',
      descriptionEn: 'Grounding, stability, abundance, and manifestation. Earth connects us to the physical realm and material world.',
      descriptionAr: 'التجذر، الاستقرار، الوفرة، والتجلي. الأرض تربطنا بالعالم المادي والملموس.',
      color: 'from-green-500/20 to-emerald-500/20'
    },
    {
      icon: Sparkles,
      titleEn: 'Ether',
      titleAr: 'الأثير',
      descriptionEn: 'Spirit, connection, space, and the divine. Ether is the element of pure consciousness and cosmic unity.',
      descriptionAr: 'الروح، الاتصال، الفضاء، والإلهي. الأثير هو عنصر الوعي النقي والوحدة الكونية.',
      color: 'from-purple-500/20 to-violet-500/20'
    }
  ];

  return (
    <>
      <SEO
        title={language === 'ar' ? 'عناصر الحياة - لونولوجي' : 'Elements of Life - Lunology'}
        description={language === 'ar' ? 'استكشف العناصر الخمسة الأساسية للحياة وكيف تشكل وجودنا وروحانيتنا' : 'Explore the five fundamental elements of life and how they shape our existence and spirituality'}
        keywords="elements, water, air, fire, earth, ether, spirituality, cosmic wisdom, consciousness"
        canonicalPathOrUrl="/elements"
      />

      <div className="pt-20 min-h-screen">
        {/* Hero Banner */}
        <section className="relative py-24 px-4 overflow-hidden" style={{ backgroundColor: 'var(--banner-bg)', color: 'var(--banner-foreground)' }}>
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
              <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                {language === 'ar' ? 'عناصر الحياة' : 'Elements of Life'}
              </h1>
              <p className="text-xl opacity-90">
                {language === 'ar'
                  ? 'القوى الأساسية التي تشكل وجودنا وتوجه رحلتنا الروحية'
                  : 'The fundamental forces that shape our existence and guide our spiritual journey'}
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
              className="space-y-6 text-center mb-16"
            >
              <h2 className="text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>
                {language === 'ar' ? 'الانسجام الكوني' : 'The Cosmic Harmony'}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {language === 'ar'
                  ? 'العناصر الخمسة هي اللبنات الأساسية للكون، وكل منها يحمل حكمة وطاقة فريدة. من خلال فهم هذه القوى والعمل معها، نستطيع تحقيق التوازن والانسجام والنمو الروحي في حياتنا.'
                  : 'The five elements are the building blocks of the universe, each carrying unique wisdom and energy. By understanding and working with these forces, we can achieve balance, harmony, and spiritual growth in our lives.'}
              </p>
            </motion.div>

            {/* Elements Grid */}
            <div className="space-y-12">
              {elements.map((element, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative p-8 rounded-2xl bg-gradient-to-br ${element.color} border border-border backdrop-blur-sm`}
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                        <element.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-2xl" style={{ fontFamily: 'var(--font-heading)' }}>
                        {language === 'ar' ? element.titleAr : element.titleEn}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {language === 'ar' ? element.descriptionAr : element.descriptionEn}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Balance Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center space-y-6"
            >
              <h2 className="text-4xl" style={{ fontFamily: 'var(--font-heading)' }}>
                {language === 'ar' ? 'العثور على التوازن' : 'Finding Balance'}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {language === 'ar'
                  ? 'عندما نتعلم العمل مع العناصر الخمسة، نكتشف طريقًا إلى التوازن الداخلي والانسجام. كل عنصر يعلمنا دروسًا مختلفة ويقدم هدايا فريدة. من خلال احترام هذه القوى ودمجها في حياتنا اليومية، نصبح أكثر اتصالاً بالكون وبذاتنا الحقيقية.'
                  : 'When we learn to work with the five elements, we discover a path to inner balance and harmony. Each element teaches us different lessons and offers unique gifts. By honoring these forces and integrating them into our daily lives, we become more connected to the universe and to our true selves.'}
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
