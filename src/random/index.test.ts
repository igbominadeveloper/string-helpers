import { random } from '.';

describe('Random String', () => {
  it('returns a random string of the specified length', () => {
    const randomString = random(10);

    expect(randomString.length).toBe(10);
  });

  it('returns the positive length if a negative value length is passed', () => {
    const randomString = random(-50);

    expect(randomString.length).toBe(50);
  });
});
