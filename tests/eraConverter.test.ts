import { describe, it, expect, vi } from "vitest";
import { convertToEra } from "../src/utils/eraConverter";

describe("convertToEra", () => {
  // モックの現在日時を設定
  const mockDate = new Date(2025, 4, 5);
  const originalDate = global.Date;

  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(mockDate);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should convert years to Reiwa era correctly", () => {
    expect(convertToEra(2019)).toBe("令和1年");
    expect(convertToEra(2020)).toBe("令和2年");
    expect(convertToEra(2025)).toBe("令和7年");
  });

  it("should convert years to Heisei era correctly", () => {
    expect(convertToEra(1989)).toBe("平成1年");
    expect(convertToEra(2000)).toBe("平成12年");
    expect(convertToEra(2018)).toBe("平成30年");
  });

  it("should convert years to Showa era correctly", () => {
    expect(convertToEra(1926)).toBe("昭和1年");
    expect(convertToEra(1945)).toBe("昭和20年");
    expect(convertToEra(1988)).toBe("昭和63年");
  });

  it("should convert years to Taisho era correctly", () => {
    expect(convertToEra(1912)).toBe("大正1年");
    expect(convertToEra(1920)).toBe("大正9年");
    expect(convertToEra(1925)).toBe("大正14年");
  });

  it("should convert years to Meiji era correctly", () => {
    expect(convertToEra(1868)).toBe("明治1年");
    expect(convertToEra(1900)).toBe("明治33年");
    expect(convertToEra(1911)).toBe("明治44年");
  });

  it("should throw an error for years before 1868", () => {
    expect(() => convertToEra(1867)).toThrow("Year must be 1868 or later");
    expect(() => convertToEra(1800)).toThrow("Year must be 1868 or later");
  });

  it("should throw an error for invalid input", () => {
    expect(() => convertToEra(Number.NaN)).toThrow("Invalid year input");
    expect(() => convertToEra(Number.POSITIVE_INFINITY)).toThrow("Invalid year input");
  });

  it("should throw an error for years beyond the allowed future range", () => {
    // 2025年のモック日時から100年後は2125年
    expect(() => convertToEra(2126)).toThrow("Year must be 2125 or earlier");
  });
});
