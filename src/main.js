import PointsPresenter from './presenter/points-presenter';
import HeaderPresenter from './presenter/header-presenter';
import PointsModel from './model/points-model';
import OffersModel from './model/offers-model';
import DestinationsModel from './model/destinations-model';
import FilterPresenter from './presenter/filter-presenter';
import FilterModel from './model/filter-model';
import NewPointButtonView from './view/new-point-button-view';
import { render, RenderPosition } from './framework/render';
import PointApiService from './service/point-api-service';
import { AUTHORIZATION, END_POINT } from './const';

const apiService = new PointApiService(END_POINT, AUTHORIZATION);
const main = document.querySelector('.page-body__page-main');
const mainSection = main.querySelector('.trip-events');
const header = document.querySelector('.page-header');
const filtersContainer = header.querySelector('.trip-controls__filters');
const routeContainer = header.querySelector('.trip-main');
const offersModel = new OffersModel({ offersApiService: apiService });
const destinationsModel = new DestinationsModel({ destinationsApiService: apiService });
const pointsModel = new PointsModel({ pointsApiService: apiService });
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

headerPresenter.init();
pointsPresenter.init();
filterPresenter.init();
offersModel.init();
destinationsModel.init();
pointsModel.init()
  .finally(() => {
    render(newPointButtonComponent, routeContainer, RenderPosition.BEFOREEND);
  });
