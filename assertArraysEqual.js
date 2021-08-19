
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
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]), true); // => should PASS

module.exports = assertArraysEqual;

