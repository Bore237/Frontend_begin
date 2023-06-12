import { useState, useEffect } from "react"
import CartMovie from "./CartMovie";
import "../style/CartMovieList.css";
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'

function CartMovieList(){
    const [dataMovie, setDataMovie] = useState([])
    let count = 0;


    //use useEffet for fresh the element after create the coponenent
    useEffect(()=>{
        fetch(API_URL)
        .then(response => response.json())
        .then(data => setDataMovie(data.results))
        .catch(error => console.error(error))
    }, [])

    return(
        <div className="Cart-list"> 
            {dataMovie.map(movie =>(
                <CartMovie
                    id={movie.id}
                    title={movie.title}
                    note={movie.vote_average}
                    img={movie.poster_path}
                    overview={movie.overview}
                />
            ))}
        </div>
    );
}

export default CartMovieList;