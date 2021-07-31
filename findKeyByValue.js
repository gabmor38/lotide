const assertEqual = function (actual, expected) {

  if (actual === expected) {
    console.log(`✅✅✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);

};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = (obj,genre) => {
  for (const key in obj) { // loop through the values
    // console.log(genre, "this is the genre");
    // console.log(key, "This is the Key");
    // console.log(obj[key], " this is value");
    if (genre === obj[key]) { // if genre and the key are true return the key. 
      return key;
    }
  }
};
let stuff = findKeyByValue(bestTVShowsByGenre, 'The Wire')
let stuff2 = findKeyByValue(bestTVShowsByGenre, "That '70s Show")
console.log(stuff);
console.log(stuff2);
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
