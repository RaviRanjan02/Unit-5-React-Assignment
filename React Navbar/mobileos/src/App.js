import './App.css';

import {Links} from "./components/Links"
import{Logo} from "./components/Logo"
import {Button} from "./components/Button"
function App() {
  return (
    <div className="App">
      <Logo/>
      <Links/>
      <Button/>
    </div>
  );
}

export default App;
