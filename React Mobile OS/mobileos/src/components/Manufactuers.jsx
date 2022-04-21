 import "./Manufactuers.css"
 
 
 export  const  Manufactures = ()=>{
      
    const data = [{name:"Samsung" ,style: "square"},{name:"HTC" , style: "square"},{name:"Micromax" , style:"disc"},{name:"Apple" , style:"circle"}]
    
    
    return(
        
        <div>
            <h1>Mobile Manufacturers</h1>,
            {data.map((el)=>(
                <li className={el.style}>{el.name}</li>
            ))}
        </div>  
       )
}