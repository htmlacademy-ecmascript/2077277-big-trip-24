import PointsView from '../view/points-view';
import FormEditView from '../view/form-edit-view';
import { render, replace, remove } from '../framework/render';
import { Mode, UpdateType, UserAction } from '../const';

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
      typeOffer: this.#offersModel.getOffersByType(point.type),
      allOffers: this.#offersModel.offers,
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
      this.#formEditComponent.reset(this.#point);
      this.#replaceFormEditToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
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
      this.#formEditComponent.reset(this.#point);
      this.#replaceFormEditToPoint();
      document.removeEventListener('keydown', this.#escKeyDownHandler);
    }
  };

  #onOpenEditButtonClick = () => {
    this.#replacePointToFormEdit();
    document.addEventListener('keydown', this.#escKeyDownHandler);
  };

  #onCloseEditButtonClick = () => {
    this.#formEditComponent.reset(this.#point);
    this.#replaceFormEditToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #onSubmitButtonClick = () => {
    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      UpdateType.MINOR, this.#point);
    this.#replaceFormEditToPoint();
    document.removeEventListener('keydown', this.#escKeyDownHandler);
  };

  #onFavoriteClick = () => {
    this.#handleDataChange(
      UserAction.UPDATE_POINT,
      UpdateType.MINOR,
      {...this.#point, isFavorite: !this.#point.isFavorite});
  };
}
