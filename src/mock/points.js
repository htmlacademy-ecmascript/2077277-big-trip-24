import { destinations } from './destinations';
import { offers } from './offers';
import { getRandomInteger, getRandomArrayElement } from '../utils';
import { POINTS_TYPES } from '../const';
import { IS_FAVORITE_TYPES } from '../const';

const MAX_RANDOM_INTEGER = 3000;

function getOffer(pointType) {
  const typeOffer = offers.find((offer) => offer.type === pointType);
  return getRandomArrayElement(typeOffer.offers);
}

function createPoints(pointsNumber) {
  const points = [];
  for (let i = 0; i < pointsNumber; i++) {
    const pointType = getRandomArrayElement(POINTS_TYPES);

    points.push({
      'type': pointType,
      'offers': getOffer(pointType),
      'base_price': getRandomInteger(MAX_RANDOM_INTEGER),
      'date_from': new Date (2024, 9, 4),
      'date_to': new Date (2024, 9, 4 + i),
      'destination': getRandomArrayElement(destinations),
      'is_favorite': getRandomArrayElement(IS_FAVORITE_TYPES),

    });
  }
  return points;
}

export { createPoints };
