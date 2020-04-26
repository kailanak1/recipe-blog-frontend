import React from 'react'
//need to send add recipe down from app, api call to backend

class AddRecipeForm extends React.Component{
    state = {
        ingredients: [],
        steps: []
    }

    addIngredient(e){
        e.preventDefault()
        this.setState({ingredients: [...this.state.ingredients, ""]
        })
    }

    // removeIngredient(e, index){
    //     e.preventDefault()
    //     this.state.ingredients.splice(index)
    //     this.setState({ingredients: this.state.ingredients})
    // }

    handleChange = (e, index) => {
        this.setState({
            [e.target.name]: e.target.value
        
        })   
    }

   


    render(){
      console.log(this.state)
        return (
            <div>
            <h1>Add a Recipe!</h1>
            <form id="recipe-form"> 
                <label>Ingredients</label>
                {
                    this.state.ingredients.map((ingredient, index) => {
                        return( 
                            <div key={index}>
                                <input placeholder="Ingredient Name" onChange={(e, index) => this.handleChange(e)} name="ingredient name"/>

                                {/* <input placeholder="Ingredient Amount" onChange={(e, index) => this.handleChange(e)} value={this.state.ingredient.amount}/> */}

                                {/* <button onClick={(e)=> this.removeIngredient(e)}>Remove</button> */}
                               
                            </div>
                        )
                    })
                }
                <br></br>
                <button onClick={(e)=> this.addIngredient(e)}>Add Ingredient</button>
                <br></br>
              
                

                <button>Publish Recipe</button>
            </form>
            </div>
        )
    }
    
}

export default AddRecipeForm 