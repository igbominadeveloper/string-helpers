import { toSnakeCase } from './to-snake-case';

describe('Snake case', () => {
  it('converts word to snake case', () => {
    const phrase = 'I should be in snake case';
    const phraseInSnakeCase = 'i should be in snake case';

    const snakeCaseWord = toSnakeCase(phrase);

    expect(snakeCaseWord).toBe(phraseInSnakeCase);
  });
});
