export const remove = (
  string: string,
  value: string | string[],
  ignoreCase: boolean = false
): string => {
  if (Array.isArray(value)) {
    return value.reduce(
      (previous, current) => remove(previous, current),
      string
    );
  }

  return string.split('').reduce((previous, current) => {
    if (current === value) {
      return previous;
    }

    return previous + current;
  }, '');
};
