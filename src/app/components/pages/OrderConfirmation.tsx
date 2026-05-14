import { Link, useLocation } from "react-router";
import { motion } from "motion/react";
import {
  CheckCircle2,
  Package,
  Mail,
  Home,
  ShoppingBag,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../LanguageProvider";
import { SEO } from "../SEO";

export type OrderConfirmationState = {
  orderNumber: string;
  grandTotal: number;
  itemCount: number;
};

export function OrderConfirmation() {
  const { language, t } = useLanguage();
  const location = useLocation();
  const state = location.state as OrderConfirmationState | null;

  const hasOrder = Boolean(state?.orderNumber);
  const title =
    language === "ar"
      ? hasOrder
        ? "تم استلام طلبك"
        : "شكراً لزيارتك"
      : hasOrder
        ? "Order received"
        : "Thank you";

  const subtitle = hasOrder
    ? language === "ar"
      ? "شكراً لثقتك بنا — نجهّز طلبك بعناية."
      : "Thank you for your trust — we are preparing your order with care."
    : language === "ar"
      ? "إذا أكملتَ عملية شراء للتو، ستصلك التفاصيل عبر البريد. وإلا تفضّل بزيارة المتجر."
      : "If you just completed a purchase, details will be emailed to you. Otherwise, feel free to explore the shop.";

  return (
    <>
      <SEO
        title={
          language === "ar"
            ? "تأكيد الطلب | Lunology"
            : "Order confirmation | Lunology"
        }
        description={
          language === "ar"
            ? "تم تأكيد طلبك من Lunology."
            : "Your Lunology order has been confirmed."
        }
      />

      <div className="pt-20 min-h-screen bg-gradient-to-b from-muted/30 via-background to-background relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
          <div className="absolute top-24 left-[10%] w-72 h-72 rounded-full bg-primary blur-[100px]" />
          <div className="absolute bottom-32 right-[8%] w-96 h-96 rounded-full bg-primary blur-[120px]" />
        </div>

        <section
          className="relative py-14 px-4 border-b border-border/60"
          style={{
            backgroundColor: "var(--banner-bg)",
            color: "var(--banner-foreground)",
          }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-foreground/15 border border-primary-foreground/25 mb-6 shadow-lg shadow-black/10"
            >
              {hasOrder ? (
                <CheckCircle2
                  className="w-11 h-11 text-primary-foreground"
                  strokeWidth={1.75}
                />
              ) : (
                <Sparkles className="w-10 h-10 text-primary-foreground opacity-90" />
              )}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.45 }}
              className="text-3xl md:text-4xl mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="text-base md:text-lg opacity-90 max-w-xl mx-auto leading-relaxed"
            >
              {subtitle}
            </motion.p>
          </div>
        </section>

        <div className="relative max-w-3xl mx-auto px-4 py-12 space-y-8">
          {hasOrder && state && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="rounded-2xl border border-border bg-card/80 backdrop-blur-md p-6 md:p-8 shadow-xl shadow-primary/5"
            >
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
                {language === "ar" ? "رقم الطلب" : "Order number"}
              </p>
              <p
                className="text-2xl md:text-3xl font-mono tracking-wide mb-8 text-foreground break-all"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {state.orderNumber}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-muted/50 border border-border/80 p-4">
                  <p className="text-xs text-muted-foreground mb-1">
                    {language === "ar" ? "الإجمالي" : "Total"}
                  </p>
                  <p className="text-xl font-medium">
                    {t("common.sar")} {state.grandTotal.toFixed(2)}
                  </p>
                </div>
                <div className="rounded-xl bg-muted/50 border border-border/80 p-4">
                  <p className="text-xs text-muted-foreground mb-1">
                    {language === "ar" ? "عدد القطع" : "Items"}
                  </p>
                  <p className="text-xl font-medium">{state.itemCount}</p>
                </div>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: hasOrder ? 0.35 : 0.1, duration: 0.45 }}
            className="rounded-2xl border border-border/80 bg-card/40 p-6 md:p-7"
          >
            <h2
              className="text-lg mb-4 flex items-center gap-2"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <Package className="w-5 h-5 text-primary shrink-0" />
              {language === "ar" ? "ماذا بعد؟" : "What happens next"}
            </h2>
            <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
              <li className="flex gap-3">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  {language === "ar"
                    ? "ستصلك رسالة تأكيد على البريد الإلكتروني قريباً (تجريبي)."
                    : "You will receive a confirmation email shortly (demo checkout)."}
                </span>
              </li>
              <li className="flex gap-3">
                <Package className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  {language === "ar"
                    ? "نُحدّثك عند شحن الطلب وتتبع التوصيل."
                    : "We will update you when your order ships with tracking details."}
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: hasOrder ? 0.45 : 0.2, duration: 0.45 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              to="/shop"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25 transition-all font-medium"
            >
              <ShoppingBag className="w-5 h-5" />
              {language === "ar" ? "متابعة التسوق" : "Continue shopping"}
            </Link>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border-2 border-border bg-background hover:bg-muted/60 transition-all font-medium"
            >
              <Home className="w-5 h-5" />
              {language === "ar" ? "الرئيسية" : "Back to home"}
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
