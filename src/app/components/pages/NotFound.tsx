import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Home, ArrowRight } from 'lucide-react';
import { SEO } from '../SEO';

export function NotFound() {
  return (
    <>
      <SEO
        title="404 - Page not found | Lunology"
        description="This Lunology page could not be found. Return home or browse the shop for spiritual products and cosmic resources."
        robots="noindex, follow"
      />
    <div className="pt-20 min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Cosmic 404 */}
          <div className="relative">
            <div className="text-[10rem] md:text-[14rem] leading-none opacity-10" style={{ fontFamily: 'var(--font-heading)' }}>
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 blur-3xl animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Lost in the Cosmos
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            The page you're looking for seems to have drifted into another dimension
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all"
            >
              <Home className="w-5 h-5" />
              Return Home
            </Link>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-full hover:bg-muted transition-colors"
            >
              Explore Shop
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
    </>
  );
}
