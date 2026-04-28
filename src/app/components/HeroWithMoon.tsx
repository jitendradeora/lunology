import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";

export function HeroWithMoon() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden py-24 sm:py-20">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background"></div>

      {/* Animated Stars */}
      <div className="absolute inset-0 opacity-40">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 h-0.5 bg-foreground rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Text Content */}
          <div
            className={`space-y-6 sm:space-y-8 text-center ${language === "ar" ? "lg:text-right" : "lg:text-left"}`}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className={`flex justify-center mb-4 sm:mb-6 ${language === "ar" ? "lg:justify-start" : "lg:justify-start"}`}
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-primary" />
              </motion.div>

              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-4 sm:mb-6"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {t("hero.title")}
              </h1>

              <p
                className={`text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-2xl mx-auto ${language === "ar" ? "lg:mr-0 lg:ml-auto" : "lg:mx-0"}`}
              >
                {t("hero.tagline")}
              </p>

              <div
                className={`flex justify-center ${language === "ar" ? "lg:justify-start" : "lg:justify-start"}`}
              >
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-primary text-primary-foreground rounded-full hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 transition-all duration-300 group text-sm sm:text-base lg:text-lg"
                >
                  {t("hero.cta")}
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Large Animated Moon */}
          <div className="relative flex items-center justify-center lg:justify-end pointer-events-none h-[400px] sm:h-[500px] lg:h-[600px] ">
            <motion.div
              className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
              animate={{
                y: [0, -30, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Planet Ring Border */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  border:
                    theme === "dark"
                      ? "2px solid rgba(76, 85, 120, 0.3)"
                      : "2px solid rgba(140, 150, 180, 0.4)",
                  boxShadow:
                    theme === "dark"
                      ? "0 0 40px rgba(76, 85, 120, 0.4), inset 0 0 40px rgba(76, 85, 120, 0.2)"
                      : "0 0 35px rgba(140, 150, 180, 0.35), inset 0 0 50px rgba(160, 170, 200, 0.25)",
                }}
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Outer Ring */}
              <motion.div
                className="absolute -inset-4 rounded-full border opacity-20"
                style={{
                  borderColor:
                    theme === "dark"
                      ? "rgba(76, 85, 120, 0.4)"
                      : "rgba(120, 135, 170, 0.5)",
                  borderWidth: "1px",
                }}
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                }}
              />

              {/* Moon Glow - Enhanced for Dark/Light */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    theme === "dark"
                      ? "radial-gradient(circle at 35% 35%, rgba(200, 210, 255, 0.4), rgba(76, 85, 120, 0.2) 50%, transparent 70%)"
                      : "radial-gradient(circle at 35% 35%, rgba(240, 245, 255, 0.9), rgba(200, 210, 235, 0.5) 40%, transparent 70%)",
                  filter: "blur(40px)",
                }}
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: theme === "dark" ? [0.3, 0.5, 0.3] : [0.6, 0.8, 0.6],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Moon Surface Details */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    theme === "dark"
                      ? `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15), transparent 40%),
                   radial-gradient(circle at 70% 60%, rgba(76, 85, 120, 0.2), transparent 50%),
                   radial-gradient(circle at 50% 80%, rgba(76, 85, 120, 0.15), transparent 40%),
                   radial-gradient(circle at 60% 40%, rgba(76, 85, 120, 0.1), transparent 30%),
                   radial-gradient(circle at 40% 65%, rgba(76, 85, 120, 0.12), transparent 35%)`
                      : `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.6), transparent 45%),
                   radial-gradient(circle at 70% 60%, rgba(160, 175, 200, 0.4), transparent 50%),
                   radial-gradient(circle at 50% 80%, rgba(140, 155, 185, 0.35), transparent 40%),
                   radial-gradient(circle at 38% 48%, rgba(150, 165, 195, 0.3), transparent 35%)`,
                  opacity: theme === "dark" ? 0.4 : 0.6,
                }}
              />

              {/* Moon Base */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    theme === "dark"
                      ? "radial-gradient(circle at 35% 35%, rgba(76, 85, 120, 0.3), rgba(76, 85, 120, 0.08))"
                      : "radial-gradient(circle at 35% 35%, rgba(220, 230, 245, 0.85), rgba(180, 195, 220, 0.4))",
                }}
                animate={{
                  opacity:
                    theme === "dark" ? [0.3, 0.4, 0.3] : [0.7, 0.85, 0.7],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Craters - More Visible in Light Theme */}
              <div
                className="absolute top-1/4 left-1/3 w-12 h-12 rounded-full blur-sm"
                style={{
                  backgroundColor:
                    theme === "dark"
                      ? "rgba(76, 85, 120, 0.15)"
                      : "rgba(120, 140, 170, 0.45)",
                  boxShadow:
                    theme === "dark"
                      ? "none"
                      : "inset 0 2px 8px rgba(100, 120, 150, 0.3)",
                }}
              ></div>
              <div
                className="absolute top-1/2 right-1/3 w-8 h-8 rounded-full blur-sm"
                style={{
                  backgroundColor:
                    theme === "dark"
                      ? "rgba(76, 85, 120, 0.15)"
                      : "rgba(130, 150, 180, 0.4)",
                  boxShadow:
                    theme === "dark"
                      ? "none"
                      : "inset 0 2px 6px rgba(100, 120, 150, 0.25)",
                }}
              ></div>
              <div
                className="absolute bottom-1/3 left-1/2 w-10 h-10 rounded-full blur-sm"
                style={{
                  backgroundColor:
                    theme === "dark"
                      ? "rgba(76, 85, 120, 0.15)"
                      : "rgba(125, 145, 175, 0.42)",
                  boxShadow:
                    theme === "dark"
                      ? "none"
                      : "inset 0 2px 7px rgba(100, 120, 150, 0.28)",
                }}
              ></div>

              {/* Additional Crater Details for Light Theme */}
              {theme === "light" && (
                <>
                  <div
                    className="absolute top-2/3 right-1/4 w-6 h-6 rounded-full blur-sm"
                    style={{
                      backgroundColor: "rgba(140, 155, 185, 0.35)",
                      boxShadow: "inset 0 1px 4px rgba(100, 120, 150, 0.2)",
                    }}
                  ></div>
                  <div
                    className="absolute top-1/3 left-1/4 w-7 h-7 rounded-full blur-sm"
                    style={{
                      backgroundColor: "rgba(135, 150, 180, 0.38)",
                      boxShadow: "inset 0 1px 5px rgba(100, 120, 150, 0.22)",
                    }}
                  ></div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Secondary floating orbs */}
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 70% 70%, rgba(76, 85, 120, 0.4), transparent)",
          filter: "blur(50px)",
        }}
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </section>
  );
}
