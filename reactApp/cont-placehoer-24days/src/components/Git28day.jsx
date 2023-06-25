import React from "react";
import axios from 'axios';
import '../styles/Git28day.css'
const URL = 'https://api.github.com/users/'
const URL_REPOS = '/repos?sort=created'

function Repos({datas}){
    return(
        <div className="repos-desing" > 
        {datas.map((element =>(
            <a key={element.id} 
                href={element} 
                target="_blank"> {element.name} 
            </a>
        )))}
        </div>
    )
} 


function GithubCard({gitHubUser, gitHubRepos}){
    return(
        <div className="Git-Containt" > 
        <img src={gitHubUser.avatar_url} alt="avatar image" />
        <div className="info-Git">
            <h2 className="user-name"> {gitHubUser.name }</h2>
            <p> {gitHubUser.bio } </p>
            <div className="containt-network">
                <span> {gitHubUser.followers} Followers </span>
                <span> {gitHubUser.following} Following</span>
                <span> {gitHubUser.public_repos} Repos </span>
            </div>
            <Repos 
                datas = {gitHubRepos}
            /> 
        </div>
    </div>
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
        reposData: "",
        idSearch: "",
        runSeach: false,
    }

    async getData(nameSearch){
        
        const userResponse = await fetch(URL + nameSearch);
        if(! userResponse.ok){
            this.setState({runSeach: false});
            throw new alert('Failed to fetch data')
        }
        const userData = await  userResponse.json();

        //Fecthh the data of user repos 
        const reposResponse = await axios.get(URL + nameSearch + URL_REPOS)
        const userReposData = reposResponse.data;
        const data = userReposData.slice(0, 5);

        //Save the data on localstorage             
        this.setState({ 
            searchData: userData,
            reposData: data,
            runSeach: true
        });
    }
  
    handleSubmit = (event) =>{
        event.preventDefault();
        //Call the search funtion
        if(this.state.idSearch.length !== 0){
            this.getData(this.state.idSearch);
        }
        const searchLabel = document.getElementById('label');
        searchLabel.value ="";
    }

    handleChange = (event) =>{
        this.setState({
            idSearch: event.target.value,
        })
    }
    
    render(){
        // load all the local data
        const {searchData} = this.state;
        const {reposData} = this.state;
        const {runSeach} = this.state;

        return(
            <div className="All-containt"> 
                <form  onSubmit={this.handleSubmit}>
                    <input type="text" 
                    id="label"
                        className="search" 
                        placeholder="Search a Github User" 
                        onChange={this.handleChange}
                    /> 
                </form>
                {runSeach ? (
                        <GithubCard 
                            gitHubUser = {searchData}
                            gitHubRepos = {reposData} 
                        />
                ) 
                    :(<div className="Error-search"> No profile with this username </div> )
                }
            </div>
        )
    }
};

export default Git28day