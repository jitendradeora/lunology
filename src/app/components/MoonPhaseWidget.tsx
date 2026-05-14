import { motion } from "motion/react";
import { MapPin, Clock, ChevronDown } from "lucide-react";
import { useLanguage } from "./LanguageProvider";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

/** Stylized lunar disc: sphere shading, halo, texture, and phase terminator */
function MoonPhase({ phase, theme }: { phase: number; theme: string }) {
  const size = 70;
  const isDark = theme === "dark";
  const uid = `${phase}-${theme}`;
  const r = 34;
  const cx = 50;
  const cy = 50;

  const bodyHi = isDark ? "#ece8e0" : "#faf7f0";
  const bodyMid = isDark ? "#ada59a" : "#ded6cc";
  const bodyLo = isDark ? "#5c5850" : "#a3988a";
  const maria = isDark ? "rgba(18, 16, 14, 0.55)" : "rgba(48, 42, 36, 0.2)";
  const shadowCore = isDark ? "rgba(4, 5, 8, 0.98)" : "rgba(12, 14, 20, 0.94)";
  const shadowMid = isDark ? "rgba(16, 18, 24, 0.72)" : "rgba(36, 40, 48, 0.62)";
  const shadowEdge = isDark ? "rgba(28, 30, 38, 0.35)" : "rgba(60, 64, 72, 0.28)";

  const earthshine = [0.14, 0.18, 0.1, 0.05, 0, 0.05, 0.1, 0.18][phase] ?? 0;

  return (
    <div
      className="relative mx-auto flex items-center justify-center"
      style={{ width: size + 14, height: size + 14 }}
    >
      <div
        className="pointer-events-none absolute rounded-full"
        style={{
          width: size + 10,
          height: size + 10,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          background: isDark
            ? "radial-gradient(circle, rgba(130, 150, 200, 0.22) 0%, rgba(80, 90, 120, 0.08) 45%, transparent 72%)"
            : "radial-gradient(circle, rgba(200, 210, 235, 0.45) 0%, rgba(180, 190, 215, 0.15) 50%, transparent 72%)",
        }}
      />
      <div
        className="relative rounded-full p-[2px]"
        style={{
          background: isDark
            ? "linear-gradient(145deg, rgba(255,255,255,0.12), rgba(80,90,120,0.25))"
            : "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(180,190,210,0.5))",
          boxShadow: isDark
            ? "0 2px 12px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.06)"
            : "0 4px 14px rgba(60,70,100,0.12), inset 0 1px 0 rgba(255,255,255,0.8)",
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          className="block rounded-full"
          aria-hidden
        >
          <defs>
            <radialGradient id={`moon-sphere-${uid}`} cx="28%" cy="26%" r="72%">
              <stop offset="0%" stopColor={bodyHi} />
              <stop offset="38%" stopColor={bodyMid} />
              <stop offset="78%" stopColor={bodyLo} />
              <stop offset="100%" stopColor={bodyLo} />
            </radialGradient>
            <radialGradient id={`moon-shadow-${uid}`} cx="50%" cy="50%" r="55%">
              <stop offset="0%" stopColor={shadowCore} />
              <stop offset="55%" stopColor={shadowMid} />
              <stop offset="100%" stopColor={shadowEdge} stopOpacity={0} />
            </radialGradient>
            <linearGradient
              id={`moon-limb-${uid}`}
              x1="18%"
              y1="15%"
              x2="88%"
              y2="92%"
            >
              <stop
                offset="0%"
                stopColor={isDark ? "rgba(255,255,255,0.35)" : "rgba(255,255,255,0.55)"}
              />
              <stop offset="42%" stopColor="rgba(255,255,255,0)" />
              <stop
                offset="100%"
                stopColor={isDark ? "rgba(0,0,0,0.35)" : "rgba(55,50,45,0.2)"}
              />
            </linearGradient>
            <radialGradient id={`crater-a-${uid}`} cx="40%" cy="40%" r="50%">
              <stop offset="0%" stopColor="rgba(0,0,0,0.15)" />
              <stop offset="70%" stopColor="rgba(0,0,0,0.35)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.06)" />
            </radialGradient>
            <radialGradient id={`crater-b-${uid}`} cx="45%" cy="45%" r="50%">
              <stop offset="0%" stopColor="rgba(0,0,0,0.12)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
            </radialGradient>
            <filter id={`moon-blur-${uid}`} x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" />
            </filter>
            <filter id={`moon-grain-${uid}`}>
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.75"
                numOctaves="4"
                seed="31"
                result="n"
              />
              <feColorMatrix
                in="n"
                type="matrix"
                values="0 0 0 0 0.52
                        0 0 0 0 0.5
                        0 0 0 0 0.48
                        0 0 0 0.18 0"
                result="g"
              />
            </filter>
            <clipPath id={`moon-clip-${uid}`}>
              <circle cx={cx} cy={cy} r={r} />
            </clipPath>
          </defs>

          <g clipPath={`url(#moon-clip-${uid})`}>
            <circle cx={cx} cy={cy} r={r} fill={`url(#moon-sphere-${uid})`} />

            {earthshine > 0 && phase !== 4 && (
              <circle
                cx={cx}
                cy={cy}
                r={r - 0.5}
                fill={isDark ? "#8a8580" : "#b0aaa2"}
                opacity={earthshine}
                style={{ mixBlendMode: isDark ? "screen" : "multiply" }}
              />
            )}

            <ellipse
              cx="36"
              cy="54"
              rx="20"
              ry="13"
              fill={maria}
              opacity={0.85}
              filter={`url(#moon-blur-${uid})`}
            />
            <ellipse
              cx="58"
              cy="42"
              rx="12"
              ry="16"
              fill={maria}
              opacity={0.7}
              filter={`url(#moon-blur-${uid})`}
            />
            <ellipse
              cx="50"
              cy="62"
              rx="14"
              ry="9"
              fill={maria}
              opacity={0.6}
              filter={`url(#moon-blur-${uid})`}
            />

            <circle
              cx="43"
              cy="36"
              r="6"
              fill={`url(#crater-a-${uid})`}
              opacity={isDark ? 0.9 : 0.75}
            />
            <circle
              cx="62"
              cy="52"
              r="3.8"
              fill={`url(#crater-b-${uid})`}
              opacity={isDark ? 0.85 : 0.7}
            />
            <circle
              cx="52"
              cy="64"
              r="4.5"
              fill={`url(#crater-a-${uid})`}
              opacity={isDark ? 0.75 : 0.65}
            />

            <rect
              x="0"
              y="0"
              width="100"
              height="100"
              fill="#fff"
              filter={`url(#moon-grain-${uid})`}
              opacity={isDark ? 0.28 : 0.4}
              style={{ mixBlendMode: "multiply" }}
            />

            <circle
              cx={cx}
              cy={cy}
              r={r}
              fill={`url(#moon-limb-${uid})`}
              style={{ mixBlendMode: isDark ? "soft-light" : "overlay" }}
            />

            <ellipse
              cx="32"
              cy="30"
              rx="11"
              ry="9"
              fill="rgba(255,255,255,0.5)"
              opacity={isDark ? 0.12 : 0.28}
              style={{ filter: "blur(5px)" }}
            />

            {phase === 0 && (
              <circle cx={cx} cy={cy} r={r} fill={`url(#moon-shadow-${uid})`} />
            )}

            {phase !== 4 && phase !== 0 && (
              <ellipse
                cx={
                  phase < 4
                    ? 50 + 26 * (1 - Math.abs(phase - 2) / 2)
                    : 50 - 26 * (1 - Math.abs(phase - 6) / 2)
                }
                cy="50"
                rx={Math.abs(r * Math.cos((phase / 8) * Math.PI * 2))}
                ry={r}
                fill={`url(#moon-shadow-${uid})`}
                filter={`url(#moon-blur-${uid})`}
                opacity={0.97}
              />
            )}

            {phase === 4 && (
              <>
                <circle
                  cx="44"
                  cy="33"
                  r="1.6"
                  fill={isDark ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.35)"}
                />
                <circle
                  cx="58"
                  cy="48"
                  r="1.1"
                  fill={isDark ? "rgba(255,255,255,0.1)" : "rgba(255,255,255,0.28)"}
                />
                <path
                  d="M 48 28 L 52 40 L 64 38 Z"
                  fill={isDark ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.12)"}
                  style={{ filter: "blur(1.5px)" }}
                />
              </>
            )}
          </g>

          <circle
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={isDark ? "rgba(255,255,255,0.12)" : "rgba(80,75,70,0.2)"}
            strokeWidth="1"
          />
        </svg>
      </div>
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
