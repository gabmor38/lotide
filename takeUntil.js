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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  
};

const takeUntil = function(array, callback) { //Callback if the predicate function
  const newArray = [];//declare array where items will be contained.
  for (const item of array) {
    
    if (!callback(item)) {
      newArray.push(item);
    } else {
      return newArray;
    }
  }
};
//console.log(assertArraysEqual(newArray, data1), true);
assertEqual(takeUntil([1, 2, 5, 7, 2, -1, 2, 4, 5] [ 1, 2, 5, 7, 2 ]));
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');


const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

