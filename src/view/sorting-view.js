import AbstractView from '../framework/view/abstract-view';

function createSortingItemTemplate(sort) {

  const checkedAttribute = sort.isChecked ? 'checked' : '';
  const disabledAttribute = sort.isDisabled ? 'disabled' : '';

  return `<div class="trip-sort__item  trip-sort__item--${sort.type}">
            <input id="sort-${sort.type}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort"
            value="sort-${sort.type}" data-sort-type="${sort.type}" ${checkedAttribute} ${disabledAttribute}>
            <label class="trip-sort__btn" for="sort-${sort.type}">${sort.type}</label>
          </div>`;
}

function createSortingTemplate(sorts) {

  return `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
            ${sorts.map((sort) => createSortingItemTemplate(sort)).join('')}
          </form>
          `;
}

export default class SortingView extends AbstractView {
  #onSortTypeChange = null;
  #sortTypes = [];

  constructor({ sortTypes, onSortTypeChange }) {
    super();
    this.#sortTypes = sortTypes;
    this.#onSortTypeChange = onSortTypeChange;
    this.#setEventListeners();
  }

  get template() {
    return createSortingTemplate(this.#sortTypes);
  }

  #setEventListeners() {
    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  #sortTypeChangeHandler = (evt) => {
    if (evt.target.tagName !== 'INPUT') {
      return;
    }

    evt.preventDefault();
    this.#onSortTypeChange(evt.target.dataset.sortType);
  };
}
