import React from "react";

const Square = (props) => {
    return(
        <div 
        onClick={props.onClick}
        style={{border:"1px solid", 
        height:"100px",
         width:"100%",
         display:"flex",
         justifyContent:"center",
         alignItems:"center"
        }} 
         className="square">
           <h5>{props.Value}</h5>
        </div>
    );
};

export default Square;