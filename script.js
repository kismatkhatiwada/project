let lengthValue=document.getElementById("totalChar");
let uppercase=document.getElementById("uppercase");
let lowercase=document.getElementById("lowercase");
let symbol=document.getElementById("symbol");
let number=document.getElementById("number");
let passBox=document.getElementById("passBox");
let genBtn=document.getElementById("genBtn");

genBtn.addEventListener('click',()=>{
    passBox.value=generatePassword();
});

let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let allNumbers="0123456789";
let allSymbols="@#$%^&(){[}]";
function generatePassword(){
    let genPassword= "";
    let allChar="";
    allChar+=lowercase.checked ? lowerChars :"";
    allChar+=uppercase.checked ? upperChars :"";
    allChar+=number.checked ? allNumbers :"";
    allChar+=symbol.checked ? allSymbols :"";
   
    // if(lowercase.checked==true){
    //     allChar+=lowerChars;
    // }
    // else{
    //     allChar+="";
    // }
    // if(uppercase.checked==true){
    //     allChar+=upperChars;
    // }
    // else{
    //     allChar+="";
    // }
    // if(number.checked==true){
    //     allChar+=allNumbers;
    // }
    // else{
    //     allChar+="";
    // }
    // if(symbol.checked==true){
    //     allChar+=allSymbols;
    // }
    // else{
    //     allChar+="";
        
    // }


    let i=1;
    while(i<=lengthValue.value){
        genPassword+=allChar.charAt(Math.floor(Math.random()*allChar.length));
        i++;
    }
    return genPassword;
}