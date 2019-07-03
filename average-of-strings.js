console.log('%caverage-of-strings.js', 'color: blueviolet');

// function with parameter of an `array of strings`

function getAverageOfStrings(arrayOfStrings) {
  const numberOfStrings = arrayOfStrings.length;
  if (numberOfStrings === 0) return 0;
  // add the length of each string to a `total length`
  let totalLength = 0;
  let stringIndex = 0;
  console.log('before the while loop');
  while (numberOfStrings > stringIndex) {
    console.log('within the while loop');
    console.log({ numberOfStrings, stringIndex });
    console.log(numberOfStrings > stringIndex);
    totalLength += arrayOfStrings[stringIndex].length;
    stringIndex += 1;
  }
  console.log('after the while loop');
  console.log('\n');
  // after adding the lengths together, get the `number of strings`
  // divide the `total length` by the `number of strings` for the `avg`
  const average = totalLength / numberOfStrings;
  // return the average length of the strings
  return average || 0;
}

console.log(`getAverageOfStrings(['x', 'xxx']) should equal 2`);
console.log(getAverageOfStrings(['x', 'xxx']));
console.log(`getAverageOfStrings(['y', 'yy', 'yyy', 'yyyy']) should equal 2.5`);
console.log(getAverageOfStrings(['y', 'yy', 'yyy', 'yyyy']));
console.log(`getAverageOfStrings(['z']) should equal 1`);
console.log(getAverageOfStrings(['z']));
console.log(`getAverageOfStrings([]) should equal 0`);
console.log(getAverageOfStrings([]));
