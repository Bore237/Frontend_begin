import '../style/Nav.css';
import { useState } from 'react';


function NavTool(){

    const [valeur, setValeur] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleChange = (event) =>{
        setValeur(event.target.value);
    }

    const handleClick = ()=>{
        const nav = document.getElementById('nav')
        //ajoute la classe active si elle existe et fait le contraire si non
        nav.classList.toggle('active');
    }

    return(
        <div className='nav-containt'>
            <nav className='active' id='nav'> 
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className="icon" id="toggle" onClick={handleClick}>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                </div>
            </nav>
            <form id="form" onSubmit={handleSubmit}>
                <input 
                    className='search' 
                    type='text' 
                    placeholder='Search'
                    onChange={handleChange}
                /> 
            </form>

        </div>
    )
}


export default NavTool;

