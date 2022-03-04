import { toTitleCase } from '.';

describe('Title case', () => {
  const phraseInTitleCase = 'I Should Be In Title Case';
  it('converts word to title case', () => {
    const phrase = 'I should be in title case';

    const titleCaseWord = toTitleCase(phrase);

    expect(titleCaseWord).toBe(phraseInTitleCase);
  });

  it('removes any non-alphanumeric parts of the string passed', () => {
    const phrase = 'I_should_be_in_title_case';

    const titleCaseWord = toTitleCase(phrase);

    expect(titleCaseWord).toBe(phraseInTitleCase);
  });

  it('returns the passed value if it is not a string', () => {
    const word = {} as string;

    const titleCaseWord = toTitleCase(word);

    expect(titleCaseWord).toBe(word);
  });
});
