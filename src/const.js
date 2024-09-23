const POINTS_TYPES = ['taxi', 'flight', 'train', 'ship', 'check-in', 'sightseeing',
  'bus', 'drive', 'restaurant'];
const IS_FAVORITE_TYPES = [0, 1];
const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PRESENT: 'present',
  PAST: 'past',
};
const SortType = {
  DAY: 'day',
  EVENT: 'event',
  TIME: 'time',
  PRICE: 'price',
  OFFERS: 'offers'
};
const enabledSortType = {
  [SortType.DAY]: true,
  [SortType.EVENT]: false,
  [SortType.TIME]: true,
  [SortType.PRICE]: true,
  [SortType.OFFERS]: false,
};
const TIME_NULL = '00';
const EmptyPhrase = {
  NO_POINTS: 'Click New Event to create your first point',
  NO_PAST_POINTS: 'There are no past events now',
  NO_PRESENT_POINTS: 'There are no present events now',
  NO_FUTURE_POINTS: 'There are no future events now',
};
const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};


export {
  POINTS_TYPES, IS_FAVORITE_TYPES, FilterType, SortType, TIME_NULL, EmptyPhrase,
  Mode, enabledSortType
};
