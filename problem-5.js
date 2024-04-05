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
