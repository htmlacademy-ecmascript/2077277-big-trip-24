const POINTS_TYPES = ['taxi', 'flight', 'train', 'ship', 'check-in', 'sightseeing',
  'bus', 'drive', 'restaurant'];
const AUTHORIZATION = 'Basic er88gh56ddw';
const END_POINT = 'https://24.objects.htmlacademy.pro/big-trip';
const EMPTY_PRICE = 0;
const DESTINATIONS_COUNT = 3;

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

const EnabledSortType = {
  [SortType.DAY]: true,
  [SortType.EVENT]: false,
  [SortType.TIME]: true,
  [SortType.PRICE]: true,
  [SortType.OFFERS]: false,
};

const EmptyPhrase = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.PRESENT]: 'There are no present events now',
  [FilterType.FUTURE]: 'There are no future events now'
};

const Feedback = {
  LOADING_MASSAGE: 'Loading...',
  FAILED_MASSAGE: 'Failed to load latest route information',
};

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

const TimeLimit = {
  LOWER_LIMIT: 350,
  UPPER_LIMIT: 1000,
};

export {
  POINTS_TYPES, FilterType, SortType, EmptyPhrase,
  Mode, EnabledSortType, UpdateType, UserAction, Method, AUTHORIZATION, END_POINT,
  Feedback, TimeLimit, EMPTY_PRICE, DESTINATIONS_COUNT
};
