export const finish = (word: string, stringToEndWith: string): string => {
  if (typeof word !== 'string' || !stringToEndWith) {
    return word;
  }

  const wordAlreadyEndsWithTheString = word.endsWith(stringToEndWith);

  if (wordAlreadyEndsWithTheString) {
    return word;
  }

  return word + stringToEndWith;
};
