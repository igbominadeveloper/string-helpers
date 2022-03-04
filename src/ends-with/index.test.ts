import { endsWith } from '.';

describe('Ends With', () => {
  it('returns true if the given string ends with the value passed', () => {
    const word = 'I am the baddest dude on this block';

    const endsWithWord = endsWith(word, 'block');

    expect(endsWithWord).toBeTruthy();
  });

  it('returns false if the given string does not end with the value passed', () => {
    const word = 'I am the baddest dude on this block';

    const endsWithWord = endsWith(word, 'any');

    expect(endsWithWord).toBeFalsy();
  });

  it('returns true if any of the items in an array is ends with the passed value', () => {
    const word = 'I am the baddest dude on this block';

    const endsWithWord = endsWith(word, ['block', 'dude']);

    expect(endsWithWord).toBeTruthy();
  });

  it('returns false if the given string does not end with any of the items in an array', () => {
    const word = 'I am the baddest dude on this block';

    const endsWithWord = endsWith(word, ['baddest', 'dude', 'any']);

    expect(endsWithWord).toBeFalsy();
  });

  it('checks for empty arrays and returns false', () => {
    const word = 'I am the baddest dude on this block';

    const endsWithWord = endsWith(word, []);

    expect(endsWithWord).toBeFalsy();
  });

  it('it returns false when the value passed is not a string type', () => {
    const word = {} as string;

    const endsWithWord = endsWith(word, 'hello');

    expect(endsWithWord).toBeFalsy();
  });
});
