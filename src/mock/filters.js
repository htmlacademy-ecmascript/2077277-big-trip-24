import { filter } from '../utils/filter';

function generateFilters(points) {
  return Object.entries(filter).map(([filterType, filterPatternByType]) => (
    {
      type: filterType,
      count: filterPatternByType(points).length,
    }));
}

export { generateFilters };
