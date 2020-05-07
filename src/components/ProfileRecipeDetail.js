import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'



const ProfileRecipeDetail = props => {
    const id = props.match.params.id

   


     const ingredientsMapper = () => {
        let ingredients = props.ingredients
        if(ingredients){
            return ingredients.map((ingredient, index) => {
                return <ListGroup>
                    <ListGroup.Item key={index}>{`${ingredient.amount} ${ingredient.name}`}</ListGroup.Item>
                </ListGroup>
            })
        }
    }

      const stepsMapper = () => {
        let steps = props.steps
        if(steps){
            return steps.map((step, index) => {
                return <ListGroup>
                    <br></br>
                    <ListGroup.Item key={index}>{`Step ${index+1}. ${step.step_summary}`}</ListGroup.Item>
                    <br></br>
                </ListGroup>
            })
        } 
    }

     const tagsMapper = () => {
        let tags = props.tags
        if(tags){
            return tags.map((tag)=> {
                return `${tag.name} `
            })
        }
    }

    const handleClick = () => {
        props.history.push('/profile')
    }

    
    

    return(
        
        <div>
           <div>Hi</div>
        <Card style={{width: '36rem'}}>
        <div className="btn-lef" style={{display: 'flex'}}>
        <Button variant="primary" onClick = {handleClick} style={{ marginRight: "auto" }}>Go Back</Button>
        </div>
    <div key={id}>
        <Card.Title style={{fontSize:'50px' }}>{props.title}</Card.Title>
        <Card.Text>{props.summary ? <div>{props.summary}</div> : "No summary given"}</Card.Text>

        <br></br>

       

        {props.ingredients ? <div>{ingredientsMapper()}</div> : "No ingredients written"}
        <br></br>
       
        {props.steps ? <div>{stepsMapper()}</div> : "No steps given"}
        <br></br>

        <small>Tags: {props.tags ?  <div>{tagsMapper()}</div> : "No tags"  }</small>

        <br></br>
        <br></br>

        {/* <Button onClick={() => editRecipe(props.recipe.id)}>Edit</Button>
      <Button variant="warning" onClick={() => deleteRecipe(props.recipe.id)}>Delete</Button> */}

        <br></br>
        
    </div>
    
    </Card>
    </div>
    )



}
export default ProfileRecipeDetail 




// const handleClick = () =>  {
    //     props.goBack()
    // }
    
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
    //                 <br></br>
    //                 <ListGroup.Item key={index}>{`Step ${index+1}. ${step.step_summary}`}</ListGroup.Item>
    //                 <br></br>
    //             </ListGroup>
    //         })
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
    
    // const deleteRecipe = (e) => {
     
    //     props.delete(e)
    // }
    
    // const editRecipe = (e) => {
       
    //     props.edit(e)
    // }
    
    
    // return(
    //     !props.show ? <div></div> : 
    
    // )