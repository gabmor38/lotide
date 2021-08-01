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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const object1 = { a: '1', b: 2 };
const object2 = { b: 2, a: '1' };


assertObjectsEqual(object1, object2);
