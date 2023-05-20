/*
DEFINITIONS OF SYSTHEME
*/
const UPERCASE                          = 1
const LOWERCASE                         = 2
const UPER_LOWER_CASE                   = 3
const NUMBERCASE                        = 4
const UPPER_NUMBER_CASE                 = 5
const LOWER_NUMBER_CASE                 = 6
const UPPER_LOWER_NUMBER_CASE           = 7  
const SYMBOL_CASE                       = 8
const UPPER_SYMBOL_CASE                 = 9  
const LOWER_SYMBOL_CASE                 = 10  
const UPPER_LOWER_SYMBOL_CASE           = 11 
const NUMBER_SYMBOL_CASE                = 12
const UPPER_NUMBER_SYMBOL_CASE          = 13 
const LOWER_NUMBER_SYMBOL_CASE          = 14 
const UPPER_LOWER_NUMBER_SYMBOL_CASE    = 15 
const BUFFER_UPPERCASE    = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const BUFFFER_LOWERCASE   = 'abcdefghijklmnopqrstuvwxyz'
const BUFFER_SYMBOLE      = '!@#$%^&*()/;[,]|?<_>-'
const BUFFER_NUMBER       = '0123456789'
const DECALAGE_UPPER      =  0
const DECALAGE_LOWER      =  1
const DECALAGE_NUMBER     =  2
const DECALAGE_SYMBOL     =  3
const PAS_GENERATION      =  1 
/*          
    FONCTION OF SYSTHEME
*/
function fGenerateString(lenghtPassword, bufferHandle, numberType)
{
    let  sResultaPassword = "";
    if(numberType === false){
        containTypeCase = bufferHandle;
        let charLength = bufferHandle.length;
        for ( var i = 0; i < parseInt(lenghtPassword); i++ ) {
            sResultaPassword += containTypeCase.charAt(Math.floor(Math.random() * charLength));
        }
    }else{
        let maxLenght = lenghtPassword + 2;
        sResultaPassword = Math.random().toString(10).substring(2,maxLenght);
    }

    return sResultaPassword;
}

function fGenerate2String(index, printOne, printTwo, sResultaPassword){
    if(index%2 === 0){
        sResultaPassword += fGenerateString(PAS_GENERATION,printOne, false);
    }
    else{
        sResultaPassword += fGenerateString(PAS_GENERATION, printTwo, false);
    }
    return sResultaPassword
}

function fGenerate3String(count, printOne, printTwo, printThree, sResultaPassword){
    console.log(count)
    if(count === 0){
        sResultaPassword += fGenerateString(PAS_GENERATION,printOne, false);
    }
    else if (count === 1 ){
        sResultaPassword += fGenerateString(PAS_GENERATION,printTwo, false)
    }
    else{
        sResultaPassword += fGenerateString(PAS_GENERATION, printThree, false);
    }
    return sResultaPassword;
}

function fGeneratePassword(lenghtPassword, nMaskPassword){
    let sResultaPassword =" ";
    lenghtPassword = parseInt(lenghtPassword)
    let count = 0;

    switch(nMaskPassword){
        case UPERCASE:
            sResultaPassword = fGenerateString(lenghtPassword, 
                                                BUFFER_UPPERCASE, false);
            break;
        case LOWERCASE:
            sResultaPassword = fGenerateString(lenghtPassword, 
                                                BUFFFER_LOWERCASE, false);
            break;
        case UPER_LOWER_CASE:
            for (let index = 0; index < lenghtPassword; index++) {
                sResultaPassword = fGenerate2String(index, BUFFER_UPPERCASE, BUFFFER_LOWERCASE, sResultaPassword)
            }
            break;
        case NUMBERCASE:
            sResultaPassword = fGenerateString(lenghtPassword, null, true)
            break;
        case UPPER_NUMBER_CASE:
            for (let index = 0; index < lenghtPassword; index++) {
                sResultaPassword = fGenerate2String(index, BUFFER_UPPERCASE, BUFFER_NUMBER, sResultaPassword)
            }
            break;
        case LOWER_NUMBER_CASE:
            for (let index = 0; index < lenghtPassword; index++) {
                fGenerate2String(index, BUFFFER_LOWERCASE, BUFFER_NUMBER, sResultaPassword)
            }
            break;
        case UPPER_LOWER_NUMBER_CASE:
            for (let index = 0; index <lenghtPassword; index++) {
                sResultaPassword = fGenerate3String(count, BUFFER_UPPERCASE, BUFFFER_LOWERCASE, 
                                                    BUFFER_NUMBER, sResultaPassword)
                count++;
                if(count === 3){
                    count = 0;
                }
            }
            break;
        case SYMBOL_CASE:
            sResultaPassword = fGenerateString(lenghtPassword, 
                                                BUFFER_SYMBOLE, false);
                                                console.log("check", sResultaPassword)
            break;
        case UPPER_SYMBOL_CASE:
            for (let index = 0; index < lenghtPassword; index++) {
                sResultaPassword = fGenerate2String(index, BUFFER_UPPERCASE, BUFFER_SYMBOLE, sResultaPassword);
            }
            break;
        case LOWER_SYMBOL_CASE:
            for (let index = 0; index < lenghtPassword; index++) {
                sResultaPassword = fGenerate2String(index, BUFFFER_LOWERCASE, BUFFER_SYMBOLE, sResultaPassword);
            }
            break;
        case UPPER_LOWER_SYMBOL_CASE:
            for (let index = 0; index < lenghtPassword; index++) {
                sResultaPassword = fGenerate3String(count, BUFFER_UPPERCASE, BUFFFER_LOWERCASE, 
                                                    BUFFER_SYMBOLE, sResultaPassword)
                                                    count++;
                if(count === 3){
                    count = 0;
                }
            }
            break;
        case NUMBER_SYMBOL_CASE:
            for (let index = 0; index < lenghtPassword; index++) {
                sResultaPassword =  fGenerate2String(index, BUFFER_NUMBER, BUFFER_SYMBOLE, sResultaPassword);
            }
            break;
        case UPPER_NUMBER_SYMBOL_CASE:
            for (let index = 0; index < lenghtPassword; index++) {
                sResultaPassword = fGenerate3String(count, BUFFER_UPPERCASE, BUFFER_SYMBOLE, 
                                                    BUFFER_NUMBER, sResultaPassword)
                                                    count++;
                if(count === 3){
                    count = 0;
                }
            }
            break;
        case LOWER_NUMBER_SYMBOL_CASE:
            for (let index = 0; index < lenghtPassword; index++) {
                sResultaPassword = fGenerate3String(count, BUFFFER_LOWERCASE, BUFFER_SYMBOLE, 
                                                    BUFFER_NUMBER, sResultaPassword)
                                                    count++;
                if(count === 3){
                    count = 0;
                }
            }
            break;
        case UPPER_LOWER_NUMBER_SYMBOL_CASE:
            for (let index = 0; index < (lenghtPassword/2); index++) {
                sResultaPassword = fGenerate2String(index, BUFFFER_LOWERCASE, BUFFER_SYMBOLE, sResultaPassword);
                sResultaPassword = fGenerate2String(index, BUFFER_UPPERCASE, BUFFER_NUMBER, sResultaPassword);
            }
                break;
        default:
                sResultaPassword ="Please check choise"  
            break;
    }


    return sResultaPassword
}


/*
    Global value
*/
let valLenghtPass   = 4;
let stateUpperCase  = false;
let stateLowerCase  = false;
let stateSymbol     = false;
let stateNumber     = false;


/*
        MAIN OF SYSTHEME
*/

//Recuperer les valeurs des boutons
let lenghtPassword = document.getElementById("length");
valLenghtPass = lenghtPassword.value;
lenghtPassword.addEventListener("keypress", (event) =>{
        if(event.key === "Enter"){
            valLenghtPass = lenghtPassword.value;
            console.log("La longeur est:", valLenghtPass);
        }
});

lenghtPassword.addEventListener("click", (event) =>{
    if(event.button === 0){
        valLenghtPass = lenghtPassword.value;
        console.log("La longeur est:", valLenghtPass);
    }
});

let nUperCasePassword  = document.getElementById("uppercase");
nUperCasePassword.addEventListener("click", function(){
    stateUpperCase = nUperCasePassword.checked;
    console.log("Etat UperCase:",stateUpperCase);
});

let nLowerCasePassword = document.getElementById("lowercase");
nLowerCasePassword.addEventListener("click", function(){
    stateLowerCase = nLowerCasePassword.checked;
    console.log("Etat LowerCase:",stateLowerCase);
});

let nNumberPassword = document.getElementById("numbers");
nNumberPassword.addEventListener("click", function(){
    stateNumber = nNumberPassword.checked;
    console.log("Etat Number:",stateNumber);
});

let nSymbolPassword = document.getElementById("symbols");
nSymbolPassword.addEventListener("click", function(){
    stateSymbol = nSymbolPassword.checked;
    console.log("Etat symbole:",stateSymbol);
});


let formData = document.querySelector("form");
formData.addEventListener("submit", (event) =>{
    //empecher evenement pas default
    event.preventDefault();
    console.log("Reachagement de page désactiver");
});

let butonGenerate = document.getElementById("btn");
butonGenerate.addEventListener("click", (event)=>{

    if(event.button === 0){
        let nMaskPassword = ((stateUpperCase << DECALAGE_UPPER) | 
                            (stateLowerCase << DECALAGE_LOWER) | 
                            (stateSymbol << DECALAGE_SYMBOL) | 
                            (stateNumber << DECALAGE_NUMBER));

        console.log("la valeur du mask", nMaskPassword);
        displayPassword = document.getElementById("display_password")
        displayPassword.value = fGeneratePassword(valLenghtPass, nMaskPassword);
    }
});

