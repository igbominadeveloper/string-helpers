import { before } from '.';

describe('Before', () => {
  it('returns the words before a certain string', () => {
    const word = 'I should only return the words before the search string';

    const beforeWord = before(word, 'before');

    expect(beforeWord).toBe('I should only return the words ');
  });

  it('returns the full word passed if the search string cannot be found', () => {
    const word = 'I should only return the words after the search string';

    const afterWord = before(word, 'vex');

    expect(afterWord).toBe(word);
  });

  it('returns the full word passed if the subject passed is not of string type', () => {
    const word = {} as string;

    const afterWord = before(word, 'vex');

    expect(afterWord).toBe(word);
  });
});
