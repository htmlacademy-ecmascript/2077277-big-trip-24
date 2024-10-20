import { UpdateType } from '../const';
export default class DestinationsModel {
  #destinations = [];
  #destinationsApiService = null;

  constructor({ destinationsApiService }) {
    this.#destinationsApiService = destinationsApiService;
  }

  get destinations() {
    return this.#destinations;
  }

  async init() {
    try {
      this.#destinations = await this.#destinationsApiService.destinations;
    } catch (err) {
      this.#destinations = [];
      this._notify(UpdateType.ERROR);
    }
  }

  getDestinationsById(id) {
    const allDestinations = this.destinations;
    return allDestinations.length ? allDestinations.find((item) => item.id === id) : {};
  }
}
