import React, {useReducer, useState} from 'react'

import { useForm, useFieldArray } from "react-hook-form";



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
        steps: [
            {step_summary: ""}
        ],
        tags: []
        }
    }

    handleSubmit = () => {
        console.log("handleSubmit was hit")
    }
  
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
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

    renderIngredientInputs = () => {
        return this.state.ingredients.map((ingredient, index) => {
          return (
       
                <div key={`name ${index}`} className="form-group">
            
                <input
                    value={ingredient.name}
                    onChange={(e) => this.handleIngredientChange(e, index)}
                />
                <div key={`amount ${index}`}>
                <input
                    value={ingredient.amount}
                    onChange={(e) => this.handleIngredientChange(e, index)}
                />
                </div>
            </div>
          );
        });
      };

      handleIngredientChange = (e, ingredientIndex) => {
        let newIngredient = e.target.value;
        this.setState((prev) => {
          return {
            ...prev,
            ingredients: prev.steps.map((ingredient, index) => {
              if (index == ingredientIndex) {
                return { ...ingredient, name: newIngredient };
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
            steps: [...prev.steps, { step_summary: "" }],
          };
        });
      };
      renderStepInputs = () => {
        return this.state.steps.map((step, index) => {
          return (
            <div key={index} className="form-group">
          
              <input
                value={step.step_summary}
                onChange={(e) => this.handleStepChange(e, index)}
              />
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
                return { ...step, title: newStep };
              }
              return step;
            }),
          };
        });
      };


  render(){
    const maxChars = 80
    const smallertextareastyle={
        padding: "9px", 
        boxSizing: "border-box", 
        fontSize: "15px", 
        minHeight: "75px",
        minWidth: "100px"
  } 
  return (
      <div>
          <h1>Add a new recipe!</h1>
    <form >
        <label>Title</label>
        <br></br>
        <input onChange={this.handleChange} name="title" placeholder="Title" ></input>
        <br></br>
        <br></br>
        <label>Upload image</label>
        <br></br>
        <input onChange={this.handleChange} type="file" name="image_url" accept="image/*" />
        <br></br>
        <label>Summary</label>
        <br></br>
        <textarea onChange={this.handleChange} placeholder="80 characters max" type="textarea" name="summary" style={smallertextareastyle} />
        <br></br>
        <label>Ingredients</label>
      {this.renderIngredientInputs()}
      <button type="button" onClick={()=> this.addIngredientInputs()}>+ Add Ingredient</button>
      <br></br>
        <label>Steps</label>
      {this.renderStepInputs()}
      <button type="button" onClick={()=> this.addStepInputs()}>+ Add Step</button>
      <br></br>
     
      <input onSubmit={this.handleSubmit()} type="submit"></input>
    </form>
    </div>
  );
  }
}



    

export default AddRecipeForm 