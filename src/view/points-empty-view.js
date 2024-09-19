import AbstractView from '../framework/view/abstract-view';

function createPointsEmptyTemplate(message) {
  return `<p class="trip-events__msg">${message}</p>
`;
}

export default class PointsEmptyView extends AbstractView {
  #message = [];

  constructor({message}) {
    super();
    this.#message = message;
  }

  get template() {
    return createPointsEmptyTemplate(this.#message);
  }
}
