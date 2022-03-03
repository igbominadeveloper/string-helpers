import { trimEdges } from '.';

describe('Trim Edges Helper function', () => {
  it('trims the space at the start and end of a string', () => {
    const word = '  I am a string  ';

    const trimmedWord = trimEdges(word);

    expect(trimmedWord).toBe('I am a string');
  });

  it('returns the original string if the search string is not of string type', () => {
    const array: string[] = [];

    const trimmedWord = trimEdges(array as never);

    expect(trimmedWord.length).toBe(0);
  });
});
