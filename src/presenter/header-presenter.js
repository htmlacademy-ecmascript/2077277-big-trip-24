import RouteView from '../view/route-view';
import { render, RenderPosition } from '../framework/render';

export default class HeaderPresenter {
  constructor(container) {
    this.container = container;
  }

  init() {
    render(new RouteView, this.container, RenderPosition.AFTERBEGIN);
  }
}
