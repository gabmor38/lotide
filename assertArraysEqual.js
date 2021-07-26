const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
  } else {console.log(`🛑🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
  }
};
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const assertArraysEqual = function(arr1, arr2) {
  let result = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    } else { result = true;
    }
  };
  return result;
};

assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]),true);
assertEqual(assertArraysEqual([1, 2, 3], [3, 2, 1]), false);
assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]),false);