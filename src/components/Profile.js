
import React, {Fragment} from 'react'
import { api } from '../services/api'

class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
            myrecipes:[]
        }
    }


    
    
    recipeMapper = () => {
        return this.state.myrecipes.reverse().map(meal => {
           
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
        return(
            <div>
                <h1>{this.props.appState.auth.user.username}'s Recipes</h1>
                
            </div>
        )
    }
}

export default Profile 