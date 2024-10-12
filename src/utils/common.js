
function getRandomInteger(max, min = 0) {
  return Math.floor(min + Math.random() * (max - min));
}

export { getRandomInteger };
