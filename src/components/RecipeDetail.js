import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


const RecipeDetail = props => {

const getRecipe = () => {
    const id = props.match.params.id
    const allRecs = props.appState.recipes
    console.log(allRecs)
    for (let recipes of allRecs){
        if(recipes.id == id){
            console.log(recipes)
        }
    }
}

const handleClick = () =>  {
    // props.goBack()
    props.history.push('/recipes')
}



// const ingredientsMapper = () => {
//     let ingredients = props.recipe.ingredients
//     if(ingredients){
//         return ingredients.map((ingredient, index) => {
//             return <ListGroup>
//                 <ListGroup.Item key={index}>{`${ingredient.amount} ${ingredient.name}`}</ListGroup.Item>
//             </ListGroup>
//         })
//     }
// }

// const stepsMapper = () => {
//     let steps = props.recipe.steps
//     if(steps){
//         return steps.map((step, index) => {
//             return <ListGroup>
//                 <ListGroup.Item key={index}>{`Step ${index+1}. ${step.step_summary}`}</ListGroup.Item>
//             </ListGroup>
//         })
//     } else {
//         return <ListGroup>
//                 <ListGroup.Item>No Steps</ListGroup.Item>
//             </ListGroup>
//     }
// }

// const tagsMapper = () => {
//     let tags = props.recipe.tags
//     if(tags){
//         return tags.map((tag)=> {
//             return `${tag.name} `
//         })
//     }
// }

// const makeBig = () => {
    
// }

// const favoriteRecipe = (recipeId) => {
//     props.onFavoriteRecipe(recipeId)
// }


return(
    // !props.recipe ? <div></div> : 

    <div>

        {getRecipe()}

    {/* <Card style={{width: '36rem'}}>
        <div className="btn-lef" style={{display: 'flex'}}>
        <Button variant="primary" onClick = {handleClick} style={{ marginRight: "auto" }}>Go Back</Button>
       <Button variant="primary" onClick = {makeBig} style={{ marginLeft: "auto" }}>Increase Font Size</Button> 
        </div>
    <div key={props.recipe.id}>
        <Card.Title style={{fontSize:'50px' }}>{props.recipe.title}</Card.Title>
        <Card.Text>{props.recipe.summary ? <div>{props.recipe.summary}</div> : "No summary given"}</Card.Text>

        <br></br>

        {props.recipe.ingredients ? <div>{ingredientsMapper()}</div> : "No ingredients written"}
        <br></br>
       
        {props.recipe.steps ? <div>{stepsMapper()}</div> : "No steps given"}
        <br></br>
   

     <small>Tags: {props.recipe.tags ?  <div>{tagsMapper()}</div> : "No tags"  }</small> 
         <Button onClick={() => favoriteRecipe(props.recipe.id)}>Favorite</Button> 
        <br></br>
        <br></br>

        <br></br>
        
    </div>
    </Card>  */}
    </div>
)

}
export default RecipeDetail; 