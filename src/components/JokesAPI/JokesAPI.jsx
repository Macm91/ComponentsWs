import React, { Component } from "react";
import './JokesAPI.css';


// I NEED TO IMPORT SOFTWARE TO USE AXIOS 
// CORSHEADERS    




class JokesAPI extends Component{
    state = {
      joke: []
        }
    
    componentDidMount (){
        axios.get('https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=5')
        .then(response => this.setState({
            joke: response.data
        }));
    }

}


export default JokesAPI;
