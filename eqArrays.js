
const eqArrays = function(arr1, arr2) {
  let result = "";
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        result = true;
      } else {
        result = false;
      }
    }
  } return result;
};


module.exports = eqArrays;

