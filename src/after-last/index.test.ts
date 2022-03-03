import { afterLast } from '.';

describe('After Last', () => {
  it('returns the words after the last occurence of the string passed', () => {
    const word = 'I only return the last occurence of the string passed';

    const afterWord = afterLast(word, 'the');

    expect(afterWord).toBe(' string passed');
  });

  it('returns the full word passed if the search string cannot be found', () => {
    const word = 'I should only return the words after the search string';

    const afterWord = afterLast(word, 'vex');

    expect(afterWord).toBe(word);
  });

  it('returns the full word passed if the subject passed is not of string type', () => {
    const word = {} as string;

    const afterWord = afterLast(word, 'vex');

    expect(afterWord).toBe(word);
  });
});
