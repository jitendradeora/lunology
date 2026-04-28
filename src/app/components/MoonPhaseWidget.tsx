import { motion } from "motion/react";
import { MapPin, Clock, ChevronDown } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

// Custom Moon Phase Component
function MoonPhase({ phase, theme }: { phase: number; theme: string }) {
  const size = 56;
  const isDark = theme === "dark";

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* Moon Base Circle */}
      <svg width={size} height={size} viewBox="0 0 100 100">
        <defs>
          <radialGradient
            id={`moonGradient-${phase}-${theme}`}
            cx="35%"
            cy="35%"
          >
            <stop
              offset="0%"
              stopColor={
                isDark ? "rgba(220, 230, 255, 0.95)" : "rgba(255, 255, 255, 1)"
              }
            />
            <stop
              offset="70%"
              stopColor={
                isDark
                  ? "rgba(160, 180, 220, 0.85)"
                  : "rgba(240, 245, 255, 0.95)"
              }
            />
            <stop
              offset="100%"
              stopColor={
                isDark ? "rgba(100, 120, 160, 0.7)" : "rgba(200, 215, 240, 0.9)"
              }
            />
          </radialGradient>
          <radialGradient
            id={`shadowGradient-${phase}-${theme}`}
            cx="50%"
            cy="50%"
          >
            <stop
              offset="0%"
              stopColor={
                isDark ? "rgba(20, 25, 40, 0.95)" : "rgba(100, 120, 150, 0.85)"
              }
            />
            <stop
              offset="100%"
              stopColor={
                isDark ? "rgba(10, 15, 25, 1)" : "rgba(80, 100, 130, 0.95)"
              }
            />
          </radialGradient>
          <filter id={`glow-${phase}-${theme}`}>
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer Glow */}
        <circle
          cx="50"
          cy="50"
          r="50"
          fill={
            isDark ? "rgba(160, 180, 220, 0.1)" : "rgba(255, 255, 255, 0.2)"
          }
          filter={`url(#glow-${phase}-${theme})`}
        />

        {/* Moon Base */}
        <circle
          cx="50"
          cy="50"
          r="42"
          fill={`url(#moonGradient-${phase}-${theme})`}
        />

        {/* Shadow based on phase */}
        {phase !== 4 && phase !== 0 && (
          <ellipse
            cx={
              phase < 4
                ? 50 + 30 * (1 - Math.abs(phase - 2) / 2)
                : 50 - 30 * (1 - Math.abs(phase - 6) / 2)
            }
            cy="50"
            rx={Math.abs(42 * Math.cos((phase / 8) * Math.PI * 2))}
            ry="42"
            fill={`url(#shadowGradient-${phase}-${theme})`}
          />
        )}

        {/* New Moon special case - full shadow */}
        {phase === 0 && (
          <circle
            cx="50"
            cy="50"
            r="42"
            fill={`url(#shadowGradient-${phase}-${theme})`}
          />
        )}

        {/* Crater details for Full Moon */}
        {phase === 4 && (
          <>
            <circle
              cx="40"
              cy="35"
              r="5"
              fill={
                isDark ? "rgba(80, 100, 140, 0.3)" : "rgba(180, 190, 210, 0.4)"
              }
            />
            <circle
              cx="60"
              cy="45"
              r="3"
              fill={
                isDark ? "rgba(80, 100, 140, 0.3)" : "rgba(180, 190, 210, 0.4)"
              }
            />
            <circle
              cx="50"
              cy="60"
              r="4"
              fill={
                isDark ? "rgba(80, 100, 140, 0.3)" : "rgba(180, 190, 210, 0.4)"
              }
            />
          </>
        )}

        {/* Highlight */}
        <circle
          cx="38"
          cy="38"
          r="12"
          fill={
            isDark ? "rgba(255, 255, 255, 0.15)" : "rgba(255, 255, 255, 0.4)"
          }
          style={{ filter: "blur(3px)" }}
        />
      </svg>

      {/* Subtle outer ring */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          border: isDark
            ? "1px solid rgba(160, 180, 220, 0.2)"
            : "1px solid rgba(200, 215, 240, 0.3)",
          boxShadow: isDark
            ? "0 0 20px rgba(160, 180, 220, 0.15)"
            : "0 0 15px rgba(200, 215, 240, 0.3)",
        }}
      />
    </div>
  );
}

export function MoonPhaseWidget() {
  const { language } = useLanguage();
  const { theme } = useTheme();
  const [selectedLocation, setSelectedLocation] = useState("riyadh");
  const [currentDate] = useState(new Date());

  const locations = [
    {
      id: "riyadh",
      name: "Riyadh",
      nameAr: "الرياض",
      country: "Saudi Arabia",
      countryAr: "السعودية",
      timezone: 3,
    },
    {
      id: "mecca",
      name: "Mecca",
      nameAr: "مكة",
      country: "Saudi Arabia",
      countryAr: "السعودية",
      timezone: 3,
    },
    {
      id: "dubai",
      name: "Dubai",
      nameAr: "دبي",
      country: "UAE",
      countryAr: "الإمارات",
      timezone: 4,
    },
    {
      id: "cairo",
      name: "Cairo",
      nameAr: "القاهرة",
      country: "Egypt",
      countryAr: "مصر",
      timezone: 2,
    },
    {
      id: "istanbul",
      name: "Istanbul",
      nameAr: "إسطنبول",
      country: "Turkey",
      countryAr: "تركيا",
      timezone: 3,
    },
    {
      id: "london",
      name: "London",
      nameAr: "لندن",
      country: "UK",
      countryAr: "بريطانيا",
      timezone: 0,
    },
    {
      id: "newyork",
      name: "New York",
      nameAr: "نيويورك",
      country: "USA",
      countryAr: "أمريكا",
      timezone: -5,
    },
    {
      id: "tokyo",
      name: "Tokyo",
      nameAr: "طوكيو",
      country: "Japan",
      countryAr: "اليابان",
      timezone: 9,
    },
  ];

  const currentLocation =
    locations.find((loc) => loc.id === selectedLocation) || locations[0];

  const getMoonPhaseData = () => {
    const baseDate = new Date(currentDate);
    const phases = [];

    const phaseNames = [
      { en: "New Moon", ar: "محاق", phaseIndex: 0 },
      { en: "Waxing Crescent", ar: "هلال متزايد", phaseIndex: 1 },
      { en: "First Quarter", ar: "تربيع أول", phaseIndex: 2 },
      { en: "Waxing Gibbous", ar: "أحدب متزايد", phaseIndex: 3 },
      { en: "Full Moon", ar: "بدر", phaseIndex: 4 },
      { en: "Waning Gibbous", ar: "أحدب متناقص", phaseIndex: 5 },
      { en: "Last Quarter", ar: "تربيع أخير", phaseIndex: 6 },
      { en: "Waning Crescent", ar: "هلال متناقص", phaseIndex: 7 },
    ];

    const zodiacSigns = [
      { en: "Aries", ar: "الحمل" },
      { en: "Taurus", ar: "الثور" },
      { en: "Gemini", ar: "الجوزاء" },
      { en: "Cancer", ar: "السرطان" },
      { en: "Leo", ar: "الأسد" },
      { en: "Virgo", ar: "العذراء" },
      { en: "Libra", ar: "الميزان" },
      { en: "Scorpio", ar: "العقرب" },
      { en: "Sagittarius", ar: "القوس" },
      { en: "Capricorn", ar: "الجدي" },
      { en: "Aquarius", ar: "الدلو" },
      { en: "Pisces", ar: "الحوت" },
    ];

    for (let i = 0; i < 8; i++) {
      const phaseDate = new Date(baseDate);
      phaseDate.setDate(baseDate.getDate() + i * 3.69);

      const hours = phaseDate.getHours() + currentLocation.timezone;
      const minutes = phaseDate.getMinutes();
      const timeString = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

      const zodiacIndex = Math.floor(
        (phaseDate.getMonth() * 2 + phaseDate.getDate() / 15) % 12,
      );

      phases.push({
        phase: language === "ar" ? phaseNames[i].ar : phaseNames[i].en,
        time: timeString,
        house:
          language === "ar"
            ? zodiacSigns[zodiacIndex].ar
            : zodiacSigns[zodiacIndex].en,
        phaseIndex: phaseNames[i].phaseIndex,
      });
    }

    return phases;
  };

  const moonPhases = getMoonPhaseData();

  return (
    <section className="py-10 px-4 bg-gradient-to-b from-muted/20 to-background border-y border-border/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl mb-3"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {language === "ar" ? "أطوار القمر والبروج" : "Moon Phases & Houses"}
          </motion.h2>

          {/* Location Dropdown */}
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin className="w-3.5 h-3.5 text-muted-foreground" />
            <div className="relative">
              <label htmlFor="moon-phase-location" className="sr-only">
                {language === "ar" ? "اختر الموقع" : "Select location"}
              </label>
              <select
                id="moon-phase-location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="appearance-none bg-card text-foreground border border-border rounded-lg px-3 py-1.5 pr-8 text-xs hover:border-primary transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/20"
                style={{
                  colorScheme: theme === "dark" ? "dark" : "light",
                  //colorScheme: theme === "light" ? "light" : "dark",
                  //color: theme === "light" ? "black" : "white",
                }}
              >
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {language === "ar"
                      ? `${location.nameAr}، ${location.countryAr}`
                      : `${location.name}, ${location.country}`}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 text-muted-foreground pointer-events-none" />
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            {language === "ar" ? "البيانات الحية" : "Live Data"} •{" "}
            {currentDate.toLocaleDateString(
              language === "ar" ? "ar-SA" : "en-US",
              { month: "long", year: "numeric" },
            )}
          </p>
        </div>

        {/* Horizontal Moon Phases Scroll */}
        <div className="relative -mx-4 px-4 sm:mx-0 sm:px-0">
          <div className="overflow-x-auto overflow-y-hidden pb-3 smooth-scroll">
            <div className="flex gap-3 min-w-max w-full mx-auto justify-center pl-4 pr-4">
              {moonPhases.map((moon, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex-shrink-0 w-32"
                >
                  <div className="group relative bg-card/50 backdrop-blur-sm border border-border/60 rounded-xl p-3 hover:border-primary/40 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                    {/* Moon Visual */}
                    <div className="flex justify-center mb-2 group-hover:scale-105 transition-transform">
                      <MoonPhase phase={moon.phaseIndex} theme={theme} />
                    </div>

                    {/* Phase Name */}
                    <h3 className="text-xs font-medium text-center mb-2 line-clamp-2 min-h-[2rem]">
                      {moon.phase}
                    </h3>

                    {/* Details */}
                    <div className="space-y-1.5 text-xs text-muted-foreground">
                      <div className="flex items-center justify-center gap-1.5">
                        <Clock className="w-3 h-3 flex-shrink-0" />
                        <span className="truncate">{moon.time}</span>
                      </div>
                      <div className="text-center pt-1.5 border-t border-border/60">
                        <span className="text-primary text-xs font-medium">
                          {moon.house}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Gradient Fade Edges - Narrower on mobile */}
          <div className="absolute top-0 left-0 bottom-4 w-6 sm:w-12 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 bottom-4 w-6 sm:w-12 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none"></div>
        </div>
      </div>

      <style>{`
        .smooth-scroll {
          scroll-behavior: smooth;
          scrollbar-width: thin;
          scrollbar-color: rgba(76, 85, 120, 0.3) transparent;
        }
        .smooth-scroll::-webkit-scrollbar {
          height: 4px;
        }
        .smooth-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .smooth-scroll::-webkit-scrollbar-thumb {
          background: rgba(76, 85, 120, 0.3);
          border-radius: 10px;
        }
        .smooth-scroll::-webkit-scrollbar-thumb:hover {
          background: rgba(76, 85, 120, 0.5);
        }
      `}</style>
    </section>
  );
}
