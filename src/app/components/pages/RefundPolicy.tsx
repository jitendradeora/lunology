import { motion } from 'motion/react';

export function RefundPolicy() {
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
              Refund Policy
            </h1>

            <div className="prose prose-invert max-w-none space-y-8">
              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Physical Products
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We want you to be completely satisfied with your purchase. If you're not happy with a physical
                  product, you may return it within 14 days of receipt for a full refund, provided the item is
                  unused, in its original packaging, and in the same condition as when you received it.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Digital Products
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Due to the nature of digital products, all sales are final once the product has been accessed
                  or downloaded. Please review product descriptions carefully before purchasing. If you experience
                  technical issues accessing your digital product, please contact us for assistance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Return Process
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To initiate a return, please contact us at lunology5@gmail.com with your order number and
                  reason for return. We will provide you with return shipping instructions. Return shipping
                  costs are the responsibility of the customer unless the item arrived damaged or defective.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Refund Timeline
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Once we receive and inspect your returned item, we will process your refund within 5-7 business
                  days. The refund will be issued to your original payment method. Please allow additional time
                  for your bank or payment provider to process the refund.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Damaged or Defective Items
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you receive a damaged or defective item, please contact us within 7 days of receipt with
                  photos of the damage. We will arrange for a replacement or full refund, including return
                  shipping costs.
                </p>
              </div>

              <div>
                <h2 className="text-2xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                  Contact Us
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about our refund policy, please contact us at lunology5@gmail.com
                  or via WhatsApp at +966 573 639 083.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
