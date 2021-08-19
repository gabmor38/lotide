const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(arr) {
  const newArray = []; //declare new array that will have the new values
    
  if (arr.length > 2) { //if arr length is bigger than 2 
    const middlePosition = (arr.length - 1) / 2;//find the middle position of the array's length
    let midIndex = (arr.length / 2) - 1
    let midIndexB = (arr.length / 2);

    if (arr.length % 2 !== 0) {//if it is odd then push to the newArray 
      newArray.push(arr[middlePosition]);
    } else if (arr.length % 2 === 0) {// if it is even push to the newArray
        
      newArray.push(arr[midIndex]);
      newArray.push(arr[midIndexB]);
        
    }
  }
  return newArray;
};

module.exports = middle;


