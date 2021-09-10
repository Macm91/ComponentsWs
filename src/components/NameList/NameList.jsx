import React from "react";
import './NameList.css'


const NameList=(props)=>{
    
        return(
        <div className='header'>
            <h2> Names </h2>
            <hr/>
            <ul className='list'>
                {props.names.map((name)=>{
                    return <li> {name} </li>
                })}
            </ul>
        </div>
        );
    }


export default NameList;