export const between = (subject: string, from: string, to: string): string => {
  if (
    typeof subject !== 'string' ||
    !from ||
    typeof from !== 'string' ||
    !to ||
    typeof to !== 'string'
  ) {
    return subject;
  }

  // get where the search string starts
  const indexOfFrom = subject.indexOf(from);
  const indexOfTo = subject.indexOf(to);

  // if the search string is not found, return the subject
  if (indexOfFrom === -1 || indexOfTo === -1) {
    return subject;
  }

  const startPosition = indexOfFrom + from.length;

  // let's take care of when the from and to strings are the same
  if (from === to) {
    // if the from and to strings are the same, we need to get the index of the next occurence of the to string
    const nextIndexOfTo = subject.lastIndexOf(to);

    return subject.substring(startPosition, nextIndexOfTo);
  }

  // return the subject before the last occurence of the search string

  return subject.substring(startPosition, indexOfTo);
};
