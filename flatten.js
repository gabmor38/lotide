  const flatten = function(arr1, result = []) {  // arr1 is the main array and then result = [] is the nested array
    for (let i = 0, length = arr1.length; i < length; i++) { // loop through it to get all the values 
      const newFlattenArray = arr1[i]; // new number array 
      if (Array.isArray(newFlattenArray)) { //check if there are arrays within the array
        flatten(newFlattenArray, result);
      } else {
        result.push(newFlattenArray);
      }
    }
    return result;
  };
