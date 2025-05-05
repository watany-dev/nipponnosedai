import { validateYear } from "./validation";

/**
 * Types for generation information
 */
export interface GenerationInfo {
  name: string;
  range: string;
  description: string;
}

/**
 * Database of Japanese generations with their characteristics
 */
const generations: Array<{
  name: string;
  startYear: number;
  endYear: number;
  description: string;
}> = [
  {
    name: "団塊の世代",
    startYear: 1947,
    endYear: 1949,
    description:
      "戦後のベビーブーム期に生まれた世代。高度経済成長を牽引し、日本の経済発展に大きく貢献した。",
  },
  {
    name: "しらけ世代",
    startYear: 1950,
    endYear: 1965,
    description:
      "学生運動後の無気力感が特徴。個人主義的な傾向が強く、政治や社会運動への関心が薄い。",
  },
  {
    name: "新人類世代",
    startYear: 1960,
    endYear: 1970,
    description:
      "テレビの普及とともに育った世代。従来の価値観にとらわれない新しい感性を持ち、消費文化を牽引した。",
  },
  {
    name: "バブル世代",
    startYear: 1965,
    endYear: 1969,
    description:
      "消費やブランド志向が強く、バブル経済期に社会人となった世代。豊かな時代を経験した後の経済低迷に直面した。",
  },
  {
    name: "団塊ジュニア",
    startYear: 1971,
    endYear: 1974,
    description:
      "団塊の世代の子どもたちで、人口が多く競争が激しい環境で育った。就職氷河期の始まりを経験した世代。",
  },
  {
    name: "就職氷河期世代",
    startYear: 1975,
    endYear: 1985,
    description:
      "バブル崩壊後に就職活動を行い、厳しい雇用環境に直面した世代。非正規雇用の増加など、雇用形態の多様化を経験した。",
  },
  {
    name: "ミレニアル世代",
    startYear: 1980,
    endYear: 1995,
    description:
      "デジタル技術の草創期に育った世代。SNSを活用し、コストパフォーマンスを重視する傾向がある。仕事とプライベートのバランスを重視する。",
  },
  {
    name: "ゆとり世代",
    startYear: 1987,
    endYear: 2004,
    description:
      "ゆとり教育を受けた世代。協調性よりも個性を重視し、従来の価値観にとらわれない柔軟な思考を持つ。",
  },
  {
    name: "さとり世代",
    startYear: 1990,
    endYear: 2000,
    description:
      "物欲や出世欲が薄く、現実的で堅実な価値観を持つ。SNSを活用し、情報収集に長ける。無理をせず身の丈に合った生き方を志向する。",
  },
  {
    name: "Z世代",
    startYear: 1995,
    endYear: 2010,
    description:
      "生まれた時からデジタル環境に囲まれたデジタルネイティブ。多様性を尊重し、即時性や利便性を重視する傾向がある。",
  },
  {
    name: "α世代",
    startYear: 2010,
    endYear: 2025,
    description:
      "スマートフォンやタブレットが当たり前の環境で育ったスマホネイティブ。AIやIoTなどの先端技術に自然と馴染む世代。",
  },
];

// Sort generations by range size (narrowest first) for better performance
// This is done once at module level rather than on each function call
const sortedGenerations = [...generations].sort(
  (a, b) => a.endYear - a.startYear - (b.endYear - b.startYear),
);

/**
 * Returns generation information for a given year
 */
export function getGeneration(year: number): GenerationInfo | null {
  validateYear(year);

  // Find the first (most specific) generation that includes this year
  const generation = sortedGenerations.find(
    (gen) => year >= gen.startYear && year <= gen.endYear,
  );

  if (!generation) {
    return null;
  }

  return {
    name: generation.name,
    range: `${generation.startYear}年～${generation.endYear}年`,
    description: generation.description,
  };
}
