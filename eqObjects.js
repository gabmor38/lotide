const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);

};
const eqArrays = function(arr1, arr2) {
  let result = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    }
  }
  if (result === true) {
    console.log(`✅✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else console.log(`🛑🛑🛑🛑 Assertion Failed: ${arr1} != ${arr2}`);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  //determine if the  length in both objects are the same
  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const item1 = object1[key];
    const item2 = object2[key];

    if (Array.isArray(item1)) {
      if (!eqArrays(item1, item2)) {
        return false;
      }
      continue;
    }
    
    if (item1 !== item2)  {
      return false;
    }

  }
  return true;

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqArrays(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
eqArrays(eqObjects(ab, abc), false); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqArrays(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqArrays(eqObjects(cd, cd2), false); // => false

module.exports = eqObjects;