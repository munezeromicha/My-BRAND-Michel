function palindrome(str) {
    str = str.toLowerCase();
    let revStr = "";
    for(let i = str.length - 1; i >= 0; i--){
        revStr += str[i];
    }
     if(str == revStr){
        console.log("True")
     }else{
        console.log("False")
     }
    
  }
  palindrome("MOM");