import AbstractView from '../framework/view/abstract-view';
import { POINTS_TYPES } from '../const';
import { capitalize, humanizeTaskDueDate } from '../utils/task';

function createEventItemTemplate(eventType) {
  return `<div class="event__type-item">
              <input id="event-type-${eventType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventType}">
              <label class="event__type-label  event__type-label--${eventType}" for="event-type-${eventType}-1">${capitalize(eventType)}</label>
          </div>`;
}

function createEditFormTemplate(point, destination, allDestinations, allOffers) {

  const { type, basePrice, dateFrom, dateTo } = point;

  function createDestinationsTemplate(pointDestination) {
    return `<option value="${pointDestination}"></option>
    `;
  }

  function createAvailableOffersTemplate(offerTitle, offerPrice, checkedAttribute) {
    const offerClass = offerTitle.split(' ').findLast((item) => item.length > 3).toLowerCase();

    return `<div class="event__offer-selector">
               <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offerClass}-1" type="checkbox" name="event-offer-${offerClass}" ${checkedAttribute}>
               <label class="event__offer-label" for="event-offer-${offerClass}-1">
                  <span class="event__offer-title">${offerTitle}</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">${offerPrice}</span>
              </label>
            </div>`;
  }

  const createAvailableOffers = allOffers.offers.map((offer) => {
    const checkedAttribute = point.offers.includes(offer.id) ? 'checked' : '';
    return createAvailableOffersTemplate(offer.title, offer.price, checkedAttribute);
  }).join('');

  return `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>
                        ${POINTS_TYPES.map((pointType) => createEventItemTemplate(pointType)).join('')}
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      ${point.type}
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${destination.name}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      ${allDestinations.map((pointDestination) => createDestinationsTemplate(pointDestination.name)).join('')}
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${humanizeTaskDueDate(dateFrom, 'DD/MM/YY HH:mm')}">
                    &mdash;
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${humanizeTaskDueDate(dateTo, 'DD/MM/YY HH:mm')}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden">Price</span>
                      &euro;
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${basePrice}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>
                    <div class="event__available-offers">
                      ${createAvailableOffers}
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${destination.description}</p>
                  </section>
                </section>
              </form>
            </li>`;
}
export default class EditFormView extends AbstractView {
  #point = null;
  #destination = null;
  #allDestinations = null;
  #allOffers = null;
  #onCloseEditButtonClick = null;
  #onSubmitButtonClick = null;

  constructor({ point, destination, allDestinations, allOffers, onCloseEditButtonClick,
    onSubmitButtonClick }) {
    super();
    this.#point = point;
    this.#destination = destination;
    this.#allDestinations = allDestinations;
    this.#allOffers = allOffers;
    this.#onCloseEditButtonClick = onCloseEditButtonClick;
    this.#onSubmitButtonClick = onSubmitButtonClick;
    this.#setEventListeners();
  }

  get template() {
    return createEditFormTemplate(this.#point, this.#destination, this.#allDestinations, this.#allOffers);
  }

  #setEventListeners() {
    this.element.querySelector('.event__rollup-btn')
      .addEventListener('click', this.#closeEditButtonClickHandler);

    this.element.querySelector('.event__save-btn')
      .addEventListener('submit', this.#submitButtonClickHandler);
  }

  #closeEditButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#onCloseEditButtonClick();
  };

  #submitButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#onSubmitButtonClick();
  };
}
