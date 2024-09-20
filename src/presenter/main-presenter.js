import PointsListView from '../view/points-list-view';
import PointsEmptyView from '../view/points-empty-view';
// import FormAddView from '../view/form-add-view';
import { render } from '../framework/render';
import { EmptyPhrase } from '../const';
import PointPresenter from './point-presenter';

export default class MainPresenter {
  #container = null;
  #pointsModel = null;
  #pointsList = new PointsListView();
  #points = [];
  #offersModel = [];
  #destinationsModel = [];

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

    this.#renderPointsList();
  }

  #renderPointsEmptyList() {
    render(new PointsEmptyView({ message: EmptyPhrase.NO_FUTURE_POINTS }), this.#container);
  }

  #renderPointsList() {
    //форму добавления точки пока скрыла, так как в задании пока указано только про форму
    // render(new FormAddView, this.pointsListView.element, RenderPosition.AFTERBEGIN);
    render(this.#pointsList, this.#container);
    this.#renderPoints(this.#points);
  }

  #renderPoints() {
    this.#points.forEach((point) => {
      this.#renderPoint(point);
    });
  }

  #renderPoint(point) {
    const pointPresenter = new PointPresenter({
      pointsListComponent: this.#pointsList.element,
      destinationsModel: this.#destinationsModel,
      offersModel: this.#offersModel,
    });

    pointPresenter.init(point);
  }

  // #renderPoints(pointsList) {

  //   function escKeyDownHandler(evt) {
  //     if (evt.key === 'Escape') {
  //       evt.preventDefault();
  //       replaceFormEditToPoint();
  //       document.removeEventListener('keydown', escKeyDownHandler);
  //     }
  //   }

  //   function onOpenEditButtonClick() {
  //     replacePointToFormEdit();
  //     document.addEventListener('keydown', escKeyDownHandler);
  //   }

  //   function onCloseEditButtonClick() {
  //     replaceFormEditToPoint();
  //     document.removeEventListener('keydown', escKeyDownHandler);
  //   }

  //   function onSubmitButtonClick() {
  //     replaceFormEditToPoint();
  //     document.removeEventListener('keydown', escKeyDownHandler);
  //   }

  //   const formEditComponent = new FormEditView({
  //     point: this.#pointsList[0],
  //     destination: this.#destinationsModel.getDestinationsById(this.#pointsList[0].destination),
  //     allDestinations: this.#destinationsModel.destinations,
  //     allOffers: this.#offersModel.getOffersByType(this.#pointsList[0].type),
  //     onCloseEditButtonClick,
  //     onSubmitButtonClick
  //   });

  //   const pointComponent = new PointsView({
  //     point: pointsList,
  //     destination: this.#destinationsModel.getDestinationsById(pointsList.destination),
  //     offers: this.#offersModel.getOffersById(pointsList.type, pointsList.offers),
  //     onOpenEditButtonClick
  //   });

  //   function replacePointToFormEdit() {
  //     replace(formEditComponent, pointComponent);
  //   }

  //   function replaceFormEditToPoint() {
  //     replace(pointComponent, formEditComponent);
  //   }

  //   render(pointComponent, this.#pointsListView.element);
  // }
}
