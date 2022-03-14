export const random = (length: number): string => {
  const positiveLength = Math.abs(length);

  const allCharacters = 'abcdefghijklmnopqrstuvwxyz0123456789';

  return Array.from({ length: positiveLength }, () =>
    allCharacters.charAt(Math.floor(Math.random() * allCharacters.length))
  ).join('');
};
