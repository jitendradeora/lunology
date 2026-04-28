import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, X, Plus, Minus, ShoppingCart } from 'lucide-react';
import { useCart } from './CartProvider';
import { useLanguage } from './LanguageProvider';

export function CartDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();
  const { t, language } = useLanguage();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 hover:text-primary transition-colors"
        aria-label="Shopping cart"
      >
        <ShoppingBag className="w-5 h-5" />
        {totalItems > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-96 max-w-[calc(100vw-2rem)] bg-popover border border-border rounded-2xl shadow-2xl overflow-hidden z-50"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-border bg-muted/30">
              <h3 className="flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
                <ShoppingCart className="w-5 h-5" />
                {language === 'ar' ? 'سلة التسوق' : 'Shopping Cart'}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="max-h-96 overflow-y-auto">
              {items.length === 0 ? (
                <div className="p-8 text-center">
                  <ShoppingBag className="w-12 h-12 mx-auto mb-3 text-muted-foreground opacity-30" />
                  <p className="text-muted-foreground">
                    {language === 'ar' ? 'سلتك فارغة' : 'Your cart is empty'}
                  </p>
                </div>
              ) : (
                <div className="p-4 space-y-3">
                  {items.map((item, index) => (
                    <motion.div
                      key={`${item.id}-${JSON.stringify(item.variants)}`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex gap-3 p-3 bg-card rounded-xl border border-border hover:border-primary/30 transition-all group"
                    >
                      {/* Image */}
                      <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-muted">
                        <img
                          src={item.image}
                          alt={language === 'ar' ? item.nameAr || item.name : item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm mb-1 truncate" style={{ fontFamily: 'var(--font-heading)' }}>
                          {language === 'ar' ? item.nameAr || item.name : item.name}
                        </h4>

                        {/* Variants */}
                        {item.variants && Object.keys(item.variants).length > 0 && (
                          <div className="mb-2">
                            {Object.entries(item.variants).map(([key, value]) => (
                              <p key={key} className="text-xs text-muted-foreground">
                                {key}: {value}
                              </p>
                            ))}
                          </div>
                        )}

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1, item.variants)}
                              className="w-6 h-6 rounded-md border border-border hover:border-primary hover:bg-muted transition-colors flex items-center justify-center"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="text-sm w-8 text-center">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1, item.variants)}
                              className="w-6 h-6 rounded-md border border-border hover:border-primary hover:bg-muted transition-colors flex items-center justify-center"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <div className="flex items-center gap-2">
                            <p className="text-sm">
                              {t('common.sar')} {item.price * item.quantity}
                            </p>
                            <button
                              onClick={() => removeFromCart(item.id, item.variants)}
                              className="p-1 hover:bg-destructive/10 hover:text-destructive rounded transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-4 border-t border-border bg-muted/30">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">
                    {language === 'ar' ? 'المجموع' : 'Total'}
                  </span>
                  <span className="text-xl" style={{ fontFamily: 'var(--font-heading)' }}>
                    {t('common.sar')} {totalPrice}
                  </span>
                </div>

                <Link
                  to="/checkout"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  <ShoppingCart className="w-4 h-4" />
                  {language === 'ar' ? 'إتمام الشراء' : 'Checkout'}
                </Link>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
