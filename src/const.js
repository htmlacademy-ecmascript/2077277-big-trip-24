const POINTS_TYPES = ['taxi', 'flight', 'train', 'ship', 'check-in', 'sightseeing',
  'bus', 'drive', 'restaurant'];

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
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.FUTURE]: 'There are no future events now'
};

const LOADING_MASSAGE = 'Loading...';
const FAILED_MASSAGE = 'Failed to load latest route information';

const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT',
  ERROR: 'ERROR'
};

const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
};

const AUTHORIZATION = 'Basic er88gh56ddw';
const END_POINT = 'https://24.objects.htmlacademy.pro/big-trip';

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

const EMPTY_PRICE = 0;
const DESTINATIONS_COUNT = 3;

export {
  POINTS_TYPES, FilterType, SortType, TIME_NULL, EmptyPhrase,
  Mode, enabledSortType, UpdateType, UserAction, Method, AUTHORIZATION, END_POINT,
  LOADING_MASSAGE, TimeLimit, FAILED_MASSAGE, EMPTY_PRICE, DESTINATIONS_COUNT
};
