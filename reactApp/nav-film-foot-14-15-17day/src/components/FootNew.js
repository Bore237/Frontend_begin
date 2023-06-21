import React from 'react';
import '../style/FootNew.css'
import { Icon } from '@iconify/react';


class FootNew extends React.Component{
    constructor(props){
        super(props);
        this.funCount = this.funCount.bind(this)
    }
    state = {
        count: 0,
    };

    componentDidMount(){
        this.countIcont = setInterval(this.funCount, 1);
    }

    componentWillUnmount(){
        clearInterval(this.countIcont);
    }

    funCount = () => {
        const {count} = this.state;
        const threshold = this.props.max ;
        const pasInterval = this.props.pasInterval;
        if(count < threshold){
            this.setState({count: count + pasInterval})
            if(count > threshold){
                this.setState({count: threshold})
            }
        }else{
            clearInterval(this.countIcont);
        }
    };

    render(){
        const {count} = this.state;
        return(
            <div className='footer-contain'>
                <Icon icon={this.props.iconName} color={this.props.color} width={this.props.width} height= {this.props.height} /> 
                <h2 style={{color: this.props.color }}> {count} </h2>
                <h4 style={{color: this.props.color }}> {this.props.title} </h4>
            </div>
        );
    }
}

export default FootNew;
