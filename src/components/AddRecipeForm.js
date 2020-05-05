import React, {useReducer, useState} from 'react'

import { useForm, useFieldArray } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 




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
            
                <input className="mb-3"
                    value={this.state.ingredients[index].name}
                    onChange={(e) => this.handleIngredientNameChange(e, index)}
                    placeholder="name"
                    name="name"
                    style={{border:"none", padding:"2px 2px", borderBottom:"1px solid black"}}
                />

                <input
                    value={this.state.ingredients[index].amount}
                    onChange={(e) => this.handleIngredientAmountChange(e, index)}
                    placeholder="amount"
                    name="amount"
                    style={{border:"none", padding:"2px 2px", borderBottom:"1px solid black"}}
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
            minWidth: "250px"
        }
        return this.state.steps.map((step, index) => {
          return (
            <div key={index} className="form-group">
          
              <textarea
                id="ip2"
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
        minHeight: "173px",
        minWidth: "271px"
  } 
  
  return (
      <div>
          <h1>Add a new recipe!</h1>
          <Card className="ui-card">
    <Form onSubmit={this.handleSumbit} >
      <Form.Group>
        <label>Title</label>
        <br></br>
        <Form.Control onChange={this.handleChange}
         name="title" 
         placeholder="Title"
         style={{border:"none", padding:"2px 2px", borderBottom:"1px solid black"}}
        size="lg"
        type="text"
         />
        <br></br>
        <br></br>
        <label>Upload image</label>
        <br></br>
        <input onChange={this.handleChange} type="file" name="main_pic" accept="image/*" />
        <br></br>
        <label>Summary</label>
        <br></br>
        <div class="form-group">
        <Form.Control as="textarea" rows="3"
        onChange={this.handleChange} 
        placeholder="80 characters max"
         type="textarea" 
         name="summary" 
         class="form-control"
         style={smallertextareastyle}
         id="ip2" />
         </div>
        <br></br>
        <label>Ingredients</label>
      {this.renderIngredientInputs()}
      <button type="button" onClick={()=> this.addIngredientInputs()}>+ Add Ingredient</button>
      <br></br>
      <br></br>
        <label>Steps</label>
        <br></br>
      {this.renderStepInputs()}
      <button type="button" onClick={()=> this.addStepInputs()}>+ Add Step</button>
      <br></br>
      <label>Tags</label>
      <br></br>
      <input 
      onChange={this.handleTagChange } 
      name="tags" 
      placeholder="tags separated by a comma"
      style={{border:"none", padding:"2px 2px", borderBottom:"1px solid black", minWidth:"400 px"}}></input>
     <br></br>
    <input type="submit"></input>
    </Form.Group>
    </Form>
    </Card>
    </div>
  );
  }
}



    

export default AddRecipeForm 