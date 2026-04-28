import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is Lunology?',
    answer:
      'Lunology is a spiritual brand that offers products and resources designed to support your journey of self-discovery, intuition, and cosmic connection. We bring together knowledge, culture, and spirituality through carefully curated tools and teachings.',
  },
  {
    question: 'How do I track my order?',
    answer:
      'Once your order ships, you will receive a tracking number via email. You can use this number to track your package through our shipping partner\'s website. If you haven\'t received tracking information within 2-3 business days, please contact us.',
  },
  {
    question: 'Do you ship internationally?',
    answer:
      'Currently, we primarily ship within Saudi Arabia. For international shipping inquiries, please contact us directly at lunology5@gmail.com and we\'ll do our best to accommodate your request.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept payments through Telr and Tamara. These payment gateways support various payment methods including credit cards, debit cards, and installment plans through Tamara.',
  },
  {
    question: 'How do digital products work?',
    answer:
      'Digital products are delivered instantly via email after purchase. You\'ll receive a download link or access credentials to view your digital content. All digital products come with lifetime access and future updates.',
  },
  {
    question: 'Can I return or exchange a product?',
    answer:
      'Physical products can be returned within 14 days of receipt if unused and in original packaging. Digital products are non-refundable once accessed. Please see our Refund Policy for complete details.',
  },
  {
    question: 'How can I learn more about using lunar cycles in my spiritual practice?',
    answer:
      'We offer various resources including journals, guides, and digital content that explain how to work with lunar phases. Our Lunar Phase Journal includes detailed instructions and prompts for each moon phase. You can also subscribe to our newsletter for monthly lunar insights.',
  },
  {
    question: 'Do you offer personalized consultations or readings?',
    answer:
      'While we don\'t currently offer one-on-one consultations, we do provide comprehensive digital guides and resources. For specific questions or guidance, feel free to reach out to us via email or WhatsApp.',
  },
  {
    question: 'Are your products suitable for beginners?',
    answer:
      'Absolutely! Our products are designed for seekers at all levels, from complete beginners to experienced practitioners. Each product includes clear instructions and guidance to help you get started on your spiritual journey.',
  },
  {
    question: 'How often do you release new products?',
    answer:
      'We regularly add new products aligned with lunar cycles and seasonal energies. Subscribe to our newsletter to be the first to know about new releases, special editions, and exclusive offerings.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-24 px-4 overflow-hidden" style={{ backgroundColor: 'var(--banner-bg)', color: 'var(--banner-foreground)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              FAQs
            </h1>
            <p className="text-xl opacity-90">
              Find answers to common questions
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border border-border rounded-lg overflow-hidden bg-card/20"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
                >
                  <span className="text-lg pr-8" style={{ fontFamily: 'var(--font-heading)' }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center p-8 bg-card/30 rounded-lg border border-border"
          >
            <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
              Still have questions?
            </h2>
            <p className="text-muted-foreground mb-6">
              We're here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
