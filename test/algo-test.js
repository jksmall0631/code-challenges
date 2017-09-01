const assert = require("assert");
const {
  time,
  highAndLow,
  highAndLowDos,
  bubbleSort,
  readNumber,
  isPalindrome,
  isPalindromeDos,
  filterLucky,
  charFreq,
  longestIncrSubArray,
  formidableSeries
} = require("../lib/algo.js");

describe("tests", function() {
  it("returns the formatted number", () => {
    assert.deepEqual(time(0), "00:00:00");
    assert.deepEqual(time(59), "00:00:59");
    assert.deepEqual(time(60), "00:01:00");
    assert.deepEqual(time(90), "00:01:30");
    assert.deepEqual(time(3599), "00:59:59");
    assert.deepEqual(time(3600), "01:00:00");
    assert.deepEqual(time(45296), "12:34:56");
    assert.deepEqual(time(86399), "23:59:59");
    assert.deepEqual(time(86400), "24:00:00");
    assert.deepEqual(time(359999), "99:59:59");
  });

  it("returns the highest and lowest number from a string of numbers as a string", () => {
    assert.deepEqual(
      highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"),
      "542 -214"
    );
    assert.deepEqual(highAndLow("6500 -72 -87 5609 789 34 -723"), "6500 -723");
    assert.deepEqual(highAndLow("0.43 0.432 0 0.53"), "0.53 0");
    assert.deepEqual(highAndLow("-0.43 0.432 0 -0.53"), "0.432 -0.53");
  });

  it("returns the highest and lowest number from a string of numbers as a string", () => {
    assert.deepEqual(
      highAndLowDos("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"),
      "542 -214"
    );
    assert.deepEqual(
      highAndLowDos("6500 -72 -87 5609 789 34 -723"),
      "6500 -723"
    );
    assert.deepEqual(highAndLowDos("0.43 0.432 0 0.53"), "0.53 0");
    assert.deepEqual(highAndLowDos("-0.43 0.432 0 -0.53"), "0.432 -0.53");
  });

  it("sorts an array of numbers", () => {
    assert.deepEqual(bubbleSort([5, 89, 4, 34, 2]), [2, 4, 5, 34, 89]);
    assert.deepEqual(bubbleSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5]);
    assert.deepEqual(
      bubbleSort([4, 5, 29, 54, 4, 0, -214, 542, -64, 1, -3, 6, -6]),
      [-214, -64, -6, -3, 0, 1, 4, 4, 5, 6, 29, 54, 542]
    );
  });

  it("returns the string version of any number", () => {
    assert.deepEqual(readNumber(200), "two hundred ");
    assert.deepEqual(readNumber(2), "two");
    assert.deepEqual(
      readNumber(2357),
      "two thousand, three hundred fifty-seven"
    );
    assert.deepEqual(readNumber(3212), "three thousand, two hundred twelve");
    assert.deepEqual(
      readNumber(54321),
      "fifty-four thousand, three hundred twenty-one"
    );
    assert.deepEqual(
      readNumber(5.231),
      "five and two hundred thirty-one thousandths"
    );
    assert.deepEqual(readNumber(5.2), "five and two tenths");
    assert.deepEqual(readNumber(5.23), "five and twenty-three hundredths");
  });

  it("returns true if the input word is a palindrome", () => {
    assert.deepEqual(isPalindrome("dood"), true);
    assert.deepEqual(isPalindrome("true"), false);
    assert.deepEqual(isPalindrome(1001), true);
    assert.deepEqual(isPalindrome(1002), false);
    assert.deepEqual(isPalindrome("!!"), true);
  });

  it("returns true if the input word is a palindrome", () => {
    assert.deepEqual(isPalindromeDos("dood"), true);
    assert.deepEqual(isPalindromeDos("true"), false);
    assert.deepEqual(isPalindromeDos(1001), true);
    assert.deepEqual(isPalindromeDos(1002), false);
    assert.deepEqual(isPalindromeDos("!!"), true);
  });

  it("returns an array of numbers that include the lucky number", () => {
    assert.deepEqual(filterLucky([94, 82, 5, 93, 74, 03]), [74]);
    assert.deepEqual(filterLucky([92387, 6262626, 058, 0.87, 0.93, 90]), [
      92387,
      0.87
    ]);
  });

  it("returns an object with the frequency of a letter in a given sentence", () => {
    assert.deepEqual(charFreq("blA"), { "b": 1, "l": 1, "a": 1 });
    assert.deepEqual(charFreq(""), {});
    assert.deepEqual(charFreq("&&&   "), {});
    assert.deepEqual(charFreq("aaa "), { "a": 3 });
    assert.deepEqual(charFreq("293874289374(&(*&(*&(*&       b)))) "), { "b": 1 });
  });

  it("returns an array with the longest section of incrementing numbers in the given array", () => {
    assert.deepEqual(longestIncrSubArray([3, 4, 7, 1, 2, 3]), [3, 4, 7]);
    assert.deepEqual(longestIncrSubArray([9, 4, 4, 3, 6, 3, 7, 8, 9, 100]), [3, 7, 8, 9, 100]);
    assert.deepEqual(longestIncrSubArray([-7, 5, 4, 2, 5, -5, 56]), [-7, 5]);
    assert.deepEqual(longestIncrSubArray([-7]), []);
    assert.deepEqual(longestIncrSubArray([4, 4, 4, 4]), [4]);
    assert.deepEqual(longestIncrSubArray([-7, -8, -9, -10]), [-7]);
  });

  it("returns an array replacing certain numbers with Formidable/Labs/FormidableLabs", () => {
    assert.deepEqual(formidableSeries(12, 20), ["Formidable", 13, 14, "FormidableLabs", 16, 17, "Formidable", 19, "Labs"]);
    assert.deepEqual(formidableSeries(-72, -60), ["Formidable", -71, "Labs", "Formidable", -68, -67, "Formidable", "Labs", -64, "Formidable", -62, -61, "FormidableLabs"]);
    assert.deepEqual(formidableSeries(1, 2), [1, 2]);
    assert.deepEqual(formidableSeries(), []);
  });
});
