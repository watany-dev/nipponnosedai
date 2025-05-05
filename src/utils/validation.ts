/**
 * Common validation utilities for year inputs
 */

/**
 * Validates a year input and throws appropriate errors
 * @param year The year to validate
 * @param minYear The minimum allowed year (default: 1868)
 * @returns The validated year
 */
export function validateYear(year: number, minYear = 1868): number {
  // 入力値の検証
  if (!Number.isFinite(year) || Number.isNaN(year)) {
    throw new Error("Invalid year input");
  }

  if (year < minYear) {
    throw new Error(`Year must be ${minYear} or later`);
  }

  // 上限値のチェック
  const currentYear = new Date().getFullYear();
  const maxYear = currentYear + 100; // 現在から100年先までを許容
  if (year > maxYear) {
    throw new Error(`Year must be ${maxYear} or earlier`);
  }

  return year;
}

/**
 * Returns the maximum allowed year (current year + 100)
 */
export function getMaxAllowedYear(): number {
  return new Date().getFullYear() + 100;
}
