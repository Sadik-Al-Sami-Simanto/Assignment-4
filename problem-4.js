//This function takes an array of number and counts the negative numbers(BadDatas)
function findingBadData (arr) {
  //checking if the input is an array
  if (!Array.isArray(arr)) {
    return 'Please input a valid array!';
  }

  let badData = 0; //this is the bad data counter

  for (let i = 0; i < arr.length; i++) {
    const index = i;
    const element = arr[index]; //getting the individual elements from array to check

    //chceking if there are any element in the array which is not a number
    if (typeof element !== 'number' || isNaN(element)) {
      return 'Array contains non-numeric elements';
    }
    //counting the negative numbers (BadData's)
    else if (element < 0) {
      badData++
    }
  }
  return badData;
}