import { useState, useRef } from "react";
import './StopWatch.css';

const Timer = () => {
    
    const [toggle, setToggle] = useState(true)
    
    const [counter, setCounter] = useState(0);
   
    const [second , setSecond] = useState(0)
  
    const counterRef = useRef(null);
   
    
   
    const handlesecond = (e) => {
        console.log("se",e.target.value)
        setSecond(e.target.value)
    }


    const startInterval = () => {
        counterRef.current =  setInterval(() => {
            setCounter((p) => {
                 if (p > 0) {
                     return p - 1;
                }else {
                return 0
                }
                
            });
        },1000)
    }

   return (
       <div className="stopwatchmain">
           <h1>Timer</h1>
           <div className="timer"><img src="https://user-images.githubusercontent.com/91020498/166112747-a2243cc7-db60-4013-81da-3a538535db31.png" alt=""></img></div>
         
           <input className="time" type="Number" placeholder="Enter time in Seconds" onChange={handlesecond} />
           <h1>  {Math.floor(counter/3600)}h  {Math.floor((counter%3600)/60)}m : {counter % 60}s</h1>

           {toggle ? <button className="startmain" onClick={() => { 
               setCounter(second)
               startInterval()
               setToggle(!toggle)
           }}>Start</button> :   <button className="startmain" onClick={() => {
                   clearInterval(counterRef.current)
                   setToggle(!toggle)
           }}>Stop</button>}
           
           <button className="startmain" onClick={() => {
               clearInterval(counterRef.current)
               setCounter(0);
               setToggle(true)
           }} >Reset</button>

       </div>
   )
};

export default Timer;