import { createContext, useState } from "react";

export const AuthContext=createContext();

export  const AuthContextProvider=({children})=>{

    const [enter,setEnter]=useState("success");

    const handleChange=()=>{
        setEnter(enter=== "success"?  "in" : "out")
    }

    return (
     <AuthContext.Provider value={{enter,handleChange}}>
        {children}
    
     </AuthContext.Provider>   
    )
}