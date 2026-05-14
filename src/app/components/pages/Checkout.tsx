import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ShoppingBag,
  Lock,
  CreditCard,
  Package,
  CheckCircle,
  User,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useCart } from "../CartProvider";
import { useLanguage } from "../LanguageProvider";
import { CHECKOUT_COUNTRIES } from "../../data/countries";
import {
  CHECKOUT_SHIPPING_SAR,
  VAT_RATE,
  amountExcludingVat,
  roundMoney,
} from "../../lib/vat";
import visaPayIcon from "../../../imports/pay/visa-card-pay.png";
import mastercardPayIcon from "../../../imports/pay/mastercard-card-pay.png";
import madaPayIcon from "../../../imports/pay/mada-card-pay.png";
import applePayIcon from "../../../imports/pay/apple-card-pay.png";

type CheckoutMode = "login" | "register";

export function Checkout() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCart();
  const { t, language } = useLanguage();
  const [mode, setMode] = useState<CheckoutMode>("login");
  const [paymentMethod, setPaymentMethod] = useState<
    "card" | "tamara" | "apple"
  >("card");
  const [nationalShortAddress, setNationalShortAddress] = useState("");
  const [countryCode, setCountryCode] = useState("SA");
  const [district, setDistrict] = useState("");

  const subtotalWithoutVat = amountExcludingVat(totalPrice);
  const vatAmount = roundMoney(totalPrice - subtotalWithoutVat);
  const afterVatSubtotal = totalPrice;
  const grandTotal = roundMoney(afterVatSubtotal + CHECKOUT_SHIPPING_SAR);

  const handlePlaceOrder = () => {
    const orderNumber = `LUN-${Date.now().toString(36).slice(-9).toUpperCase()}`;
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    clearCart();
    navigate("/order-confirmation", {
      replace: true,
      state: { orderNumber, grandTotal, itemCount },
    });
  };

  if (items.length === 0) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <ShoppingBag className="w-16 h-16 mx-auto mb-4 text-muted-foreground opacity-30" />
          <h2
            className="text-2xl mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {language === "ar" ? "سلتك فارغة" : "Your cart is empty"}
          </h2>
          <p className="text-muted-foreground mb-6">
            {language === "ar"
              ? "أضف بعض المنتجات للمتابعة إلى الدفع"
              : "Add some products to proceed to checkout"}
          </p>
          <Link
            to="/shop"
            className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:shadow-lg transition-all"
          >
            {language === "ar" ? "تسوق الآن" : "Shop Now"}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-muted/20 to-background">
      {/* Header */}
      <section
        className="py-12 px-4 border-b border-border"
        style={{
          backgroundColor: "var(--banner-bg)",
          color: "var(--banner-foreground)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <h1
            className="text-3xl md:text-4xl mb-2"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {language === "ar" ? "إتمام الطلب" : "Checkout"}
          </h1>
          <p className="opacity-90">
            {language === "ar"
              ? "أكمل طلبك بشكل آمن"
              : "Complete your order securely"}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Authentication Toggle */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2
                className="text-xl mb-4"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {language === "ar" ? "معلومات الحساب" : "Account Information"}
              </h2>

              <div className="flex gap-2 mb-6">
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className={`flex-1 px-4 py-3 rounded-xl transition-all ${
                    mode === "login"
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {language === "ar" ? "تسجيل دخول" : "Login"}
                </button>
                <button
                  type="button"
                  onClick={() => setMode("register")}
                  className={`flex-1 px-4 py-3 rounded-xl transition-all ${
                    mode === "register"
                      ? "bg-primary text-primary-foreground shadow-lg"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {language === "ar" ? "تسجيل جديد" : "Register"}
                </button>
              </div>

              <AnimatePresence mode="wait">
                {mode === "login" && (
                  <motion.div
                    key="login"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <div>
                      <label
                        htmlFor="login-email"
                        className="block text-sm mb-2"
                      >
                        {language === "ar" ? "البريد الإلكتروني" : "Email"}
                      </label>
                      <input
                        type="email"
                        id="login-email"
                        className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                        placeholder={
                          language === "ar"
                            ? "بريدك@الإلكتروني.com"
                            : "your@email.com"
                        }
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="login-password"
                        className="block text-sm mb-2"
                      >
                        {language === "ar" ? "كلمة المرور" : "Password"}
                      </label>
                      <input
                        type="password"
                        id="login-password"
                        className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                        placeholder="••••••••"
                        autoComplete="current-password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-primary text-primary-foreground rounded-xl hover:shadow-lg transition-all"
                    >
                      {language === "ar" ? "تسجيل الدخول" : "Sign In"}
                    </button>
                  </motion.div>
                )}

                {mode === "register" && (
                  <motion.div
                    key="register"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <div>
                      <label
                        htmlFor="register-name"
                        className="block text-sm mb-2"
                      >
                        {language === "ar" ? "الاسم الكامل" : "Full Name"}
                      </label>
                      <input
                        type="text"
                        id="register-name"
                        className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                        placeholder={
                          language === "ar" ? "اسمك الكامل" : "Your full name"
                        }
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="register-email"
                        className="block text-sm mb-2"
                      >
                        {language === "ar" ? "البريد الإلكتروني" : "Email"}
                      </label>
                      <input
                        type="email"
                        id="register-email"
                        className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                        placeholder={
                          language === "ar"
                            ? "بريدك@الإلكتروني.com"
                            : "your@email.com"
                        }
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="register-password"
                        className="block text-sm mb-2"
                      >
                        {language === "ar" ? "كلمة المرور" : "Password"}
                      </label>
                      <input
                        type="password"
                        id="register-password"
                        className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                        placeholder="••••••••"
                        autoComplete="new-password"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-primary text-primary-foreground rounded-xl hover:shadow-lg transition-all"
                    >
                      {language === "ar" ? "إنشاء حساب" : "Create Account"}
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>

            {/* Billing Information */}
            <div className="bg-card rounded-2xl border border-border p-6">
              <h2
                className="text-xl mb-4 flex items-center gap-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <MapPin className="w-5 h-5 text-primary" />
                {language === "ar"
                  ? "معلومات الفواتير والشحن"
                  : "Billing & Shipping Information"}
              </h2>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm mb-2">
                      <User className="w-4 h-4 inline-block mr-1" />
                      {language === "ar" ? "الاسم الأول" : "First Name"}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">
                      <User className="w-4 h-4 inline-block mr-1" />
                      {language === "ar" ? "اسم العائلة" : "Last Name"}
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
                    {language === "ar" ? "البريد الإلكتروني" : "Email Address"}
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    <Phone className="w-4 h-4 inline-block mr-1" />
                    {language === "ar" ? "رقم الهاتف" : "Phone Number"}
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2">
                    {language === "ar" ? "العنوان" : "Street Address"}
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="national-short-address"
                    className="block text-sm mb-2"
                  >
                    {language === "ar"
                      ? "العنوان الوطني المختصر (٨ خانات)"
                      : "National Short Address (8 characters)"}
                  </label>
                  <input
                    id="national-short-address"
                    type="text"
                    inputMode="text"
                    autoComplete="off"
                    maxLength={8}
                    value={nationalShortAddress}
                    onChange={(e) => {
                      const raw = e.target.value
                        .toUpperCase()
                        .replace(/\s/g, "");
                      const letters = raw.slice(0, 4).replace(/[^A-Z]/g, "");
                      const nums = raw.slice(4, 8).replace(/[^0-9]/g, "");
                      setNationalShortAddress((letters + nums).slice(0, 8));
                    }}
                    placeholder={
                      language === "ar" ? "مثال: ABCD1234" : "e.g. RJDG2929"
                    }
                    pattern="[A-Za-z]{4}[0-9]{4}"
                    className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors font-mono tracking-widest uppercase"
                  />
                  <p className="text-xs text-muted-foreground mt-1.5">
                    {language === "ar"
                      ? "٤ أحرف إنجليزية ثم ٤ أرقام (بدون مسافات)."
                      : "4 English letters followed by 4 digits (no spaces)."}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="checkout-country"
                      className="block text-sm mb-2"
                    >
                      {language === "ar" ? "الدولة" : "Country"}
                    </label>
                    <select
                      id="checkout-country"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                    >
                      {CHECKOUT_COUNTRIES.map((c) => (
                        <option key={c.code} value={c.code}>
                          {language === "ar" ? c.nameAr : c.nameEn}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="checkout-district"
                      className="block text-sm mb-2"
                    >
                      {language === "ar" ? "الحي / المنطقة" : "District"}
                    </label>
                    <input
                      id="checkout-district"
                      type="text"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                      placeholder={
                        language === "ar" ? "اسم الحي" : "District name"
                      }
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm mb-2">
                      {language === "ar" ? "المدينة" : "City"}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">
                      {language === "ar" ? "المنطقة" : "State/Province"}
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-input-background border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm mb-2">
                      {language === "ar" ? "الرمز البريدي" : "Postal Code"}
                    </label>
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
              <h2
                className="text-xl mb-4 flex items-center gap-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <CreditCard className="w-5 h-5 text-primary" />
                {language === "ar" ? "طريقة الدفع" : "Payment Method"}
              </h2>

              <div
                className="space-y-3"
                role="radiogroup"
                aria-label={
                  language === "ar"
                    ? "اختيار طريقة الدفع"
                    : "Choose payment method"
                }
              >
                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    paymentMethod === "card"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  role="radio"
                  aria-checked={paymentMethod === "card"}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <CreditCard className="w-5 h-5" />
                      <span>
                        {language === "ar"
                          ? "بطاقة ائتمان/مدى"
                          : "Credit/Debit Card"}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="w-11 h-7 rounded-md border border-border/50 bg-white flex items-center justify-center overflow-hidden p-0.5">
                        <img
                          src={visaPayIcon}
                          alt=""
                          className="max-w-full max-h-full object-contain"
                        />
                      </span>
                      <span className="w-11 h-7 rounded-md border border-border/50 bg-white flex items-center justify-center overflow-hidden p-0.5">
                        <img
                          src={mastercardPayIcon}
                          alt=""
                          className="max-w-full max-h-full object-contain"
                        />
                      </span>
                      <span className="w-11 h-7 rounded-md border border-border/50 bg-white flex items-center justify-center overflow-hidden p-0.5">
                        <img
                          src={madaPayIcon}
                          alt=""
                          className="max-w-full max-h-full object-contain"
                        />
                      </span>
                    </div>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("tamara")}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    paymentMethod === "tamara"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  role="radio"
                  aria-checked={paymentMethod === "tamara"}
                >
                  <div className="flex items-center gap-3">
                    <Package className="w-5 h-5" />
                    <span>
                      {language === "ar"
                        ? "تمارا - قسط على 4 دفعات"
                        : "Tamara - Split in 4"}
                    </span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("apple")}
                  className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                    paymentMethod === "apple"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  role="radio"
                  aria-checked={paymentMethod === "apple"}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-14 h-9 rounded-md border border-border/50 bg-white flex items-center justify-center overflow-hidden p-1 shrink-0">
                      <img
                        src={applePayIcon}
                        alt=""
                        className="max-w-full max-h-full object-contain"
                      />
                    </span>
                    <span>Apple Pay</span>
                  </div>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Lock className="w-4 h-4 text-green-600" />
                  <span>
                    {language === "ar"
                      ? "دفع آمن ومشفر"
                      : "Secure encrypted payment"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl border border-border p-6 sticky top-24">
              <h2
                className="text-xl mb-4 flex items-center gap-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                <ShoppingBag className="w-5 h-5 text-primary" />
                {language === "ar" ? "ملخص الطلب" : "Order Summary"}
              </h2>

              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div
                    key={`${item.id}-${JSON.stringify(item.variants)}`}
                    className="flex gap-3"
                  >
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm truncate mb-1">
                        {language === "ar"
                          ? item.nameAr || item.name
                          : item.name}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {language === "ar" ? "الكمية" : "Qty"}: {item.quantity}
                      </p>
                      <p className="text-sm mt-1">
                        {t("common.sar")} {item.price * item.quantity}
                      </p>
                      <p className="text-[10px] text-muted-foreground">
                        {language === "ar"
                          ? "شامل ضريبة القيمة المضافة"
                          : "Incl. 15% VAT"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {language === "ar"
                      ? "المجموع بدون ضريبة"
                      : "Total without VAT"}
                  </span>
                  <span>
                    {t("common.sar")} {subtotalWithoutVat.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {language === "ar"
                      ? `ضريبة القيمة المضافة (${Math.round(VAT_RATE * 100)}٪)`
                      : `VAT (${Math.round(VAT_RATE * 100)}%)`}
                  </span>
                  <span>
                    {t("common.sar")} {vatAmount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between font-medium">
                  <span className="text-muted-foreground">
                    {language === "ar"
                      ? "المجموع بعد الضريبة"
                      : "After VAT total"}
                  </span>
                  <span>
                    {t("common.sar")} {afterVatSubtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    {language === "ar" ? "تكلفة الشحن" : "Shipping cost"}
                  </span>
                  <span>
                    {t("common.sar")} {CHECKOUT_SHIPPING_SAR.toFixed(2)}
                  </span>
                </div>
                <div
                  className="flex justify-between text-lg pt-3 border-t border-border"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  <span>{language === "ar" ? "الإجمالي" : "Total"}</span>
                  <span>
                    {t("common.sar")} {grandTotal.toFixed(2)}
                  </span>
                </div>
                <p className="text-[11px] text-muted-foreground pt-1">
                  {language === "ar"
                    ? "أسعار المنتجات المعروضة تشمل ضريبة القيمة المضافة. أعلاه تفصيل المبالغ."
                    : "Product prices shown include VAT. Above is the amount breakdown."}
                </p>
              </div>

              <button
                type="button"
                onClick={handlePlaceOrder}
                className="w-full mt-6 py-4 bg-primary text-primary-foreground rounded-xl hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-5 h-5" />
                {language === "ar" ? "تأكيد الطلب" : "Place Order"}
              </button>

              <p className="text-xs text-center text-muted-foreground mt-4">
                {language === "ar"
                  ? 'بالنقر على "تأكيد الطلب"، فإنك توافق على شروطنا وأحكامنا'
                  : "By placing your order, you agree to our terms and conditions"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
