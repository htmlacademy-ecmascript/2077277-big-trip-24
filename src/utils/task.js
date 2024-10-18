import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
dayjs.extend(duration);
dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

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

function isDatesEqual(dateA, dateB) {
  return (dateA === null && dateB === null) || dayjs(dateA).isSame(dateB, 'D');
}

function getCheckedOffers(offers, type) {
  const offerByType = offers.find((offer) => offer.type === type);
  return offerByType ? offerByType.offers : [];
}

function getTotalOffers(offersID = [], availableOffers = []) {
  const offersTotal = offersID.reduce((totalCost, id) => {
    const offer = availableOffers.find((item) => item.id === id);
    return totalCost + (offer ? offer.price : 0);
  }, 0);
  return offersTotal;
}

export {
  humanizeTaskDueDate, getDifferenceTime, capitalize,
  isFuturePoint, isPresentPoint, isPastPoint, getPointsByDate, getPointsByPrice,
  getPointsByTime, isDatesEqual, getCheckedOffers, getTotalOffers
};
