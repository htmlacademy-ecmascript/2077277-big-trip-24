import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

function getRandomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function getDifferenceTime(start, end) {
  return (dayjs.duration(dayjs(end)
    .set('seconds', 0)
    .set('millisecond', 0)
    .diff(dayjs(start).set('seconds', 0).set('millisecond', 0))))
    .format('DD,HH,mm');
}

function humanizeTaskDueDate(dueDate, format) {
  return dueDate ? dayjs(dueDate).format(format) : '';
}

function capitalize(word) {
  if (word) {
    return word[0].toUpperCase() + word.slice(1, word.length);
  }
}

export { humanizeTaskDueDate, getRandomDate, getDifferenceTime, capitalize };
