import React from "react";
import { useState } from "react";
import '../styles/Quiz46.css';
let  curentResponse = "";



function RadioButton({valChoise}){
    const [selected, setSelected] = useState("");

    const handleChange = (event) =>{
        setSelected(event.target.value)
        curentResponse = event.target.value; 
    }

    return(

        valChoise.map((Element, Index) => (
            <label key={Index+"radio"} className="label-quiz"> 
                <input
                    type = "radio"
                    value = {Element} 
                    checked= {selected === Element}
                    name = "option"
                    onChange={handleChange}
                />
                {Element} <br/> <br/>
            </label>
        ))
    )
}


class Quiz46 extends React.Component{
    constructor(props){
        super(props);
        this.handleClickNext = this.handleClickNext.bind(this);
        this.handleClickEnd = this.handleClickEnd.bind(this);
    }

    state ={
        indexQuiz : 0,
        endQuiz: 'False',
        resultat: 0
    };

    // Do the local copy of the data
    Ctprops = this.props.quizData;
    handleClickEnd = (event) =>{
        event.preventDefault();
        this.setState({indexQuiz: 0});
        this.setState({resultat: 0});
        this.setState({ endQuiz: 'False'})
    }
    

    handleClickNext = (event) =>{
        const {indexQuiz} = this.state;
        const {resultat} = this.state;
        event.preventDefault();
        let val = indexQuiz
        if(curentResponse !== ""){
            val++;
        }else{
            alert('Faite  un choix')
            return;
        }
        

        // Check if we have other quiz
        if(val < 4){
            this.setState({indexQuiz: val})
        // If the user answer all the quiz
        }else{
            this.setState({ endQuiz: 'True'})
        }

        //Handle the response
        if(curentResponse === this.Ctprops[indexQuiz].response){
            this.setState({resultat: resultat+1})
        }
        //clean buffer
        curentResponse = ""
    }

    render(){
        const {indexQuiz} = this.state;
        const {endQuiz} = this.state;
        const {resultat} = this.state;

        return(
            endQuiz === 'False' ?(
            <div className="Quiz"> 
                <div className="Quiz-title"> {this.Ctprops[indexQuiz].title} </div>
                <RadioButton 
                    className = "RatioButon"
                    valChoise={this.Ctprops[indexQuiz].choise}
                />
                <input type="submit" className="Btn" value="Submit" onClick={this.handleClickNext}/>
            </div>):
            (
                <div className="Quiz">
                    <p className="response-text"> Le resultat est {resultat}/4 merci</p>
                    <input type="submit" className="Btn" value="Reload" onClick={this.handleClickEnd}/>
                </div>
            )
        )
    }
}

export default Quiz46