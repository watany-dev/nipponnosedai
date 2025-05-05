// 十干 (Jikkan, the Ten Heavenly Stems) - moved outside function for better performance
const jikkan = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
const jikkanYomi = [
  "きのえ",
  "きのと",
  "ひのえ",
  "ひのと",
  "つちのえ",
  "つちのと",
  "かのえ",
  "かのと",
  "みずのえ",
  "みずのと",
];

// 十二支 (Jūnishi, the Twelve Earthly Branches) - moved outside function for better performance
const junishi = [
  "子",
  "丑",
  "寅",
  "卯",
  "辰",
  "巳",
  "午",
  "未",
  "申",
  "酉",
  "戌",
  "亥",
];
const junishiYomi = [
  "ね",
  "うし",
  "とら",
  "う",
  "たつ",
  "み",
  "うま",
  "ひつじ",
  "さる",
  "とり",
  "いぬ",
  "い",
];

/**
 * Calculates the Japanese zodiac (干支) for a given year
 */
export function getEto(year: number): string {
  // Calculate indices
  // The cycle starts from 甲子 (Kinoe-Ne) in years that give remainder 4 when divided by 60
  // For example: 1984, 2044, etc.
  const jikkanIndex = (year - 4) % 10;
  const junishiIndex = (year - 4) % 12;

  // Return the combination with readings
  return `${jikkan[jikkanIndex]}${junishi[junishiIndex]}（${jikkanYomi[jikkanIndex]}${junishiYomi[junishiIndex]}）`;
}
