export const mask = (
  subject: string,
  replacement = '*',
  startPosition = 1,
  limit?: number
): string => {
  if (typeof subject !== 'string' || typeof replacement !== 'string') {
    return subject;
  }

  let numberOfReplacements = subject.length - startPosition;

  if (limit) {
    const startString = subject.slice(0, startPosition);

    const endString = subject.slice(startString.length + limit);

    numberOfReplacements =
      subject.length - (startString.length + endString.length);

    return `${startString}${replacement.repeat(
      numberOfReplacements
    )}${endString}`;
  }

  return (
    subject.substring(0, startPosition) +
    replacement.repeat(numberOfReplacements)
  );
};
