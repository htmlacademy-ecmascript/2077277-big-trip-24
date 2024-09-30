import PointsListView from '../view/points-list-view';
import PointsEmptyView from '../view/points-empty-view';
import { render } from '../framework/render';
import { EmptyPhrase } from '../const';
import PointPresenter from './point-presenter';
import { updateItem } from '../utils/common';
import { SortType } from '../const';
import { sorting } from '../utils/task';
import SortPresenter from './sort-presenter';

export default class PointsPresenter {
  #container = null;
  #pointsModel = [];
  #pointsList = new PointsListView();
  #points = [];
  #offersModel = [];
  #destinationsModel = [];
  #pointPresenters = new Map;
  #currentSortType = SortType.DAY;

  constructor({ container, pointsModel, offersModel, destinationsModel }) {
    this.#container = container;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
    this.#points = [...this.#pointsModel.points];
  }

  init() {
    if (!this.#points.length) {
      this.#renderPointsEmptyList();
      return;
    }
    this.#renderSort();
    this.#renderPointsList();
  }

  #renderPointsEmptyList() {
    render(new PointsEmptyView({ message: EmptyPhrase.NO_FUTURE_POINTS }), this.#container);
  }

  #handlePointChange = (updatedPoint) => {
    this.#points = updateItem(this.#points, updatedPoint);
    this.#pointPresenters.get(updatedPoint.id).init(updatedPoint);
  };

  #handleModeChange = () => {
    this.#pointPresenters.forEach((presenter) => {
      presenter.resetView();
    });
  };

  #sortPoints = (sortType) => {
    this.#currentSortType = sortType;
    this.#points = sorting[this.#currentSortType](this.#points);
  };

  #handleSortTypeChange = (sortType) => {
    this.#sortPoints(sortType);
    this.#clearPoints();
    this.#renderPoints();
  };

  #renderSort() {
    const sortPresenter = new SortPresenter({
      container: this.#container, handleSortTypeChange: this.#handleSortTypeChange,
      currentSortType: this.#currentSortType
    });

    sortPresenter.init();
  }

  #renderPointsList() {
    render(this.#pointsList, this.#container);
    this.#handleSortTypeChange(this.#currentSortType);
  }

  #renderPoints() {
    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsListComponent: this.#pointsList,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel,
      onDataChange: this.#handlePointChange,
      onModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #clearPoints() {
    this.#pointPresenters.forEach((presenter) => {
      presenter.destroy();
    });
    this.#pointPresenters.clear();
  }
}
