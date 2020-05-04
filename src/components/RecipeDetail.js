import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'


const RecipeDetail = props => {



const handleClick = () =>  {
    props.goBack()
}

const ingredientsMapper = () => {
    let ingredients = props.recipe.ingredients  
    console.log(ingredients)
    if (ingredients){
        return ingredients.split(",").map((ingredient, index) => {
            return <ListGroup key ={index} className="list-group-item">
                <ListGroup.Item>{ingredient}</ListGroup.Item>
            </ListGroup>
        })

    } else {
        return "No ingredients..."
    }
}

const stepsMapper = () => {
    let steps = props.recipe.rec_steps
    if(steps){
        return steps.split("\n").map((step, index) => {
            return <ListGroup variant="flush" key={index} className="list-group-item">
                <ListGroup.Item>{step}</ListGroup.Item>
            </ListGroup>
        })
    }
}

// const stepsMapper = () => {
//     let steps = props.recipe.rec_steps 
//     console.log(steps)
//     // if(steps && Array.isArray(steps)){
//     //     if(steps.length > 1){
//     //     return steps.map((step, index) => {
//     //         return <ListGroup variant="flush" key={index}>
//     //             <ListGroup.Item>{step}</ListGroup.Item>
//     //         </ListGroup>
//     //     })
//     //     } else {
//     //         return <ListGroup>
//     //             <ListGroup.Item>{steps[0]}</ListGroup.Item>
//     //         </ListGroup>
//     //     }
//     // } else {
//     //     return <p>Loading</p>
//     // }
// }

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

        {props.recipe.ingredient_name ? <div>{ingredientsMapper()}</div> : "No ingredients written"}
        <br></br>
       
        {props.recipe.steps ? <div>{stepsMapper()}</div> : "No steps given"}
        <br></br>
   

        <small>Tags: {props.recipe.rec_tags ?  props.recipe.rec_tags : "No tags"  }</small>

        <br></br>
        <br></br>

        <br></br>
        
    </div>
    </Card>
    
)

}
export default RecipeDetail; 