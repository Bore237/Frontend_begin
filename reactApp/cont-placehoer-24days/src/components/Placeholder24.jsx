import '../styles/Placeholder24.css'
import React from "react"
import imageBac from '../assets/picture-placeholder.avif'
import profilImag from '../assets/profil-image.jpg'

function UserInfo({user}){
    return(
        <div className='user-containt'>
            <img src={profilImag} alt="profil" className="user-profile"/>
            <h2 className='user-name'> {user.name} </h2>
            <h3 className='user-date'> {user.date}</h3>
        </div>
    )
}


class Placeholder24 extends React.Component {
    
    render(){

        return(
            <div className='containt'>
                <img src= {imageBac} alt='bacground image' />
                <h3> Lorem ipsum dolor sit amet </h3>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis </p>
                <UserInfo
                    user = {this.props.user}
                />
            </div>
        )
    }
}

export default Placeholder24