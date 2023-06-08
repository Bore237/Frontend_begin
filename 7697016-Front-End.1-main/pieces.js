//Recuperer les piece depuis le fichier Json
const response = await fetch("pieces-autos.json");
const pieces = await response.json()
const articles = pieces[0];

for (let index = 0; index < pieces.length; index++) {
    const valuePrice = 5;
    /* Create the element of the component*/
    const imageElement = document.createElement("img");
    const nomElement = document.createElement("h2");
    const prixElement = document.createElement("p");
    const categorieElement = document.createElement("p");
    const descriptionElement = document.createElement("p");
    const stateStockElement = document.createElement("p");
    
    const sectionFiches = document.querySelector(".fiches");
    // Création d’une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");

    /* Definir le contenue de nos elements */
    imageElement.src = `${pieces[index].image}`;
    nomElement.innerText = `Nom: ${pieces[index].nom }`
    prixElement.innerText = `Descriptoin: ${pieces[index].prix < valuePrice ? "€" : "€€€"}`
    categorieElement.innerText = `Descriptoin: ${pieces[index].categorie ?? "(Pas de categorie pour le moment.)"}`;
    descriptionElement.innerText = `Descriptoin: ${pieces[index].description ?? "(Pas de description pour le moment.)"}`;
    stateStockElement.innerText = `State of stock: ${pieces[index].disponibilite === true ? "En stock": "En rupture"}`;
   
    // On rattache la balise article a la section Fiches
    sectionFiches.appendChild(pieceElement);
    // On rattache l’image à pieceElement (la balise article)
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(stateStockElement);
}


const boutonTrier = document.querySelector(".btn-trier");
boutonTrier.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return a.prix - b.prix;
     });
     console.log(piecesOrdonnees);
 });

const boutonDecroissant = document.querySelector(".btn-decroissant");
boutonDecroissant.addEventListener("click", function () {
    const piecesOrdonnees = Array.from(pieces);
    piecesOrdonnees.sort(function (a, b) {
        return b.prix - a.prix;
     });
     console.log(piecesOrdonnees);
 });

const boutonFiltrer = document.querySelector(".btn-filtrer");
boutonFiltrer.addEventListener("click", function () {
   const piecesFiltrees = pieces.filter(function (piece) {
    return piece.prix <= 35;
   })
   console.log(piecesFiltrees);
});

const boutonDescription = document.querySelector(".btn-description");
boutonDescription.addEventListener("click", function () {
   const piecesFiltrees = pieces.filter(function (piece) {  
    return piece.description !== null;
   });
   console.log(piecesFiltrees);
});

const noms = pieces.map(piece => piece.nom);
for(let i = pieces.length -1 ; i >= 0; i--){
   if(pieces[i].prix > 35){
       noms.splice(i,1)
   }
}
console.log(noms)

//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for(let i=0; i < noms.length ; i++){
   const nomElement = document.createElement('li');
   nomElement.innerText = noms[i];
   abordablesElements.appendChild(nomElement)
}

// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables').appendChild(abordablesElements)



const piecedisponibleElements = document.createElement("ul")
const nomDisponibles = pieces.map(piece => piece.nom)
const prixDisponibles = pieces.map(piece => piece.prix)
for (let i=0; i < pieces.length; i++) {
    if(pieces[i].disponibilite === false){
        nomDisponibles.splice(i,1);
        prixDisponibles.splice(1,1);
    }
}


for (let i=0; i < nomDisponibles.length; i++) {
    const nomElement = document.createElement('li');
    nomElement.innerText = `${nomDisponibles[i]} - ${prixDisponibles[i]} €` ;  
    piecedisponibleElements.appendChild(nomElement)
}

document.querySelector('.disponibles').appendChild(piecedisponibleElements);




