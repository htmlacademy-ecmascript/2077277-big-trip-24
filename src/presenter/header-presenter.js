import InfoView from '../view/info-view';
import { render, RenderPosition, replace, remove } from '../framework/render';
import { getPointsByDate, getTotalOffers, getCheckedOffers, humanizeTaskDueDate } from '../utils/task';
import { DESTINATIONS_COUNT } from '../const';

export default class HeaderPresenter {
  #headerContainer = null;
  #pointsModel = [];
  #offersModel = [];
  #destinationsModel = [];
  #infoComponent = null;
  #sortedPoints = [];

  constructor({ headerContainer, pointsModel, offersModel, destinationsModel }) {
    this.#headerContainer = headerContainer;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;

    this.#pointsModel.addObserver(this.#handleModelEvent);
  }

  init() {
    const points = this.#pointsModel.points;
    if (!points.length) {
      this.destroy();
      return;
    }

    this.#sortedPoints = points.toSorted(getPointsByDate);
    const prevInfoComponent = this.#infoComponent;

    this.#infoComponent = new InfoView({
      route: this.#getRoute(),
      routeDates: this.#getRouteDates(),
      routePrice: this.#getRoutePrice(),
    });

    if (!prevInfoComponent) {
      render(this.#infoComponent, this.#headerContainer, RenderPosition.AFTERBEGIN);
    } else {
      replace(this.#infoComponent, prevInfoComponent);
      remove(prevInfoComponent);
    }
  }

  destroy() {
    if (this.#infoComponent) {
      remove(this.#infoComponent);
    }
  }

  #getRoute() {
    const destinationNames = this.#sortedPoints.map((point) =>
      this.#destinationsModel.destinations.find((destination) => destination.id === point.destination)?.name);

    return destinationNames.length > DESTINATIONS_COUNT
      ? [destinationNames[0], '...', destinationNames[destinationNames.length - 1]].join(' - ')
      : destinationNames.join(' - ');
  }

  #getRouteDates() {
    const startDate = humanizeTaskDueDate(this.#sortedPoints[0]?.dateFrom, 'D MMM');
    const endDate = humanizeTaskDueDate(this.#sortedPoints[this.#sortedPoints.length - 1]?.dateTo, 'D MMM');
    return `${startDate} - ${endDate}`;
  }

  #getRoutePrice() {
    return this.#pointsModel.points.reduce((routePrice, point) =>
      routePrice + point.basePrice + getTotalOffers(point.offers, getCheckedOffers(this.#offersModel.offers, point.type)), 0);
  }

  #handleModelEvent = () => this.init();
}
