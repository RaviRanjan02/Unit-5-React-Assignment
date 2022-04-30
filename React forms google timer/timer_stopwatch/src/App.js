import './App.css';
import  Timer  from "./components/Timer";
import StopWatch from "./components/StopWatch"
import { useState } from 'react';

function App() {

  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <div className='flex'>
        <div onClick={() => (
          setShow(!show)
        )} ><button className='maintimer'>Timer</button></div>
        <div onClick={() => (
          setShow(!show)
        )} ><button className='mainStop'>StopWatch</button></div>
      </div>
      {show ?<StopWatch /> : <Timer/>}
    </div>
  );
}

export default App;