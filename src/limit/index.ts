export const limit = (
  subject: string,
  limit?: number,
  append?: string
): string => {
  if (!subject || typeof subject !== 'string') {
    return subject;
  }

  const limitToUse = limit ? limit : subject.length;
  const appendage = append ? append : '...';

  return subject.slice(0, limitToUse).trimEnd() + appendage;
};
