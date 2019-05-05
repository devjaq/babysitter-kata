'use strict';

const test = require('./script.js');
const assert = require('assert');


it('should calculate total charge', () => {
  assert.equal(test.calculateCharge('A', '5:00', '9:00'), 60);
  assert.equal(test.calculateCharge('B', '8:00', '2:00'), 64);
});