import React, {useReducer, useState} from 'react'


import Button from 'react-bootstrap/Button';





class AddRecipeForm extends React.Component {
    constructor(){
        super()
        this.state={
            title:"",
        main_pic: "",
        summary: "",
        ingredients: [
            {name: "", amount: ""}
        ],
        steps: [],
        tags: []
        }
    }

 
  
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleTagChange = (event) => {
        let recTags = event.target.value.split(', ')
        this.setState({
            tags: recTags
        })
    }

    addIngredientInputs = () => {
        this.setState((prev) => {
            return {
              ...prev,
              ingredients: [...prev.ingredients, { name: "", amount:"" }],
            };
          });
    }
    removeIngredientInput = (e, ingredientIndex) => {
      e.preventDefault()
   
      this.setState({
        ingredients: this.state.ingredients.filter((ingredient, removedIngredient) => removedIngredient !== ingredientIndex )
      })
    }

    renderIngredientInputs = () => {
        return this.state.ingredients.map((ingredient, index) => {
          return (
       
                <div key={`name ${index}`} 
                className="form-group">
            
                <input className="mb-3"
                    value={this.state.ingredients[index].name}
                    onChange={(e) => this.handleIngredientNameChange(e, index)}
                    placeholder="name"
                    name="name"
                    style={{border:"none", padding:"2px 2px", borderBottom:"1px solid gray"}}
                />

                <input
                    value={this.state.ingredients[index].amount}
                    onChange={(e) => this.handleIngredientAmountChange(e, index)}
                    placeholder="amount"
                    name="amount"
                    style={{border:"none", padding:"2px 2px", borderBottom:"1px solid gray"}}
                />
            
                <Button variant="outline-secondary" onClick={(e)=>this.removeIngredientInput(e,index)}>{`Delete Ingredient`}</Button>
              
            </div>
          );
        });
      };

      
      handleIngredientNameChange = (e, ingredientIndex) => {
        let newIngredientName = e.target.value;
        this.setState((prev) => {
          return {
            ...prev,
            ingredients: prev.ingredients.map((ingredient, index) => {
              if (index == ingredientIndex) {
                return { ...ingredient, name: newIngredientName};
              } 
              return ingredient;
            }),
          };
        });
      };

      handleIngredientAmountChange = (e, ingredientIndex) => {
        let newIngredientAmount = e.target.value;
        this.setState((prev) => {
          return {
            ...prev,
            ingredients: prev.ingredients.map((ingredient, index) => {
              if (index == ingredientIndex) {
                return { ...ingredient, amount: newIngredientAmount};
              } 
              return ingredient;
            }),
          };
        });
      };


    addStepInputs = () => {
        this.setState((prev) => {
          return {
            ...prev,
            steps: [...prev.steps, ""],
          };
        });
      };
      renderStepInputs = () => {
        const textareastyle = {
            padding: "9px", 
            boxSizing: "border-box", 
            fontSize: "15px", 
            minHeight: "100px",
            minWidth: "250px", 
            borderRadius: "10px"
        }
        return this.state.steps.map((step, index) => {
          return (
            <div key={index} className="form-group">
          <fieldset>
              <textarea
                placeholder={`Step${index+1}`}
                // style={textareastyle}
                name="rec_steps"
                id="textArea"
                className="form-control"
                onChange={(e) => this.handleStepChange(e, index)}
                value={step.step_summary}
              />
              <button className="btn btn-secondary" type="button" onClick={(e)=>this.removeStepInput(e,index)}>{`Delete Step ${index+1}`}</button>
              </fieldset>
            </div>
          );
        });
      };
      handleStepChange = (e, stepIndex) => {
        let newStep = e.target.value;
        this.setState((prev) => {
          return {
            ...prev,
            steps: prev.steps.map((step, index) => {
              if (index == stepIndex) {
                return { ...step, step_summary: newStep};
              } 
              return step;
            }),
          };
        });
      };

      removeStepInput = (e, stepIndex) => {
        e.preventDefault()
    
        this.setState({
          steps: this.state.steps.filter((step, removedStep) => removedStep !== stepIndex )
        })
      }

    handleSumbit = (e) => {
      console.log(this.state.title)
        e.preventDefault()
        // if(this.state.title.length > 1){
            this.props.onAddRecipe(this.state)
            this.props.history.push('/')
        // }else{
        //     window.alert("Please add a title")
        // }
    }

  render(){
      
    const maxChars = 80
    const smallertextareastyle={
      padding: "9px", 
      boxSizing: "border-box", 
      fontSize: "15px", 
      minHeight: "100px",
      minWidth: "250px", 
      borderRadius: "10px"
  } 
  
  return (
    <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
        <h1>Add a new recipe!</h1>
        <form onSubmit={this.handleSumbit} >
          <fieldset>
            <div class="form-group">
              <label for="inputDefault">Title</label>
              <input 
                type="inputDefault" 
                name="title"
                class="form-control" 
                id="inputDefault"
                placeholder="Enter title"
                onChange={this.handleChange}
                ></input>
            </div>
            <div className="form-group">
              <label for="exampleInputFile">Upload image</label>
              <input type="file" 
                className="form-control-file" 
                id="exampleInputFile" 
                aria-describedby="fileHelp"
                onChange={this.handleChange}
                name="main_pic"
                ></input>
              <small id="fileHelp" class="form-text text-muted">Please choose image smaller than 1000px</small>
            </div>
            <div className="form-group">
                <label forHtml="textArea">Summary </label>
                <textarea 
                  className="form-control"
                  id="textArea"
                  rows="3"
                  name="summary"
                  onChange={this.handleChange} 
                  placeholder="80 characters max"></textarea>
            </div>
            <div class="form-group">
              <label>Ingredients</label>
            {this.renderIngredientInputs()}
            <button type="button" className="btn btn-primary" onClick={()=> this.addIngredientInputs()}>+ Add Ingredient</button>
            </div>
            <div class="form-group">
              <label forHtml="textArea">Steps</label>
              {this.renderStepInputs()}
              <button type="button" className="btn btn-primary" onClick={()=> this.addStepInputs()}>+ Add Step</button>
            </div>
            <div class="form-group">
              <label>Tags</label>
              <input 
              onChange={this.handleTagChange } 
              name="tags" 
            
              placeholder="separated by a comma"
              style={{border:"none", padding:"2px 2px", borderBottom:"1px solid gray", minWidth:"400 px"}}></input>
            </div>
            <input type="submit" className="btn btn-secondary"></input>
          </fieldset>
        </form>
        </div>
        <div className="col-4"></div>
  </div>
  );
  }
}



    

export default AddRecipeForm 