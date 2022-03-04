import { finish } from '.';

describe('Finish', () => {
  it('appends the given value to the last part of the string', () => {
    const word = 'index.test';

    const result = finish(word, '.ts');

    expect(result).toBe(word + '.ts');
  });

  it('returns the given value as it is if the value already ends with the passed string', () => {
    const word = 'index.test.ts';

    const result = finish(word, '.ts');

    expect(result).toBe(word);
  });

  it('returns the given value if it is not of string type', () => {
    const word = {} as string;

    const result = finish(word, '.ts');

    expect(result).toBe(word);
  });
});
