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




function App(){
  const [userEnteredTodo,setEnterTodo] = React.useState();
  const[listItems,setListItem] = React.useState([]);
  // this is basically 

  /*
  const usestate=()=>{
    //logic goes here
    return[yourVariable,setYourVariable]
  }
  */

  return(
    <div>
      <ul>
        {
          listItems.map((item,index) => {
            return(<li key={index}>{item}</li>)
            
          })
        }

      </ul>
      <input 
        onChange={(event)=> {
          setEnterTodo(event.target.value)
          console.log(setEnterTodo)
        // setListItem([event.target.value])
        }}
        />
        <button
          onClick={() =>{
            setListItem([
              ...listItems,userEnteredTodo
            ])
          }}
        >add</button>
    </div>
  );
};

export default App