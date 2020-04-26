import React, {Fragment} from 'react'
import { api } from '../services/api'

class RecipeList extends React.Component{
    constructor(){
        super()
        this.state = {
            recipes: []
        }
    }


    //map over the recipes, display the first few 

    componentDidMount(){
        api.recipes.getRecipes().then(data => {
            this.setState({
                recipes: data
            })
        })
    }

    recipeMapper = () => {
        return this.state.recipes.map(recipe => {
           
            return (
                <Fragment>
                    <br></br>
                    <div className="ui column">
                        <div className="ui card"
                        key={recipe.id}
                        >
                            <div className="content">
                                <div className="header">
                                    <span stye={{fontWeight: 'bolder'}}>{recipe.title}</span>
                                    <br></br>
                                </div>
                                <div className="meta text-wrap">
                                    {!!recipe.summary ? recipe.summary : "No summary given"}
                                </div>
                            </div>

                        </div>
                    </div>
                </Fragment>
            )
        })
    }




    render(){
        console.log(this.state)
        return(
            <div>
                <h1>Recipes</h1>
                {this.recipeMapper()}
            </div>
        )
    }

}

export default RecipeList