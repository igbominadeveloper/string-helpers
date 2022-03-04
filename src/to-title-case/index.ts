export const toTitleCase = (words: string | string[]): string | string[] => {
  if (!words || typeof words !== 'string' || words.length === 0) {
    return words;
  }

  const parts = words.replace(/[^a-z0-9]/gi, ' ').split(' ');

  return parts
    .map(
      (part) =>
        part.substring(0, 1).toUpperCase() + part.substring(1).toLowerCase()
    )
    .join(' ');
};
