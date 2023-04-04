import React from "react";
import "./listem.css"
const ListItem = (props) => {
     const {item}=props;

    return(
        <>
        <li>{item}</li>
        <button>delete</button>
        
        </>
    )
}

export default ListItem