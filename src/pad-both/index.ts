export const padBoth = (
  word: string,
  length: number,
  padString = ' '
): string => {
  if (typeof word !== 'string') {
    return word;
  }

  const padLength = length - word.length;
  const halfPadLength = Math.floor(padLength / 2);

  return `${padString.repeat(halfPadLength)}${word}${padString.repeat(
    halfPadLength
  )}`;
};
