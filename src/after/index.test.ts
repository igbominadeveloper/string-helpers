import { after } from '.';

describe('After', () => {
  it('returns the words after a certain string', () => {
    const word = 'I should only return the words after the search string';

    const afterWord = after(word, 'should');

    expect(afterWord).toBe(' only return the words after the search string');
  });

  it('returns the full word passed if the search string cannot be found', () => {
    const word = 'I should only return the words after the search string';

    const afterWord = after(word, 'vex');

    expect(afterWord).toBe(word);
  });

  it('returns the full word passed if the subject passed is not of string type', () => {
    const word = {} as string;

    const afterWord = after(word, 'vex');

    expect(afterWord).toBe(word);
  });
});
