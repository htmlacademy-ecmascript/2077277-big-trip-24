import PointsListView from '../view/points-list-view';
import PointsView from '../view/points-view';
import EditFormView from '../view/edit-form-view';
// import AddFormView from '../view/add-form-view';
import { render, RenderPosition } from '../framework/render';

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

    render(this.#pointsListView, this.#container);
    //форму добавления точки пока скрыла, так как в задании пока указано только про форму
    // render(new AddFormView, this.pointsListView.element, RenderPosition.AFTERBEGIN);

    const EditForm = new EditFormView({
      point: this.#pointsList[0],
      destination: this.#model.getDestinationsById(this.#pointsList[0].destination),
      allDestinations: this.#model.destinations,
      allOffers: this.#model.getOffersByType(this.#pointsList[0].type),
    });

    render(EditForm, this.#pointsListView.element, RenderPosition.AFTERBEGIN);

    for (let i = 1; i < this.#pointsList.length; i++) {
      const point = new PointsView({
        point: this.#pointsList[i],
        destination: this.#model.getDestinationsById(this.#pointsList[i].destination),
        offers: this.#model.getOffersById(this.#pointsList[i].type, this.#pointsList[i].offers),
      });

      render(point, this.#pointsListView.element);
    }
  }
}
