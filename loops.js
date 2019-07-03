
function countUpToX(x) {
  // return an empty string when x is not provided
  let ret = '';
  // given x is a number
  // iterate from 1 to and including x
  for (let i = 1; i <= x; i++) {
    // for each iteration, add the number number to the returned string
    ret += i;
  }
  // return the final string with all of the numbers from 1 to x
  return ret;
}

function countDownFromX(x) {
  let ret = '';

  for (let i = x; i >= 1; i--) {
    ret += i;
  }

  return ret;
}

function squarePyramidNumber(x) {
  let ret = 0;

  for (let i = 1; i <= x; i++) {
    ret += i ** 2;
  }

  return ret;
}

function countTotalStringLengths(arrayOfStrings) {
  // initialize the return value (total length) to 0
  let totalLength = 0;
  // go through the array,
  // adding the length of each string to the return value
  for (const string of arrayOfStrings) {
    totalLength += string.length;
  }
  return totalLength;
}

function countOccurrencesOfCharacterInString(str, char) {
  // initialize the return value (number of occurrences) to 0
  let numOfOccs = 0;
  // for each character in the `str`, call it `strChar`
  for (const strChar of str) {
    // compare `strChar` with `char`
    // if `strChar` and `char` ar the same, add 1 to the total
    if (strChar === char) {
      numOfOccs += 1;
    }
  }
  // return the number of occurrences
  return numOfOccs;
}

function findKeyInObject(obj, searchValue) {
  // iterate through each value (keyValue) in the `obj`
  for (const objKey in obj) {
    // compare each keyValue with the searchValue
    if (obj[objKey] === searchValue) {
      // if they match, the current key is the matching one
      // return the matching key
      return objKey;
    }
  }
}

function countConsecutiveScores(days) {
  // initialize the sumTotal to 0
  let sumTotal = 0;

  // iterate through the values in the object, each val is an array
  for (const key in days) {
    const array = days[key];
    // iterate through each number in each array
    for (const num of array) {
      // if the number is 0, skip to the next array
      if (num === 0) break;
      // add each number to the total
      sumTotal += num;
    }
  }

  // return the sumTotal
  return sumTotal;
}
