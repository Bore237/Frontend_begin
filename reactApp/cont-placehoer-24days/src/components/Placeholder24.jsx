import '../styles/Placeholder24.css'
import React from "react"
import imageBac from '../assets/picture-placeholder.avif'

function userInfo({name, date, profil}){
    return(
        <div className='user-containt'>
            <img src={profil} alt="profil" className="user-profile"/>
            <h2 className='user-name'> {name} </h2>
            <h3 className='user-date'> {date}</h3>
        </div>
    )
}

class Placeholder24 extends React.Component {
    
    constructor(props){
        super(props)
    }
    render(){

        return(
            <div className='containt'>
                <img src= {imageBac} alt='bacground image' />
                <h3> Lorem ipsum dolor sit amet </h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis </p>
                <userInfo
                    name = {this.props.user.name} 
                    date = {this.props.user.date} 
                    image = {this.props.user.profil}
                />
            </div>
        )
    }
}

export default Placeholder24