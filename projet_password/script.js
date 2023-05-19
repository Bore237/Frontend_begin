//recuperer les paramètres utilisateurs
let lenghtPassword = 4;

/*
        Declaratio of variable
*/
nUperCasePassword= 0001;
nLowerCasePassword = 0010;
nNumberPassword  = 0100;
nSymbolPassword  = 1000;
let nMaskPassword = 0


/*          
        FONCTION OF SYSTHEME
*/
function fGeneratePassword(lenghtPassword, nMaskPassword){
    let sResultaPassword = " "

    switch(nMaskPassword){
        case 1:

            break;
    
        default:
            break;
    }

    return sResultaPassword
}

/*
        MAIN OF SYSTHEME
*/

nMaskPassword = nUperCasePassword;
console.log("la valeur du mask", nMaskPassword);

//Recuperer les balises
lenghtPassword     = document.getElementById("length").value;
nUperCasePassword  = document.getElementById("uppercase").checked;
nLowerCasePassword = document.getElementById("lowercase").checked;
nNumberPassword    = document.getElementById("numbers").checked;
nSymbolPassword    = document.getElementById("symbols").checked;

console.log("Les valeurs sont:",lenghtPassword, nUperCasePassword, nLowerCasePassword,
        nNumberPassword, nSymbolPassword);

fGeneratePassword(lenghtPassword, nMaskPassword);
