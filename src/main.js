import PointsPresenter from './presenter/points-presenter';
import HeaderPresenter from './presenter/header-presenter';
import PointsModel from './model/points-model';
import OffersModel from './model/offers-model';
import DestinationsModel from './model/destinations-model';
import FilterPresenter from './presenter/filter-presenter';
import FilterModel from './model/filter-model';
import NewPointButtonView from './view/new-point-button-view';
import { render, RenderPosition } from './framework/render';

const main = document.querySelector('.page-body__page-main');
const mainSection = main.querySelector('.trip-events');
const header = document.querySelector('.page-header');
const filtersContainer = header.querySelector('.trip-controls__filters');
const routeContainer = header.querySelector('.trip-main');
const pointsModel = new PointsModel;
const offersModel = new OffersModel;
const destinationsModel = new DestinationsModel;
const filterModel = new FilterModel;

const pointsPresenter = new PointsPresenter({
  container: mainSection,
  pointsModel,
  filterModel,
  offersModel,
  destinationsModel,
  onNewPointDestroy: handleNewPointFormClose
});

const headerPresenter = new HeaderPresenter(routeContainer);

const filterPresenter = new FilterPresenter({
  filterContainer: filtersContainer,
  filterModel: filterModel,
  pointsModel: pointsModel
});

const newPointButtonComponent = new NewPointButtonView({
  onButtonClick: handleNewPointButtonClick
});

function handleNewPointButtonClick() {
  pointsPresenter.createPoint();
  newPointButtonComponent.element.disabled = true;
}

function handleNewPointFormClose() {
  newPointButtonComponent.element.disabled = false;
}

render(newPointButtonComponent, routeContainer, RenderPosition.BEFOREEND);

headerPresenter.init();
pointsPresenter.init();
filterPresenter.init();
