const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  
};

const countLetters = function(sentence) {
  const charResult = {};
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (charResult[letter]) {
        charResult[letter] += 1;
      } else {
        charResult[letter] = 1;
      }
    }
  }
  return charResult;
};
// console.log(countLetters("lighthouse in the house"));

module.exports = countLetters;