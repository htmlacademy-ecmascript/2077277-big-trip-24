import { createPoints } from '../mock/points';

const POINTS_NUMBER = 6;

export default class PointsModel {
  #points = createPoints(POINTS_NUMBER);

  get points() {
    return this.#points;
  }
}
