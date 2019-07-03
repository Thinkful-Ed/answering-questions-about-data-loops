console.log('%clength-of-array.js', 'color: blueviolet');

// function with parameter of an array
// calculate the number of items in the array
// return the number of items
const getLengthOfArray = array => array.length;

console.log(`getLengthOfArray(['test', 'one']) should equal 2`);
console.log(getLengthOfArray(['test', 'one']));
console.log(`getLengthOfArray(['one', 'two', 3, {}, true]) should equal 5`);
console.log(getLengthOfArray(['one', 'two', 3, {}, true]));
console.log(`getLengthOfArray(['only item']) should equal 1`);
console.log(getLengthOfArray(['only item']));
console.log(`getLengthOfArray([]) should equal 0`);
console.log(getLengthOfArray([]));
