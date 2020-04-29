
import React, {Fragment} from 'react'
import { api } from '../services/api'

class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
            recipes:[], 
            myrecipes: []
        }
    }


    componentDidMount(){
        api.recipes.getRecipes().then(data => {
            this.setState({
                recipes: data
            })
        })
    }

    filtermyRecipes = () => {
        const filtered = (this.state.recipes.filter(recipe => recipe.user_id == this.props.appState.auth.user.id))
        this.setState({
            myrecipes: filtered
        })
    }


    
    
    recipeMapper = () => {
        const filtered = (this.state.recipes.filter(recipe => recipe.user_id == this.props.appState.auth.user.id))
        return filtered.reverse().map(meal => {
           
            return (
                
                <Fragment>
                    <br></br>
                    <div className="ui column" id={meal.id}>
                        <div className="ui card" 
                        style={{border: "1 px solid black", cursor: 'pointer'}}
                        key={meal.id}
                        onClick={() => this.handleClick(meal)}
                        >
                            <div className="content">
                                <div className="header">
                                    <span stye={{fontWeight: 'bolder'}}>{meal.title}</span>
                                    <br></br>
                                </div>
                                <div className="meta text-wrap">
                                    {!!meal.summary ? meal.summary : "No summary given"}
                                </div>
                            </div>

                        </div>
                    </div>
                </Fragment>
            )
        })
    }

//   mapRecipeArray = () => {
//       return this.recipeArray().map(recipe => {
//           recipe
//         //   if(recipe.user_id == this.props.appState.auth.user.id){
//         //       return <div>{recipe.title}</div>
//         //   }
//       })
//   }



    render(){
        console.log(this.props)
        console.log(this.state)
        console.log(this.props.appState.auth.user.id)

     
        return(
            <div>
                <h1>{this.props.appState.auth.user.username}'s Recipes</h1>
                {this.recipeMapper()}
            </div>
        )
    }
}

export default Profile