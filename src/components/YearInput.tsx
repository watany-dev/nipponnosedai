import { useState } from 'react';

interface YearInputProps {
  onSubmit: (year: number) => void;
}

export function YearInput({ onSubmit }: YearInputProps) {
  const [yearInput, setYearInput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const year = parseInt(yearInput, 10);
    
    if (isNaN(year)) {
      setError('有効な年を入力してください');
      return;
    }
    
    if (year < 1868) {
      setError('1868年以降の年を入力してください');
      return;
    }
    
    setError(null);
    onSubmit(year);
  };

  return (
    <form onSubmit={handleSubmit} className="year-input-form">
      <div className="input-group">
        <input
          type="number"
          value={yearInput}
          onChange={(e) => setYearInput(e.target.value)}
          placeholder="西暦年を入力（例：1990）"
          min="1868"
          className="year-input"
          aria-label="西暦年を入力"
        />
        <button type="submit" className="submit-button">
          検索
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
}
