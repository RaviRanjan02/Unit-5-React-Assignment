import React from "react";
import "./Counter.css"
import { useState } from "react";

const Counter =()=>{
    
    const [counter ,setCounter] = useState(0);
    
    const handleChange =(x)=>{
        x===2 ? setCounter(counter*2):setCounter(counter+x)
    }
    
    
    return (
    <div>
        <h1 className={counter % 2 === 0 ? "even" : "odd"}>Counter:{counter}</h1>
        <button onClick={()=>{handleChange(+1)}}>Increment</button>
        <button onClick={()=>{handleChange(-1)}}>Decrement</button>
        <button onClick={()=>{handleChange(2)}}>Double</button>
    </div>
    )
}


export default Counter
