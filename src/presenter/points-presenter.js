import PointsListView from '../view/points-list-view';
import PointsEmptyView from '../view/points-empty-view';
import { render, remove } from '../framework/render';
import PointPresenter from './point-presenter';
import SortPresenter from './sort-presenter';
import { UpdateType, FilterType, SortType, UserAction, } from '../const';
import { filter } from '../utils/filter';
import { getPointsByDate, getPointsByPrice, getPointsByTime } from '../utils/task';
import { EmptyPhrase, LOADING_MASSAGE, TimeLimit, FAILED_MASSAGE } from '../const';
import NewPointPresenter from './new-point-presenter';
import UiBlocker from '../framework/ui-blocker/ui-blocker';

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
  #pointsLoading = null;
  #pointsError = null;
  #newPointPresenter = null;
  #isLoading = true;
  #onNewPointDestroy = null;
  #uiBlocker = new UiBlocker({
    lowerLimit: TimeLimit.LOWER_LIMIT,
    upperLimit: TimeLimit.UPPER_LIMIT
  });

  constructor({ container, pointsModel, filterModel, offersModel, destinationsModel, onNewPointDestroy }) {
    this.#container = container;
    this.#pointsModel = pointsModel;
    this.#filterModel = filterModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
    this.#onNewPointDestroy = onNewPointDestroy;
    this.#newPointPresenter = new NewPointPresenter({
      pointListContainer: this.#pointsList.element,
      onDataChange: this.#handleViewAction,
      onDestroy: this.#onNewPointDestroy,
      destinationsModel: destinationsModel,
      offersModel: offersModel
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

  init() {
    this.#renderBoard();
  }

  createPoint() {
    this.#currentSortType = SortType.DAY;
    this.#filterModel.setFilter(UpdateType.MAJOR, FilterType.EVERYTHING);
    if(this.#pointsEmptyList) {
      remove(this.#pointsEmptyList);
    }
    this.#newPointPresenter.init();
  }

  #renderBoard() {
    render(this.#pointsList, this.#container);

    if (this.#isLoading) {
      this.#renderLoading();
      return;
    }

    if (!this.points.length) {
      this.#renderPointsEmptyList();
      return;
    }
    this.#renderSort();
    this.#renderPointsList();
  }

  #renderPointsList() {
    this.#renderPoints();
  }

  #renderPointsEmptyList() {
    this.#pointsEmptyList = new PointsEmptyView({ message: EmptyPhrase[this.#currentFilterType] });
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

  #handleViewAction = async (actionType, updateType, update) => {
    this.#uiBlocker.block();

    switch (actionType) {
      case UserAction.UPDATE_POINT:
        this.#pointPresenters.get(update.id).setSaving();
        try {
          await this.#pointsModel.updatePoint(updateType, update);
        } catch (err) {
          this.#pointPresenters.get(update.id).setAborting();
        }
        break;
      case UserAction.ADD_POINT:
        this.#newPointPresenter.setSaving();
        try {
          await this.#pointsModel.addPoint(updateType, update);
        } catch (err) {
          this.#newPointPresenter.setAborting();
        }
        break;
      case UserAction.DELETE_POINT:
        this.#pointPresenters.get(update.id).setDeleting();
        try {
          await this.#pointsModel.deletePoint(updateType, update);
        } catch (err) {
          this.#pointPresenters.get(update.id).setAborting();
        }
        break;
    }
    this.#uiBlocker.unblock();
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

    if(this.#sortPresenter){
      this.#sortPresenter.removeSortComponent();
    }

    remove(this.#pointsLoading);

    if (this.#pointsEmptyList) {
      remove(this.#pointsEmptyList);
    }

    if (resetSortType) {
      this.#currentSortType = SortType.DAY;
    }
  }

  #renderLoading() {
    this.#pointsLoading = new PointsEmptyView({ message: LOADING_MASSAGE });
    render(this.#pointsLoading, this.#container);
  }

  #renderError() {
    this.#pointsError = new PointsEmptyView({ message: FAILED_MASSAGE });
    render(this.#pointsError, this.#container);
  }

  #handleModelEvent = (updateType, data) => {
    switch (updateType) {
      case UpdateType.PATCH:
        this.#pointPresenters.get(data.id).init(data);
        break;
      case UpdateType.MINOR:
        this.#clearBoard();
        this.#renderBoard();
        break;
      case UpdateType.MAJOR:
        this.#clearBoard({ resetSortType: true });
        this.#renderBoard();
        break;
      case UpdateType.INIT:
        this.#isLoading = false;
        remove(this.#pointsLoading);
        this.#renderBoard();
        this.#onNewPointDestroy();
        break;
      case UpdateType.ERROR:
        this.#isLoading = false;
        remove(this.#pointsLoading);
        this.#renderError();
        break;
    }
  };
}
