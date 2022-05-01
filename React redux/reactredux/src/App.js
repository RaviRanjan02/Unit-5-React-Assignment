import './App.css';
import { Todos } from './components/Todos';
import {Routes, Route} from "react-router-dom";
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todolist' element={<Todos></Todos>}></Route>
      </Routes>
    </div>
  );
}

export default App;