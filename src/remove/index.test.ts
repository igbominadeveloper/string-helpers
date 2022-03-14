import { remove } from '.';

describe('Remove', () => {
  it('removes the given value from the string', () => {
    const string = 'Favour Afolayan';

    const stripped = remove(string, 'a');

    expect(stripped).toBe('Fvour Afolyn');
  });

  it('removes the given values from the string', () => {
    const string = 'Favour Afolayan';

    const stripped = remove(string, ['a', 'o']);

    expect(stripped).toBe('Fvur Aflyn');
  });

  it('removes the given value from the string ignoring case if the third argument is supplied', () => {
    const string = 'Favour Afolayan';

    const stripped = remove(string, 'f', true);

    expect(stripped).toBe('avour Aolayan');
  });

  it('returns the passed value if it is not a string', () => {
    const word = {} as string;

    const titleCaseWord = remove(word, 'A');

    expect(titleCaseWord).toBe(word);
  });
});
