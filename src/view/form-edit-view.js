import AbstractStatefulView from '../framework/view/abstract-stateful-view';
import { POINTS_TYPES } from '../const';
import { capitalize, humanizeTaskDueDate } from '../utils/task';
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { nanoid } from 'nanoid';
import he from 'he';

const DEFAULT_POINT = {
  id: nanoid(),
  basePrice: 0,
  dateFrom: '',
  dateTo: '',
  destination: null,
  isFavorite: false,
  offers: [],
  type: POINTS_TYPES[1]
};

function createFormEditTemplate(point, allDestinations, isNewPoint) {

  const { type, basePrice, dateFrom, dateTo, typeOffer, destination } = point;

  function createEventItemTemplate(eventType) {
    const checkedAttribute = eventType === point.type ? 'checked' : '';

    return `<div class="event__type-item">
                <input id="event-type-${eventType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${eventType}" ${checkedAttribute}>
                <label class="event__type-label  event__type-label--${eventType}" for="event-type-${eventType}-1">${capitalize(eventType)}</label>
            </div>`;
  }

  function createDestinationsTemplate(pointDestination) {
    return `<option value="${pointDestination}"></option>
    `;
  }

  function createAvailableOffersTemplate(offerTitle, offerPrice, checkedAttribute, offerId) {

    return `<div class="event__offer-selector">
               <input class="event__offer-checkbox  visually-hidden" id="event-offer-${offerId}-1" data-offer-id="${offerId}" type="checkbox"
                name="event-offer-${offerId}" ${checkedAttribute}>
               <label class="event__offer-label" for="event-offer-${offerId}-1">
                  <span class="event__offer-title">${offerTitle}</span>
                  &plus;&euro;&nbsp;
                  <span class="event__offer-price">${offerPrice}</span>
              </label>
            </div>`;
  }

  const createAvailableOffers = typeOffer.offers ? (typeOffer.offers.map((offer) => {
    const checkedAttribute = point.offers.includes(offer.id) ? 'checked' : '';
    return createAvailableOffersTemplate(offer.title, offer.price, checkedAttribute, offer.id);
  }).join('')) : '';

  function createAvailableOffersSection() {
    if (!typeOffer.offers || !typeOffer.offers.length) {
      return '';
    } else {
      return `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>
      <div class="event__available-offers">
        ${createAvailableOffers}
      </div>
    </section>`;
    }
  }

  function createAvailablePhotosTemplate(src, description) {
    return `<img class="event__photo" src="${src}" alt="${description}">`;
  }

  const createAvailablePhotos = destination.pictures ? (destination.pictures.map((picture) => createAvailablePhotosTemplate(picture.src, picture.description)).join('')) : '';

  function createAvailableDestinationSection() {
    if (!destination.description && (!destination.pictures || !destination.pictures.length)) {
      return '';
    } else {
      return `<section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description">${destination.description}</p>
                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                        ${createAvailablePhotos}
                      </div>
                    </div>
                  </section>`;
    }
  }

  const rollupButtonTemplate = !isNewPoint ?
    `<button class="event__rollup-btn" type="button">
                    <span class="visually-hidden">Open event</span>
                  </button>`
    : '';

  const cancelOrDeleteButtonTemplate = !isNewPoint ?
    `<button class="event__reset-btn" type="reset">Delete
    </button>` :
    `<button class="event__reset-btn" type="reset">Cancel
    </button>`;

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
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${he.encode(String(destination.name ?? ''))}" list="destination-list-1" required>
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
                    <input class="event__input  event__input--price" id="event-price-1" type="number" name="event-price" value="${he.encode(String(basePrice))}" min="1" required>
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  ${cancelOrDeleteButtonTemplate}
                  ${rollupButtonTemplate}
                </header>
                <section class="event__details">
                      ${createAvailableOffersSection()}
                      ${createAvailableDestinationSection()}
                </section>
              </form>
            </li>`;
}
export default class FormEditView extends AbstractStatefulView {
  #point = null;
  #allDestinations = [];
  #allOffers = [];
  #onCloseEditButtonClick = null;
  #onSubmitButtonClick = null;
  #isNewPoint = false;
  #dateFromPicker = null;
  #dateToPicker = null;
  #onDeleteClick = null;

  constructor({ point = DEFAULT_POINT, destination = {}, allDestinations, typeOffer = {}, allOffers, onCloseEditButtonClick,
    onSubmitButtonClick, onDeleteClick, isNewPoint }) {
    super();
    this.#point = point;
    this._setState(FormEditView.parsePointToState(point, destination, typeOffer));
    this.#allDestinations = allDestinations;
    this.#allOffers = allOffers;
    this.#isNewPoint = isNewPoint ?? false;
    this.#onCloseEditButtonClick = onCloseEditButtonClick;
    this.#onSubmitButtonClick = onSubmitButtonClick;
    this.#onDeleteClick = onDeleteClick;
    this.#setEventListeners();
  }

  get template() {
    return createFormEditTemplate(this._state, this.#allDestinations, this.#isNewPoint);
  }

  reset(point) {
    this.updateElement({
      ...point,
      typeOffer: this.#allOffers.find((offer) => offer.type === point.type),
      destination: this.#allDestinations.find((destination) => destination.id === point.destination)
    });
  }

  #setEventListeners() {

    const rollupButton = this.element.querySelector('.event__rollup-btn');
    if (rollupButton) {
      rollupButton.addEventListener('click', this.#closeEditButtonClickHandler);
    }

    this.element.querySelector('form')
      .addEventListener('submit', this.#submitButtonClickHandler);

    this.element.querySelector('.event__type-group')
      .addEventListener('change', this.#typeListChangeHandler);

    this.element.querySelector('.event__input--destination')
      .addEventListener('change', this.#destinationChangeHandler);

    this.element.querySelector('.event__input--price')
      .addEventListener('input', this.#priceChangeHandler);

    this.element.querySelector('.event__reset-btn')
      .addEventListener('click', this.#deleteClickHandler);

    this.#setDateFromPicker();
    this.#setDateToPicker();
  }

  _restoreHandlers() {
    this.#setEventListeners();
  }

  #closeEditButtonClickHandler = (evt) => {
    evt.preventDefault();
    this.#onCloseEditButtonClick();
  };

  #submitButtonClickHandler = (evt) => {
    evt.preventDefault();
    const dateFrom = this.element.querySelector('#event-start-time-1').value;
    const dateTo = this.element.querySelector('#event-end-time-1').value;

    if (dateFrom === '' || dateTo === '') {
      return;
    }
    this.#offerChangeHandler();
    this.#onSubmitButtonClick(FormEditView.parseStateToPoint(this._state));
  };

  #typeListChangeHandler = (evt) => {
    evt.preventDefault();
    const targetType = evt.target.value;
    const typeOffer = this.#allOffers.find((item) => item.type === targetType);

    this.updateElement({
      type: targetType,
      typeOffer: typeOffer
    });
  };

  #destinationChangeHandler = (evt) => {
    evt.preventDefault();
    const targetDestination = evt.target.value;
    const newDestination = this.#allDestinations.find((item) => item.name === targetDestination);

    if (newDestination === undefined) {
      evt.target.value = '';
      return;
    }

    this.updateElement({
      destination: newDestination
    });
  };

  #priceChangeHandler = (evt) => {
    evt.preventDefault();
    const newPrice = evt.target.value;
    this._setState({
      basePrice: newPrice
    });
  };

  #deleteClickHandler = (evt) => {
    evt.preventDefault();
    this.#onDeleteClick(FormEditView.parseStateToPoint(this._state));
  };

  #offerChangeHandler = () => {
    const checkedOffers = Array.from(this.element.querySelectorAll('.event__offer-checkbox:checked'));
    this._setState({
      offers: checkedOffers.map((offer) => offer.dataset.offerId)
    });
  };

  #dateFromChangeHandler = ([userDate]) => {
    this._setState({
      dateFrom: userDate
    });
    this.#dateToPicker.set('minDate', userDate);
  };

  #dateToChangeHandler = ([userDate]) => {
    this._setState({
      dateTo: userDate
    });
  };

  #setDateFromPicker() {
    this.#dateFromPicker = flatpickr(this.element.querySelector('#event-start-time-1'), {
      enableTime: true,
      dateFormat: 'd/m/y H:i',
      defaultDate: this._state.dateFrom,
      'time_24hr': true,
      onChange: this.#dateFromChangeHandler,
    });
  }

  #setDateToPicker() {
    this.#dateToPicker = flatpickr(this.element.querySelector('#event-end-time-1'), {
      enableTime: true,
      dateFormat: 'd/m/y H:i',
      defaultDate: this._state.dateTo,
      'time_24hr': true,
      onChange: this.#dateToChangeHandler,
      minDate: this._state.dateFrom,
    });
  }

  static parsePointToState(point, pointDestination, typeOffer) {
    return {
      ...point,
      destination: pointDestination,
      typeOffer
    };
  }

  static parseStateToPoint(state) {
    const point = {
      ...state,
      destination: state.destination.id
    };
    return point;
  }
}
