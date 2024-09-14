import AbstractView from '../framework/view/abstract-view';
import { humanizeTaskDueDate, getDifferenceTime, capitalize } from '../utils';
import { TIME_NULL } from '../const';

function createPointsTemplate(point, destination, offers) {

  const { type, basePrice, dateFrom, dateTo, isFavorite } = point;
  const typeName = capitalize(type);
  const favoriteClassName = isFavorite ? 'event__favorite-btn event__favorite-btn--active' : 'event__favorite-btn';

  function createOffersTemplate(offer, price) {
    return `<li class="event__offer">
                <span class="event__offer-title">${offer}</span>
                &plus;&euro;&nbsp;
                <span class="event__offer-price">${price}</span>
            </li>`;
  }
  const createOffers = offers.map((offer) => createOffersTemplate(offer.title, offer.price)).join('');

  function convertDifferenceTime(time) {
    const [days, hours, minutes] = time.split(',');
    switch (true) {
      case days !== TIME_NULL:
        return `${days}D ${hours}H ${minutes}M`;
      case hours !== TIME_NULL:
        return `${hours}H ${minutes}M`;
      default:
        return `${minutes}M`;
    }
  }

  const differenceTime = convertDifferenceTime(getDifferenceTime(dateFrom, dateTo));

  return `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="${humanizeTaskDueDate(dateFrom, 'YYYY-MM-DD')}">${humanizeTaskDueDate(dateFrom, 'DD MMM')}</time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
                </div>
                <h3 class="event__title">${typeName} ${destination.name}</h3>
                <div class="event__schedule">
                  <p class="event__time">
                    <time class="event__start-time" datetime="${humanizeTaskDueDate(dateFrom, 'YYYY-MM-DD HH:mm')}">${humanizeTaskDueDate(dateFrom, 'HH:mm')}</time>
                    &mdash;
                    <time class="event__end-time" datetime="${humanizeTaskDueDate(dateFrom, 'YYYY-MM-DD HH:mm')}">${humanizeTaskDueDate(dateTo, 'HH:mm')}</time>
                  </p>
                  <p class="event__duration">${differenceTime}</p>
                </div>
                <p class="event__price">
                  &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  ${createOffers}
                </ul>
                <button class="${favoriteClassName}" type="button">
                  <span class="visually-hidden">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden">Open event</span>
                </button>
              </div>
            </li>`;
}

export default class PointsView extends AbstractView {
  #point = null;
  #destination = null;
  #offers = null;
  #onOpenEditButtonClick = null;

  constructor({ point, destination, offers, onOpenEditButtonClick }) {
    super();
    this.#point = point;
    this.#destination = destination;
    this.#offers = offers;
    this.#onOpenEditButtonClick = onOpenEditButtonClick;
    this.#setEventListeners();
  }

  get template() {
    return createPointsTemplate(this.#point, this.#destination, this.#offers);
  }

  #setEventListeners() {
    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#openEditButtonClickHandler);
  }

  #openEditButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#onOpenEditButtonClick();
  };
}
