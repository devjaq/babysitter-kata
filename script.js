'use strict';

// GOAL: calculate nightly charge for babysitter

// TODO: return pre-bedtime hourly charge based on which family was input

const calculateCharge = (input) => {
  if(input === 'A') {
    return 15;
  } else if(input === 'B') {
    return 12;
  }
  return input;
}

module.exports = {
  calculateCharge
};
