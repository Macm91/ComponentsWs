import React from "react";


// write button to DISPLAY the function from App.jsx here.
//  THen export it to APp.jsx

const AlertUser =(props)=>{
    return(
        <div className="button">
            <button onClick={props.alert}>Click Me!</button>
        </div>
    )
}

export default AlertUser;