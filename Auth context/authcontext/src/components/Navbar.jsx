import {AuthContext} from "../context/AuthContext";
import { useContext } from "react";

export const Navbar=()=>{
    const {enter}=useContext(AuthContext)
    

    return (
        <div >
        Login:{enter=== "success" ? "in" : "out"}
    </div>
    )

}