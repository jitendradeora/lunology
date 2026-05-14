import { Link } from "react-router";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Moon,
  Sun,
  Globe,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./ThemeProvider";
import { useLanguage } from "./LanguageProvider";
import { CartDropdown } from "./CartDropdown";
import logoLunologyEn from "../../imports/logo-lunology-en.png";
import logoLunologyAr from "../../imports/logo-lunology-ar.png";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [digitalBooksMenu, setDigitalBooksMenu] = useState(false);
  const [printedBooksMenu, setPrintedBooksMenu] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const digitalMenuId = "digital-books-menu";
  const printedMenuId = "printed-books-menu";
  const mobileMenuId = "mobile-nav-menu";

  const digitalProducts = [
    {
      id: 8,
      name: "Digital Dream Interpretation Guide",
      nameAr: "الدليل الرقمي لتفسير الأحلام",
      image:
        "https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png",
    },
    {
      id: 9,
      name: "Digital Lunar Calendar 2026",
      nameAr: "التقويم القمري الرقمي 2026",
      image:
        "https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png",
    },
    {
      id: 10,
      name: "Meditation & Intention Workbook",
      nameAr: "كتاب عمل التأمل وتحديد النية",
      image:
        "https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png",
    },
  ];

  const printedProducts = [
    {
      id: 5,
      name: "Dreamology Journal 2026",
      nameAr: "مفكرة دريمولوجي 2026",
      image:
        "https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png",
    },
    {
      id: 6,
      name: "Annual Planner 2026",
      nameAr: "المفكرة السنوية 2026",
      image:
        "https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png",
    },
    {
      id: 7,
      name: "Mindfulness Journal",
      nameAr: "مفكرة اليقظة الذهنية",
      image:
        "https://cdn.salla.sa/dPjdmy/CCRZObFc4mPA7MaIYvrrPstzCEn7RKhu78oaWCxr.png",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-2xl border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="relative group flex items-center">
            <img
              src={language === "ar" ? logoLunologyAr : logoLunologyEn}
              alt="Lunology"
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/about" className="relative group text-sm tracking-wide">
              {language === "ar" ? "قصتنا" : "Our Story"}
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></div>
            </Link>

            <Link
              to="/elements"
              className="relative group text-sm tracking-wide"
            >
              {language === "ar" ? "عناصر الحياة" : "Elements of Life"}
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></div>
            </Link>

            <Link
              to="/biogeometry"
              className="relative group text-sm tracking-wide"
            >
              {language === "ar" ? "الهندسة الحيوية" : "BioGeometry"}
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></div>
            </Link>

            {/* Digital Books Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setDigitalBooksMenu(true)}
              onMouseLeave={() => setDigitalBooksMenu(false)}
              onFocusCapture={() => setDigitalBooksMenu(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                  setDigitalBooksMenu(false);
                }
              }}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm tracking-wide hover:text-primary transition-colors"
                aria-expanded={digitalBooksMenu}
                aria-controls={digitalMenuId}
                aria-label={
                  language === "ar"
                    ? "فتح قائمة الكتب الرقمية"
                    : "Toggle digital books menu"
                }
              >
                {language === "ar" ? "الكتب الرقمية" : "Digital Books"}
                <ChevronDown
                  className="w-4 h-4 transition-transform"
                  style={{
                    transform: digitalBooksMenu
                      ? "rotate(180deg)"
                      : "rotate(0)",
                  }}
                />
              </button>
              <AnimatePresence>
                {digitalBooksMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    id={digitalMenuId}
                    role="menu"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[650px] bg-popover/95 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    {/* Mega Menu Header */}
                    <div className="px-6 py-4 border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
                      <h3
                        className="text-base font-medium"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {language === "ar" ? "الكتب الرقمية" : "Digital Books"}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {language === "ar"
                          ? "تنزيل فوري، وصول مدى الحياة"
                          : "Instant download, lifetime access"}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 p-6 gap-6">
                      <div className="space-y-2">
                        <h4 className="text-xs uppercase text-muted-foreground mb-3 px-2">
                          {language === "ar"
                            ? "المنتجات المميزة"
                            : "Featured Products"}
                        </h4>
                        {digitalProducts.map((product) => (
                          <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all group"
                          >
                            <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-sm font-medium block truncate group-hover:text-primary transition-colors">
                                {language === "ar"
                                  ? product.nameAr
                                  : product.name}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {language === "ar"
                                  ? "عرض التفاصيل"
                                  : "View details"}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-3 border-l border-border/50 pl-6">
                        <h4 className="text-xs uppercase text-muted-foreground mb-3">
                          {language === "ar" ? "روابط سريعة" : "Quick Links"}
                        </h4>
                        <Link
                          to="/shop/digital"
                          className="flex items-center gap-2 py-2.5 px-3 rounded-lg hover:bg-muted/50 text-sm hover:text-primary transition-all group"
                        >
                          <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                          {language === "ar"
                            ? "جميع الكتب الرقمية"
                            : "All Digital Books"}
                        </Link>
                        <Link
                          to="/shop"
                          className="flex items-center gap-2 py-2.5 px-3 rounded-lg hover:bg-muted/50 text-sm hover:text-primary transition-all group"
                        >
                          <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                          {language === "ar"
                            ? "تصفح جميع المنتجات"
                            : "Browse All Products"}
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Printed Books Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setPrintedBooksMenu(true)}
              onMouseLeave={() => setPrintedBooksMenu(false)}
              onFocusCapture={() => setPrintedBooksMenu(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node)) {
                  setPrintedBooksMenu(false);
                }
              }}
            >
              <button
                type="button"
                className="flex items-center gap-1 text-sm tracking-wide hover:text-primary transition-colors"
                aria-expanded={printedBooksMenu}
                aria-controls={printedMenuId}
                aria-label={
                  language === "ar"
                    ? "فتح قائمة الكتب المطبوعة"
                    : "Toggle printed books menu"
                }
              >
                {language === "ar" ? "الكتب المطبوعة" : "Printed Books"}
                <ChevronDown
                  className="w-4 h-4 transition-transform"
                  style={{
                    transform: printedBooksMenu
                      ? "rotate(180deg)"
                      : "rotate(0)",
                  }}
                />
              </button>
              <AnimatePresence>
                {printedBooksMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    id={printedMenuId}
                    role="menu"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[650px] bg-popover/95 backdrop-blur-xl border border-border/50 rounded-2xl overflow-hidden shadow-2xl"
                  >
                    {/* Mega Menu Header */}
                    <div className="px-6 py-4 border-b border-border/50 bg-gradient-to-r from-primary/5 to-transparent">
                      <h3
                        className="text-base font-medium"
                        style={{ fontFamily: "var(--font-heading)" }}
                      >
                        {language === "ar" ? "الكتب المطبوعة" : "Printed Books"}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        {language === "ar"
                          ? "جودة ممتازة، شحن سريع"
                          : "Premium quality, fast shipping"}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 p-6 gap-6">
                      <div className="space-y-2">
                        <h4 className="text-xs uppercase text-muted-foreground mb-3 px-2">
                          {language === "ar"
                            ? "المنتجات المميزة"
                            : "Featured Products"}
                        </h4>
                        {printedProducts.map((product) => (
                          <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted/50 transition-all group"
                          >
                            <div className="w-14 h-14 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                              />
                            </div>
                            <div className="flex-1 min-w-0">
                              <span className="text-sm font-medium block truncate group-hover:text-primary transition-colors">
                                {language === "ar"
                                  ? product.nameAr
                                  : product.name}
                              </span>
                              <span className="text-xs text-muted-foreground">
                                {language === "ar"
                                  ? "عرض التفاصيل"
                                  : "View details"}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="space-y-3 border-l border-border/50 pl-6">
                        <h4 className="text-xs uppercase text-muted-foreground mb-3">
                          {language === "ar" ? "روابط سريعة" : "Quick Links"}
                        </h4>
                        <Link
                          to="/shop/physical"
                          className="flex items-center gap-2 py-2.5 px-3 rounded-lg hover:bg-muted/50 text-sm hover:text-primary transition-all group"
                        >
                          <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                          {language === "ar"
                            ? "جميع الكتب المطبوعة"
                            : "All Printed Books"}
                        </Link>
                        <Link
                          to="/shop"
                          className="flex items-center gap-2 py-2.5 px-3 rounded-lg hover:bg-muted/50 text-sm hover:text-primary transition-all group"
                        >
                          <ChevronDown className="w-4 h-4 -rotate-90 group-hover:translate-x-1 transition-transform" />
                          {language === "ar"
                            ? "تصفح جميع المنتجات"
                            : "Browse All Products"}
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button
              type="button"
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="cursor-pointer flex items-center gap-1 p-2 hover:text-primary transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
              <span className="text-xs">{language === "en" ? "ع" : "EN"}</span>
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              className="cursor-pointer p-2 hover:text-primary transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <CartDropdown />
          </div>

          {/* Mobile Menu Button & Cart for Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <CartDropdown />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls={mobileMenuId}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Slide from Right for EN, Left for AR */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9999] md:hidden"
                style={{ height: "100vh", width: "100vw" }}
                onClick={() => setIsOpen(false)}
              />

              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ x: language === "ar" ? "-100%" : "100%" }}
                animate={{ x: 0 }}
                exit={{ x: language === "ar" ? "-100%" : "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className={`fixed inset-y-0 ${language === "ar" ? "left-0 border-r" : "right-0 border-l"} w-[90%] sm:w-[85%] max-w-sm bg-background border-border shadow-2xl z-[10000] md:hidden flex flex-col`}
                style={{ height: "100vh" }}
                id={mobileMenuId}
              >
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between p-4 sm:p-5 border-b border-border bg-gradient-to-r from-primary/5 to-transparent shrink-0">
                  <img
                    src={language === "ar" ? logoLunologyAr : logoLunologyEn}
                    alt="Lunology"
                    className="h-10 sm:h-12 w-auto"
                  />
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Menu Content */}
                <div
                  className="flex-1 overflow-y-auto overscroll-contain py-6 px-4"
                  style={{ minHeight: 0 }}
                >
                  <nav className="space-y-2">
                    {/* Main Links */}
                    <Link
                      to="/about"
                      className="block py-3 px-4 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {language === "ar" ? "قصتنا" : "Our Story"}
                    </Link>
                    <Link
                      to="/elements"
                      className="block py-3 px-4 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {language === "ar" ? "عناصر الحياة" : "Elements of Life"}
                    </Link>
                    <Link
                      to="/biogeometry"
                      className="block py-3 px-4 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {language === "ar" ? "الهندسة الحيوية" : "BioGeometry"}
                    </Link>
                    <Link
                      to="/shop/digital"
                      className="block py-3 px-4 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {language === "ar"
                        ? "جميع الكتب الرقمية"
                        : "All Digital Books"}
                    </Link>
                    <Link
                      to="/shop/physical"
                      className="block py-3 px-4 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {language === "ar"
                        ? "جميع الكتب المطبوعة"
                        : "All Printed Books"}
                    </Link>
                    <Link
                      to="/shop/biogeometry"
                      className="block py-3 px-4 rounded-lg hover:bg-muted transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {language === "ar"
                        ? "متجر الهندسة الحيوية"
                        : "BioGeometry shop"}
                    </Link>

                    {/* Settings */}
                    <div className="pt-6 space-y-2 border-t border-border mt-6">
                      <button
                        type="button"
                        onClick={() =>
                          setLanguage(language === "en" ? "ar" : "en")
                        }
                        className="flex items-center gap-3 py-3 px-4 w-full rounded-lg hover:bg-muted transition-colors"
                      >
                        <Globe className="w-5 h-5" />
                        <span>{language === "en" ? "العربية" : "English"}</span>
                      </button>
                      <button
                        type="button"
                        onClick={toggleTheme}
                        className="flex items-center gap-3 py-3 px-4 w-full rounded-lg hover:bg-muted transition-colors"
                      >
                        {theme === "dark" ? (
                          <>
                            <Sun className="w-5 h-5" />
                            <span>
                              {language === "ar"
                                ? "الوضع الفاتح"
                                : "Light Mode"}
                            </span>
                          </>
                        ) : (
                          <>
                            <Moon className="w-5 h-5" />
                            <span>
                              {language === "ar" ? "الوضع الداكن" : "Dark Mode"}
                            </span>
                          </>
                        )}
                      </button>
                    </div>
                  </nav>
                </div>

                {/* Mobile Menu Footer with Social Icons */}
                <div className="p-5 border-t border-border bg-gradient-to-r from-muted/20 to-transparent shrink-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {language === "ar" ? "تابعنا" : "Follow us"}
                    </span>
                    <div className="flex items-center gap-4">
                      <a
                        href="https://instagram.com/lunology"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href="https://twitter.com/lunology"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a
                        href="https://facebook.com/lunology"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
