export const endsWith = (
  subject: string,
  search: string | string[]
): boolean => {
  if (typeof subject !== 'string' || !search || !subject) {
    return false;
  }

  if (Array.isArray(search)) {
    if (search.length === 0) {
      return false;
    }

    return search.some((item) => endsWith(subject, item));
  }

  return subject.endsWith(search);
};
