import { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, Lock, CreditCard, Package, Truck, CheckCircle, User, Mail, Phone, MapPin } from 'lucide-react';
import { useCart } from '../CartProvider';
import { useLanguage } from '../LanguageProvider';

type CheckoutMode = 'guest' | 'login' | 'register';

export function Checkout() {
  const { items, totalPrice } = useCart();
  const { t, language } = useLanguage();
  const [mode, setMode] = useState<CheckoutMode>('guest');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'tamara' | 'apple'>('card');

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-30" />
          <h2 className="text-2xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            {language === 'ar' ? 'سلتك فارغة' : 'Your cart is empty'}
          </h2>
          <p className="text-muted-foreground mb-6">
            {language === 'ar' ? 'أضف بعض المنتجات للمتابعة إلى الدفع' : 'Add some products to proceed to checkout'}
          </p>
          <Link
            to="/shop"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:shadow-lg transition-all"
          >
            {language === 'ar' ? 'تسوق الآن' : 'Shop Now'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-muted/20 to-background">
      {/* Header */}
      <section className="py-12 px-4 border-b border-border" style={{ backgroundColor: 'var(--banner-bg)', color: 'var(--banner-foreground)' }}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
            {language === 'ar' ? 'إتمام الطلب' : 'Checkout'}
          </h1>
          <p className="opacity-90">
            {language === 'ar' ? 'أكمل طلبك بشكل آمن' : 'Complete your order securely'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Authentication Toggle */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="text-xl mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
                {language === 'ar' ? 'معلومات الحساب' : 'Account Information'}
              </h2>

              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setMode('guest')}
                  className={`flex-1 px-4 py-3 rounded-xl transition-all ${
                    mode === 'guest'
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {language === 'ar' ? 'ضيف' : 'Guest'}
                </button>
                <button
                  onClick={() => setMode('login')}
                  className={`flex-1 px-4 py-3 rounded-xl transition-all ${
                    mode === 'login'
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {language === 'ar' ? 'تسجيل دخول' : 'Login'}
                </button>
                <button
                  onClick={() => setMode('register')}
                  className={`flex-1 px-4 py-3 rounded-xl transition-all ${
                    mode === 'register'
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted hover:bg-muted/80'
                  }`}
                >
                  {language === 'ar' ? 'تسجيل جديد' : 'Register'}
                </button>
              </div>

              <AnimatePresence mode="wait">
                {mode === 'login' && (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm mb-2">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                        placeholder={language === 'ar' ? 'بريدك@الإلكتروني.com' : 'your@email.com'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">{language === 'ar' ? 'كلمة المرور' : 'Password'}</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                        placeholder="••••••••"
                      />
                    </div>
                    <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl hover:shadow-lg transition-all">
                      {language === 'ar' ? 'تسجيل الدخول' : 'Sign In'}
                    </button>
                  </motion.div>
                )}

                {mode === 'register' && (
                  <motion.div
                    key="register"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-sm mb-2">{language === 'ar' ? 'الاسم الكامل' : 'Full Name'}</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                        placeholder={language === 'ar' ? 'اسمك الكامل' : 'Your full name'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">{language === 'ar' ? 'البريد الإلكتروني' : 'Email'}</label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                        placeholder={language === 'ar' ? 'بريدك@الإلكتروني.com' : 'your@email.com'}
                      />
                    </div>
                    <div>
                      <label className="block text-sm mb-2">{language === 'ar' ? 'كلمة المرور' : 'Password'}</label>
                      <input
                        type="password"
                        className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                        placeholder="••••••••"
                      />
                    </div>
                    <button className="w-full py-3 bg-primary text-primary-foreground rounded-xl hover:shadow-lg transition-all">
                      {language === 'ar' ? 'إنشاء حساب' : 'Create Account'}
                    </button>
                  </motion.div>
                )}

                {mode === 'guest' && (
                  <motion.div
                    key="guest"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-center py-4 text-muted-foreground"
                  >
                    {language === 'ar' ? 'المتابعة كضيف - لا حاجة لحساب' : 'Continue as guest - No account needed'}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Billing Information */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="text-xl mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
                <MapPin className="w-5 h-5 text-primary" />
                {language === 'ar' ? 'معلومات الفواتير والشحن' : 'Billing & Shipping Information'}
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">
                      <User className="w-4 h-4 inline-block mr-1" />
                      {language === 'ar' ? 'الاسم الأول' : 'First Name'}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">
                      <User className="w-4 h-4 inline-block mr-1" />
                      {language === 'ar' ? 'اسم العائلة' : 'Last Name'}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    <Mail className="w-4 h-4 inline-block mr-1" />
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    <Phone className="w-4 h-4 inline-block mr-1" />
                    {language === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">{language === 'ar' ? 'العنوان' : 'Street Address'}</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm mb-2">{language === 'ar' ? 'المدينة' : 'City'}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">{language === 'ar' ? 'المنطقة' : 'State/Province'}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">{language === 'ar' ? 'الرمز البريدي' : 'Postal Code'}</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2 className="text-xl mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
                <CreditCard className="w-5 h-5 text-primary" />
                {language === 'ar' ? 'طريقة الدفع' : 'Payment Method'}
              </h2>

              <div className="space-y-3">
                <button
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    paymentMethod === 'card'
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5" />
                      <span>{language === 'ar' ? 'بطاقة ائتمان/مدى' : 'Credit/Debit Card'}</span>
                    </div>
                    <div className="flex gap-3 items-center">
                      <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-5" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-5" />
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Mada_Logo.svg/512px-Mada_Logo.svg.png" alt="Mada" className="h-5" />
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod('tamara')}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    paymentMethod === 'tamara'
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5" />
                    <span>{language === 'ar' ? 'تمارا - قسط على 4 دفعات' : 'Tamara - Split in 4'}</span>
                  </div>
                </button>

                <button
                  onClick={() => setPaymentMethod('apple')}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    paymentMethod === 'apple'
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">🍎</span>
                    <span>Apple Pay</span>
                  </div>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="w-4 h-4 text-green-600" />
                  <span>{language === 'ar' ? 'دفع آمن ومشفر' : 'Secure encrypted payment'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
              <h2 className="text-xl mb-4 flex items-center gap-2" style={{ fontFamily: 'var(--font-heading)' }}>
                <ShoppingBag className="w-5 h-5 text-primary" />
                {language === 'ar' ? 'ملخص الطلب' : 'Order Summary'}
              </h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={`${item.id}-${JSON.stringify(item.variants)}`} className="flex gap-3">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm truncate mb-1">{language === 'ar' ? item.nameAr || item.name : item.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {language === 'ar' ? 'الكمية' : 'Qty'}: {item.quantity}
                      </p>
                      <p className="text-sm mt-1">
                        {t('common.sar')} {item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{language === 'ar' ? 'المجموع الفرعي' : 'Subtotal'}</span>
                  <span>{t('common.sar')} {totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{language === 'ar' ? 'الشحن' : 'Shipping'}</span>
                  <span className="text-green-600">{language === 'ar' ? 'مجاني' : 'Free'}</span>
                </div>
                <div className="flex justify-between text-lg pt-3 border-t border-border" style={{ fontFamily: 'var(--font-heading)' }}>
                  <span>{language === 'ar' ? 'المجموع' : 'Total'}</span>
                  <span>{t('common.sar')} {totalPrice}</span>
                </div>
              </div>

              <button className="w-full mt-6 py-4 bg-primary text-primary-foreground rounded-xl hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-2">
                <CheckCircle className="w-5 h-5" />
                {language === 'ar' ? 'تأكيد الطلب' : 'Place Order'}
              </button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                {language === 'ar'
                  ? 'بالنقر على "تأكيد الطلب"، فإنك توافق على شروطنا وأحكامنا'
                  : 'By placing your order, you agree to our terms and conditions'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
