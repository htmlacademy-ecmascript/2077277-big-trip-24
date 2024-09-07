import { createPoints } from '../mock/points';
import { destinations } from '../mock/destinations';
import { offers } from '../mock/offers';

const POINTS_NUMBER = 4;

export default class PointsModel {
  points = createPoints(POINTS_NUMBER);
  destinations = destinations;
  offers = offers;

  getPoints() {
    return this.points;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }

  getDestinationsById(id) {
    const allDestinations = this.getDestinations();
    return allDestinations.find((item) => item.id === id);
  }

  getOffersByType(type) {
    const allOffers = this.getOffers();
    return allOffers.find((item) => item.type === type);
  }

  getOffersById(type, itemsId) {
    const offersByType = this.getOffersByType(type);
    return offersByType.offers.filter((item) => itemsId.find((id) => item.id === id));
  }
}
