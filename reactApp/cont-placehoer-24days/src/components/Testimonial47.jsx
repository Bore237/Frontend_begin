import React from "react";
import { Icon } from '@iconify/react';
import '../styles/Testimonial47.css'

class Testimonial extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const data = this.props.datas
        console.log("text datas", data)
        return(
            <div className="containt"> 
                <div className="grid-text">
                    <Icon className= "icon-left" icon="bi:quote" color="white" width="30" height="30" rotate={2} />
                    <p className="text"> {data[0].text} </p>
                    <Icon className= "icon-right" icon="bi:quote" color="white" width="30" height="30" />
                </div>
            </div>
        )
    }
}

export default Testimonial