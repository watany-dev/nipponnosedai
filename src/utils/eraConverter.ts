/**
 * Converts a Gregorian calendar year to Japanese era (元号)
 */
export function convertToEra(year: number): string {
  if (year < 1868) {
    throw new Error("Year must be 1868 or later");
  }

  if (year >= 2019) {
    // 令和 (Reiwa) era: May 1, 2019 - present
    return `令和${year - 2019 + 1}年`;
  }
  
  if (year >= 1989) {
    // 平成 (Heisei) era: January 8, 1989 - April 30, 2019
    return `平成${year - 1989 + 1}年`;
  }
  
  if (year >= 1926) {
    // 昭和 (Showa) era: December 25, 1926 - January 7, 1989
    return `昭和${year - 1926 + 1}年`;
  }
  
  if (year >= 1912) {
    // 大正 (Taisho) era: July 30, 1912 - December 24, 1926
    return `大正${year - 1912 + 1}年`;
  }
  
  // 明治 (Meiji) era: January 25, 1868 - July 29, 1912
  return `明治${year - 1868 + 1}年`;
}
