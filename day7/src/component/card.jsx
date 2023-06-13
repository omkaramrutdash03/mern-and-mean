import React from "react";
import {useState} from "react";
function Card(){
    const [change,setChange]=useState(false);
   const handleClick=()=>{
        setChange(true);
    }
    return(
        <div>
           {change ===false ? <h1>Card</h1>: <h1>Card Changed</h1> }
           <button onClick={handleClick}>Click me</button>
        </div>
    )
    // const getData =async()=> {
    //     await fetch("");
    //     method: "GET"
    // }
}
export default Card;