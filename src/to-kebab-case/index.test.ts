import { toKebabCase } from '.';

describe('Kebab case', () => {
  const phraseInKebabCase = 'i-should-be-in-kebab-case';
  it('converts word to kebab case', () => {
    const phrase = 'I should be in kebab case';

    const kebabCaseWord = toKebabCase(phrase);

    expect(kebabCaseWord).toBe(phraseInKebabCase);
  });

  it('converts snake case to kebab case', () => {
    const phrase = 'I_should_be_in_kebab_case';

    const kebabCaseWord = toKebabCase(phrase);

    expect(kebabCaseWord).toBe(phraseInKebabCase);
  });

  it('returns the passed value if it is not a string', () => {
    const word = {} as string;

    const kebabCaseWord = toKebabCase(word);

    expect(kebabCaseWord).toBe(word);
  });
});
