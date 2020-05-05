import React, {useReducer, useState} from 'react'

import { useForm, useFieldArray } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
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
      console.log(ingredientIndex)
      this.setState({
        ingredients: this.state.ingredients.filter((ingredient, removedIngredient) => removedIngredient !== ingredientIndex )
      })
    }

    renderIngredientInputs = () => {
        return this.state.ingredients.map((ingredient, index) => {
          return (
       
                <div key={`name ${index}`} 
                className="form-group">
            
                <input
                    value={this.state.ingredients[index].name}
                    onChange={(e) => this.handleIngredientNameChange(e, index)}
                    placeholder="name"
                    name="name"
                />

                <input
                    value={this.state.ingredients[index].amount}
                    onChange={(e) => this.handleIngredientAmountChange(e, index)}
                    placeholder="amount"
                    name="amount"
                />
                <button onClick={(e)=>this.removeIngredientInput(e,index)}>{`Delete Ingredient`}</button>
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
            minWidth: "250px"
        }
        return this.state.steps.map((step, index) => {
          return (
            <div key={index} className="form-group">
          
              <textarea
                placeholder={`Step${index+1}`}
                style={textareastyle}
                name="rec_steps"
                onChange={(e) => this.handleStepChange(e, index)}
                value={step.step_summary}
              />
              <button onClick={(e)=>this.removeStepInput(e,index)}>{`Delete Step ${index+1}`}</button>
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
        console.log(stepIndex)
        this.setState({
          steps: this.state.steps.filter((step, removedStep) => removedStep !== stepIndex )
        })
      }

    handleSumbit = (e) => {
        e.preventDefault()
        if(e.target.title.value){
            this.props.onAddRecipe(this.state)
            this.props.history.push('/')
        }else{
            window.alert("Please add a title")
        }
    }

  render(){
      console.log(this.state)
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
    <Form onSubmit={this.handleSumbit} >
        <label>Title</label>
        <br></br>
        <input onChange={this.handleChange} name="title" placeholder="Title" ></input>
        <br></br>
        <br></br>
        <label>Upload image</label>
        <br></br>
        <input onChange={this.handleChange} type="file" name="main_pic" accept="image/*" />
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
      <label>Tags</label>
      <br></br>
      <input onChange={this.handleTagChange } name="tags" placeholder="tags separated by a comma"></input>
     <br></br>
    <input type="submit"></input>
    </Form>
    </div>
  );
  }
}



    

export default AddRecipeForm 