export const remove = (
  string: string,
  value: string | string[],
  ignoreCase: boolean = false
): string => {
  if (typeof string !== 'string') {
    return string;
  }

  if (Array.isArray(value)) {
    return value.reduce(
      (previous, current) => remove(previous, current),
      string
    );
  }

  return [...string].reduce((previous, current) => {
    const compareCase = ignoreCase ? current.toLowerCase() : current;

    if (compareCase === value) {
      return previous;
    }

    return `${previous}${current}`;
  }, '');
};
