import { contains } from '.';

describe('Contains', () => {
  it('returns true if the search string (needle) can be found in the haystack', () => {
    const word = 'I am the baddest dude on this block';

    const isInTheWord = contains(word, 'the');

    expect(isInTheWord).toBeTruthy();
  });

  it('returns false if the search string (needle) cannot be found in the haystack', () => {
    const word = 'I am the baddest dude on this block';

    const isInTheWord = contains(word, 'any');

    expect(isInTheWord).toBeFalsy();
  });

  it('returns true if any of the items in an array are contained in the string', () => {
    const word = 'I am the baddest dude on this block';

    const isInTheWord = contains(word, ['baddest', 'dim']);

    expect(isInTheWord).toBeTruthy();
  });

  it('returns false if none of the items in an array are not contained in the string', () => {
    const word = 'I am the baddest dude on this block';

    const isInTheWord = contains(word, ['point', 'green', 'any']);

    expect(isInTheWord).toBeFalsy();
  });

  it('checks for empty arrays and returns false', () => {
    const word = 'I am the baddest dude on this block';

    const isInTheWord = contains(word, []);

    expect(isInTheWord).toBeFalsy();
  });
});
