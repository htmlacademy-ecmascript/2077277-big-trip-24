import { render, remove } from '../framework/render';
import SortingView from '../view/sorting-view';
import { SortType } from '../const';
import { enabledSortType } from '../const';

export default class SortPresenter {
  #container = null;
  #sortTypes = [];
  #sortComponent = null;
  #handleSortTypeChange = null;
  #currentSortType = SortType.DAY;


  constructor({ container, handleSortTypeChange, currentSortType }) {
    this.#container = container;
    this.#handleSortTypeChange = handleSortTypeChange;
    this.#currentSortType = currentSortType;
    this.#sortTypes = Object.values(SortType).map((type) => (
      {
        type,
        isChecked: type === this.#currentSortType,
        isDisabled: !enabledSortType[type]
      }));
  }

  init() {
    this.#sortComponent = new SortingView({
      sortTypes: this.#sortTypes,
      onSortTypeChange: this.#handleSortTypeChange,
    });

    render(this.#sortComponent, this.#container);
  }

  removeSortComponent() {
    remove(this.#sortComponent);
  }
}
