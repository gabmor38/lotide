// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅✅ Assertion Passed: "${actual}" === "${expected}"`);
//   } else {console.log(`🛑🛑🛑🛑 Assertion Failed: "${actual}" !== "${expected}"`);
//   }
// };
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

// const assertArraysEqual = function(arr1, arr2) {
//   let result = true;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] !== arr2[i]) {
//       result = false;
//     } else { result = true;
//     }
//   };
//   return result;
// };
//assertEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), true);
//assertEqual(assertArraysEqual(["1", "2", "3"], ["1", "2", 3]),true);

const without = function (source, itemsToRemove) {
 let newArray = [];
  for(let i = 0; i < source.length; i ++){
    let removeItem = false
    for (let x = 0; x < itemsToRemove.length; x++){
      if(source[i] === itemsToRemove[x]){
        removeItem = true
      }
    }
      if(!removeItem){
        newArray.push(source[i])
      }
    }
      return newArray;
  };

  console.log(without([1, 2, 3], [1])); // => [2, 3]
  console.log(without(["1", "2", "3"], [1, 2, "3"])) ;// => ["1", "2"]
  
  assertArraysEqual(["1", "2", "3"], [1, 2, "3"]);
  
without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(without, ["hello", "world", "lighthouse"]);

