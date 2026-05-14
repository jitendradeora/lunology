export type Lang = "en" | "ar";

function tr(lang: Lang, en: string, ar: string) {
  return lang === "ar" ? ar : en;
}

export function validateRequired(value: string, lang: Lang): string | null {
  if (value.trim() === "")
    return tr(lang, "This field is required.", "هذا الحقل مطلوب.");
  return null;
}

export function validateEmail(value: string, lang: Lang): string | null {
  const v = value.trim();
  const req = validateRequired(v, lang);
  if (req) return req;
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))
    return tr(
      lang,
      "Enter a valid email address.",
      "يرجى إدخال بريد إلكتروني صالح.",
    );
  return null;
}

export function validateMinLength(
  value: string,
  min: number,
  lang: Lang,
): string | null {
  if (value.trim().length < min)
    return tr(
      lang,
      `Please enter at least ${min} characters.`,
      `يُرجى إدخال ${min} أحرف على الأقل.`,
    );
  return null;
}

/** Password: required + minimum length */
export function validatePassword(
  value: string,
  min: number,
  lang: Lang,
): string | null {
  const req = validateRequired(value, lang);
  if (req) return req;
  return validateMinLength(value, min, lang);
}

export function validatePhone(value: string, lang: Lang): string | null {
  const v = value.trim();
  const req = validateRequired(v, lang);
  if (req) return req;
  const digits = v.replace(/\D/g, "");
  if (digits.length < 8)
    return tr(
      lang,
      "Enter a valid phone number (at least 8 digits).",
      "يرجى إدخال رقم هاتف صالح (8 أرقام على الأقل).",
    );
  return null;
}

export function validateNationalShortAddress(
  value: string,
  lang: Lang,
): string | null {
  const v = value.trim().toUpperCase().replace(/\s/g, "");
  const req = validateRequired(v, lang);
  if (req) return req;
  if (!/^[A-Z]{4}[0-9]{4}$/.test(v))
    return tr(
      lang,
      "Must be 4 English letters followed by 4 digits (e.g. RJDG2929).",
      "يجب أن يكون 4 أحرف إنجليزية ثم 4 أرقام (مثل RJDG2929).",
    );
  return null;
}

export function validatePostalOptional(
  value: string,
  lang: Lang,
): string | null {
  const v = value.trim();
  if (v === "") return null;
  if (v.length < 3 || v.length > 16)
    return tr(lang, "Postal code looks invalid.", "الرمز البريدي غير صالح.");
  return null;
}

/** Short required text (names, city, etc.) */
export function validateShortText(
  value: string,
  min: number,
  lang: Lang,
): string | null {
  const req = validateRequired(value, lang);
  if (req) return req;
  return validateMinLength(value, min, lang);
}

export function validateStreet(value: string, lang: Lang): string | null {
  const v = value.trim();
  const req = validateRequired(v, lang);
  if (req) return req;
  if (v.length < 5)
    return tr(
      lang,
      "Please enter a complete street address.",
      "يرجى إدخال عنوان الشارع كاملاً.",
    );
  return null;
}

export function validateMessage(value: string, lang: Lang): string | null {
  const v = value.trim();
  const req = validateRequired(v, lang);
  if (req) return req;
  if (v.length < 10)
    return tr(
      lang,
      "Please write at least 10 characters.",
      "يُرجى كتابة 10 أحرف على الأقل.",
    );
  if (v.length > 5000)
    return tr(lang, "Message is too long.", "الرسالة طويلة جداً.");
  return null;
}

export function validateSubject(value: string, lang: Lang): string | null {
  const v = value.trim();
  const req = validateRequired(v, lang);
  if (req) return req;
  if (v.length < 3)
    return tr(lang, "Subject is too short.", "الموضوع قصير جداً.");
  return null;
}

export function validatePriceRange(
  min: number,
  max: number,
  lang: Lang,
): string | null {
  if (!Number.isFinite(min) || !Number.isFinite(max))
    return tr(lang, "Enter valid numbers.", "يرجى إدخال أرقام صالحة.");
  if (min < 0 || max < 0)
    return tr(lang, "Prices cannot be negative.", "لا يمكن أن يكون السعر سالباً.");
  if (min > max)
    return tr(
      lang,
      "Minimum price cannot be greater than maximum.",
      "الحد الأدنى للسعر لا يمكن أن يتجاوز الأعلى.",
    );
  return null;
}

export function inputBorderClass(hasError: boolean) {
  return hasError
    ? "border-destructive focus:border-destructive"
    : "border-border focus:border-primary";
}
