const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("returns [2, 3] for [1, 2, 3]", () => {
    const inputArray = [1, 2, 3];
    assert.deepEqual(tail(inputArray), [2, 3]);
  });

  it("returns [5, 6] for [4, 5, 6]", () => {
    const inputArray = [4, 5, 6]
    assert.deepEqual(tail(inputArray), [5, 6]);
  });


  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    const inputArray = ["Hello", "Lighthouse", "Labs"];
    assert.deepEqual(tail(inputArray), ["Lighthouse", "Labs"]);

  });

});




// assertEqual(result.length, 2); // ensure we get back two elements
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"