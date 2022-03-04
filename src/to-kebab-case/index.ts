export const toKebabCase = (subject: string): string => {
  if (typeof subject !== 'string') {
    return subject;
  }

  return subject
    .replace(/[^a-z0-9]/gi, ' ')
    .split(' ')
    .map((word) => word.toLowerCase())
    .join('-');
};
