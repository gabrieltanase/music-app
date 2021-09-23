export const formatDate = (date: string): number | '' => {
  if (!date) {
    console.error('no date provided');
    return '';
  }

  return new Date(date).getFullYear();
}

export const formatTime = (time: number): string => {

  if (!time) {
    return '';
  }

  const hrs = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);
  const secs = time % 60;

  // Output : "14:10" or "1:10:40"
  let duration = '';

  if (hrs > 0) {
    duration += `${hrs}:${mins < 10 ? '0' : ''}`;
  }

  duration += `${mins}:${secs < 10 ? '0' : ''}`;
  duration += `${secs}`;

  return duration;
}

export const truncate = (str: string, n: number): string => {
  return (str.length > n) ? str.substr(0, n - 1) + '...' : str;
};