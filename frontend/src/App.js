//import logo from './logo.svg';
import React from 'react';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar.jsx';
 import Routers from './components/Routers';
 
 //import HomePage from './components/HomePage';
//import LoginPage from './components/SignupPage';
//import SignupPage from './components/SignupPage.jsx';
 



function App() {
  return (
     <div className="App">
      
      <Navbar/>
      
      <Routers/>
      

    
     </div>
  );
}

export default App;
