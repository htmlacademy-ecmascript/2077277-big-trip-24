import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import { SortType } from '../const';
dayjs.extend(duration);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

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

function isFuturePoint(point) {
  return dayjs().isBefore(point.dateFrom, 'minute');
}

function isPresentPoint(point) {
  return dayjs().isSameOrAfter(point.dateFrom, 'minute') && (point.dateTo && dayjs().isSameOrBefore(point.dateTo, 'minute'));
}

function isPastPoint(point) {
  return point.dateTo && dayjs().isAfter(point.dateTo, 'minute');
}

function getPointsByDate(pointA, pointB) {
  return dayjs(pointB.dateFrom).diff(dayjs(pointA.dateFrom));
}

function getPointsByPrice(pointA, pointB) {
  return pointB.basePrice - pointA.basePrice;
}

function getPointsByTime(pointA, pointB) {
  const pointADuration = dayjs(pointA.dateTo).diff(dayjs(pointA.dateFrom));
  const pointBDuration = dayjs(pointB.dateTo).diff(dayjs(pointB.dateFrom));
  return pointBDuration - pointADuration;
}

const sorting = {
  [SortType.DAY]: (points) => points.toSorted(getPointsByDate),
  [SortType.EVENT]: () => {
    throw new Error(`Sort by ${SortType.EVENT} is disabled`);
  },
  [SortType.TIME]: (points) => points.toSorted(getPointsByTime),
  [SortType.PRICE]: (points) => points.toSorted(getPointsByPrice),
  [SortType.OFFERS]: () => {
    throw new Error(`Sort by ${SortType.OFFERS} is disabled`);
  },
};

export {
  humanizeTaskDueDate, getRandomDate, getDifferenceTime, capitalize,
  isFuturePoint, isPresentPoint, isPastPoint, getPointsByDate, getPointsByPrice,
  getPointsByTime, sorting
};
