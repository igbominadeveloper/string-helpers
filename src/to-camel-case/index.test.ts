import { toCamelCase } from '.';

describe('Camel case', () => {
  const phraseInCamelCase = 'iShouldBeInCamelCase';
  it('converts word to camel case', () => {
    const phrase = 'I should be in camel case';

    const camelCaseWord = toCamelCase(phrase);

    expect(camelCaseWord).toBe(phraseInCamelCase);
  });

  it('removes any non-alphanumeric parts of the string passed', () => {
    const phrase = 'I_should_be_in_camel_case';

    const camelCaseWord = toCamelCase(phrase);

    expect(camelCaseWord).toBe(phraseInCamelCase);
  });

  it('it formats the text properly when multiple white characters are passed', () => {
    const phrase = 'I    should be    in  camel    case';

    const camelCaseWord = toCamelCase(phrase);

    expect(camelCaseWord).toBe(phraseInCamelCase);
  });
});
