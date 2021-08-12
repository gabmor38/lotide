const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
};
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const eqArrays = function(arr1, arr2) {
  let result = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
    if(result === true) {
      console.log(`✅✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    } else console.log(`🛑🛑🛑🛑 Assertion Failed: ${arr1} != ${arr2}`);
};

module.exports = eqArrays;

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]),true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false);