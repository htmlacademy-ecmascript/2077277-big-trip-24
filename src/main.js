import FiltersView from './view/filters-view';
import PointsPresenter from './presenter/points-presenter';
import HeaderPresenter from './presenter/header-presenter';
import { render } from './framework/render';
import PointsModel from './model/points-model';
import OffersModel from './model/offers-model';
import DestinationsModel from './model/destinations-model';
import { generateFilters } from './mock/filters';

const main = document.querySelector('.page-body__page-main');
const mainSection = main.querySelector('.trip-events');
const header = document.querySelector('.page-header');
const filtersContainer = header.querySelector('.trip-controls__filters');
const routeContainer = header.querySelector('.trip-main');

const pointsModel = new PointsModel;
const offersModel = new OffersModel;
const destinationsModel = new DestinationsModel;
const pointsPresenter = new PointsPresenter({ container: mainSection, pointsModel, offersModel, destinationsModel });
const headerPresenter = new HeaderPresenter(routeContainer);
const filters = generateFilters(pointsModel.points);

render(new FiltersView({filters}), filtersContainer);

headerPresenter.init();
pointsPresenter.init();
