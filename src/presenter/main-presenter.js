import PointsListView from '../view/points-list-view';
import PointsView from '../view/points-view';
import EditFormView from '../view/edit-form-view';
// import AddFormView from '../view/add-form-view';
import { render } from '../framework/render';
import { replace } from '../framework/render';

export default class MainPresenter {
  #container = null;
  #model = null;
  #pointsListView = new PointsListView();
  #pointsList = [];

  constructor({ container, pointsModel }) {
    this.#container = container;
    this.#model = pointsModel;
  }

  init() {
    this.#pointsList = [...this.#model.points];
    this.#renderPointsList();
  }

  #renderPointsList() {
    render(this.#pointsListView, this.#container);
    //форму добавления точки пока скрыла, так как в задании пока указано только про форму
    // render(new AddFormView, this.pointsListView.element, RenderPosition.AFTERBEGIN);

    for (let i = 1; i < this.#pointsList.length; i++) {
      this.#renderPoints(this.#pointsList[i]);
    }
  }

  #renderPoints(pointsList) {

    function escKeyDownHandler(evt) {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        replaceEditFormToPoint();
        document.removeEventListener('keydown', escKeyDownHandler);
      }
    }

    function onOpenEditButtonClick() {
      replacePointToEditForm();
      document.addEventListener('keydown', escKeyDownHandler);
    }

    function onCloseEditButtonClick() {
      replaceEditFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    function onSubmitButtonClick() {
      replaceEditFormToPoint();
      document.removeEventListener('keydown', escKeyDownHandler);
    }

    const editFormComponent = new EditFormView({
      point: this.#pointsList[0],
      destination: this.#model.getDestinationsById(this.#pointsList[0].destination),
      allDestinations: this.#model.destinations,
      allOffers: this.#model.getOffersByType(this.#pointsList[0].type),
      onCloseEditButtonClick,
      onSubmitButtonClick
    });

    const pointComponent = new PointsView({
      point: pointsList,
      destination: this.#model.getDestinationsById(pointsList.destination),
      offers: this.#model.getOffersById(pointsList.type, pointsList.offers),
      onOpenEditButtonClick
    });

    function replacePointToEditForm() {
      replace(editFormComponent, pointComponent);
    }

    function replaceEditFormToPoint() {
      replace(pointComponent, editFormComponent);
    }

    render(pointComponent, this.#pointsListView.element);
  }
}
