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
import RecipeList from './components/RecipeList';



//redux
import store from './redux/store';
import {Provider} from 'react-redux';
import {fetchUsers} from './redux';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      auth: {
        user: {},
        errors: false, 
        recipes: [], 
        myrecipes: [],
        newestThree: []
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
    this.fetchRecipes()
  }

  fetchRecipes = () =>{
    api.recipes.getRecipes().then(data => {
      this.setState({
        recipes: data
      })
    })
  }


  createUser = (event) => {
    let newUser = {
      username: event.target.username.value,
      password: event.target.password.value,
    }
    api.auth.createUser(newUser).then(res => {
      console.log(res)
      if (res.error){
       this.setState({errors: true})
     } else {    
       this.login(res);
       this.setState({errors: false})
     }
   })
  }


login = data => {
  console.log(data)
  const updatedState = { user: {user_id: data.user.id,  username: data.user.username}};
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


addRecipe = (event) => {
 
  let newRecipe = {
    title: event.target.title.value,
    main_pic: event.target.main_pic.value, 
    summary: event.target.summary.value,
    ingredients: [{name: event.target.name.value, amount: event.target.amount.value}],
    steps: event.target.steps,
    tags: event.target.tags.value,
    user_id: this.state.auth.user.id
    //use token user_id
  }
  console.log(newRecipe)
  fetch("http://localhost:3000/api/v1/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: localStorage.getItem("token")
    }, 
    body: JSON.stringify(newRecipe)
  })
  .then(resp => resp.json())
  .then(data => 
    console.log(data))
  }

  spliceForLanding = () => {
    let newest = this.state.recipes.splice(-1, 3)
    
    this.setState({
      newestThree: newest
    })
  }



  render(){
   
    return (
      // <Provider store={store}>
      <div className="App">
        <Router>
        <header className="App-header">
            <h2 style={{margin: '5px', paddingLeft: '10px', paddingTop: '5px', fontStretch: '100%'}}>Show Me the Recipe </h2>
            <Navbar className='navbar' logout={this.logout} user={this.state.auth.user} />
          </header>
        <div className = "main">
  
          <Route 
            exact 
            path='/'
            render={props => <LandingPage {...props} appState={this.state}/>}
          />
  
          <Route 
            exact 
            path='/login'
            render={props => <Login {...props} onLogin={this.login} />}
          />
  
          <Route 
            exact 
            path='/add-recipe'
            render={props => <AddRecipeForm {...props} onAddRecipe={this.addRecipe}/>}
          />
  
  
            <Route 
              exact
              path='/profile'
              render={props => <Profile {...props} appState={this.state} />}
            />
  
            <Route 
              exact
              path='/signup'
              render={props => <SignUp {...props} appState={this.state} onCreateUser={this.createUser} />}
            />

          <Route 
              exact
              path='/recipes'
              render={props => <RecipeList {...props} appState={this.state}/>}
            />
  
        </div>
        </Router>
      </div>
    // </Provider>
    
      );
    }
  }
  

  