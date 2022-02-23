export const toSnakeCase = (phrase: string, delimiter = '-'): string => {
  // convert to lowercases first
  const lowerCasedWords = phrase.toLowerCase();

  // split the string into an array of words
  const words = lowerCasedWords.split(' ');

  // separate the words by underscores or whatever the separator is passed by the user

  // return the joined words
  return words.join(delimiter);
};
