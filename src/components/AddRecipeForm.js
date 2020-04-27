import React from 'react'
//need to send add recipe down from app, api call to backend

class AddRecipeForm extends React.Component{
   
            state = {
                title:"",
                ingredients: [
                    {name:"", amount:""}
                ],
                steps: [],
                tags: []
            }
  

    addIngredient = (e) => {
        e.preventDefault()
        this.setState((prevState=> ({
            ingredients: [...prevState.ingredients, {name:"", amount:""}],
        })))
    }

    addSteps(e){
        e.preventDefault()
        this.setState({steps: [...this.state.steps, ""]})
    }

    // removeIngredient(e, index){
    //     e.preventDefault()
    //     this.state.ingredients.splice(index)
    //     this.setState({ingredients: this.state.ingredients})
    // }

    handleChange = (e) => {
        if (["name", "amount"].includes(e.target.className)){
            let ingredients = [...this.state.ingredients]
            ingredients[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({[e.target.name]: e.target.value})
        } else {
            this.setState({ [e.target.name]: e.target.value})
        }
    }


    // handleIngredientChange = (event, index) => {
    //     const newState = {...this.state.ingredients, [event.target.name]: event.target.value}
    //     this.setState({
    //         ...this.state,
    //         ingredients: newState
    //     })
    // }

  

   


    render(){
      console.log(this.state)
      let {title, ingredients, steps, tags} = this.state
      
        return (
            <div>
            <h1>Add a Recipe!</h1>
            <form id="recipe-form" onChange={this.handleChange}> 
                 <label>Title</label>
                 <br></br>
                 <input placeholder="Title" onChange={ e => this.handleChange(e)} name="title" value={title}></input>
                 <br></br>
                <label>Ingredients</label>
                {
                    this.state.ingredients.map((ingredient, index) => {
                        let ingredientId = `ingredient-${index}`, amountId= `amount-${index}`
                        return( 
                            <div key={index}>
                                <label htmlFor={ingredientId}>{`Ingredient #${index + 1}`}</label>
                                <input placeholder="Ingredient Name" 
                                type="text"
                                name={ingredientId}
                                data-id={index}
                                id={ingredientId}
                                value={ingredients[index].name}
                                className="name"
                                onChange={(e)=>this.handleChange}
                            />

                                {/* <input placeholder="Ingredient Amount" onIngrChange={(e, index) => this.handleChange(e)} value={this.state.ingredients.amount}/> */}

                                {/* <button onClick={(e)=> this.removeIngredient(e)}>Remove</button> */}
                               
                            </div>
                        )
                    })
                }
                <br></br>
                <button onClick={(e)=> this.addIngredient(e)}>Add Ingredient</button>
                <br></br>
              
                <label>Steps</label>
                {
                    this.state.steps.map((step, index) => {
                        return( 
                            <div key={index}>
                                <textarea placeholder="Step" onChange={(e, index) => this.handleChange(e, index)} name="steps" />
                               
                            </div>
                        )
                    })
                }
                <br></br>
                <button onClick={(e)=> this.addSteps(e)}>Add Step</button>
                <br></br>

                <label>Tags</label>
                <br></br>
                <button onClick={(e)=> this.addTag(e)}>Add Tags</button>
                <br></br>
                <br></br>
                <button>Publish Recipe</button>
            </form>
            </div>
        )
    }
    
}

export default AddRecipeForm 