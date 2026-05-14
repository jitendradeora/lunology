import { motion } from "motion/react";
import { SEO } from "../SEO";

export function About() {
  return (
    <>
      <SEO
        title="Our Story - Lunology | A Cosmic Journey of Self-Discovery"
        description="Learn about Lunology's mission to guide you on a journey of self-discovery, intuition, and inner connection through ancient wisdom and modern thought. Discover our cosmic companion products."
        keywords="Lunology story, about Lunology, cosmic wisdom, spiritual journey, self-discovery, ancient wisdom, modern spirituality"
        canonicalPathOrUrl="/about"
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
                Our Story
              </h1>
              <p className="text-xl opacity-90">
                A journey into consciousness, wisdom, and cosmic connection
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2
                className="text-4xl mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                A Space of Consciousness
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Lunology is a space of consciousness that brings together
                knowledge, culture, and spirituality in a harmonious blend. We
                are dedicated to exploring the profound connections between
                cosmic wisdom and personal growth, honoring the ancient rhythms
                that guide our existence.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6 p-8 bg-card/30 rounded-lg border border-border"
            >
              <h2
                className="text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Vision
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in the transformative power of awareness and the deep
                wisdom that resides within each individual. Through our
                carefully curated products and resources, we aim to support
                seekers on their journey toward self-discovery, intuition, and
                inner peace.
              </p>
            </motion.div>

            {/* Philosophy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2
                className="text-4xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Philosophy
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary"></div>
                  </div>
                  <h3
                    className="text-xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Lunar Wisdom
                  </h3>
                  <p className="text-muted-foreground">
                    We honor the natural cycles of the moon and its influence on
                    consciousness, emotion, and spiritual practice.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary"></div>
                  </div>
                  <h3
                    className="text-xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Inner Journey
                  </h3>
                  <p className="text-muted-foreground">
                    Every product is designed to facilitate deeper
                    self-awareness and support your personal path of spiritual
                    exploration.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-primary"></div>
                  </div>
                  <h3
                    className="text-xl"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Cosmic Connection
                  </h3>
                  <p className="text-muted-foreground">
                    We celebrate the interconnectedness of all things and the
                    wisdom found in celestial patterns and universal energies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Commitment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2
                className="text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Our Commitment
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Each product in our collection is thoughtfully curated or
                created with intention, quality, and spiritual significance in
                mind. We are committed to providing tools and resources that
                genuinely support your growth, awareness, and connection to the
                cosmic rhythms that surround us.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you are just beginning your spiritual journey or have
                been walking this path for years, Lunology is here as your
                companion, offering guidance, inspiration, and sacred tools for
                every phase of your evolution.
              </p>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center py-12"
            >
              <p
                className="text-2xl mb-8"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Join us on this cosmic journey
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/shop"
                  className="px-8 py-4 bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  Explore the Shop
                </a>
                <a
                  href="/contact"
                  className="px-8 py-4 border border-border rounded-full hover:bg-muted transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
