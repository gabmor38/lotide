const assert = require('chai').assert;

const middle = require('../middle'); //import middle

describe("#middle", () => {

  it("returns [3] for [1, 2, 3, 4, 5] & [3]", () => {
    const inputArray1 = [1, 2, 3, 4, 5];
    const inputArray2 = [3];
    const expectedOutput = [3];
    assert.deepEqual(middle(inputArray1, inputArray2), expectedOutput);
  });

  it("returns [] for [1, 2] & []", () => {
    const inputArray1 = [1, 2];
    const inputArray2 = [];
    const expectedOutput = [];
    assert.deepEqual(middle(inputArray1, inputArray2), expectedOutput);
  });
  
  
  

});


// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5]);

// console.log(middle([1, 2, 3]));//=>[2]

