
const assert = require('chai').assert;
const { time, highAndLow, readNumber } = require('../lib/algo.js');

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

  it('returns the highest and lowest number from a string of numbers as a string', () => {
    assert.deepEqual(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'), '542 -214')
    assert.deepEqual(highAndLow('6500 -72 -87 5609 789 34 -723'), '6500 -723')
  })

  it('returns the string version of any number', () => {
    assert.deepEqual(readNumber(200), 'two hundred ')
    assert.deepEqual(readNumber(2), 'two')
    assert.deepEqual(readNumber(2357), 'two thousand, three hundred fifty-seven')
    assert.deepEqual(readNumber(3212), 'three thousand, two hundred twelve')
    assert.deepEqual(readNumber(54321), 'fifty-four thousand, three hundred twenty-one')
  })

});
