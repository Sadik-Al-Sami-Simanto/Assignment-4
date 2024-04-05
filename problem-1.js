
function mindGame(number){
    //validating if input is a number and is it poitive
    if (number >= 0 && typeof number == "number"){
        let multiplication = number * 3;
        let addition = multiplication + 10;
        let division = addition / 2;
        let subtract = division - 5;
        return subtract;
    }
    else {
        return "please input a valid positive number"
    }
}