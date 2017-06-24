
const assert = require('chai').assert;
const { time, highAndLow, highAndLowDos, bubbleSort, readNumber, isPalindrome, isPalindromeDos } = require('../lib/algo.js');

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
    assert.deepEqual(highAndLow('0.43 0.432 0 0.53'), '0.53 0')
    assert.deepEqual(highAndLow('-0.43 0.432 0 -0.53'), '0.432 -0.53')
  })

  it('returns the highest and lowest number from a string of numbers as a string', () => {
    assert.deepEqual(highAndLowDos('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'), '542 -214')
    assert.deepEqual(highAndLowDos('6500 -72 -87 5609 789 34 -723'), '6500 -723')
    assert.deepEqual(highAndLowDos('0.43 0.432 0 0.53'), '0.53 0')
    assert.deepEqual(highAndLowDos('-0.43 0.432 0 -0.53'), '0.432 -0.53')
  })

  it('sorts an array of numbers', () => {
    assert.deepEqual(bubbleSort([5, 89, 4, 34, 2]), [2, 4, 5, 34, 89])
    assert.deepEqual(bubbleSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])
    assert.deepEqual(bubbleSort([4, 5, 29, 54, 4, 0, -214, 542, -64, 1, -3, 6, -6]), [-214, -64, -6, -3, 0, 1, 4, 4, 5, 6, 29, 54, 542])
  })

  it('returns the string version of any number', () => {
    assert.deepEqual(readNumber(200), 'two hundred ')
    assert.deepEqual(readNumber(2), 'two')
    assert.deepEqual(readNumber(2357), 'two thousand, three hundred fifty-seven')
    assert.deepEqual(readNumber(3212), 'three thousand, two hundred twelve')
    assert.deepEqual(readNumber(54321), 'fifty-four thousand, three hundred twenty-one')
    assert.deepEqual(readNumber(5.231), 'five and two hundred thirty-one thousandths')
    assert.deepEqual(readNumber(5.2), 'five and two tenths')
    assert.deepEqual(readNumber(5.23), 'five and twenty-three hundredths')
  })

  it('returns true if the input word is a palindrome', () => {
    assert.deepEqual(isPalindrome('dood'), true)
    assert.deepEqual(isPalindrome('true'), false)
    assert.deepEqual(isPalindrome(1001), true)
    assert.deepEqual(isPalindrome(1002), false)
    assert.deepEqual(isPalindrome('!!'), true)
  })

  it('returns true if the input word is a palindrome', () => {
    assert.deepEqual(isPalindromeDos('dood'), true)
    assert.deepEqual(isPalindromeDos('true'), false)
    assert.deepEqual(isPalindromeDos(1001), true)
    assert.deepEqual(isPalindromeDos(1002), false)
    assert.deepEqual(isPalindromeDos('!!'), true)
  })

});
