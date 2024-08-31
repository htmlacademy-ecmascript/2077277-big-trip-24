import { createElement } from '../render';

const FILTERS_TYPES = ['everything', 'future', 'present', 'past'];

function createFiltersItemTemplate(type) {
  return `<div class="trip-filters__filter">
              <input id="filter-${type}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${type}" checked>
              <label class="trip-filters__filter-label" for="filter-${type}">${type}</label>
          </div>`;
}

function createFiltersTemplate() {
  return `<form class="trip-filters" action="#" method="get">
              ${FILTERS_TYPES.map((type) => createFiltersItemTemplate(type)).join('')}
              <button class="visually-hidden" type="submit">Accept filter</button>
          </form>`;
}

export default class FiltersView {
  getTemplate() {
    return createFiltersTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
