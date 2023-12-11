import ms from 'ms';

export const timeAgo = (timestamp: Date, timeOnly?: boolean): string => {
  if (!timestamp) return 'never';
  let msAgo = ms(Date.now() - new Date(timestamp).getTime());
  let ago = timeOnly ? '' : ' ago';
  return `${msAgo}${ago}`;
};
