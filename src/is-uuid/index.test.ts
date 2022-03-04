import { isUuid } from '.';

describe('Is UUID', () => {
  it('returns true if the value passed is a valid uuid', () => {
    const validUuid = 'a0a2a2d2-0b87-4a18-83f2-2529882be2de';

    const isValidUuid = isUuid(validUuid);

    expect(isValidUuid).toBeTruthy();
  });

  it('returns false if the value passed is a valid uuid', () => {
    const invalidUuid = 'a0a2a2d2-0b87-2529882be2de';

    const isValidUuid = isUuid(invalidUuid);

    expect(isValidUuid).toBeFalsy();
  });

  it('it returns false when the value passed is not a string type', () => {
    const invalidUuid = {} as string;

    const isValidUuid = isUuid(invalidUuid);

    expect(isValidUuid).toBeFalsy();
  });
});
