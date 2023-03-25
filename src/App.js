import logo from './logo.svg';
// import './App.css';
import Registration from './Components/Registration';
import { Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      
      <Routes>

      <Route exact path="/" element={<Registration/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/dashboard" element={<Dashboard/>}></Route>


      </Routes>

    </div>
  );
}

export default App;
