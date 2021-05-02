import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import Navbar from './Components/Navbar';
import { Switch, Route } from 'react-router-dom';
import About from './Pages/About/About';
import HomePage from './Pages/HomePage';
import { useState } from 'react';
import NavbarSmall from './Components/NavbarSmall/NavbarSmall';
import { Container } from 'react-bootstrap';


function App() {
  const [ navToggle, setNavToggle ] = useState(false);
  
  const navClickHandler = () => {
    setNavToggle( !navToggle)
  }


  return (
      <div className="App">
        <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
          <Navbar></Navbar>
          
        </div>
        {/* <div onClick={navClickHandler} className="nav-btn">
          <div className="lines-1"></div>
          <div className="lines-2"></div>
          <div className="lines-3"></div>
        </div> */}
        <div className="main-content">
        <div className="small-nav">
          <NavbarSmall></NavbarSmall>
        </div>
          <div className="content">
            <HomePage></HomePage>
          </div>
        </div>
      </div>
  );
}

export default App;
