import { toTitleCase } from '../to-title-case';

export const headline = (word: string) => {
  if (!word || typeof word !== 'string') {
    return word;
  }

  // check if the words are more than one

  const parts = word.split(' ');

  // check if the words are more than one

  const result = parts.map((part) => {
    let finalResult: string[] = [];

    // any that has uppercase letter, split them by the uppercase letter
    if (part.match(/[A-Z]/)) {
      finalResult = part.split(/(?=[A-Z])/);
    }

    // check if any of the words contain a hyphen, underscore or space

    if (finalResult.length > 0) {
      return finalResult.map((result) => toTitleCase(result));
    }

    finalResult = part.split(/[-_ ]/);

    const allWords = finalResult.map((result) => toTitleCase(result));

    return allWords;
  });

  return result.flat().join(' ');
};
