import React, { Component } from "react";
import './App.css';
import DisplayName from "./DisplayName/DisplayName";
import NameList from "./NameList/NameList";
import AlertUser from "./AlertUser/AlertUser";
import SuperHeroTable from "./SuperHeroTable/SuperHeroTable";
import SuperheroCreateForm from "../SuperheroCreateForm/SuperheroCreateForm";

class App extends Component {
    constructor(props){
        super(props);
        this.person = [
            {firstName: 'Reggie', lastName: 'White'},
        ];
        this.names = [
            'Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'
        ];
        this.superheroes = [
            {
                superheroId: 1,
                name: 'Batman',
                primaryAbility: 'Wealthy',
                secondarAbility: 'Rich'
            },
            {
                superheroId: 2,
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondarAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondarAbility: 'Shoots web'
            },
            {
                superheroId:4,
                name: 'Hulk',
                primaryAbility: 'Smash',
                secondarAbility: 'not losing pants when transforming'
            }
        ];

        this.state = {
            personNumber: 0,
        };
    }

    alertButton = ()=> {
            alert('devCodeCamp')
    }

    createSuperhero =(newSuper)=> {
        this.superheroes.push(newSuper);
        this.setState({
            personNumber: this.superheroes.length - 1
        })
    }

    render (){
        return(
        <div className= "container-fluid">
            <DisplayName person={this.person[this.state.personNumber]} />
            <NameList names={this.names}/>
            <AlertUser alert={this.alertButton}/>
            <SuperHeroTable superheroes={this.superheroes}/>
            <SuperheroCreateForm createSuperhero={this.createSuperhero}/>
        </div>
        )
    }
}


export default App;