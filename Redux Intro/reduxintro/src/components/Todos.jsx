import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import {addTodos} from '../Redux/action'

const Todos=()=>{
    const dispatch= useDispatch();
    const todos= useSelector(store=>store.todos)
    const [text, settext]=useState("");
    
    const handlechange=(e)=>{
        settext(e.target.value);
    }

    const handleSubmit=()=>{
        dispatch(addTodos({
            title:text,
            status:false
        }))
    }


    return (
        <div className="maincontainer">
            <input className="maininput" onChange={handlechange} type="text" placeholder="Enter Todo"></input>
            <button className="mainbutton" onClick={handleSubmit}>Submit</button>
            {todos.map((e)=>(
                <h2>{e.title}</h2>
            ))}
        </div>
    )
} 

export default Todos;
