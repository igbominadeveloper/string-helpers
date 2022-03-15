import { beforeLast } from '.';

describe('Before Last', () => {
  it('returns the words before the last occurence of a certain string', () => {
    const word = 'I should only return the words before the search string';

    const beforeWord = beforeLast(word, 'the');

    expect(beforeWord).toBe('I should only return the words before ');
  });

  it('returns the full word passed if the search string cannot be found', () => {
    const word = 'I should only return the words after the search string';

    const afterWord = beforeLast(word, 'vex');

    expect(afterWord).toBe(word);
  });

  it('returns the full word passed if the subject passed is not of string type', () => {
    const word = {} as string;

    const afterWord = beforeLast(word, 'vex');

    expect(afterWord).toBe(word);
  });
});
