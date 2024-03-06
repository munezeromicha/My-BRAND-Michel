var arrTwo = [1,2,3,4,5];

function reversing(arrOne){
    let holdOne = [];
    for(var i = arrOne.length - 1; i >= 0; i--){
        holdOne.push(arrOne[i]);
    }
    if(holdOne.length === arrOne.length){
        return holdOne;
    }else{
        console.log("You are wrong!")
    }
    
}
console.log(reversing(arrTwo));