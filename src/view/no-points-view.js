import AbstractView from '../framework/view/abstract-view';

function createNoPointsTemplate(message) {
  return `<p class="trip-events__msg">${message}</p>
`;
}

export default class noPointsView extends AbstractView {
  #message = null;

  constructor({message}) {
    super();
    this.#message = message;
  }

  get template() {
    return createNoPointsTemplate(this.#message);
  }
}
