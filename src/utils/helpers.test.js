import { countWordOccurances } from './helpers';

describe('Helper functions', () => {
  describe('countWordOccurances', () => {
    it('should return 0 when word is not found', () => {
      const result = countWordOccurances('Hello World', 'test');
      expect(result).toBe(0);
    });

    it('should return count value when word is found', () => {
      const result = countWordOccurances('Hello World', 'World');
      expect(result).toBe(1);
    });
  });
});
