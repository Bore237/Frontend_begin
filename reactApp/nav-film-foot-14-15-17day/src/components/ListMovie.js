import { useState, useEffect } from "react"
import CartMovie from "./CartMovie";
import "../style/CartMovieList.css";

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'


function ListMovie({searchTerm}){
    let count=0;
    const [dataMovie, setDataMovie] = useState([]);

    //use useEffet for fresh the element after create the coponenent
    async function getData(url){
        fetch(url)
        .then(response => response.json())
        .then(data => {setDataMovie(data.results);
        })
        .catch(error =>{
            alert('Mauvaise conection',error);
            window.location.reload();
        } )
    }
    //Fait appel lors de la creation du composant
    useEffect(()=>{
        getData(API_URL)
    }, [])

    //Fait appel a chaque recherche
    useEffect(()=>{
        if(searchTerm.length !== 0) {
            console.log('Okay input:', searchTerm)
            getData(SEARCH_API + searchTerm);
        } else {
            //window.location.reload();
            console.log('false input:', searchTerm)
        }
    }, [searchTerm.length]);

    return(
        <div  className="Cart-list" > 
            {dataMovie.map(movie =>(
                <div key={count++}>
                    <CartMovie
                        id={movie.id}
                        title={movie.title}
                        note={movie.vote_average}
                        img={movie.poster_path}
                        overview={movie.overview}
                    />
                </div>
            ))}
        </div>
    );
}

export default ListMovie;