import '../style/Joke.css'
import React, { useState, useEffect } from 'react';


function JokeCard(){
    const [count, setCount] = useState(0);
    const [joke, setJoke] = useState('');

    async function generateJoke() {
        const config = {
          headers: {
            Accept: 'application/json',
          },
        }
      
        const res = await fetch('https://icanhazdadjoke.com', config)
      
        const data = await res.json()
      
        setJoke(data.joke);
    }

    useEffect(()=>{
        if(count >= 20){
            setCount(1); 
            alert('Daje 20 blague cliquer pour continuer')
        }
    }, [count])

    return(
        <div className='container'>
            <h3>Don't Laugth Challenge</h3>
            <div className='joke'> {joke}</div>
            <button className='btn' 
                onClick={() =>{
                    setCount(count+1); 
                    generateJoke();
                }}
            >
            Get Another Joke </button>
        </div>
    )
}

export default JokeCard;