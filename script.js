'use strict';

// GOAL: calculate nightly charge for babysitter

// TODO: return correct total (first price-tier based) charge based on input of family and number of hours

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

// TODO: return hours worked
const calculateHours = (start, end) => {
  return end[0] - start[0];
}

module.exports = {
  calculateCharge, calculateHours
};