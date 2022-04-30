import './App.css';
import{useState} from "react";
import  Button from './components/Button';


function App() {

  const [theme,setTheme]=useState("dark")

  return (
    <div className="App">
      <h3>Theme:{theme}</h3>
     <Button 
     onClick={()=>{
       setTheme(theme==="light"? "dark":"light")
     }} 
     >Primary button</Button>

     <Button variant="hollow" theme={theme} children="default button" />

     <Button children="dashed button" />
    
    </div>
  );
}

export default App;
