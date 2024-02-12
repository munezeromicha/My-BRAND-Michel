var arrTwo = [1,2,3,4,5];

function reversing(arrOne){
    let first_nbr = 0;
    let last_nbr = arrOne.length - 1;

    while(last_nbr > first_nbr){
        var temp_var = arrOne[first_nbr];
        arrOne[first_nbr] = arrOne[last_nbr];
        arrOne[last_nbr] = temp_var;

    first_nbr ++;
    last_nbr --;
    }
    return arrOne;
    
}
console.log(reversing(arrTwo));