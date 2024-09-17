import SortingView from './view/sorting-view';
import FiltersView from './view/filters-view';
import MainPresenter from './presenter/main-presenter';
import HeaderPresenter from './presenter/header-presenter';
import { render } from './framework/render';
import PointsModel from './model/points-model';
import { generateFilters } from './mock/filters';

const main = document.querySelector('.page-body__page-main');
const mainSection = main.querySelector('.trip-events');
const header = document.querySelector('.page-header');
const filtersContainer = header.querySelector('.trip-controls__filters');
const routeContainer = header.querySelector('.trip-main');

const pointsModel = new PointsModel;
const mainPresenter = new MainPresenter({ container: mainSection, pointsModel });
const headerPresenter = new HeaderPresenter(routeContainer);
const filters = generateFilters(pointsModel.points);

render(new SortingView, mainSection);
render(new FiltersView({filters}), filtersContainer);

headerPresenter.init();
mainPresenter.init();
