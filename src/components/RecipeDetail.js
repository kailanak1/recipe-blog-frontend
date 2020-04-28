import React from 'react'


const RecipeDetail = props => {
console.log(props.recipe)


const handleClick = () =>  {
    props.goBack()
}

return(
    !props.show ? <div></div> : 

    <div>
        <h1>{props.recipe.title}</h1>
        {props.recipe.summary ? <div>{props.recipe.summary}</div> : "No summary given"}

        <br></br>

        {props.recipe.steps ? <div>{props.recipe.rec_steps}</div> : "No steps given"}

        {props.recipe.ingredients ? <div>{props.recipe.ingredients}</div> : "No ingredients written"}

        {props.recipe.ingredients ? <div>{props.ingredients}</div> : "No ingredients given"}

        <br></br>

        <small>Tags: {props.recipe.rec_tags ?  props.recipe.rec_tags : "No tags"  }</small>

        <br></br>
        <br></br>

        <button onClick = {handleClick}>Go Back</button>
    
    
    </div>
    
)

}
export default RecipeDetail; 