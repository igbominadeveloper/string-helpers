import { between } from '.';

describe('Between', () => {
  it('returns the words between the parts of the strings provided', () => {
    const word = 'I should only return the words before the search string';

    const betweenWords = between(word, 'should', 'search');

    expect(betweenWords).toBe(' only return the words before the ');
  });

  it('returns the words between the parts of the strings provided even when the words are repeated', () => {
    const word = 'I should only return the words after the search string';

    const betweenWords = between(word, 'the', 'the');

    expect(betweenWords).toBe(' words after ');
  });

  it('returns the full word passed if the subject passed is not of string type', () => {
    const word = {} as string;

    const betweenWords = between(word, 'the', 'the');

    expect(betweenWords).toBe(word);
  });

  it('returns the full word passed if either the from or to string cannot be found', () => {
    const word = 'I should only return the words after the search string';

    const afterWord = between(word, 'vex', 'search');

    expect(afterWord).toBe(word);
  });
});
