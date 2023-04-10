import React from "react";
import "./ListItem.css";

const ListItem = (props) => {
     const {item,index,listItems,setListItems}=props;
     const deletelistitem = (index) =>{
      // const removeItem = listItems.splice(index,1);
       // console.log("removeItem", removeItem);
       setListItems([
        ...listItems.slice(0,index),
        ...listItems.slice(index +1)
       ])
     }


    return(
        <>
        <li>{item}
        <button onClick={
            () => {deletelistitem(index)}}>delete</button>
        </li>
        </>
    )
}

export default ListItem