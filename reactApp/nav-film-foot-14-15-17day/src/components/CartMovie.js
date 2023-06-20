import { useEffect } from 'react';
import '../style/CartMovie.css'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'


function CartMovie({id, title, img, note, overview}){   
     
    function getClassByRate(vote) {
        const idCart = document.getElementById(`cart${id}`)
        const overviewCart = idCart.querySelector('.Cart-info span');
        
        if(vote >= 8) {
            overviewCart.style.color = 'green'
        } else if(vote >= 5) {
            overviewCart.style.color = 'orange'
        } else {
            overviewCart.style.color = 'red'
        }
    }

    function showOverview(id, val){
        const idCart = document.getElementById(`cart${id}`)
        const overviewCart = idCart.querySelector('.Cart-overview');
        //Ajout and remove overview
        val ?  overviewCart.classList.add('show') :
        overviewCart.classList.remove('show')
    }

    useEffect(() =>{
        getClassByRate(note)
    }, [note])

    return(
        <li key={id+'card'} id={'cart'+id} className='Cart-containt' 
            onMouseMove={() =>{
                showOverview(id, true);
            }}
            onMouseLeave={() =>{
                showOverview(id, false);
            }}
        > 
                <img src= {IMG_PATH + img} alt= {title} />
                <div className='Cart-info'>
                    <h3> {title}  </h3> 
                    <span > {note}  </span>
                </div>

                <div className='Cart-overview'>
                    <h3> Overview </h3>
                    {overview}
                </div>
        </li>
    );
}

export default CartMovie;