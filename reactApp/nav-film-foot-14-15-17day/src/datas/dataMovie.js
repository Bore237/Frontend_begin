
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'


let data =[ ];

fetch(API_URL)
.then((resul) =>{ 
    return resul.json();
})
.then((datas) =>{
    data = [datas.results];
})

export const  dataMovie = data;
