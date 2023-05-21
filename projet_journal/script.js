const CLOSE_BTN = 0
const OPEN_BTN = 1

const btnOpenClose = document.querySelectorAll('.containt_circle button');
const blockRaduis = document.querySelector('.containt_circle');
const feuille = document.querySelector('.containt');
btnOpenClose[0].style.display = "none"


let stateBtn = false;

// document.addEventListener('mousemove', function(event) {
//     var x = event.clientX;
//     var y = event.clientY;
//     console.log('Coordonnées de la souris : ' + x + ', ' + y);
// });

//btnOpenClose.forEach(boutton => {})

//If on click on the open buton
btnOpenClose[OPEN_BTN].addEventListener("click", (event)=> {
    if((event.button === 0)){
        if(stateBtn === false){
            btnOpenClose[OPEN_BTN].style.display = "none";
            btnOpenClose[CLOSE_BTN].style.display = "block"
            stateBtn = true;
            feuille.style.transform = `rotate(-${20}deg)`;
            blockRaduis.style.transform = `rotate(${20}deg)`;
        }
    }
});

//if on the click on the close button
btnOpenClose[CLOSE_BTN].addEventListener("click", (event)=> {
    if(event.button === 0){
        if(stateBtn === true){
            btnOpenClose[CLOSE_BTN].style.display = "none";
            btnOpenClose[OPEN_BTN].style.display = "block";
            stateBtn = false;
            feuille.style.transform = `rotate(${0}deg)`;
            blockRaduis.style.transform = `rotate(${0}deg)`;
        }
    }
}); 



