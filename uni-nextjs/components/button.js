import React, { useEffect } from "react";

function Button(props){

    return(
        <button onClick={() => { props.onclick() }} style={props.color ? { 'color' : props.color} : {}} className="btns">{props.name}</button>
    )
}

export default Button;