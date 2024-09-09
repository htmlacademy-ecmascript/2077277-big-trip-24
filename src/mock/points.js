import { destinations } from './destinations';
import { offers } from './offers';
import { getRandomInteger, getRandomArrayElement } from '../utils';
import { POINTS_TYPES } from '../const';
import { IS_FAVORITE_TYPES } from '../const';
import { getRandomDate } from '../utils';

const MAX_RANDOM_INTEGER = 3000;
const MIN_RANDOM_INTEGER = 500;

function getOfferId(pointType) {
  const typeOffer = offers.find((offer) => offer.type === pointType);
  const offersLength = typeOffer.offers.length;
  if (!offersLength) {
    return [];
  } else {
    const offersList = typeOffer.offers
      .slice(0, getRandomInteger(offersLength))
      .map((offer) => offer.id);
    return offersList;
  }
}

function createPoints(pointsNumber) {
  const points = [];
  for (let i = 0; i < pointsNumber; i++) {
    const pointType = getRandomArrayElement(POINTS_TYPES);
    const startDate = getRandomDate(new Date(), new Date(2024, 8, 11));
    const endDate = getRandomDate(startDate, new Date(2024, 8, 11));

    points.push({
      type: pointType,
      offers: getOfferId(pointType),
      basePrice: getRandomInteger(MAX_RANDOM_INTEGER, MIN_RANDOM_INTEGER),
      dateFrom: startDate,
      dateTo: endDate,
      destination: getRandomArrayElement(destinations).id,
      isFavorite: getRandomArrayElement(IS_FAVORITE_TYPES),

    });
  }
  return points;
}

export { createPoints };
