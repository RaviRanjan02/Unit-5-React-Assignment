import { useState, useRef } from "react";
import './StopWatch.css';


const StopWatch = () => {
   
   const [toggle, setToggle] = useState(true)
   const [counter, setCounter] = useState(0);
   const counterRef = useRef(null);

   
   const startInterval = () => {
       counterRef.current =  setInterval(() => {
           setCounter((p) => p + 1);
       },10)
   }


   return (
       <div className="stopwatchmain">
           <h1>StopWatch</h1>
           <div className="stopmain"><img src="https://user-images.githubusercontent.com/91020498/166112747-a2243cc7-db60-4013-81da-3a538535db31.png"></img></div>
           <h1> { Math.floor(counter/6000)}m : {Math.floor((counter%6000)/100)}s : {counter%100}</h1>
            {toggle ? <button className="startmain" onClick={() => {
               startInterval()
               setToggle(!toggle)
           }}>Start</button> :   <button className="startmain"  onClick={() => {
                   clearInterval(counterRef.current)
                   setToggle(!toggle)
           }}>Stop</button>}
           
           <button className="startmain"  onClick={() => {
               clearInterval(counterRef.current)
               setCounter(0);
               setToggle(true)
           }} >Reset</button>

       </div>
   )
}

export default StopWatch;