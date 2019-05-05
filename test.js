'use strict';

const test = require('./script.js');
const assert = require('assert');

it('should return correct hourly charge (based on 5:00) for the family that is input', () => {
  assert.equal(test.calculateCharge('A', 1), 15);
  assert.equal(test.calculateCharge('B', 1), 12);
  assert.equal(test.calculateCharge('C', 1), 21);
});

it('should calculate correct total (based on 5:00) charge based on input of family and number of hours', () => {
  assert.equal(test.calculateCharge('A', 2), 30);
  assert.equal(test.calculateCharge('B', 4), 48);
  assert.equal(test.calculateCharge('C', 3), 63);
});

it('should calculate number of hours worked', () => {
  assert.equal(test.calculateHours('A', '5:00', '9:00'), 4);
  assert.equal(test.calculateHours('B', '8:00', '2:00'), 6);
});

it('should calculate total charge', () => {
  assert.equal(test.calculateHours('A', '5:00', '9:00'), 4);
  assert.equal(test.calculateHours('B', '8:00', '2:00'), 6);
});