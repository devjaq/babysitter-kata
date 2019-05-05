'use strict';

const test = require('./script.js');
const assert = require('assert');


it('should return 1', () => {
  assert.equal(test.calculateCharge(1), 1);
});

it('should return input', () => {
  assert.equal(test.calculateCharge(2), 2);
});

it('should return 15 when A is input', () => {
  assert.equal(test.calculateCharge('A'), 15)
});