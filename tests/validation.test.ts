import { describe, it, expect, vi } from "vitest";
import { validateYear, getMaxAllowedYear } from "../src/utils/validation";

describe("validation utilities", () => {
  // モックの現在日時を設定
  const mockDate = new Date(2025, 4, 5);

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  describe("validateYear", () => {
    it("should return the year when valid", () => {
      expect(validateYear(2000)).toBe(2000);
      expect(validateYear(1868)).toBe(1868);
      expect(validateYear(2025)).toBe(2025);
    });

    it("should throw an error for years before the minimum", () => {
      expect(() => validateYear(1867)).toThrow("Year must be 1868 or later");
      expect(() => validateYear(1800)).toThrow("Year must be 1868 or later");
    });

    it("should accept a custom minimum year", () => {
      expect(validateYear(1800, 1800)).toBe(1800);
      expect(() => validateYear(1799, 1800)).toThrow("Year must be 1800 or later");
    });

    it("should throw an error for invalid input", () => {
      expect(() => validateYear(Number.NaN)).toThrow("Invalid year input");
      expect(() => validateYear(Number.POSITIVE_INFINITY)).toThrow("Invalid year input");
    });

    it("should throw an error for years beyond the allowed future range", () => {
      // 2025年のモック日時から100年後は2125年
      expect(() => validateYear(2126)).toThrow("Year must be 2125 or earlier");
    });
  });

  describe("getMaxAllowedYear", () => {
    it("should return current year plus 100", () => {
      // 2025年のモック日時から100年後は2125年
      expect(getMaxAllowedYear()).toBe(2125);
    });
  });
});
