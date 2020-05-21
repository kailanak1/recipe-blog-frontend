import React, {useReducer, useState} from 'react';
import Form from 'react-bootstrap/Form';
import { api } from '../services/api';
import Button from 'react-bootstrap/Button';



class EditForm extends React.Component {
    constructor(){
        super()
        this.state={
            title:"",
        main_pic: "",
        summary: "",
        ingredients: [],
        steps: [],
        tags: []
        }
    }

    componentDidMount(){
        this.getRecipe()
    }


    getRecipe = () => {
        const id = this.props.match.params.id
        api.recipes.getRecipeDetail(id)
        .then(response => {
            this.setState({
                title: response.recipe.title,
                main_pic: response.recipe.main_pic,
                summary: response.recipe.summary,
                ingredients: response.ingredients,
                steps: response.steps,
                tags: response.tags

            })
        });
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
    removeIngredientInput = (e, ingredientIndex) => {
      console.log(e.target)
      e.preventDefault()
      if (e.target.id){
        this.handleIngrDelete(e.target.id)
      }
      this.setState({
        ingredients: this.state.ingredients.filter((ingredient, removedIngredient) => removedIngredient !== ingredientIndex )
      })
    }

    renderIngredientInputs = () => {
      const textInputStyle = {
        border: 'none',
        padding: '2p 2px',
        borderBottom: '1px solid gray', 

        "&:focus":{
          borderRadius: '5px', 
          border: '1px #78C2AD', 
          boxShadow: '#78C2AD'
        }
      }
        return this.state.ingredients.map((ingredient, index) => {
          return (
              <div >
                <div key={`name ${index}`} 
                className="form-group">
            
                <input className="mb-3"
                    value={this.state.ingredients[index].name}
                    onChange={(e) => this.handleIngredientNameChange(e, index)}
                    placeholder="Name"
                    name="name"
                    style={textInputStyle}
                />

                <input
                    value={this.state.ingredients[index].amount}
                    onChange={(e) => this.handleIngredientAmountChange(e, index)}
                    placeholder="Amount"
                    name="amount"
                    style={textInputStyle}
                />
                </div>
                <br></br>
            
                <Button variant="outline-secondary" id={ingredient.id} onClick={(e)=>this.removeIngredientInput(e,index)}>{this.state.ingredients[index].name ? `Delete ${this.state.ingredients[index].name}` : `Delete Ingredient`}</Button>
              
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


      //Tags Mapper 

      addTagInputs = () => {
        this.setState((prev) => {
          return {
            ...prev,
            tags: [...prev.tags, ""],
          };
        });
      };
      renderTagInputs = () => {
        const textInputStyle = {
            border: 'none',
            padding: '2p 2px',
            borderBottom: '1px solid gray', 
    
            "&:focus":{
              borderRadius: '5px', 
              border: '1px #78C2AD', 
              boxShadow: '#78C2AD'
            }
          }
        return this.state.tags.map((tag, index) => {
          return (
            <div key={`name ${index}`} 
                className="form-group">
            
                <input className="mb-3"
                    value={this.state.tags[index].name}
                    onChange={(e) => this.handleTagChange(e, index)}
                    placeholder="Name"
                    name="name"
                    style={textInputStyle}
                />
              <button className="btn btn-secondary" type="button" onClick={(e)=>this.removeTagInput(e,index)}>{`Delete Tag ${index+1}`}</button>
            </div>
          );
        });
      };
      handleTagChange = (e, tagIndex) => {
        let newTag = e.target.value;
        this.setState((prev) => {
          return {
            ...prev,
            tags: prev.tags.map((tag, index) => {
              if (index == tagIndex) {
                return { ...tag, name: newTag};
              } 
              return tag;
            }),
          };
        });
      };

      removeTagInput = (e, tagIndex) => {
        e.preventDefault()
    
        this.setState({
          tags: this.state.tags.filter((tag, removedTag) => removedTag !== tagIndex )
        })
      }



      //handleSubmit

    handleSumbit = (e) => {
      console.log("handle submit")
        e.preventDefault()
        let recId = this.props.match.params.id
        // if(this.state.title.length > 1){
          console.log(recId)
          console.log(this.state)
            this.props.onEditRecipe(recId, this.state)
            this.props.history.push('/profile')
        // }else{
        //     window.alert("Please add a title")
        // }
    }

    handleIngrDelete = (id) => {
      fetch(`http://localhost:3000/api/v1/ingredients/${id}`, {
          method: "DELETE", 
          headers: {
            "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: localStorage.getItem("token")
          },
        })
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
        <h1>Edit Your {this.state.title} Recipe</h1>
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
                value={this.state.title}
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
                value={this.state.main_pic}
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
                  value={this.state.summary} 
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
                {/* Tags */}
              <label>Tags</label>
              {this.renderTagInputs()}
            <button type="button" className="btn btn-primary" onClick={()=> this.addTagInputs()}>+ Add Tag</button>
            </div>
            <input type="submit" className="btn btn-secondary"></input>
          </fieldset>
        </form>
        </div>
        <div className="col-4"></div>
  </div>
  );
  }
};

export default EditForm 