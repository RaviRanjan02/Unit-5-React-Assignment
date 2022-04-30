import React, { useState } from "react";

import Todo from "./Todo"

const Todolist=()=>{
    const [todo, setTodo]=useState([])

    const getData=(text)=>{
        setTodo([...todo,text])
    }

    return (

    <div>
        <Todo getData={getData}/>
        <div className="maincon">
            {
                todo.map((el)=>(
                    <div className="input">
                        <div className="inputtext">
                            <input className="form_check" type="checkbox" value=""/>
                        </div>
                        <div>{el}</div>
                    </div>
                ))

                
            }

        </div>
    </div>
    
)

}

export default Todolist