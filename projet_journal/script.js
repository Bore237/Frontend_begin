const circle_DOM = document.querySelector('.containt_circle input');
const feuille = document.querySelector('.containt');
let stateBtn = false;

// Blocage du border de l'élément
feuille.style.border = '1px solid black';
feuille.style.borderRadius = '0';

const transformation = `rotate(${5}deg) translate(${100}px, 
                        ${33}px) rotate(-${50}deg)`;


// document.addEventListener('mousemove', function(event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     console.log('Coordonnées de la souris : ' + x + ', ' + y);
// });

const point ={x: 90, y: 600, angle: 25}

circle_DOM.addEventListener("click", (event)=> {
    if(event.button === 0){
        if(stateBtn === false){
            circle_DOM.value = "Close";
            stateBtn = true;
            feuille.style.transform = `rotate(-${20}deg)`;
            // let x = (feuille.offsetLeft - point.x) * Math.cos(point.angle) - 
            // (feuille.offsetTop - point.y) * Math.sin(point.angle) + point.x;

        }else{
            feuille.style.left = `${0}px`;
            feuille.style.top = `${0}px`;
            circle_DOM.value = "Open";
            stateBtn = false
            feuille.style.transform = `rotate(${0}deg)`;
        }
    }
});