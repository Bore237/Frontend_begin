let balisezoneProposition = document.getElementById("zoneProposition");
console.log(balisezoneProposition);

let baliseCheckbox = document.querySelectorAll("input[name=color]")
let couleur = ""

for (let index = 0; index < baliseCheckbox.length; index++) {
    if(baliseCheckbox[index].checked === true){
        couleur = baliseCheckbox[index].value
        break;
    }
}

console.log(couleur)