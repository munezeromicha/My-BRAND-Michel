const myArray = [1,2,3,4,5,6,7,8,9,10,11,12,1,13,14,15];

function filterPrime(myArr){
    var secArr = [];
    for(let i = 0; i < myArr.length; i++){
        let num = true;
        if(myArr[i] < 2){
            num = false;
        }
        for(let j = 2; j <= myArr[i]/2; j++){
            if(myArr[i]% j == 0){
                num = false;
                break;
            }else{
                num = true;
            }
        }
        if(num){
            secArr.push(myArr[i]);
        }
    }
    return secArr;
}

console.log(filterPrime(myArray));