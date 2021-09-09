import React from "react";


const NameList=(props)=>{
    
        return(
        <React.Fragment>
            <h2> Names </h2>
            <hr/>
            <ul className='list'>
                {props.names.map((name)=>{
                    return <li> {name} </li>
                })}
            </ul>
        </React.Fragment>
        );
    }


export default NameList;