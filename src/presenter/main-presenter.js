import PointsListView from '../view/points-list-view';
import PointsView from '../view/points-view';
import EditFormView from '../view/edit-form-view';
import AddFormView from '../view/add-form-view';
import { render, RenderPosition } from '../render';

const POINTS_NUMBER = 3;

export default class MainPresenter {
  pointsListView = new PointsListView();

  constructor(container) {
    this.container = container;
  }

  init() {
    render(this.pointsListView, this.container);
    render(new AddFormView, this.pointsListView.getElement(), RenderPosition.AFTERBEGIN);
    render(new EditFormView, this.pointsListView.getElement(), RenderPosition.AFTERBEGIN);
    for (let i = 0; i < POINTS_NUMBER; i++) {
      render(new PointsView, this.pointsListView.getElement());
    }
  }
}
