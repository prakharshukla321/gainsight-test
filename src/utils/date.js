const SECONDS_IN_MINUTE = 60;
const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR;
const SECONDS_IN_MONTH = 31 * SECONDS_IN_DAY;
const SECONDS_IN_YEAR = 365 * SECONDS_IN_DAY;
//Not accounting for leap year, feb and months with are 30 days for simplicity sake for now.
//Anyways implemented after completing the test.
export function timeSince(time) {
  if (!time) return '';
  const _date = new Date();
  if (_date.toString() === 'Invalid Date') return time;
  const interval = Math.floor((Date.now() - _date.getTime())/1000);

  if (interval > SECONDS_IN_YEAR) {
    const years = Math.floor(interval/SECONDS_IN_YEAR);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  } else if (interval > SECONDS_IN_MONTH) {
    const months = Math.floor(interval/SECONDS_IN_MONTH);
    return `${months} month${months > 1 ? 's' : ''} ago`;
  } else if (interval > SECONDS_IN_DAY) {
    const days = Math.floor(interval/SECONDS_IN_DAY);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  } else if (interval > SECONDS_IN_HOUR) {
    const hour = Math.floor(interval/SECONDS_IN_HOUR);
    return `${hour} hour${hour > 1 ? 's' : ''} ago`;
  } else if (interval > SECONDS_IN_MINUTE) {
    const minute = Math.floor(interval/SECONDS_IN_MINUTE);
    return `${minute} minute${minute > 1 ? 's' : ''} ago`;
  } else {
    return `${interval} second${interval > 1 ? 's' : ''} ago`;
  }
}
