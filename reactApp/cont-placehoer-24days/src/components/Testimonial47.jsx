import React from "react";
import { Icon } from '@iconify/react';
import '../styles/Testimonial47.css'

class Testimonial extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const data = this.props.text
        return(
            <div className="containt"> 
                <div className="grid-text">
                    <Icon icon="bi:quote" color="white" width="30" height="30" rotate={2} />
                    <p className="text"> {data} </p>
                    <Icon icon="bi:quote" color="white" width="30" height="30" />
                </div>
            </div>
        )
    }
}

export default Testimonial