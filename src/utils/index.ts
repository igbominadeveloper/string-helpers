export const trimEdges = (word: string): string => {
  if (typeof word !== 'string') {
    return word;
  }

  return word.trimStart().trimEnd();
};
