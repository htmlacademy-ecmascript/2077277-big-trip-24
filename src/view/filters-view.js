import AbstractView from '../framework/view/abstract-view';
import { FilterType } from '../const';

function createFiltersItemTemplate(filter) {

  const checkedAttribute = filter.type === FilterType.EVERYTHING ? 'checked' : '';
  const disabledAttribute = filter.count === 0 ? 'disabled' : '';

  return `<div class="trip-filters__filter">
              <input id="filter-${filter.type}" class="trip-filters__filter-input  visually-hidden"
               type="radio" name="trip-filter" value="${filter.type}" ${checkedAttribute} ${disabledAttribute}>
              <label class="trip-filters__filter-label" for="filter-${filter.type}">${filter.type}</label>
          </div>`;
}

function createFiltersTemplate(filters) {
  return `<form class="trip-filters" action="#" method="get">
              ${filters.map((filter) => createFiltersItemTemplate(filter)).join('')}
              <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`;
}

export default class FiltersView extends AbstractView {
  #filters = [];

  constructor({ filters }) {
    super();
    this.#filters = filters;
  }

  get template() {
    return createFiltersTemplate(this.#filters);
  }
}
