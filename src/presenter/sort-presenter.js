import { render, remove, RenderPosition } from '../framework/render';
import SortingView from '../view/sorting-view';
import { SortType } from '../const';
import { EnabledSortType } from '../const';

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
        isDisabled: !EnabledSortType[type]
      }));
  }

  init() {
    this.#sortComponent = new SortingView({
      sortTypes: this.#sortTypes,
      onSortTypeChange: this.#handleSortTypeChange,
    });

    render(this.#sortComponent, this.#container, RenderPosition.AFTERBEGIN);
  }

  removeSortComponent() {
    remove(this.#sortComponent);
  }
}
