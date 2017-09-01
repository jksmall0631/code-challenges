function time(seconds) {
  let hours = parseInt(seconds / 3600);
  let minutes = parseInt((seconds - hours * 3600) / 60);
  let secs = seconds - hours * 3600 - minutes * 60;

  hours > 9 ? hours : (hours = "0" + hours);
  minutes > 9 ? minutes : (minutes = "0" + minutes);
  secs > 9 ? secs : (secs = "0" + secs);
  return hours + ":" + minutes + ":" + secs;
}

function highAndLow(numbers) {
  let array = numbers.split(" ");
  let high = parseInt(array[0]);
  let low = parseInt(array[0]);
  for (let i = 0; i < array.length; i++) {
    parseInt(array[i]) > high ? (high = parseInt(array[i])) : (high = high);
    parseInt(array[i]) < low ? (low = parseInt(array[i])) : (low = low);
  }
  return [high, low].join(" ");
}

function highAndLowDos(numbers) {
  let sorted = bubbleSort(numbers.split(" ")).reverse();
  return [sorted[0], sorted[sorted.length - 1]].join(" ");
}

function bubbleSort(array) {
  for (let k = 0; k < array.length; k++) {
    let done = true;
    for (let i = 0; i < array.length - k - 1; i++) {
      array[i] = Number(array[i]);
      if (array[i] > array[i + 1]) {
        let swap = array[i];
        array[i] = array[i + 1];
        array[i + 1] = swap;
        done = false;
      }
    }
    if (done) return array;
  }
}

const curryAdd = n => {
  const f = x => {
    return add(n + x);
  };
  f.valueOf = () => n;
  return f;
};

function readNumber(number) {
  const single = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine"
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen"
  ];
  const tens = [
    "ten",
    "twenty",
    "thirty",
    "fourty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety"
  ];
  // let mil = parseInt(number / 1000000)
  let thou = parseInt(number / 1000);
  let hun = parseInt(number % 1000 / 100);
  let ten = parseInt(number % 1000 % 100 / 10);
  let one = parseInt(number % 1000 % 100 % 10);
  if (one && ten > 1) {
    one = "-" + single[one - 1];
  }
  if (one > 0 && ten < 1) {
    one = single[one - 1];
  }
  if (one < 1) {
    one = "";
  }
  if (ten) {
    if (ten > 1) {
      ten = tens[ten - 1];
    } else {
      ten = teens[one];
    }
  } else {
    ten = "";
  }
  if (hun) {
    hun = single[hun - 1] + " hundred ";
  } else {
    hun = "";
  }
  if (thou) {
    thou = single[thou - 1] + " thousand, ";
  } else {
    thou = "";
  }
  return thou + hun + ten + one;
}

function isPalindrome(line) {
  if (line == line.toString().split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
}

function isPalindromeDos(line) {
  for (let i = 0; i < Math.ceil(line.toString().length / 2); i++) {
    if (
      line.toString().charAt(i) !==
      line.toString().charAt(line.toString().length - 1 - i)
    ) {
      return false;
    }
    return true;
  }
}

var filterLucky = x => {
  let luckyArray = [];
  for (let i = 0; i < x.length; i++) {
    if (x[i].toString().includes("7")) {
      luckyArray.push(x[i]);
    }
  }
  return luckyArray;
};

var charFreq = sentence => {
  const formatSentence = sentence.toLowerCase().replace(/[^a-z]/gi, "");
  const sentenceArray = formatSentence.split("");

  return sentenceArray.reduce((obj, char) => {
    if (!obj[char]) {
      obj[char] = 0;
    }
    obj[char]++;
    return obj;
  }, {});
};

var longestIncrSubArray = seq => {
  let longestArray = [];
  let array = [];

  if (seq.length < 2) {
    return [];
  }
  for (let i = 0; i < seq.length; i++) {
    let current = seq[i];
    let next = seq[i + 1];

    if (current < next) {
      array.push(current);
    }
    if (current >= next || i + 1 === seq.length) {
      array.push(current);
      if (array.length > longestArray.length) {
        longestArray = array.splice(0, array.length);
      }
      array = [];
    }
  }
  return longestArray;
};

var formidableSeries = (start, end) => {
  let array = [];

  for (let i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("FormidableLabs");
    } else if (i % 5 === 0) {
      array.push("Labs");
    } else if (i % 3 === 0) {
      array.push("Formidable");
    } else {
      array.push(i);
    }
  }
  return array;
};

module.exports = {
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
};
