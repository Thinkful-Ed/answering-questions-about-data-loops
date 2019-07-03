console.log('%clength-of-word.js', 'color: blueviolet');

// function with parameter of a word
// calculate the number of characters in the word
// return the number of characters in that word
const getLengthOfWord = word => word.length;

console.log('getLengthOfWord("test") should equal 4');
console.log(getLengthOfWord("test"));
console.log('getLengthOfWord("somestring") should equal 10');
console.log(getLengthOfWord("somestring"));
console.log('getLengthOfWord("9") should equal 1');
console.log(getLengthOfWord("9"));
console.log('getLengthOfWord("") should equal 0');
console.log(getLengthOfWord(""));
