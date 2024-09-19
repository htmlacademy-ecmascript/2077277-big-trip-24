import PointsListView from '../view/points-list-view';
import PointsView from '../view/points-view';
import FormEditView from '../view/form-edit-view';
import PointsEmptyView from '../view/points-empty-view';
// import FormAddView from '../view/form-add-view';
import { render } from '../framework/render';
import { replace } from '../framework/render';
import { EmptyPhrase } from '../const';

export default class MainPresenter {
  #container = null;
  #pointsModel = null;
  #pointsListView = new PointsListView();
  #pointsList = [];
  #offersModel = [];
  #destinationsModel = [];

  constructor({ container, pointsModel, offersModel, destinationsModel }) {
    this.#container = container;
    this.#pointsModel = pointsModel;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
  }

  init() {
    this.#pointsList = [...this.#pointsModel.points];
    if (this.#pointsList.length !== 0) {
      this.#renderPointsList();
      return;
    }
    render(new PointsEmptyView({ message: EmptyPhrase.NO_FUTURE_POINTS }), this.#container);
  }

  #renderPointsList() {
    render(this.#pointsListView, this.#container);
    //форму добавления точки пока скрыла, так как в задании пока указано только про форму
    // render(new FormAddView, this.pointsListView.element, RenderPosition.AFTERBEGIN);

    for (let i = 0; i < this.#pointsList.length; i++) {
      this.#renderPoints(this.#pointsList[i]);
    }
  }

  #renderPoints(pointsList) {

    function escKeyDownHandler(evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceFormEditToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    }

    function onOpenEditButtonClick() {
      replacePointToFormEdit();
      document.addEventListener('keydown', escKeyDownHandler);
    }

    function onCloseEditButtonClick() {
      replaceFormEditToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    function onSubmitButtonClick() {
      replaceFormEditToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    const formEditComponent = new FormEditView({
      point: this.#pointsList[0],
      destination: this.#destinationsModel.getDestinationsById(this.#pointsList[0].destination),
      allDestinations: this.#destinationsModel.destinations,
      allOffers: this.#offersModel.getOffersByType(this.#pointsList[0].type),
      onCloseEditButtonClick,
      onSubmitButtonClick
    });

    const pointComponent = new PointsView({
      point: pointsList,
      destination: this.#destinationsModel.getDestinationsById(pointsList.destination),
      offers: this.#offersModel.getOffersById(pointsList.type, pointsList.offers),
      onOpenEditButtonClick
    });

    function replacePointToFormEdit() {
      replace(formEditComponent, pointComponent);
    }

    function replaceFormEditToPoint() {
      replace(pointComponent, formEditComponent);
    }

    render(pointComponent, this.#pointsListView.element);
  }
}
