import React from "react";
import { Icon } from '@iconify/react';
import '../styles/Testimonial47.css'


function Userprofil({photo,name,position }){
    return(
    <div className="containt-profil">
        <img src={photo} alt="profil photo" />
        <h4 > {name} </h4>
        <p>{position}</p>
    </div>
    )
}

class Testimonial extends React.Component{
    constructor(props){
        super(props);
    }
    state ={
        index: 0,
    };

    componentDidMount(){
        const length = this.props.datas.length - 1;
        setInterval(() => {
            if(this.state.index < length){
                this.setState({index: this.state.index + 1})
                console.log("fdgsgtsehetsdg",this.props.datas.length)
            }else{
                this.setState({index: 0})
            }
        }, 10000);
    }


    render(){
        const {index} = this.state;
        const {text, name, photo, position} = this.props.datas[index]
        return(
            <div className="containt"> 
                <div className="grid-text">
                    <div className="progress-bar"> </div>
                    <Icon className= "icon-left" icon="bi:quote" color="white" width="30" height="30" rotate={2} />
                    <p className="text"> {text} </p>
                    <Icon className= "icon-right" icon="bi:quote" color="white" width="30" height="30" />
                </div>
                <Userprofil 
                    photo={photo}
                    position={position}
                    name={name}
                />
            </div>
        )
    }
}

export default Testimonial