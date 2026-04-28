import { motion } from 'motion/react';

export function PrivacyPolicy() {
  return (
    <div className="pt-20 min-h-screen">
      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
              Privacy Policy
            </h1>

            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  1. Information We Collect
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We collect information you provide directly to us, including name, email address, shipping
                  address, phone number, and payment information when you make a purchase or subscribe to our
                  newsletter. We also collect information about your device and how you interact with our website.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  2. How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect to process your orders, send you digital products, communicate
                  with you about your purchases, send marketing communications (if you've opted in), improve our
                  website and services, and comply with legal obligations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  3. Information Sharing
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell your personal information. We may share your information with service providers
                  who assist us in operating our website and conducting our business (such as payment processors
                  and shipping companies), and when required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  4. Payment Security
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use secure payment gateways (Telr and Tamara) to process your payments. We do not store
                  complete credit card information on our servers. Payment information is encrypted and handled
                  according to industry security standards.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  5. Cookies and Tracking
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience, analyze
                  website traffic, and understand user behavior. You can control cookies through your browser
                  settings, though some features of our website may not function properly if cookies are disabled.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  6. Your Rights
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to access, update, or delete your personal information. You can unsubscribe
                  from marketing emails at any time. To exercise these rights, please contact us at
                  lunology5@gmail.com.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  7. Data Retention
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes outlined
                  in this policy, comply with legal obligations, resolve disputes, and enforce our agreements.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  8. Children's Privacy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect
                  personal information from children. If you believe we have collected information from a child,
                  please contact us immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  9. Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by
                  posting the new policy on this page and updating the "Last Updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  10. Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us:
                  <br />
                  Email: lunology5@gmail.com
                  <br />
                  WhatsApp: +966 573 639 083
                  <br />
                  <br />
                  Commercial Register: 1010578591
                  <br />
                  VAT Number: 314526248600003
                </p>
              </div>

              <div className="pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground">Last Updated: April 17, 2026</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
