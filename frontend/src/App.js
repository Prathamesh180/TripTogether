//import logo from './logo.svg';
import React from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

 import Routers from './components/Routers';
// import HeroSection from './components/HeroSection';
//import LoginPage from './components/SignupPage';
//import SignupPage from './components/SignupPage.jsx';
import Navbar from './components/Navbar.jsx'; 



function App() {
  return (
     <div className="App">
      {/* <SignupPage/> */}
      <Navbar/>
      <Routers/>

    
     </div>
  );
}

export default App;
