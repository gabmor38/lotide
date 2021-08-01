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
    if(result === true) {
      console.log(`✅✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    } else console.log(`🛑🛑🛑🛑 Assertion Failed: ${arr1} != ${arr2}`);
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

  if(Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1 ) {
    if(Array.isArray (Object.keys(object1)) === Array.isArray(Object.keys(object2))) 
    //console.log(Object.keys(object1));
  
    return true;
 }

};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqArrays(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
eqArrays(eqObjects(ab, abc), false); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqArrays(eqObjects(cd, dc),true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqArrays(eqObjects(cd, cd2), false); // => false

// console.log(Object.keys(object2).length);