import PointsListView from '../view/points-list-view';
import PointsEmptyView from '../view/points-empty-view';
import { render, remove } from '../framework/render';
import PointPresenter from './point-presenter';
import SortPresenter from './sort-presenter';
import { UpdateType, FilterType, SortType, UserAction, } from '../const';
import { filter } from '../utils/filter';
import { getPointsByDate, getPointsByPrice, getPointsByTime } from '../utils/task';
import { EmptyPhrase } from '../const';
import NewPointPresenter from './new-point-presenter';

export default class PointsPresenter {
  #container = null;
  #pointsModel = [];
  #pointsList = new PointsListView();
  #offersModel = [];
  #filterModel = null;
  #destinationsModel = [];
  #pointPresenters = new Map;
  #currentSortType = SortType.DAY;
  #currentFilterType = FilterType.EVERYTHING;
  #sortPresenter = null;
  #pointsEmptyList = null;
  #newPointPresenter = null;

  constructor({ container, pointsModel, filterModel, offersModel, destinationsModel, onNewPointDestroy }) {
    this.#container = container;
    this.#pointsModel = pointsModel;
    this.#filterModel = filterModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
    this.#newPointPresenter = new NewPointPresenter({
      pointListContainer: this.#pointsList.element,
      onDataChange: this.#handleViewAction,
      onDestroy: onNewPointDestroy
    });

    this.#pointsModel.addObserver(this.#handleModelEvent);
    this.#filterModel.addObserver(this.#handleModelEvent);
  }

  get points() {
    this.#currentFilterType = this.#filterModel.filter;
    const points = this.#pointsModel.points;
    const filteredPoints = filter[this.#currentFilterType](points);

    switch (this.#currentSortType) {
      case SortType.TIME:
        return filteredPoints.sort(getPointsByTime);
      case SortType.PRICE:
        return filteredPoints.sort(getPointsByPrice);
    }
    return filteredPoints.sort(getPointsByDate);
  }

  get destinations() {
    return this.#pointsModel.destinations; //????
  }

  get offers() {
    return this.#pointsModel.offers; //????
  }

  init() {
    this.#renderBoard();
  }

  createPoint() {
    this.#currentSortType = SortType.DAY;
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    this.#newPointPresenter.init();
  }

  #renderBoard() {
    if (!this.points.length) {
      this.#renderPointsEmptyList();
      return;
    }
    this.#renderSort();
    this.#renderPointsList();
  }

  #renderPointsList() {
    render(this.#pointsList, this.#container);

    this.#renderPoints();
  }

  #renderPointsEmptyList() {
    this.#pointsEmptyList = new PointsEmptyView ({ message: EmptyPhrase[this.#currentFilterType] });
    render(this.#pointsEmptyList, this.#container);
  }

  #renderSort() {
    this.#sortPresenter = new SortPresenter({
      container: this.#container,
      handleSortTypeChange: this.#handleSortTypeChange,
      currentSortType: this.#currentSortType
    });

    this.#sortPresenter.init();
  }

  #handleViewAction = (actionType, updateType, update) => {
    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointsModel.updatePoint(updateType, update);
        break;
      case UserAction.ADD_POINT:
        this.#pointsModel.addPoint(updateType, update);
        break;
      case UserAction.DELETE_POINT:
        this.#pointsModel.deletePoint(updateType, update);
        break;
    }
  };

  #handleModeChange = () => {
    this.#newPointPresenter.destroy();
    this.#pointPresenters.forEach((presenter) => {
      presenter.resetView();
    });
  };

  #handleSortTypeChange = (sortType) => {
    if (this.#currentSortType === sortType) {
      return;
    }
    this.#currentSortType = sortType;
    this.#sortPresenter.removeSortComponent();
    this.#renderSort();
    this.#clearBoard();
    this.#renderBoard();
  };

  #renderPoints() {
    this.points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsListComponent: this.#pointsList,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel,
      onDataChange: this.#handleViewAction,
      onModeChange: this.#handleModeChange,
    });

    pointPresenter.init(point);
    this.#pointPresenters.set(point.id, pointPresenter);
  }

  #clearBoard({ resetSortType = false } = {}) {
    this.#newPointPresenter.destroy();
    this.#pointPresenters.forEach((presenter) => presenter.destroy());
    this.#pointPresenters.clear();

    this.#sortPresenter.removeSortComponent();

    if (this.#pointsEmptyList) {
      remove(this.#pointsEmptyList);
    }

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
  }

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data, this.offers, this.destinations);
        break;
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UpdateType.MAJOR:
        this.#clearBoard({ resetSortType: true });
        this.#renderBoard();
        break;
    }
  };
}
