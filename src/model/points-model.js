import { createPoints } from '../mock/points';

const POINTS_NUMBER = 3;

export default class PointsModel {
  points = createPoints(POINTS_NUMBER);

  getPoints() {
    return this.points;
  }
}
