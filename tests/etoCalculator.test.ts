import { describe, it, expect, vi } from "vitest";
import { getEto } from "../src/utils/etoCalculator";

describe("getEto", () => {
  // モックの現在日時を設定
  const mockDate = new Date(2025, 4, 5);

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return correct eto for specific years", () => {
    // 1984 is a 甲子 (Kinoe-Ne) year
    expect(getEto(1984)).toBe("甲子（きのえね）");

    // 1985 is a 乙丑 (Kinoto-Ushi) year
    expect(getEto(1985)).toBe("乙丑（きのとうし）");

    // 1990 is a 庚午 (Kanoe-Uma) year
    expect(getEto(1990)).toBe("庚午（かのえうま）");

    // 2000 is a 庚辰 (Kanoe-Tatsu) year
    expect(getEto(2000)).toBe("庚辰（かのえたつ）");

    // 2023 is a 癸卯 (Mizunoto-U) year
    expect(getEto(2023)).toBe("癸卯（みずのとう）");
  });

  it("should return the same eto for years in 60-year cycles", () => {
    // Years that are 60 years apart should have the same eto
    expect(getEto(1924)).toBe(getEto(1984));
    expect(getEto(1984)).toBe(getEto(2044));

    expect(getEto(1935)).toBe(getEto(1995));
    expect(getEto(1995)).toBe(getEto(2055));
  });

  it("should handle negative indices correctly", () => {
    // 1864 should be the same as 1924 (60 years earlier)
    expect(getEto(1864)).toBe(getEto(1924));
  });

  it("should throw an error for invalid input", () => {
    expect(() => getEto(Number.NaN)).toThrow("Invalid year input");
    expect(() => getEto(Number.POSITIVE_INFINITY)).toThrow("Invalid year input");
  });

  it("should throw an error for years beyond the allowed future range", () => {
    // 2025年のモック日時から100年後は2125年
    expect(() => getEto(2126)).toThrow("Year must be 2125 or earlier");
  });
});
