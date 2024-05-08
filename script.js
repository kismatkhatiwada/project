let lengthValue=document.getElementById("totalChar");
let uppercase=document.getElementById("uppercase");
let lowercase=document.getElementById("lowercase");
let symbol=document.getElementById("symbol");
let number=document.getElementById("number");
let passBox=document.getElementById("passBox");
let genBtn=document.getElementById("genBtn");
let quantityInput = document.getElementById("quantityInput");

genBtn.addEventListener('click',()=>{
    generatePasswords();
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

    let i=1;
    while(i<=lengthValue.value){
        genPassword+=allChar.charAt(Math.floor(Math.random()*allChar.length));
        i++;
    }
    return genPassword;
}
function generatePasswords() {
    let quantity = quantityInput.value;
    let passwords = [];
    for (let i = 0; i < quantity; i++) {
        passwords.push(generatePassword());
    }
    passBox.value = passwords.join('\n');
}
