import React, { Component } from "react";
import './App.css';
import DisplayName from "./DisplayName/DisplayName";


class App extends Component {
    constructor(props){
        super(props);
        this.person = [
            {firstName: 'Reggie', lastName: 'White'},
        ];
        this.state = {
            personNumber: 0
        };
    }

    render (){
        return(
        <div className= "container-fluid">
            <DisplayName person={this.person[this.state.personNumber]} />
        </div>
        )
    }

}

export default App;