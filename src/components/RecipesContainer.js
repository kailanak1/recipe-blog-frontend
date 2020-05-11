import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { api } from "../services/api";
import RecipeList from './components/RecipeList'


class RecipesContainer extends Component { 
    constructor(){
        super();
        this.state = {
            recipes: []
        }
    }

    componentDidMount(){
        api.recipes.getRecipes().then((data) => {
            this.setState({
                recipes: data
            })
        })
    }

    render(){
        return(
            <div>
            <Route 
            path='/recipes'
            render={() => <RecipeList recipes={this.state.recipes} />}
            />
            </div>
        )
    }


}

export default RecipesContainer 