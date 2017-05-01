
const assert = require('chai').assert;
const { time } = require('../lib/time.js');

describe('tests', function() {

  it('returns the formatted number', () => {
    assert.deepEqual(time(0), '00:00:00')
    assert.deepEqual(time(59), '00:00:59')
    assert.deepEqual(time(60), '00:01:00')
    assert.deepEqual(time(90), '00:01:30')
    assert.deepEqual(time(3599), '00:59:59')
    assert.deepEqual(time(3600), '01:00:00')
    assert.deepEqual(time(45296), '12:34:56')
    assert.deepEqual(time(86399), '23:59:59')
    assert.deepEqual(time(86400), '24:00:00')
    assert.deepEqual(time(359999), '99:59:59')
  })

});
