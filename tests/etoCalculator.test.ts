import { describe, it, expect } from 'vitest';
import { getEto } from '../src/utils/etoCalculator';

describe('getEto', () => {
  it('should return correct eto for specific years', () => {
    // 1984 is a 甲子 (Kinoe-Ne) year
    expect(getEto(1984)).toBe('甲子（きのえね）');
    
    // 1985 is a 乙丑 (Kinoto-Ushi) year
    expect(getEto(1985)).toBe('乙丑（きのとうし）');
    
    // 1990 is a 庚午 (Kanoe-Uma) year
    expect(getEto(1990)).toBe('庚午（かのえうま）');
    
    // 2000 is a 庚辰 (Kanoe-Tatsu) year
    expect(getEto(2000)).toBe('庚辰（かのえたつ）');
    
    // 2023 is a 癸卯 (Mizunoto-U) year
    expect(getEto(2023)).toBe('癸卯（みずのとう）');
  });

  it('should return the same eto for years in 60-year cycles', () => {
    // Years that are 60 years apart should have the same eto
    expect(getEto(1924)).toBe(getEto(1984));
    expect(getEto(1984)).toBe(getEto(2044));
    
    expect(getEto(1935)).toBe(getEto(1995));
    expect(getEto(1995)).toBe(getEto(2055));
  });
});
