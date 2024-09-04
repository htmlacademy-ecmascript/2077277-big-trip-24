function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomInteger(max) {
  return Math.floor(0 + Math.random() * (max - 0));
}

export { getRandomArrayElement, getRandomInteger};
