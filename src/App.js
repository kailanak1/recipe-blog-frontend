import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { api } from './services/api'

//components
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar';
import Login from './components/Login';
import AddRecipeForm from './components/AddRecipeForm';
import Profile from './components/Profile';
import SignUp from './components/Signup';


//redux
import store from './redux/store'
import {Provider} from 'react-redux'
import {fetchUsers} from './redux'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      auth: {
        user: {},
        errors: false 
     
      }
    };
  }
  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token) {
      api.auth.getCurrentUser().then(user => {
        const updatedState = { user };
        this.setState({ auth: updatedState });
      });
    }
  }

  createUser = (event) => {
    let newUser = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    api.auth.createUser(newUser).then(res => {
      if (res.error){
       this.setState({errors: true})
     } else {    
       this.login(res);
       this.setState({errors: false})
     }
   })
  }


login = data => {
  const updatedState = { user: {id: data.user.id,  username: data.user.username}};
  console.log(updatedState)
  localStorage.setItem("token", data.jwt);
  this.setState({ 
    auth: updatedState
  });
};

logout = () => {
  localStorage.removeItem("token");
  this.setState({
    auth: { user: {} },
    errors: null
  });
};


  render(){
    return (
      // <Provider store={store}>
      <div className="App">
        <Router>
        <header className="App-header">
            <h1 style={{margin: '5px', paddingLeft: '10px', paddingTop: '5px', fontStretch: '200%'}}>Recipe Blog </h1>
            <Navbar className='navbar' logout={this.logout} user={this.state.auth.user} />
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
            render={props => <Login {...props} onLogin={this.login} />}
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
              render={props => <SignUp {...props} appState={this.state} onCreateUser={this.createUser} />}
            />
  
        </div>
        </Router>
      </div>
    // </Provider>
    
      );
    }
  }
  

  