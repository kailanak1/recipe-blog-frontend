import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


const RecipeDetail = props => {

const getRecipe = () => {
    const id = props.match.params.id
    const allRecs = props.appState.recipes
    for (let recipe of allRecs){
        if(recipe.id == id){
           return recipe
        
    }
    
    }
}

const handleClick = () =>  {
    // props.goBack()
    props.history.push('/recipes')
}



const ingredientsMapper = () => {
    let recipe = getRecipe()
    let ingredients = recipe.ingredients
    if(ingredients){
        return ingredients.map((ingredient, index) => {
            return <ListGroup>
                <ListGroup.Item key={index}>{`${ingredient.amount} ${ingredient.name}`}</ListGroup.Item>
            </ListGroup>
        })
    }
}

const stepsMapper = () => {
    let recipe = getRecipe()
    let steps = recipe.steps
    if(steps){
        return steps.map((step, index) => {
            return <ListGroup>
                <ListGroup.Item key={index}>{`Step ${index+1}. ${step.step_summary}`}</ListGroup.Item>
            </ListGroup>
        })
    } else {
        return <ListGroup>
                <ListGroup.Item>No Steps</ListGroup.Item>
            </ListGroup>
    }
}

const tagsMapper = () => {
    let recipe = getRecipe()
    let tags = recipe.tags
    if(tags){
        return tags.map((tag)=> {
            return `${tag.name} `
        })
    }
}

const makeBig = () => {
    
}

const favoriteRecipe = (recipeId) => {
    props.onFavoriteRecipe(recipeId)
}

const title = () => {
    let recipe = getRecipe()
    return recipe.title
}

const summary = () => {
    let recipe = getRecipe()
    if (recipe.summary.length){
    return recipe.summary
    } else{
        return "No summary given"
    }
}


return(
    // !props.recipe ? <div></div> : 

    <div>



     <Card style={{width: '36rem'}}>
        <div className="btn-lef" style={{display: 'flex'}}>
        <Button variant="primary" onClick = {handleClick} style={{ marginRight: "auto" }}>Go Back</Button>
       <Button variant="primary" onClick = {makeBig} style={{ marginLeft: "auto" }}>Increase Font Size</Button> 
        </div>
    <div key={props.match.params.id}>
        <Card.Title style={{fontSize:'50px' }}>{title()}</Card.Title>
        <Card.Text><div>{summary()}</div></Card.Text>

        <br></br>

        <div>{ingredientsMapper()}</div> 
        <br></br>
       
        <div>{stepsMapper()}</div>
        <br></br>
   

     <small>Tags: <div>{tagsMapper()}</div></small> 
         <Button onClick={() => favoriteRecipe(props.match.params.id)}>Favorite</Button> 
        <br></br>
        <br></br>

        <br></br>
        
    </div>
    </Card>  
    </div>
)

}
export default RecipeDetail; 