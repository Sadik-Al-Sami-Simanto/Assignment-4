//This function takes a number as input then gets the difference between the number and 7.If the difference is smaller than 7 then the difference is returned. If the difference is grater than 7 then the difference is doubled and returned

function isLGSeven(number){
    //function will run if the input is a number
    if (typeof number == "number"){
        let difference = number - 7;
        //checking if difference is less than 7, if yes then difference is returned
        if (difference < 7){
            return difference;
        }
        //if difference is more than 7, then the input is multiplied by two and returned
        else {
            return (2 * number);
        }
    }
    //function will not run if input is not a number
    else {
        return "Please enter an Integer!"
    }
}