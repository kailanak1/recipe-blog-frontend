import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/LandingPage'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
          <h1 style={{margin: '5px', paddingLeft: '10px', paddingTop: '5px', fontStretch: '200%'}}>Recipe Blog </h1>
          <Navbar className='navbar' />
        </header>
      <div className = "main">
        <Route 
          exact 
          path='/'
          render={props => <LandingPage {...props}/>}
          />
      </div>
      </Router>
    </div>
  );
}

export default App;
