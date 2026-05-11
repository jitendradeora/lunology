/** Displayed product and cart line prices are VAT-inclusive (15%). */

export const VAT_RATE = 0.15;
export const VAT_MULTIPLIER = 1 + VAT_RATE;

/** Fixed shipping in SAR (excluded from VAT breakdown; added after goods total). */
export const CHECKOUT_SHIPPING_SAR = 25;

export function roundMoney(n: number): number {
  return Math.round(n * 100) / 100;
}

/** Amount excluding VAT from an inclusive total. */
export function amountExcludingVat(inclusiveTotal: number): number {
  return roundMoney(inclusiveTotal / VAT_MULTIPLIER);
}

export function vatPortionFromInclusive(inclusiveTotal: number): number {
  return roundMoney(inclusiveTotal - amountExcludingVat(inclusiveTotal));
}
