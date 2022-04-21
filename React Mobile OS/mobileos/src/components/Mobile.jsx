import "./Mobile.css"

export const Mobile = ()=>{
    
    const osname=[{name:"Android" ,style:"disc"},{name:"Blackberry" ,style:"disc"},{name:"iPhone" ,style:"disc"},{name:"Windows Phone" ,style:"disc"}]
    
    
    
    return(
       <div>
           <h1><span>Mobile</span><span>Operating</span>System</h1>,
           {osname.map((el)=>(
               <li className={el.style}>{el.name}</li>
           ))}
       </div> 
    );
}