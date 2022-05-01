import './App.css';
import {useSelector} from 'react-redux'
import  Todos  from './components/Todos';

function App() {
  
  const counter= useSelector((store)=>store.counter)

  return (
    <div className="App">
      <div>
        <Todos/>
      </div>
    </div>
  );
}

export default App;