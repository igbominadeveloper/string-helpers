import { limit } from '.';

describe('Limit', () => {
  it('returns the truncated string matching the character limit provided by the user', () => {
    const word = 'The quick brown fox jumps over the lazy dog';

    const truncated = limit(word, 20);

    expect(truncated).toBe('The quick brown fox...');
  });

  it('returns the whole string passed if the character limit is not specified', () => {
    const word = 'The quick brown fox jumps over the lazy dog';

    const truncated = limit(word);

    expect(truncated).toBe(word + '...');
  });

  it('appends the specified string to the original string', () => {
    const word = 'The quick brown fox jumps over the lazy dog';

    const truncated = limit(word, 20, ' ***');

    expect(truncated).toBe('The quick brown fox ***');
  });

  it('returns the full word passed if the subject passed is not of string type', () => {
    const word = {} as string;

    const truncated = limit(word, 20);

    expect(truncated).toBe(word);
  });
});
