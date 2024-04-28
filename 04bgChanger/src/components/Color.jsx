import React from "react";

function Color(props){
    const className ="rounded-xl border-2 border-solid border-black";
    return(
        <button className={className} style={{backgroundColor:props.colorName}}>
            <h3 className={props.textColor}>{props.textContent}</h3>
        </button>
    )
}
export default Color;