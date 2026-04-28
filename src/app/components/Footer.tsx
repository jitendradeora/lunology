import { Link } from "react-router";
import { Mail, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import visaPayIcon from "../../imports/pay/visa-card-pay.png";
import mastercardPayIcon from "../../imports/pay/mastercard-card-pay.png";
import madaPayIcon from "../../imports/pay/mada-card-pay.png";
import tamaraPayIcon from "../../imports/pay/tamara-card-pay.png";
import paypalPayIcon from "../../imports/pay/paypal-pay.png";
import applePayIcon from "../../imports/pay/apple-card-pay.png";

export function Footer() {
  const [quickLinksOpen, setQuickLinksOpen] = useState(false);
  const [legalOpen, setLegalOpen] = useState(false);
  const quickLinksId = "footer-quick-links";
  const legalLinksId = "footer-legal-links";

  return (
    <footer className="relative bg-gradient-to-b from-background to-muted/30 border-t border-border overflow-hidden">
      {/* Cosmic background effect */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[150px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-[150px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3
              className="text-3xl mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Lunology
            </h3>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              A cosmic companion on the journey of discovery, intuition, and
              inner connection.
            </p>
          </div>

          {/* Quick Links - Collapsible on Mobile */}
          <div>
            <button
              type="button"
              onClick={() => setQuickLinksOpen(!quickLinksOpen)}
              className="flex items-center justify-between w-full mb-4 text-sm tracking-wider uppercase text-secondary md:cursor-default"
              aria-expanded={quickLinksOpen}
              aria-controls={quickLinksId}
            >
              <span>Quick Links</span>
              <ChevronDown
                className={`w-4 h-4 md:hidden transition-transform ${quickLinksOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Desktop - Always visible */}
            <div className="hidden md:block space-y-3">
              <Link
                to="/about"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Our Story
              </Link>
              <Link
                to="/faq"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                FAQs
              </Link>
              <Link
                to="/contact"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile - Collapsible */}
            <AnimatePresence>
              {quickLinksOpen && (
                <motion.div
                  id={quickLinksId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden overflow-hidden space-y-3"
                >
                  <Link
                    to="/about"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Our Story
                  </Link>
                  <Link
                    to="/faq"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    FAQs
                  </Link>
                  <Link
                    to="/contact"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact Us
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Legal - Collapsible on Mobile */}
          <div>
            <button
              type="button"
              onClick={() => setLegalOpen(!legalOpen)}
              className="flex items-center justify-between w-full mb-4 text-sm tracking-wider uppercase text-secondary md:cursor-default"
              aria-expanded={legalOpen}
              aria-controls={legalLinksId}
            >
              <span>Legal</span>
              <ChevronDown
                className={`w-4 h-4 md:hidden transition-transform ${legalOpen ? "rotate-180" : ""}`}
              />
            </button>

            {/* Desktop - Always visible */}
            <div className="hidden md:block space-y-3">
              <Link
                to="/refund-policy"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Refund Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                to="/privacy-policy"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
            </div>

            {/* Mobile - Collapsible */}
            <AnimatePresence>
              {legalOpen && (
                <motion.div
                  id={legalLinksId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="md:hidden overflow-hidden space-y-3"
                >
                  <Link
                    to="/refund-policy"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Refund Policy
                  </Link>
                  <Link
                    to="/terms-conditions"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                  <Link
                    to="/privacy-policy"
                    className="block text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-sm text-muted-foreground">
            <a
              href="mailto:lunology5@gmail.com"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="w-4 h-4" />
              lunology5@gmail.com
            </a>
            <a
              href="https://wa.me/966573639083"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone className="w-4 h-4" />
              +966 573 639 083
            </a>
          </div>

          <div className="text-sm text-muted-foreground text-center md:text-right">
            <p>CR: 1010578591 | VAT: 314526248600003</p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-8 pt-8 border-t border-border">
          <h4 className="text-center text-sm text-muted-foreground mb-6">
            Accepted Payment Methods
          </h4>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {/* Visa */}
            <div className="w-16 h-10 p-0 bg-white rounded-lg border border-border/50 flex items-center justify-center opacity-80 hover:opacity-100 transition-all hover:shadow-md overflow-hidden">
              <img
                src={visaPayIcon}
                alt="Visa"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Mastercard */}
            <div className="w-16 h-10 p-0 bg-white rounded-lg border border-border/50 flex items-center justify-center opacity-80 hover:opacity-100 transition-all hover:shadow-md overflow-hidden">
              <img
                src={mastercardPayIcon}
                alt="Mastercard"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Mada */}
            <div className="w-16 h-10 p-0 bg-white rounded-lg border border-border/50 flex items-center justify-center opacity-80 hover:opacity-100 transition-all hover:shadow-md overflow-hidden">
              <img
                src={madaPayIcon}
                alt="Mada"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Tamara */}
            <div className="w-16 h-10 p-0 bg-white rounded-lg border border-border/50 flex items-center justify-center opacity-80 hover:opacity-100 transition-all hover:shadow-md overflow-hidden">
              <img
                src={tamaraPayIcon}
                alt="Tamara"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Paypal */}
            <div className="w-16 h-10 p-0 bg-white rounded-lg border border-border/50 flex items-center justify-center opacity-80 hover:opacity-100 transition-all hover:shadow-md overflow-hidden">
              <img
                src={paypalPayIcon}
                alt="Paypal"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Apple Pay */}
            <div className="w-16 h-10 p-0 bg-white rounded-lg border border-border/50 flex items-center justify-center opacity-80 hover:opacity-100 transition-all hover:shadow-md overflow-hidden">
              <img
                src={applePayIcon}
                alt="Apple Pay"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Lunology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
