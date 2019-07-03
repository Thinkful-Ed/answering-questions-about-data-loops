
describe(`countUpToX(x: Number): String`, () => {
  it(`returns an empty string when no X supplied`, () => {
    const actual = countUpToX();
    expect(actual).to.equal('');
  })

  it(`returns a string of '1' when x is 1`, () => {
    const actual = countUpToX(1);
    expect(actual).to.equal('1');
  })

  it(`returns a string of '12' when x is 2`, () => {
    const actual = countUpToX(2);
    expect(actual).to.equal('12');
  })

  it(`returns a string of '123' when x is 3`, () => {
    const actual = countUpToX(3);
    expect(actual).to.equal('123');
  })

  it(`returns a string of '1234567891011' when x is 11`, () => {
    const actual = countUpToX(11);
    expect(actual).to.equal('1234567891011');
  })
})

describe(`countDownFromX(x: Number): String`, () => {
  it(`returns an empty string when no X supplied`, () => {
    const actual = countDownFromX();
    expect(actual).to.equal('');
  })

  it(`returns a string of '1' when x is 1`, () => {
    const actual = countDownFromX(1);
    expect(actual).to.equal('1');
  })

  it(`returns a string of '21' when x is 2`, () => {
    const actual = countDownFromX(2);
    expect(actual).to.equal('21');
  })

  it(`returns a string of '321' when x is 3`, () => {
    const actual = countDownFromX(3);
    expect(actual).to.equal('321');
  })

  it(`returns a string of '1110987654321' when x is 11`, () => {
    const actual = countDownFromX(11);
    expect(actual).to.equal('1110987654321');
  })
})

describe(`squarePyramidNumber(x: Number): Number`, () => {
  it(`returns 0 when no X is supplied`, () => {
    const actual = squarePyramidNumber();
    expect(actual).to.equal(0);
  })

  it(`returns 1 when x is 1`, () => {
    const actual = squarePyramidNumber(1);
    expect(actual).to.equal(1);
  })

  it(`returns 5 when x is 2`, () => {
    const actual = squarePyramidNumber(2);
    expect(actual).to.equal(5);
  })

  it(`returns 14 when x is 3`, () => {
    const actual = squarePyramidNumber(3);
    expect(actual).to.equal(14);
  })

  it(`returns 30 when x is 4`, () => {
    const actual = squarePyramidNumber(4);
    expect(actual).to.equal(30);
  })

  it(`returns 506 when x is 11`, () => {
    const actual = squarePyramidNumber(11);
    expect(actual).to.equal(506);
  })
})

describe(`countTotalStringLengths(arr: Array<String>): Number`, () => {
  it(`returns 0 when an empty array is supplied`, () => {
    const actual = countTotalStringLengths([]);
    expect(actual).to.equal(0);
  })

  it(`returns length of string when array with one string supplied`, () => {
    const actual = countTotalStringLengths(['test-string']);
    expect(actual).to.equal(11);
  })

  it(`returns length of strings when array with two string supplied`, () => {
    const actual = countTotalStringLengths(['first-string', 'second-string']);
    expect(actual).to.equal(25);
  })

  it(`returns length of strings when array with lots of string supplied`, () => {
    const actual = countTotalStringLengths(['aa', 'bb', 'cccc', 'ddddd', 'eeeeee', 'fffffffffff']);
    expect(actual).to.equal(30);
  })
})

describe(`countOccurrencesOfCharacterInString(str: String, char: String): Number`, () => {
  it(`returns 0 when neither a string nor char supplied`, () => {
    const actual = countOccurrencesOfCharacterInString('', '');
    expect(actual).to.equal(0);
  })

  it(`returns 0 when char doesn't occur in the string`, () => {
    const actual = countOccurrencesOfCharacterInString('abcdef', 'z');
    expect(actual).to.equal(0);
  })

  it(`returns 1 when char occurs in the string once`, () => {
    const actual = countOccurrencesOfCharacterInString('uvwxyz', 'z');
    expect(actual).to.equal(1);
  })

  it(`returns 2 when char occurs in the string twice`, () => {
    const actual = countOccurrencesOfCharacterInString('abcabc', 'b');
    expect(actual).to.equal(2);
  })

  it(`returns 3 when char occurs in the string thrice`, () => {
    const actual = countOccurrencesOfCharacterInString('123123123', '3');
    expect(actual).to.equal(3);
  })

  it(`returns 12 when char occurs in the string a dozen times`, () => {
    const actual = countOccurrencesOfCharacterInString('aaaaaaaaaaaa', 'a');
    expect(actual).to.equal(12);
  })
})

describe(`findKeyInObject(obj: Object, searchValue: Any): String`, () => {
  it(`returns undefined when an empty object`, () => {
    const actual = findKeyInObject({}, 'value-to-search-for');
    expect(actual).to.equal(undefined);
  })

  it(`returns undefined when no search value supplied`, () => {
    const actual = findKeyInObject({ key: 'value' });
    expect(actual).to.equal(undefined);
  })

  it(`returns the key with a value matching the searchValue supplied`, () => {
    const object = {
      matchingKey: 'value-to-search-for',
      notMatchingKey: 'some-other-value',
    }
    const actual = findKeyInObject(object, 'value-to-search-for');
    expect(actual).to.equal('matchingKey');
  })

  it(`returns the first matching key when multiple matches`, () => {
    const object = {
      notMatchingKey: 'some-other-value',
      matchingKey: true,
      anotherMatchingKey: true,
    }
    const actual = findKeyInObject(object, true);
    expect(actual).to.equal('matchingKey');
  })
})

describe(`countConsecutiveScores(days: Object<Array<Number>>): Number`, () => {
  it(`returns 0 when an empty object supplied`, () => {
    const actual = countConsecutiveScores({});
    expect(actual).to.equal(0);
  })

  it(`returns 0 when an object with empty arrays supplied`, () => {
    const object = {
      mon: [],
      tues: [],
    }
    const actual = countConsecutiveScores(object);
    expect(actual).to.equal(0);
  })

  it(`returns total of numbers in all arrays`, () => {
    const object = {
      mon: [1],
      tues: [4],
      wed: [7],
    }
    const actual = countConsecutiveScores(object);
    expect(actual).to.equal(12);
  })

  it(`returns total of numbers in one array`, () => {
    const object = {
      mon: [1, 2, 3, 10],
      sun: [9],
    }
    const actual = countConsecutiveScores(object);
    expect(actual).to.equal(25);
  })

  it(`stops counting total of numbers after 0 in an array`, () => {
    const object = {
      mon: [1, 0, 100],
      thu: [10, 0, 200],
      fri: [0, 300],
      sun: [2, 2, 2],
    }
    const actual = countConsecutiveScores(object);
    expect(actual).to.equal(17);
  })

  it(`complex example with mixture of arrays`, () => {
    const object = {
      mon: [3, 2, 2],
      tue: [3, 3, 1, 0, 2, 4, 6],
      thu: [5, 0, 9],
      fri: [0, 1, 1],
      sat: [9],
      sun: [8, 8, 8, 8],
    }
    const actual = countConsecutiveScores(object);
    expect(actual).to.equal(60);
  })
})
