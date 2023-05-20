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
const BUFFER_SYMBOLE      = '!@#$%^&*()/;[,]|?<_>-';
const DECALAGE_UPPER      =  0
const DECALAGE_LOWER      =  1
const DECALAGE_NUMBER     =  2
const DECALAGE_SYMBOL     =  3
/*          
    FONCTION OF SYSTHEME
*/
function fGenerateString(lenghtPassword, bufferHandle, numberType)
{
    let  sResultaPassword = "";
    if(numberType == false){
        containTypeCase = bufferHandle;
        let charLength = bufferHandle.length;
        for ( var i = 0; i < lenghtPassword; i++ ) {
            sResultaPassword += containTypeCase.charAt(Math.floor(Math.random() * charLength));
        }
    }else{
        sResultaPassword = Math.random().toString(10).substring(2,lenghtPassword+2);
    }

    return sResultaPassword;
}

function fGeneratePassword(lenghtPassword, nMaskPassword){
    let sResultaPassword =" ";

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

            break;
        case NUMBERCASE:
            sResultaPassword = fGenerateString(lenghtPassword, null, true)
            break;
        case UPPER_NUMBER_CASE:

            break;
        case LOWER_NUMBER_CASE:

            break;
        case UPPER_LOWER_NUMBER_CASE:

            break;
        case SYMBOL_CASE:
            sResultaPassword = fGenerateString(lenghtPassword, 
                                                BUFFER_SYMBOLE, false);
                                                console.log("check", sResultaPassword)
            break;
        case UPPER_SYMBOL_CASE:

            break;
        case LOWER_SYMBOL_CASE:

            break;
        case UPPER_LOWER_SYMBOL_CASE:

            break;
        case NUMBER_SYMBOL_CASE:

            break;
        case UPPER_NUMBER_SYMBOL_CASE:

            break;
        case LOWER_NUMBER_SYMBOL_CASE:

            break;
        case UPPER_LOWER_NUMBER_SYMBOL_CASE:

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

