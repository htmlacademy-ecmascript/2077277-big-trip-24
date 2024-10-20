import { render, RenderPosition, remove } from '../framework/render';
import { UserAction, UpdateType, EmptyPhrase, FilterType} from '../const';
import FormEditView from '../view/form-edit-view';
import PointsEmptyView from '../view/points-empty-view';

export default class NewPointPresenter {
  #pointListContainer = null;
  #handleDataChange = null;
  #handleDestroy = null;
  #destinationsModel = null;
  #offersModel = null;
  #pointsEmptyList = null;
  #container = null;
  #pointsModel = null;

  #pointAddComponent = null;

  constructor({ pointListContainer, onDataChange, onDestroy, destinationsModel, offersModel, container, pointsModel }) {
    this.#pointListContainer = pointListContainer;
    this.#handleDataChange = onDataChange;
    this.#handleDestroy = onDestroy;
    this.#destinationsModel = destinationsModel;
    this.#offersModel = offersModel;
    this.#container = container;
    this.#pointsModel = pointsModel;
  }

  init() {
    if (this.#pointAddComponent !== null) {
      return;
    }

    const newPointTypeOffer = this.#offersModel.getOffersByType('flight');

    this.#pointAddComponent = new FormEditView({
      onSubmitButtonClick: this.#handleFormSubmit,
      onDeleteClick: this.#handleDeleteClick,
      allDestinations: this.#destinationsModel.destinations,
      allOffers: this.#offersModel.offers,
      typeOffer: newPointTypeOffer,
      isNewPoint: true
    });

    render(this.#pointAddComponent, this.#pointListContainer, RenderPosition.AFTERBEGIN);
    if (this.#pointsEmptyList) {
      remove(this.#pointsEmptyList);
    }

    document.addEventListener('keydown', this.#escKeyDownHandler);
  }

  destroy() {
    if (this.#pointAddComponent === null) {
      return;
    }

    this.#handleDestroy();

    remove(this.#pointAddComponent);
    this.#pointAddComponent = null;

    document.removeEventListener('keydown', this.#escKeyDownHandler);
  }

  setSaving() {
    this.#pointAddComponent.updateElement({
      isDisabled: true,
      isSaving: true,
    });
  }

  setAborting() {
    const resetFormState = () => {
      this.#pointAddComponent.updateElement({
        isDisabled: false,
        isSaving: false,
        isDeleting: false,
      });
    };

    this.#pointAddComponent.shake(resetFormState);
  }

  #handleFormSubmit = (point) => {
    this.#handleDataChange(
      UserAction.ADD_POINT,
      UpdateType.MINOR,
      point,
    );
  };

  #handleDeleteClick = () => {
    this.destroy();
    this.#renderPointsEmptyList();
  };

  #escKeyDownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.destroy();
      this.#renderPointsEmptyList();
    }
  };

  #renderPointsEmptyList() {
    if(!this.#pointsModel.points.length) {
      this.#pointsEmptyList = new PointsEmptyView({ message: EmptyPhrase[FilterType.EVERYTHING] });
      render(this.#pointsEmptyList, this.#container);
    }
  }
}
