import React from 'react'


const ProfileRecipeDetail = props => {
console.log(props.recipe)


const handleClick = () =>  {
    props.goBack()
}

const ingredientsMapper = () => {
    let ingredients = props.recipe.ingredient_name 
    if (ingredients > 0){
        return ingredients.split(",").map((ingredient, index) => {
            return <li key ={index} className="list-group-item">
                {ingredient}
            </li>
        })

    }
}



return(
    !props.show ? <div></div> : 

    <div key={props.recipe.id}>
        <h1>{props.recipe.title}</h1>
        {props.recipe.summary ? <div>{props.recipe.summary}</div> : "No summary given"}

        <br></br>

       

        {props.recipe.ingredient_name ? <div>{props.recipe.ingredient_name}</div> : "No ingredients written"}
        <br></br>
       
        {props.recipe.steps ? <div>{props.recipe.rec_steps}</div> : "No steps given"}
        <br></br>

        <small>Tags: {props.recipe.rec_tags ?  props.recipe.rec_tags : "No tags"  }</small>

        <br></br>
        <br></br>

        <button onClick = {handleClick}>Go Back</button>

      

        <br></br>
        
    
    
    </div>
    
)

}
export default ProfileRecipeDetail 