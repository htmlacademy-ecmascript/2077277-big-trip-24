import { destinations } from '../mock/destinations';

export default class DestinationsModel {
  #destinations = destinations;

  get destinations() {
    return this.#destinations;
  }

  getDestinationsById(id) {
    const allDestinations = this.destinations;
    return allDestinations.find((item) => item.id === id);
  }
}
