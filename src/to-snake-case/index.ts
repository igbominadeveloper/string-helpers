export const toSnakeCase = (phrase: string, delimiter = '_'): string => {
  // convert to lowercases first
  const lowerCasedWords = phrase.toLowerCase();

  // split the string into an array of words
  const words = lowerCasedWords.split(' ');

  // remove all empty strings
  const filteredWords = words.filter(Boolean);

  // separate the words by underscores or whatever the separator is passed by the user

  // return the joined words
  return filteredWords.join(delimiter);
};
