'use strict';

const test = require('./script.js');
const assert = require('assert');


it('should return 1', () => {
  assert.equal(test.calculateCharge(1), 1);
});

it('should return input', () => {
  assert.equal(test.calculateCharge(2), 2);
});

it('should return correct pre-bedtime hourly charge for family that is input', () => {
  assert.equal(test.calculateCharge('A', 1), 15);
  assert.equal(test.calculateCharge('B', 1), 12);
  assert.equal(test.calculateCharge('C', 1), 21);
});

it('should calculate correct total (first price-tier based) charge based on input of family and number of hours', () => {
  assert.equal(test.calculateCharge('A', 2), 30);
  assert.equal(test.calculateCharge('B', 4), 48);
  assert.equal(test.calculateCharge('C', 3), 63);
});