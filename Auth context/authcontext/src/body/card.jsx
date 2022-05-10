import {AuthContext} from "../context/AuthContext";
import { useContext } from "react";


export const Card=()=>{

const {handleChange} = useContext(AuthContext)


    return (
        <div>
        <button onClick={()=>{
           handleChange()
        }} >Go to log in</button>
    </div>
    )
}