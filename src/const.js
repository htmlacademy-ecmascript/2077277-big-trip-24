const POINTS_TYPES = ['taxi', 'flight', 'train', 'ship', 'check-in', 'sightseeing', 'bus', 'drive', 'restaurant'];
const IS_FAVORITE_TYPES = [0, 1];
const FILTERS_TYPES = ['everything', 'future', 'present', 'past'];
const SORTING_TYPES = ['day', 'event', 'time', 'price', 'offer'];
const TIME_NULL = '00';
const EmptyPhrase = {
  NO_POINTS: 'Click New Event to create your first point',
  NO_PAST_POINTS: 'There are no past events now',
  NO_PRESENT_POINTS: 'There are no present events now',
  NO_FUTURE_POINTS: 'There are no future events now',
};


export { POINTS_TYPES, IS_FAVORITE_TYPES, FILTERS_TYPES, SORTING_TYPES, TIME_NULL, EmptyPhrase };
