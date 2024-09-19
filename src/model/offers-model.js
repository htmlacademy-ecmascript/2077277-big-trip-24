import { offers } from '../mock/offers';

export default class OffersModel {
  #offers = offers;

  get offers() {
    return this.#offers;
  }

  getOffersByType(type) {
    const allOffers = this.offers;
    return allOffers.find((item) => item.type === type);
  }

  getOffersById(type, itemsId) {
    const offersByType = this.getOffersByType(type);
    return offersByType.offers.filter((item) => itemsId.find((id) => item.id === id));
  }
}
