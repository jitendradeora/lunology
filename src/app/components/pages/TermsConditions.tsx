import { motion } from 'motion/react';
import { SEO, generateBreadcrumbSchema } from '../SEO';

export function TermsConditions() {
  return (
    <>
      <SEO
        title="Terms & Conditions | Lunology"
        description="Terms of use for the Lunology website, purchases, digital and physical products, and limitations of liability."
        keywords="Lunology terms, conditions of sale, website terms, Saudi Arabia"
        canonicalPathOrUrl="/terms-conditions"
        schema={generateBreadcrumbSchema([
          { name: 'Home', url: '/' },
          { name: 'Terms & Conditions', url: '/terms-conditions' },
        ])}
      />
    <div className="pt-20 min-h-screen">
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              Terms & Conditions
            </h1>

            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  1. Acceptance of Terms
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the Lunology website and purchasing our products, you accept and agree
                  to be bound by these Terms and Conditions. If you do not agree to these terms, please do not
                  use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  2. Products and Services
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We strive to provide accurate descriptions and images of our products. However, we do not
                  warrant that product descriptions, images, or other content are completely accurate, current,
                  or error-free. All products are subject to availability.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  3. Pricing and Payment
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All prices are listed in Saudi Riyals (SAR) and are subject to change without notice. Payment
                  is processed through our authorized payment gateways (Telr and Tamara). By providing payment
                  information, you authorize us to charge the applicable fees.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  4. Shipping and Delivery
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We will make reasonable efforts to deliver products within the estimated timeframe. However,
                  delivery times are not guaranteed. Risk of loss and title for physical products pass to you
                  upon delivery to the shipping carrier.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  5. Intellectual Property
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this website, including text, graphics, logos, images, and digital products,
                  is the property of Lunology and is protected by copyright and intellectual property laws.
                  Digital products are licensed for personal use only and may not be redistributed or resold.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  6. Disclaimer
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our products are intended for spiritual growth and personal development. They are not a
                  substitute for professional medical, psychological, or legal advice. Use of our products
                  is at your own risk.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  7. Limitation of Liability
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To the fullest extent permitted by law, Lunology shall not be liable for any indirect,
                  incidental, special, or consequential damages arising from the use of our products or services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  8. Governing Law
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms shall be governed by and construed in accordance with the laws of the Kingdom
                  of Saudi Arabia. Any disputes shall be subject to the exclusive jurisdiction of the courts
                  of Saudi Arabia.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  9. Contact Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms and Conditions, please contact us at lunology5@gmail.com.
                  <br />
                  <br />
                  Commercial Register: 1010578591
                  <br />
                  VAT Number: 314526248600003
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </>
  );
}
