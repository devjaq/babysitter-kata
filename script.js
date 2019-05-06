'use strict';

// GOAL: calculate nightly charge for babysitter

const A = [
  { "time": "5:00 PM", "charge": 15 },
  { "time": "6:00 PM", "charge": 15 },
  { "time": "7:00 PM", "charge": 15 },
  { "time": "8:00 PM", "charge": 15 },
  { "time": "9:00 PM", "charge": 15 },
  { "time": "10:00 PM", "charge": 15 },
  { "time": "11:00 PM", "charge": 20 },
  { "time": "12:00 AM", "charge": 20 },
  { "time": "1:00 AM", "charge": 20 },
  { "time": "2:00 AM", "charge": 20 },
  { "time": "3:00 AM", "charge": 20 },
  { "time": "4:00 AM", "charge": 20 },
];

const B = [
  { "time": "5:00 PM", "charge": 12 },
  { "time": "6:00 PM", "charge": 12 },
  { "time": "7:00 PM", "charge": 12 },
  { "time": "8:00 PM", "charge": 12 },
  { "time": "9:00 PM", "charge": 12 },
  { "time": "10:00 PM", "charge": 8 },
  { "time": "11:00 PM", "charge": 8 },
  { "time": "12:00 AM", "charge": 8 },
  { "time": "1:00 AM", "charge": 16 },
  { "time": "2:00 AM", "charge": 16 },
  { "time": "3:00 AM", "charge": 16 },
  { "time": "4:00 AM", "charge": 16 },
];

const C = [
  { "time": "5:00 PM", "charge": 21 },
  { "time": "6:00 PM", "charge": 21 },
  { "time": "7:00 PM", "charge": 21 },
  { "time": "8:00 PM", "charge": 21 },
  { "time": "9:00 PM", "charge": 15 },
  { "time": "10:00 PM", "charge": 15 },
  { "time": "11:00 PM", "charge": 15 },
  { "time": "12:00 AM", "charge": 15 },
  { "time": "1:00 AM", "charge": 15 },
  { "time": "2:00 AM", "charge": 15 },
  { "time": "3:00 AM", "charge": 15 },
  { "time": "4:00 AM", "charge": 15 },
];
let family;

// TODO: return charge for hours worked
const calculateCharge = (familyInput, start, end) => {
  family = processFamilyInput(familyInput);

  let totalCharge = 0;
  for (let i = 0; i < family.length; i++) {
    if (family[i].time === start) {
      let startTime = family[i].time;
      for (let j = i; j < family.length; j++) {
        if (family[j].time === end) {
          return totalCharge;
        } else {
          totalCharge += family[j].charge;
        }
      }
    }
  }
}

const processFamilyInput = (familyInput) => {
  if (familyInput === 'A') {
    family = A;
  } else if (familyInput === 'B') {
    family = B;
  } else if (familyInput === 'C') {
    family = C;
  }
  return family;
};

module.exports = {
  calculateCharge
};