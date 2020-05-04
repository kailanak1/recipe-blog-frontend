import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


const RecipeDetail = props => {



const handleClick = () =>  {
    props.goBack()
}

// const ingredientsMapper = () => {
//     let ingredients = props.recipe.ingredients  
//     console.log(ingredients)
//     if (ingredients){
//         return ingredients.split(",").map((ingredient, index) => {
//             return <ListGroup key ={index} className="list-group-item">
//                 <ListGroup.Item>{ingredient}</ListGroup.Item>
//             </ListGroup>
//         })

//     } else {
//         return "No ingredients..."
//     }
// }

const ingredientsMapper = () => {
    let ingredients = props.recipe.ingredients
    if(ingredients){
        return ingredients.map((ingredient, index) => {
            return <ListGroup>
                <ListGroup.Item key={index}>{`${ingredient.amount} ${ingredient.name}`}</ListGroup.Item>
            </ListGroup>
        })
    }
}

const stepsMapper = () => {
    let steps = props.recipe.steps
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
    let tags = props.recipe.tags
    console.log(tags)
}



return(
    !props.show ? <div></div> : 

    <Card style={{width: '36rem'}}>
        <div className="btn-lef" style={{display: 'flex'}}>
        <Button variant="primary" onClick = {handleClick} style={{ marginRight: "auto" }}>Go Back</Button>
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

        <br></br>
        <br></br>

        <br></br>
        
    </div>
    </Card>
    
)

}
export default RecipeDetail; 