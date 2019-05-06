'use strict';

const test = require('./script.js');
const assert = require('assert');


it('should calculate total charge', () => {
  assert.equal(test.calculateCharge('A', '5:00 PM', '9:00 PM'), 60);
  assert.equal(test.calculateCharge('B', '8:00 PM', '2:00 AM'), 64);
});

it('should not allow incorrect times', () => {
  assert.equal(test.calculateCharge('A', '9:00 PM', '5:00 PM'), "please double check your start and end times and try again");
});