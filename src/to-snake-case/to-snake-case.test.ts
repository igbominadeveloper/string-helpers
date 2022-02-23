import { toSnakeCase } from './to-snake-case';

describe('Snake case', () => {
  it('converts word to snake case', () => {
    const phrase = 'I should be in snake case';
    const phraseInSnakeCase = 'i_should_be_in_snake_case';

    const snakeCaseWord = toSnakeCase(phrase, '_');

    expect(snakeCaseWord).toBe(phraseInSnakeCase);
  });

  it('picks the delimiter passed by a user', () => {
    const phrase = 'I should be in snake case';
    const phraseInSnakeCase = 'i-should-be-in-snake-case';

    const snakeCaseWord = toSnakeCase(phrase, '-');

    expect(snakeCaseWord).toBe(phraseInSnakeCase);
  });
});
