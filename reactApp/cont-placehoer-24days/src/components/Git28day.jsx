import React from "react";
const URL = 'https://api.github.com/users/'

function Repos({datas}){
    return(
        datas.map((element =>(
            <a href=""> </a>
        )))
    )
}



class Git28day extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.handleChange = this.handleChange.bind(this);   
    }

    state = {
        searchData: "",
        idSearch: "",
        runSeach: false,
    }

    gatData(nameSearch){
        fetch(URL + nameSearch)
        .then(response => response.json)
        .then(data => () => {this.setState({
            searchData: data.results});
            console.log(this.state.searchData)
        })
        .catch(
            alert("Mauvaise connexion")
        )
    }
  
    handleSubmit = (event) =>{
        event.preventDefault();
        //Call the search funtion
        if(this.state.idSearch.length !== 0){
            this.gatData(this.state.idSearch);
            this.setState({runSeach: true})
        }else{
            this.setState({
                searchData: ""});
        }  
    }

    handleChange = (event) =>{
        this.setState({
            idSearch: event.target.value,
        })
    }
    
    render(){
        const {searchData} = this.state.searchData
        const {runSeach} = this.state.runSeach
        return(
            <div className="All-containt"> 
                <form  onSubmit={this.handleSubmit}>
                    <input type="text" className="search" 
                        placeholder="Search a Github User" 
                        onChange={this.handleChange}
                    /> 
                </form>
                {runSeach ? (
                    <div className="Git-Containt" > 
                        <img src={searchData.avatatr_url} alt="avatar image" />
                        <div className="info-Git">
                            <h2 className="user-name"> {searchData.name }</h2>
                            <p> {searchData.bio } </p>
                            <div className="containt-network">
                                <span> {searchData.followers} Followers </span>
                                <span> {searchData.following} Following</span>
                                <span> {searchData.public_repos} Repos </span>
                            </div>
                            <Repos 
                                data = {searchData.followers}
                            />
                        </div>
                    </div>
                    ) :(<> </>)}
            </div>
        )
    }
};

export default Git28day