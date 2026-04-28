import { motion } from 'motion/react';
import { CreditCard, Award, Truck } from 'lucide-react';
import { useLanguage } from './LanguageProvider';

export function PreFooterFeatures() {
  const { language } = useLanguage();

  const features = [
    {
      icon: CreditCard,
      title: { en: 'Multiple Payment Options', ar: 'خيارات دفع متعددة' },
      description: {
        en: 'For your convenience, we offer a variety of secure payment methods',
        ar: 'لراحتك، نوفر مجموعة متنوعة من طرق الدفع الآمنة',
      },
    },
    {
      icon: Award,
      title: { en: 'High Quality', ar: 'جودة عالية' },
      description: {
        en: 'Our products are authentic and of high quality',
        ar: 'منتجاتنا أصلية وذات جودة عالية',
      },
    },
    {
      icon: Truck,
      title: { en: 'Fast Shipping', ar: 'شحن سريع' },
      description: {
        en: 'Your order will be delivered wherever you are',
        ar: 'سيتم توصيل طلبك أينما كنت',
      },
    },
  ];

  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-b from-background via-muted/20 to-background border-y border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative inline-block mb-6">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl group-hover:bg-primary/30 transition-colors duration-500"></div>

                {/* Icon container */}
                <div className="relative w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <feature.icon className="w-10 h-10 text-primary" />
                </div>
              </div>

              <h3 className="text-xl md:text-2xl mb-3 group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-heading)' }}>
                {language === 'ar' ? feature.title.ar : feature.title.en}
              </h3>

              <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                {language === 'ar' ? feature.description.ar : feature.description.en}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
