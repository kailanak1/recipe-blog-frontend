import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { api } from "../services/api";
import Profile from "./Profile"
import ProfileRecipeDetail from "./ProfileRecipeDetail"

export default class ProfileContainer extends React.Component{
    constructor() {
        super();
    
        this.state = {
          myrecipes: []
        };
      }

      componentDidMount(){
       
        api.recipes.getRecipes().then(data => {
            // const filtered = (data.filter(recipe => recipe.user_id == this.props.appState.auth.user.id))
            this.setState({
                myrecipes: data
            })
        })
    }



    render(){
        console.log(this.state)
        console.log(this.props)
  
        return(
            <div>
                <Switch>
                    <Route 
                    path="/recipes/:id"
                    render={(props) => {
                    const recipeId = props.match.params.id; 
                    let recipe;
                    this.state.myrecipes.forEach(rec => {
                       
                            if (rec && rec.id === recipeId) {
                                recipe = rec
                            }
                       
                    }) 
                    return recipe ? <ProfileRecipeDetail recipe={recipe}/> : <h1>Loading...</h1>                   
                        }}
                    />

                    <Route 
                    path="/profile"
                    render={()=> <Profile recipes={this.state.myrecipes}/>}
                    />
                </Switch>
            </div>
        )
    }

}