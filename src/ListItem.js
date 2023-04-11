import React from "react";
import "./ListItem.css";

const ListItem = (props) => {
     const {item,index,listItems,setListItems,onMouseOver}=props;
     const deletelistitem = (index) =>{
      // const removeItem = listItems.splice(index,1);
       // console.log("removeItem", removeItem);
       setListItems([
        ...listItems.slice(0,index),
        ...listItems.slice(index +1)
       ])
     }

const [showDeleteButton,setShowDeleteButton]= React.useState(false);

const handleMouseEnter = () => {
    console.log("mouse enter");
    setShowDeleteButton=(true);
}

const handleMouseLeave = () => {
    console.log("mouse leave");
    setShowDeleteButton=(false);
}


    return(
        <>
        <li 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
        
        {item}

        {
            showDeleteButton ?

            <button onClick={
                () => {deletelistitem(index)}}>delete
            </button>

            :null
         } 
            </li>
        </>
    )
}

export default ListItem