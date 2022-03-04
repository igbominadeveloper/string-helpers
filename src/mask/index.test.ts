import { mask } from '.';

describe('Mask', () => {
  const maskedPhrase = 'fav***************';
  it('masks a string starting from the limit specified', () => {
    const phrase = 'favour@example.com';

    const masked = mask(phrase, '*', 3);

    expect(masked).toBe(maskedPhrase);
  });

  it('masks all but the first string if the limit is not specified', () => {
    const phrase = 'favour@example.com';
    const result = 'f*****************';

    const masked = mask(phrase);

    expect(masked).toBe(result);
  });

  it('starts the masking from a negative number specified and ends at the limit', () => {
    const phrase = 'favour@example.com';
    const result = 'fav***@example.com';

    const masked = mask(phrase, '*', -15, 3);

    expect(masked).toBe(result);
  });

  it('uses the mask passed by the user and defaults to *', () => {
    const phrase = 'favour@example.com';
    const result = 'fav!!!@example.com';

    const masked = mask(phrase, '!', -15, 3);

    expect(masked).toBe(result);
  });

  it('returns the passed value if it is not a string', () => {
    const word = {} as string;

    const titleCaseWord = mask(word);

    expect(titleCaseWord).toBe(word);
  });
});
