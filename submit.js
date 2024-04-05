// This function takes a number then multiplies it by 3, adds 10, divides by 2 then subtracts 5 and returns the input
function mindGame(number) {
    //validating if input is a number and is it poitive
    if (number >= 0 && typeof number == "number") {
        let multiplication = number * 3;
        let addition = multiplication + 10;
        let division = addition / 2;
        let subtract = division - 5;
        return subtract;
    }
    else {
        return "please input a valid positive number";
    }
}

//this function takes a string then counts the characters and returns even or odd based on the numbers of the characters
function evenOdd(str) {
    //validating if the input is a string
    if (typeof str == "string") {
        //getting the length of the string which is equivalent to the character numbers
        const number = str.length;
        //checking if even or odd
        if (number % 2 == 0) {
            return "even";
        }
        else {
            return "odd";
        }
    }
    else {
        return "please enter a valid string";
    }
}

//This function takes a number as input then gets the difference between the number and 7.If the difference is smaller than 7 then the difference is returned. If the difference is grater than 7 then the difference is doubled and returned
function isLGSeven(number) {
    //function will run if the input is a number
    if (typeof number == "number") {
        let difference = number - 7;
        //checking if difference is less than 7, if yes then difference is returned
        if (difference < 7) {
            return difference;
        }
        //if difference is more than 7, then the input is multiplied by two and returned
        else {
            return (2 * number);
        }
    }
    //function will not run if input is not a number
    else {
        return "Please enter an Integer!";
    }
}

//This function takes an array of number and counts the negative numbers(BadDatas)
function findingBadData(arr) {
    //checking if the input is an array
    if (!Array.isArray(arr)) {
        return 'Please input a valid array!';
    }
    let badData = 0; //this is the bad data counter
    for (let i = 0; i < arr.length; i++) {
        const index = i;
        //getting the individual elements from array to check
        const element = arr[index];
        //chceking if there are any element in the array which is not a number
        if (typeof element !== 'number' || isNaN(element)) {
            return 'Array contains non-numeric elements';
        }
        //counting the negative numbers (BadData's)
        else if (element < 0) {
            badData++;
        }
    }
    return badData;
}

//this function takes 3 inputs of gems then converts them to diamonds. if number of total diamonds is greater than 2000 then 2000 diamonds gets deducted from the total number of diamonds and then it is returned

function gemsToDiamond(gemsOfFirstFriend, gemsOfSecondFriend, gemsOfThirdFriend){
    //Validating if any parameters are non-numeric or if number of parameterws are less than or more than 3
    if (arguments.length !== 3){
        return "Please enter 3 numaric inputs of gems"
    }
    else if (typeof gemsOfFirstFriend !== 'number' || typeof gemsOfSecondFriend !== 'number' || typeof gemsOfThirdFriend !== 'number'){
        return "Please use valid numaric inputs of gems"
    }
    //the conversion values for gems to diamonds
    const powerOfFirstFriendsGem = 21;
    const powerOfSecondFriendsGem = 32;
    const powerOfThirdFriendsGem = 43;
    //converting gems to diamonds
    const diamondsOfFirstFriend = gemsOfFirstFriend * powerOfFirstFriendsGem;
    const diamondsOfSecondFriend = gemsOfSecondFriend * powerOfSecondFriendsGem;
    const diamondsOfThirdFriend = gemsOfThirdFriend * powerOfThirdFriendsGem;
    //counting total diamonds
    const totalDiamonds = diamondsOfFirstFriend + diamondsOfSecondFriend + diamondsOfThirdFriend;
    //checking if total diamonds are more than 2000, if yes then 2000 diamonds are deducted and remaining diamonds are returned
    if(totalDiamonds > 2000){
        const ourDiamonds = totalDiamonds - 2000;
        return ourDiamonds;
    }
    //Returns total diamonds if number of diamonds are lower than 2000
    else {
        return totalDiamonds;
    }
}