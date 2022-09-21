const characters = require('../data/harry_potter/characters.json');
const solution = require('../solutions/solution1');

// present all character from the house Gryffindor
const gryffindors = characters.filter(
  (character) => character.house === 'Gryffindor'
);

console.log(
  'Exercie 1 passed: ',
  JSON.stringify(gryffindors) === JSON.stringify(solution)
);
