import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar';
import Login from './components/Login';
import AddRecipeForm from './components/AddRecipeForm';
import Profile from './components/Profile';
import SignUp from './components/Signup';

function App() {
  return (
    <Provider store={store}>
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

        <Route 
          exact 
          path='/login'
          render={props => <Login {...props}/>}
        />

        <Route 
          exact 
          path='/add-recipe'
          render={props => <AddRecipeForm {...props}/>}
        />


          <Route 
            exact
            path='/profile'
            render={props => <Profile {...props}/>}
          />

          <Route 
            exact
            path='/signup'
            render={props => <SignUp {...props}/>}
          />

      </div>
      </Router>
    </div>
  </Provider>
  );
}

export default App;
