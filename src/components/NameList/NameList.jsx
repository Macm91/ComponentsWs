import React from "react";


const NameList = (props) => {
    return(
        <div class='nameList'>
            <ul className='list'>
                <li className='singleName'>{props.name}</li>
            </ul>
        </div>
    )
}

// Iterating throught the list through props needs to be figured out.
// Need to update the name= blah in NameLIst in render