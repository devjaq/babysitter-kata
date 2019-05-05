'use strict';

const test = require('./script.js');
const assert = require('assert');


  it('should return 1', () => {
    assert.equal(test.answer(), 1);
  });
