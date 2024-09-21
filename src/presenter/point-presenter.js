import PointsView from '../view/points-view';
import FormEditView from '../view/form-edit-view';
import { render, replace, remove } from '../framework/render';
import { Mode } from '../const';

export default class PointPresenter {
  #pointsListComponent = null;
  #pointComponent = null;
  #formEditComponent = null;
  #point = null;
  #mode = Mode.DEFAULT;

  #offersModel = [];
  #destinationsModel = [];

  #handleDataChange = null;
  #handleModeChange = null;

  constructor({ pointsListComponent, destinationsModel, offersModel, onDataChange, onModeChange }) {
    this.#pointsListComponent = pointsListComponent;
    this.#offersModel = offersModel;
    this.#destinationsModel = destinationsModel;
    this.#handleDataChange = onDataChange;
    this.#handleModeChange = onModeChange;
  }

  init(point) {
    this.#point = point;

    const prevPointComponent = this.#pointComponent;
    const prevFormEditComponent = this.#formEditComponent;

    this.#pointComponent = new PointsView({
      point: this.#point,
      destination: this.#destinationsModel.getDestinationsById(point.destination),
      offers: this.#offersModel.getOffersById(point.type, point.offers),
      onOpenEditButtonClick: this.#onOpenEditButtonClick,
      onFavoriteClick: this.#onFavoriteClick

    });

    this.#formEditComponent = new FormEditView({
      point: this.#point,
      destination: this.#destinationsModel.getDestinationsById(point.destination),
      allDestinations: this.#destinationsModel.destinations,
      allOffers: this.#offersModel.getOffersByType(point.type),
      onCloseEditButtonClick: this.#onCloseEditButtonClick,
      onSubmitButtonClick: this.#onSubmitButtonClick
    });

    if (!prevPointComponent || !prevFormEditComponent) {
      render(this.#pointComponent, this.#pointsListComponent.element);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#pointComponent, prevPointComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#formEditComponent, prevFormEditComponent);
    }

    remove(prevPointComponent);
    remove(prevFormEditComponent);
  }

  destroy() {
    remove(this.#pointComponent);
    remove(this.#formEditComponent);
  }

  resetView() {
    if (this.#mode !== Mode.DEFAULT) {
      this.#replaceFormEditToPoint();
    }
  }

  #replacePointToFormEdit() {
    replace(this.#formEditComponent, this.#pointComponent);
    this.#handleModeChange();
    this.#mode = Mode.EDITING;
  }

  #replaceFormEditToPoint() {
    replace(this.#pointComponent, this.#formEditComponent);
    this.#mode = Mode.DEFAULT;
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
    this.#handleDataChange(this.#point);
    this.#replaceFormEditToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #onFavoriteClick = () => {
    this.#handleDataChange({...this.#point, isFavorite: !this.#point.isFavorite});
  };
}
