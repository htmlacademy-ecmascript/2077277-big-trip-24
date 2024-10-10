import AbstractView from '../framework/view/abstract-view';

function createFiltersItemTemplate(filter, currentFilter) {

  const checkedAttribute = filter.type === currentFilter ? 'checked' : '';
  const disabledAttribute = filter.count === 0 ? 'disabled' : '';

  return `<div class="trip-filters__filter">
              <input id="filter-${filter.type}" class="trip-filters__filter-input  visually-hidden"
               type="radio" name="trip-filter" value="${filter.type}" ${checkedAttribute} ${disabledAttribute}>
              <label class="trip-filters__filter-label" for="filter-${filter.type}">${filter.type}</label>
          </div>`;
}

function createFiltersTemplate(filters, currentFilter) {
  return `<form class="trip-filters" action="#" method="get">
              ${filters.map((filter) => createFiltersItemTemplate(filter, currentFilter)).join('')}
              <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`;
}

export default class FiltersView extends AbstractView {
  #filters = [];
  #currentFilter = null;
  #handleFilterTypeChange = null;

  constructor({ filters, currentFilterType, onFilterTypeChange }) {
    super();
    this.#filters = filters;
    this.#currentFilter = currentFilterType;
    this.#handleFilterTypeChange = onFilterTypeChange;
    this.#setEventListeners();
  }

  get template() {
    return createFiltersTemplate(this.#filters, this.#currentFilter);
  }

  #setEventListeners() {
    this.element.addEventListener('change', this.#filterTypeChangeHandler);
  }

  #filterTypeChangeHandler = (evt) => {
    evt.preventDefault();
    this.#handleFilterTypeChange(evt.target.value);
  };
}
