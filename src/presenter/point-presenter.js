import PointsView from '../view/points-view';
import FormEditView from '../view/form-edit-view';
import { render, replace } from '../framework/render';

export default class PointPresenter {
  #pointsListComponent = null;
  #pointComponent = null;
  #formEditComponent = null;
  #point = null;

  #offersModel = [];
  #destinationsModel = [];

  constructor({ pointsListComponent, destinationsModel, offersModel }) {
    this.#pointsListComponent = pointsListComponent;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
  }

  init(point) {
    this.#point = point;

    this.#pointComponent = new PointsView({
      point: this.#point,
      destination: this.#destinationsModel.getDestinationsById(point.destination),
      offers: this.#offersModel.getOffersById(point.type, point.offers),
      onOpenEditButtonClick: this.#onOpenEditButtonClick

    });

    this.#formEditComponent = new FormEditView({
      point: this.#point,
      destination: this.#destinationsModel.getDestinationsById(point.destination),
      allDestinations: this.#destinationsModel.destinations,
      allOffers: this.#offersModel.getOffersByType(point.type),
      onCloseEditButtonClick: this.#onCloseEditButtonClick,
      onSubmitButtonClick: this.#onSubmitButtonClick
    });

    render(this.#pointComponent, this.#pointsListComponent);
  }

  #replacePointToFormEdit() {
    replace(this.#formEditComponent, this.#pointComponent);
  }

  #replaceFormEditToPoint() {
    replace(this.#pointComponent, this.#formEditComponent);
  }

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape') {
      evt.preventDefault();
      this.#replaceFormEditToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #onOpenEditButtonClick = () => {
    this.#replacePointToFormEdit();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #onCloseEditButtonClick = () => {
    this.#replaceFormEditToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #onSubmitButtonClick = () => {
    this.#replaceFormEditToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };
}
