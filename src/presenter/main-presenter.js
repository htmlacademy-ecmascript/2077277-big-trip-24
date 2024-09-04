import PointsListView from '../view/points-list-view';
import PointsView from '../view/points-view';
import EditFormView from '../view/edit-form-view';
import AddFormView from '../view/add-form-view';
import { render, RenderPosition } from '../render';

export default class MainPresenter {
  pointsListView = new PointsListView();

  constructor(container, model) {
    this.container = container;
    this.model = model;
  }

  init() {
    this.points = [...this.model.getPoints()];
    render(this.pointsListView, this.container);
    render(new AddFormView, this.pointsListView.getElement(), RenderPosition.AFTERBEGIN);
    render(new EditFormView, this.pointsListView.getElement(), RenderPosition.AFTERBEGIN);
    for (let i = 0; i < this.points.length; i++) {
      render(new PointsView(this.points[i]), this.pointsListView.getElement());
    }
  }
}
