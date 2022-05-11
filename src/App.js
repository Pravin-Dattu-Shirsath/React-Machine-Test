import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home"
import Login from "./components/Login"
  import Registeruser from "./components/Registeruser"
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/register" element={<Registeruser/>}/>
       
     
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
