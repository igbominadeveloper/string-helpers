import { containsAll } from '.';

describe('Contains All', () => {
  it('returns true if the search string (needle) can be found in the haystack', () => {
    const word = 'I am the baddest dude on this block';

    const isInTheWord = containsAll(word, 'the');

    expect(isInTheWord).toBeTruthy();
  });

  it('returns false if the search string (needle) cannot be found in the haystack', () => {
    const word = 'I am the baddest dude on this block';

    const isInTheWord = containsAll(word, 'any');

    expect(isInTheWord).toBeFalsy();
  });

  it('returns true if all of the items in an array are contained in the string', () => {
    const word = 'I am the baddest dude on this block';

    const isInTheWord = containsAll(word, ['baddest', 'dude']);

    expect(isInTheWord).toBeTruthy();
  });

  it('returns false if any of the items in an array is not contained in the string', () => {
    const word = 'I am the baddest dude on this block';

    const isInTheWord = containsAll(word, ['baddest', 'dude', 'any']);

    expect(isInTheWord).toBeFalsy();
  });

  it('checks for empty arrays and returns false', () => {
    const word = 'I am the baddest dude on this block';

    const isInTheWord = containsAll(word, []);

    expect(isInTheWord).toBeFalsy();
  });
});
