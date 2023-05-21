import { formatDistanceToNow } from 'date-fns';

export function serviseData(data) {
  return formatDistanceToNow(new Date(data), { addSuffix: true });
}
