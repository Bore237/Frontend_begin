const motApplication = "bonjour"
//let nomUtilsateur = prompt("Entrer un mot:")
let nomUtilsateur = "hhh"
let motTapeOk = true

console.log("le mot  entrer est:" + motApplication)
    
if(nomUtilsateur === motApplication){
    motTapeOk = true
}else{
    motTapeOk = false
}


if(motTapeOk){
    console.log("Bravo, vous avvez correctement tapé le mot")
}else{
    console.log("echec, vous an'vvez pas correctement tapé le mot")
}

