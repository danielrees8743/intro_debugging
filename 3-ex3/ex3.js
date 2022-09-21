const characters = require('../data/harry_potter/characters.json');
const solution = require('../solutions/solution3');
// Present all characters that
// their ancestry is half-blood
// and their gender is not male

// TIP: should be only 6 characters

const halfBloodNotMales = characters.filter((character) => {
  if (character.ancestry === 'half-blood') {
    if (character.gender !== 'male') {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
});

console.log(
  'Exercie 3 passed: ',
  JSON.stringify(halfBloodNotMales) === JSON.stringify(solution)
);
