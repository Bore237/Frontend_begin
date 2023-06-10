import '../style/Joke.css'

function JokeCard({joke}){

    return(
        <div className='container'>
            <h3>Don't Laugth Challenge</h3>
            <div className='joke'> {joke[0]}</div>
            <btn className='btn' >Get Another Joke </btn>
        </div>
    )
}

export default JokeCard;