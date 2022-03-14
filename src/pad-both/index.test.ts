import { padBoth } from '.';

describe('Pad Both', () => {
  it('Pads both sides of the string with the provided character', () => {
    const phrase = 'Favour';
    const paddedPhrase = '**Favour**';

    const padded = padBoth(phrase, 10, '*');

    expect(padded).toBe(paddedPhrase);
  });

  it('Pads both sides of the string with space if no padstring is provided', () => {
    const phrase = 'Favour';
    const paddedPhrase = '  Favour  ';

    const padded = padBoth(phrase, 10);

    expect(padded).toBe(paddedPhrase);
  });

  it('returns the passed value if it is not a string', () => {
    const word = {} as string;

    const padded = padBoth(word, 10);

    expect(padded).toBe(word);
  });
});
