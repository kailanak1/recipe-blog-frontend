import React from 'react'


class AddRecipeForm extends React.Component{
   
            state = {
                title:"",
                image_url: "",
                summary: "",
                ingredients: "",
                steps: [],
                tags: []
            }
  

    // addIngredient = (e) => {
    //     e.preventDefault()
    //     this.setState((prevState=> ({
    //         ingredients: [...prevState.ingredients, {name:"", amount:""}],
    //     })))
    // }

    // removeIngredient = (index, e) => {
    //     e.preventDefault()
    //     this.state.ingredients.splice(index, 1)
    //     console.log(this.state.ingredients)
    //     this.setState({
    //         ingredients: this.state.ingredients
    //     })
    // }

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

    // handleImgChange = (e) => {
    //     this.setState({
    //         image_url: e.target.value
    //     })
    // }

    handleSummaryChange = (e) => {
        this.setState({
            summary: e.target.value 
        })
    }

    handleChange = (e) => {
        this.setState({
            ingredients: e.target.value
        })
    }

    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
 

    // handleChange = (e) => {
    //     if (["name", "amount"].includes(e.target.className)){
    //         let ingredients = [...this.state.ingredients]
    //         ingredients[e.target.dataset.id][e.target.className] = e.target.value
    //         this.setState({[e.target.name]: e.target.value})
    //     } else {
    //         this.setState({ [e.target.name]: e.target.value})
    //     }
    // }


  

//    ingredientsMapper = () => {
//     {
//         return this.state.ingredients.map((ingredient, index) => {
//             let ingredientId = `ingredient-${index}`, amountId= `amount-${index}`
//             return( 
//                 <div key={index}>
//                     <label htmlFor={ingredientId}>{`Ingredient #${index + 1}`}</label>
//                     <input placeholder="Ingredient Name" 
//                     type="text"
//                     name="name"
//                     data-id={index}
//                     id={ingredientId}
//                     value={this.state.ingredients[index].name}
//                     className="name"
//                     onChange={(e)=>this.handleChange}
//                 />

//                 <label htmlFor={amountId}/>
//                 <input 
//                     type="text"
//                     placeholder="Amount"
//                     name="amount"
//                     data-id={index}
//                     id={amountId}
//                     value={this.state.ingredients[index].amount}
//                     className="amount"
//                     onChange={(e)=>this.handleChange}
//                 />

//                     {index !== 0 ? <button onClick={(e)=> this.removeIngredient(index, e)}>Remove</button> : null}
                   
//                 </div>
//             )
//         })
//     }
//    }

   handleSumbit = (e) => {
       console.log("handleSubmit was hit")
       e.preventDefault()
       this.props.onAddRecipe(e)
       this.props.history.push('/')

   }

   
    render(){

      let {title, ingredients, steps, tags} = this.state
      const textareastyle = {
          padding: "9px", 
          boxSizing: "border-box", 
          fontSize: "15px", 
          minHeight: "200px",
          minWidth: "500px"
      }
      const smallertextareastyle= {
        padding: "9px", 
        boxSizing: "border-box", 
        fontSize: "15px", 
        minHeight: "100px",
        minWidth: "300px"
      }
      console.log(this.state)
        return (
            <div>
            <h1>Add a Recipe!</h1>
            <form id="recipe-form" onSubmit={this.handleSumbit}> 
                 <label>Title</label>
                 <br></br>
                 <input placeholder="Title" onChange={ e => this.handleTitleChange(e)} name="title" value={title}></input>
                 {/* <br></br>
                 <br></br>
                 <label>Picture</label>
                 <br></br>
                 <input type="text" name="picture" placeholder="image url" onChange={e=> {this.handleImgChange(e)}}></input> */}
                 <br></br>
                 <br></br>
                 <label>Summary</label>
                 <br></br>
                 <textarea style ={smallertextareastyle} placeholder="summary" name="summary" onChange={e=> {this.handleSummaryChange(e)}}></textarea>
                 <br></br>
                 <br></br>
                <label>Ingredients</label>
                <br></br>
                <textarea name="ingredients" style ={smallertextareastyle} placeholder="Ingredients separated by a comma ex: 2 cups sugar, 1 part love" onChange={e=> {this.handleChange(e)}}></textarea>
                {/* <br></br>
                <button onClick={(e)=> this.addIngredient(e)}>Add Ingredient</button> */}
                <br></br>
                <br></br>
                <label>Steps</label>
                <br></br>
                    <textarea style={textareastyle} placeholder="Add steps here" onChange={e => this.handleStepChange(e)} name="steps"></textarea>
                <br></br>
                <br></br>
                <label>Tags</label>
                <br></br>
                <input style={{size: "100"}} name="tags" placeholder="spicy, southwestern" onChange={e => this.handleTagChange(e)}></input>
                <br></br>
               
                <br></br>
                <br></br>
                <input type="submit" textcontent="Publish Recipe"></input>
            </form>
            </div>
        )
    }
    
}

export default AddRecipeForm 