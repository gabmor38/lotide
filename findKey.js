const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else console.log(`🛑🛑🛑🛑 Assertion Failed: ${actual} != ${expected}`);
  
};

const findKey = (object, callback) => {
  
  //callback = function
  // object = keys with values
  for (const key in object) {
    // console.log("this is the key name - ", key);
    //  console.log(" this is the key value - ",object[key]); 
    //  console.log(Object.entries(object[key]));
     
     if(callback(object[key]) ) { 
      return key;
      console.log(key)
    }
  }
};
 const results = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);// => "noma"

assertEqual(results, "noma")