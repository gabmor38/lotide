
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

