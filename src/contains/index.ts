export const contains = (
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

    return search.some((item) => contains(subject, item));
  }

  return subject.includes(search);
};
