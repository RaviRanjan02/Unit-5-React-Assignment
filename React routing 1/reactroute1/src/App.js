import './App.css';
import { Home } from './components/Home';
import { About } from './components/About';
import {Routes,Route}from 'react-router-dom'
import { Navbar } from './components/Navbar';
import { UsersList } from './components/UsersList';
import {UsersDetails} from './components/UsersDetails'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home></Home>} ></Route>
        <Route path="/about" element={<About></About>} ></Route>
        <Route path="/users" element={ <UsersList/>} ></Route>
        <Route path="/users/:id" element={ <UsersDetails/>} ></Route>


      </Routes>
   
    </div>
  );
}

export default App;