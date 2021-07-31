const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);

};
const assertArraysEqual = function (arr1, arr2) {
  let result = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      result = false;
    } else {
      result = true;
    }
  };
  return result;
};

const letterPositions = function (sentence) {
  const result = {};

  
  for (const index in sentence) {
    const letter = sentence[index];
    if (letter === ' ') {//create and if to check for blank spaces
      continue; // if no blank spaces continue and do nothing - Continue is the same as "Break"
    }

    if (!result[letter]) { // if doesnot (!) there is no key object in the index create and array for it.
      result[letter] = [];
    }

    result[letter].push(Number(index)); // Push the index position to the object key. The result was a string and had to convert to Number 
  }
  return result;
};
console.log(letterPositions("lighthouse in the house"));
//assertArraysEqual(letterPositions("hello").e, [1]);




  // if (sentence[i] == " ") {
    //    //another if to check if key exists - yes push index to array.
    //    if (sentence[i]) {
    //     result[i] += 1;
    //     newArray.push([i])
    //    }
    //    if(sentence[i]) {
    //     const position = sentence[i] += 1;
    //     newArray.push(position)
    //     //console.log(newArray);
    //    }   
    // } else  result[i] = 1;