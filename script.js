'use strict';

// GOAL: calculate nightly charge for babysitter

const A = [
  { "time": "5:00", "charge": 15 },
  { "time": "6:00", "charge": 15 },
  { "time": "7:00", "charge": 15 },
  { "time": "8:00", "charge": 15 },
  { "time": "9:00", "charge": 15 },
  { "time": "10:00", "charge": 15 },
  { "time": "11:00", "charge": 20 },
  { "time": "12:00", "charge": 20 },
  { "time": "1:00", "charge": 20 },
  { "time": "2:00", "charge": 20 },
  { "time": "3:00", "charge": 20 },
  { "time": "4:00", "charge": 20 },
];

const B = [
  { "time": "5:00", "charge": 12 },
  { "time": "6:00", "charge": 12 },
  { "time": "7:00", "charge": 12 },
  { "time": "8:00", "charge": 12 },
  { "time": "9:00", "charge": 12 },
  { "time": "10:00", "charge": 8 },
  { "time": "11:00", "charge": 8 },
  { "time": "12:00", "charge": 8 },
  { "time": "1:00", "charge": 16 },
  { "time": "2:00", "charge": 16 },
  { "time": "3:00", "charge": 16 },
  { "time": "4:00", "charge": 16 },
];

const C = [
  { "time": "5:00", "charge": 21 },
  { "time": "6:00", "charge": 21 },
  { "time": "7:00", "charge": 21 },
  { "time": "8:00", "charge": 21 },
  { "time": "9:00", "charge": 15 },
  { "time": "10:00", "charge": 15 },
  { "time": "11:00", "charge": 15 },
  { "time": "12:00", "charge": 15 },
  { "time": "1:00", "charge": 15 },
  { "time": "2:00", "charge": 15 },
  { "time": "3:00", "charge": 15 },
  { "time": "4:00", "charge": 15 },
];

// TODO: return correct total (first price-tier based) charge based on input of family and number of hours

let family;
const calculateCharge = (familyInput, hours) => {
  if (familyInput === 'A') {
    family = A;
  } else if (familyInput === 'B') {
    family = B;
  } else if (familyInput === 'C') {
    family = C;
  }
  return family[0].charge * hours;
}

// TODO: return hours worked
const calculateHours = (familyInput, start, end) => {
  if (familyInput === 'A') {
    family = A;
  } else if (familyInput === 'B') {
    family = B;
  } else if (familyInput === 'C') {
    family = C;
  }
  let hoursCounter = 0;
  for (let i = 0; i < family.length; i++) {
    if (family[i].time === start) {
      let startTime = family[i].time;
      for (let j = i; j < family.length; j++) {
        if (family[j].time === end) {
          return hoursCounter;
        } else {
          hoursCounter += 1;
        }
      }
    }
  }
}

module.exports = {
  calculateCharge, calculateHours
};