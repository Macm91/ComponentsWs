import React, { Component } from "react";
import './App.css';
import DisplayName from "./DisplayName/DisplayName";
import NameList from "./NameList/NameList";
import AlertUser from "./AlertUser/AlertUser";


class App extends Component {
    constructor(props){
        super(props);
        this.person = [
            {firstName: 'Reggie', lastName: 'White'},
        ];
        this.names = [
            'Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'
        ]

        this.state = {
            personNumber: 0,
        };
    }

    alert = () => {
       
    }

    render (){
        return(
        <div className= "container-fluid">
            <DisplayName person={this.person[this.state.personNumber]} />
            <NameList names={this.names}/>
            <AlertUser alert= {this.alert}/>
        </div>
        )
    }
}


export default App;