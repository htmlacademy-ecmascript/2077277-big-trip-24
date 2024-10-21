import { UpdateType } from '../const';
export default class OffersModel {
  #offersApiService = null;
  #offers = [];

  constructor({ offersApiService }) {
    this.#offersApiService = offersApiService;
  }

  get offers() {
    return this.#offers;
  }

  async init() {
    try {
      this.#offers = await this.#offersApiService.offers;
    } catch (err) {
      this.#offers = [];
      this._notify(UpdateType.ERROR);
    }
  }

  getOffersByType(type) {
    const allOffers = this.offers;
    return allOffers.length ? allOffers.find((item) => item.type === type) : {};
  }

  getOffersById(type, itemsId) {
    const offersByType = this.getOffersByType(type);
    return offersByType.offers ? offersByType.offers.filter((item) => itemsId.find((id) => item.id === id)) : [];
  }
}
