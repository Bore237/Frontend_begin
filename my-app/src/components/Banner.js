import '../style/Banner.css'
import logo from'../assets/logo.png'

function Header(){
    const titre = "La maison jungle";
    return (
        <div className= 'Imj-banner'> 
            <img src={logo} alt='la maison jungle' className='Imj-logo' />
            <h1 className='Imj-title'> {titre.toUpperCase()} </h1>
        </div>  
    );
}


function Banner(){
    return( <Header/>)
}

export default Banner