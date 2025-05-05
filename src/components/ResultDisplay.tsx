import type { GenerationInfo } from "../utils/generationInfo";

interface ResultDisplayProps {
  year: number;
  era: string;
  eto: string;
  generation: GenerationInfo | null;
}

export function ResultDisplay({
  year,
  era,
  eto,
  generation,
}: ResultDisplayProps) {
  return (
    <div className="result-container">
      <h2 className="result-title">{year}年の情報</h2>

      <div className="result-section">
        <h3>元号（和暦）</h3>
        <p>{era}</p>
      </div>

      <div className="result-section">
        <h3>干支</h3>
        <p>{eto}</p>
      </div>

      {generation ? (
        <>
          <div className="result-section">
            <h3>世代名</h3>
            <p>{generation.name}</p>
          </div>

          <div className="result-section">
            <h3>生年範囲</h3>
            <p>{generation.range}</p>
          </div>

          <div className="result-section">
            <h3>世代の特徴</h3>
            <p>{generation.description}</p>
          </div>
        </>
      ) : (
        <div className="result-section">
          <p>この年に対応する世代情報は見つかりませんでした。</p>
        </div>
      )}
    </div>
  );
}
