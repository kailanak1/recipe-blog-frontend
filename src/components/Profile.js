
import React from 'react';

class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
            myrecipes:[]
        }
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
 
        return(
            <div>
                <hi>{this.props.appState.auth.user.username}'s Recipes</hi>
              
            </div>
        )
    }
}

export default Profile 