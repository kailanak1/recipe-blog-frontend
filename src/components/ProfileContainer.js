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
            const filtered = (data.filter(recipe => recipe.user_id == this.props.appState.auth.user.id))
            this.setState({
                myrecipes: filtered
            })
        })
    }



    render(){
        console.log(this.props)
        return(
            <div>
                <Switch>
                    <Route 
                    path="/recipes/:id"
                    />
                </Switch>:
                    Loading Recipes
            </div>
        )
    }

}