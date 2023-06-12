import '../style/CartMovie.css'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

function CartMovie({id, title, img, note, overview}){    

    return(
        <div className='Cart-containt' >
            <img src= {IMG_PATH + img} alt= {title} />
            <div className='Cart-info'>
                <h3> {title}  </h3> 
                <span> {note}  </span>
            </div>

            <div className='Cart-overview'>
                <h3> Overview </h3>
                {overview}
            </div>
        </div>
    );
}

export default CartMovie;