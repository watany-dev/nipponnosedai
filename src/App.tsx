import { useState } from 'react';
import { YearInput } from './components/YearInput';
import { ResultDisplay } from './components/ResultDisplay';
import { convertToEra } from './utils/eraConverter';
import { getEto } from './utils/etoCalculator';
import { getGeneration } from './utils/generationInfo';
import './App.css';

function App() {
  const [year, setYear] = useState<number | null>(null);
  const [era, setEra] = useState<string>('');
  const [eto, setEto] = useState<string>('');
  const [generation, setGeneration] = useState<ReturnType<typeof getGeneration>>(null);

  const handleYearSubmit = (inputYear: number) => {
    setYear(inputYear);
    
    try {
      const eraResult = convertToEra(inputYear);
      setEra(eraResult);
      
      const etoResult = getEto(inputYear);
      setEto(etoResult);
      
      const generationResult = getGeneration(inputYear);
      setGeneration(generationResult);
    } catch (error) {
      console.error('Error processing year:', error);
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>日本の世代・元号検索</h1>
        <p>西暦年を入力して、元号・干支・世代情報を調べましょう</p>
      </header>
      
      <main className="app-main">
        <YearInput onSubmit={handleYearSubmit} />
        
        {year && (
          <ResultDisplay
            year={year}
            era={era}
            eto={eto}
            generation={generation}
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
