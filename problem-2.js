//this function takes a string then counts the characters and returns even or odd based on the numbers of the characters
function evenOdd(str){

    //validating if the input is a string
    if ( typeof str == "string"){
        //getting the length of the string which is equivalent to the character numbers
        const number = str.length;
        //checking if even or odd
        if(number % 2 == 0){
            return "even";
        }
        else{
            return "odd";
        }
    }
    else {
        return "please enter a valid string"
    }
}