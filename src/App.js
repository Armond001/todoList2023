/*
import './App.css';
import InstagramPost from"./instagramPost";

function App() {
  return (
    <>
    
      <InstagramPost 
       numberOfLikes={"30"}
       userName={"jacob"}
       caption={"hell yeah"}
      
      />
      <InstagramPost
       numberOfLikes={"3"}

      />
      <InstagramPost
         numberOfLikes={"300"}
      />
    </>
  )
}

export default App;
*/



import React from "react";
import ListItem from "./ListItem";




function App(){
  const [userEnteredTodo,setEnterTodo] = React.useState("");
  const[listItems,setListItems] = React.useState([]);
  // this is basically 

  /*
  const usestate=()=>{
    //logic goes here
    return[yourVariable,setYourVariable]
  }
  */

  const saveItemClearInput = () =>{
    setListItems([
      ...listItems,userEnteredTodo
    ])
    setEnterTodo("");
  }

  return(
    <div>
      <ul>
        {
          listItems.map((item,index) => {
              return(
                <ListItem 
                item ={ item}
                key={index}
                index={index}
                listItems={listItems}
                setListItems={setListItems}
                /> 
              )
            
          })
        }

      </ul>
      <input 

        onChange={(event)=> {
          setEnterTodo(event.target.value)
        // setListItem([event.target.value])
        }}

        onKeyDown={(event) =>{

          if (event.key==="Enter"){
            saveItemClearInput()
          }
         // setEnterTodo(even,target,value)
        }}

         // add logic to clear input
         value={userEnteredTodo}

        />


        <button
          onClick={() =>{
            saveItemClearInput()

          }}

        >add</button>
    </div>
  );
};

export default App