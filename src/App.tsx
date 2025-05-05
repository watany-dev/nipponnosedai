import { useState, useCallback } from "react";
import { YearInput } from "./components/YearInput";
import { ResultDisplay } from "./components/ResultDisplay";
import { convertToEra } from "./utils/eraConverter";
import { getEto } from "./utils/etoCalculator";
import { getGeneration } from "./utils/generationInfo";
import "./App.css";

function App() {
  const [searchResult, setSearchResult] = useState<{
    year: number;
    era: string;
    eto: string;
    generation: ReturnType<typeof getGeneration>;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Use useCallback to prevent unnecessary re-renders
  const handleYearSubmit = useCallback((inputYear: number) => {
    setError(null);

    try {
      // Use a single batch update for better performance
      setSearchResult({
        year: inputYear,
        era: convertToEra(inputYear),
        eto: getEto(inputYear),
        generation: getGeneration(inputYear)
      });
    } catch (error) {
      console.error("Error processing year:", error);
      setError(error instanceof Error ? error.message : "不明なエラーが発生しました");
      setSearchResult(null);
    }
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>日本の世代・元号検索</h1>
        <p>西暦年を入力して、元号・干支・世代情報を調べましょう</p>
      </header>

      <main className="app-main">
        <YearInput onSubmit={handleYearSubmit} />

        {error && <div className="error-message">{error}</div>}

        {searchResult && !error && (
          <ResultDisplay
            year={searchResult.year}
            era={searchResult.era}
            eto={searchResult.eto}
            generation={searchResult.generation}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} 日本の世代・元号検索</p>
      </footer>
    </div>
  );
}

export default App;
