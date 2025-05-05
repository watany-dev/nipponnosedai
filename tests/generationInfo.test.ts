import { describe, it, expect, vi } from "vitest";
import { getGeneration } from "../src/utils/generationInfo";

describe("getGeneration", () => {
  // モックの現在日時を設定
  const mockDate = new Date(2025, 4, 5);

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return correct generation for 団塊の世代", () => {
    const result = getGeneration(1948);
    expect(result).not.toBeNull();
    expect(result?.name).toBe("団塊の世代");
    expect(result?.range).toBe("1947年～1949年");
  });

  it("should return correct generation for バブル世代", () => {
    const result = getGeneration(1967);
    expect(result).not.toBeNull();
    expect(result?.name).toBe("バブル世代");
    expect(result?.range).toBe("1965年～1969年");
  });

  it("should return correct generation for さとり世代", () => {
    const result = getGeneration(1995);
    expect(result).not.toBeNull();
    expect(result?.name).toBe("さとり世代");
    expect(result?.range).toBe("1990年～2000年");
  });

  it("should return correct generation for Z世代", () => {
    const result = getGeneration(2005);
    expect(result).not.toBeNull();
    expect(result?.name).toBe("Z世代");
    expect(result?.range).toBe("1995年～2010年");
  });

  it("should handle overlapping generations by returning the more specific one", () => {
    // 1995 is in both さとり世代 (1990-2000) and Z世代 (1995-2010)
    // Should return さとり世代 as it has a narrower range
    const result = getGeneration(1995);
    expect(result).not.toBeNull();
    expect(result?.name).toBe("さとり世代");
  });

  it("should return null for years before any defined generation", () => {
    const result = getGeneration(1900);
    expect(result).toBeNull();
  });

  it("should throw an error for invalid input", () => {
    expect(() => getGeneration(Number.NaN)).toThrow("Invalid year input");
    expect(() => getGeneration(Number.POSITIVE_INFINITY)).toThrow("Invalid year input");
  });

  it("should throw an error for years beyond the allowed future range", () => {
    // 2025年のモック日時から100年後は2125年
    expect(() => getGeneration(2126)).toThrow("Year must be 2125 or earlier");
  });
});
