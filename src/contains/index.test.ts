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

  it('returns true if all the items in an array are contained in the string', () => {
    const word = 'I am the baddest dude on this block';

    const isInTheWord = contains(word, ['baddest', 'the']);

    expect(isInTheWord).toBeTruthy();
  });

  it('returns false if all the items in an array are not contained in the string', () => {
    const word = 'I am the baddest dude on this block';

    const isInTheWord = contains(word, ['baddest', 'the', 'any']);

    expect(isInTheWord).toBeFalsy();
  });

  it('checks for empty arrays and returns false', () => {
    const word = 'I am the baddest dude on this block';

    const isInTheWord = contains(word, []);

    expect(isInTheWord).toBeFalsy();
  });
});
