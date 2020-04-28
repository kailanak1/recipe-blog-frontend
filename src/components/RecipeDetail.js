import React from 'react'


const RecipeDetail = props => {
console.log(props.recipe)


return(
    !props.show ? <div></div> : 

    <div>
        <h1>{props.recipe.title}</h1>
        {props.recipe.summary ? <div>{props.recipe.summary}</div> : "No summary given"}

        {props.recipe.ingredients ? <div>{props.recipe.ingredients}</div> : "No ingredients written"}

        {props.recipe.ingredients ? <div>{props.ingredients}</div> : "No ingredients given"}

        {props.recipe.steps ? <div>{props.recipe.steps}</div> : "No steps given"}



        
    
    
    </div>
    
)

}
export default RecipeDetail; 