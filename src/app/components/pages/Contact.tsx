import { motion } from 'motion/react';
import { Mail, Phone, Send } from 'lucide-react';

export function Contact() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-24 px-4 overflow-hidden" style={{ backgroundColor: 'var(--banner-bg)', color: 'var(--banner-foreground)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
              Contact Us
            </h1>
            <p className="text-xl opacity-90">
              We'd love to hear from you
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Whether you have a question about products, need spiritual guidance, or just want to
                  connect, we're here for you.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:lunology5@gmail.com"
                  className="flex items-start gap-4 p-6 bg-card/30 rounded-lg border border-border hover:border-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                      Email
                    </h3>
                    <p className="text-muted-foreground">lunology5@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/966573639083"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-card/30 rounded-lg border border-border hover:border-primary transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ fontFamily: 'var(--font-heading)' }}>
                      WhatsApp
                    </h3>
                    <p className="text-muted-foreground">+966 573 639 083</p>
                  </div>
                </a>
              </div>

              <div className="p-6 bg-primary/5 rounded-lg border border-primary/20">
                <h3 className="mb-3" style={{ fontFamily: 'var(--font-heading)' }}>
                  Business Hours
                </h3>
                <p className="text-muted-foreground">
                  We typically respond within 24-48 hours. For immediate assistance, please reach out via WhatsApp.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm tracking-wider uppercase text-secondary">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-2 text-sm tracking-wider uppercase text-secondary">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-2 text-sm tracking-wider uppercase text-secondary">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2 text-sm tracking-wider uppercase text-secondary">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-shadow resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
