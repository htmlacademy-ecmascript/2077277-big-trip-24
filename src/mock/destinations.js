import { getRandomInteger } from '../utils/common';

const MAX_RANDOM_INTEGER = 100;

const destinations = [
  {
    id: '1',
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger(MAX_RANDOM_INTEGER)}`,
        description: 'Chamonix parliament building'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger(MAX_RANDOM_INTEGER)}`,
        description: 'Chamonix parliament building'
      }
    ]
  },
  {
    id: '2',
    description: 'Amsterdam is the capital of the Netherlands, known for its complex network of canals, narrow houses with gabled roofs and rich artistic heritage.',
    name: 'Amsterdam',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger(MAX_RANDOM_INTEGER)}`,
        description: 'Amsterdam is the capital of the Netherlands'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger(MAX_RANDOM_INTEGER)}`,
        description: 'Chamonix parliament building'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger(MAX_RANDOM_INTEGER)}`,
        description: 'Chamonix parliament building'
      }
    ]
  },
  {
    id: '3',
    description: 'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva).',
    name: 'Geneva',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger(MAX_RANDOM_INTEGER)}`,
        description: 'Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc'
      },
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger(MAX_RANDOM_INTEGER)}`,
        description: 'Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc'
      }
    ]
  },
  {
    id: '4',
    description: '',
    name: 'Moscow',
    pictures: []
  },
  {
    id: '5',
    description: 'Rome is the capital of Italy, a huge multinational city with a history dating back almost three thousand years.',
    name: 'Rome',
    pictures: [
      {
        src: `https://loremflickr.com/248/152?random=${getRandomInteger(MAX_RANDOM_INTEGER)}`,
        description: 'Rome is the capital of Italy'
      }
    ]
  }
];

export { destinations };
