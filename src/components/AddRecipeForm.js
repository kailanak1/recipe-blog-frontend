import React from 'react'
//need to send add recipe down from app, api call to backend

class AddRecipeForm extends React.Component{
   
            state = {
                title:"",
                image_url: "",
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

    handleStepChange = (e) => {
        this.setState({
            steps: e.target.value
        })
    }

    handleTagChange = (e) => {
        this.setState({
            tags: e.target.value
        })
    }

    handleImgChange = (e) => {
        this.setState({
            image_url: e.target.value
        })
    }
 

    handleChange = (e) => {
        if (["name", "amount"].includes(e.target.className)){
            let ingredients = [...this.state.ingredients]
            ingredients[e.target.dataset.id][e.target.className] = e.target.value
            this.setState({[e.target.name]: e.target.value})
        } else {
            this.setState({ [e.target.name]: e.target.value})
        }
    }


  

   ingredientsMapper = () => {
    {
        return this.state.ingredients.map((ingredient, index) => {
            let ingredientId = `ingredient-${index}`, amountId= `amount-${index}`
            return( 
                <div key={index}>
                    <label htmlFor={ingredientId}>{`Ingredient #${index + 1}`}</label>
                    <input placeholder="Ingredient Name" 
                    type="text"
                    name={ingredientId}
                    data-id={index}
                    id={ingredientId}
                    value={this.state.ingredients[index].name}
                    className="name"
                    onChange={(e)=>this.handleChange}
                />

                <label htmlFor={amountId}/>
                <input 
                    type="text"
                    placeholder="Amount"
                    name={amountId}
                    data-id={index}
                    id={amountId}
                    value={this.state.ingredients[index].amount}
                    className="amount"
                    onChange={(e)=>this.handleChange}
                />

                    {/* <button onClick={(e)=> this.removeIngredient(e)}>Remove</button> */}
                   
                </div>
            )
        })
    }
   }

   



    render(){

      let {title, ingredients, steps, tags} = this.state
      const textareastye = {
          padding: "9px", 
          boxSizing: "border-box", 
          fontSize: "15px", 
          minHeight: "200px",
          minWidth: "500px"
      }
      console.log(this.state)
        return (
            <div>
            <h1>Add a Recipe!</h1>
            <form id="recipe-form" onChange={this.handleChange}> 
                 <label>Title</label>
                 <br></br>
                 <input placeholder="Title" onChange={ e => this.handleChange(e)} name="title" value={title}></input>
                 <br></br>
                 <br></br>
                 <label>Picture</label>
                 <br></br>
                 <input type="text" placeholder="image url" onChange={e=> {this.handleImgChange(e)}}></input>
                 <br></br>
                 <br></br>
                <label>Ingredients</label>
                {this.ingredientsMapper()}
                <br></br>
                <button onClick={(e)=> this.addIngredient(e)}>Add Ingredient</button>
                <br></br>
              
                <label>Steps</label>
                <br></br>
                    <textarea style={textareastye} placeholder="Add steps here" onChange={e => this.handleStepChange(e)}></textarea>
                <br></br>
            

                <label>Tags</label>
                <br></br>
                <input style={{size: "100"}} placeholder="spicy, southwestern" onChange={e => this.handleTagChange(e)}></input>
                <br></br>
               
                <br></br>
                <br></br>
                <button>Publish Recipe</button>
            </form>
            </div>
        )
    }
    
}

export default AddRecipeForm 