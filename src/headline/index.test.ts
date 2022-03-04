import { headline } from '.';

describe('Headline', () => {
  it('returns the converted headline string', () => {
    const word = 'steve_jobs';
    const result = 'Steve Jobs';

    const modified = headline(word);

    expect(modified).toBe(result);
  });

  it('returns the converted headline string even when multiple words are passed', () => {
    const word = 'SteveJobsAndBillGates';
    const result = 'Steve Jobs And Bill Gates';

    const modified = headline(word);

    expect(modified).toBe(result);
  });

  it('returns the passed value if it is not a string', () => {
    const word = {} as string;

    const modified = headline(word);

    expect(modified).toBe(word);
  });
});
