import React from 'react'

const maxChars = 80 
class AddRecipeForm extends React.Component{
   constructor(props){
       super(props)
            this.state = {
                title:"",
                image_url: "",
                summary: "",
                ingredients: "",
                steps: [],
                tags: [],
                charsLeft: maxChars
            }
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
 

   handleSumbit = (e) => {
       console.log("handleSubmit was hit")
       e.preventDefault()
       if(!!e.title){
       this.props.onAddRecipe(e)
       this.props.history.push('/')
       }else{
           window.alert("Please add a title")
       }

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
      console.log(this.props)
        return (
            <div>
            <h1>Add a Recipe!</h1>
            <form id="recipe-form" onSubmit={this.handleSumbit}> 
                 <label>Title</label>
                 <br></br>
                 <input  placeholder="Title" onChange={ e => this.handleTitleChange(e)} name="title" value={title}></input>
                 {/* <br></br>
                 <br></br>
                 <label>Picture</label>
                 <br></br>
                 <input type="text" name="picture" placeholder="image url" onChange={e=> {this.handleImgChange(e)}}></input> */}
                 <br></br>
                 <br></br>
                 <label>Summary</label>
                 <br></br>
                 <textarea maxLength= {maxChars} style ={smallertextareastyle} placeholder="Summary (80 character limit)" name="summary" onChange={e=> {this.handleSummaryChange(e)}}></textarea>
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
                    <textarea style={textareastyle} placeholder="Add each step with a new line" onChange={e => this.handleStepChange(e)} name="steps"></textarea>
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