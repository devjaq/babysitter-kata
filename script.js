'use strict';

// GOAL: calculate nightly charge for babysitter

// TODO: return correct pre-bedtime hourly charge for family that is input

const calculateCharge = (family, hours) => {
  if(family === 'A') {
    return 15 * hours;
  } else if(family === 'B') {
    return 12 * hours;
  } else if(family === 'C') {
    return 21 * hours;
  }
  return family;
}

module.exports = {
  calculateCharge
};
