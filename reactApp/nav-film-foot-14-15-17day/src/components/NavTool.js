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

    return(
        <div className='nav-containt'>
            <div className='nav'> 
                <a href='#'>Home</a>
                <a href='#'>Works</a>
                <a href='#'>About</a>
                <a href='#'>Contact</a>
                <div className='icon'>
                    <div className='ligne ligne1'></div>
                    <div className='ligne ligne2'></div>
                </div>
            </div>
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

