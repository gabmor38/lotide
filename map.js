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


const map = function(array, callback) {
  //  // temporary code:
  //  console.log('array: ', array);
  //  console.log('callback: ', callback);


  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
}
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

