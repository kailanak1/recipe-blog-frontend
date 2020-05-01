import React, {useReducer, useState} from 'react'

import { useForm, useFieldArray } from "react-hook-form";


const maxChars = 80
const smallertextareastyle= {
    padding: "9px", 
    boxSizing: "border-box", 
    fontSize: "15px", 
    minHeight: "75px",
    minWidth: "100px"
  } 
const AddRecipeForm  = (props) => {


    const [recipe, setRecipe] = useReducer(
        (recipe, newRecipe) => ({...recipe, ...newRecipe}),
        {
        title:"",
        image_url: "",
        summary: "",
        ingredients: [
            {name: "", amount: ""}
        ],
        steps: [],
        tags: [],
        charsLeft: maxChars
    }
    )
   
    const handleChange = (e) =>{
        const {name, value} = e.target
        setRecipe({[name]: value})
    }
    
    const addStepToRecipe = (e) => {
        let newStep = ""
        setRecipe({ 
            steps: [...recipe.steps, newStep]
        })
    }

    // let totalSteps = 0;



    // const handleAddStep = (e) => {
    //     console.log(e.target.name)
    //     e.preventDefault()
    //     setRecipe({
    //         ...recipe,
    //         steps: [
    //             ...recipe.steps, { [e.target.name]:e.target.value }
    //         ]
    //     })
    // }
    // const stepsMapper = () => {
    //     {
    //     return recipe.steps.map((step, index) =>{
    //         const stepNumber = index+1
    //         return( 
    //         <div key={index}>
    //             <textarea
    //                 name={stepNumber}
    //                 placeholder={stepNumber}
    //                 value={recipe.steps[stepNumber]}
    //                 onChange={handleChange}
    //             />
    //         </div>
    //         )
    //     })
    //     }
    // }

    const handleRemoveStep = () => {

    }


    const stepsMapper = () => {
        
        return (
        <div>
        {fields.map((item, index) => (
          <div key={item.id}>
            <input
            name={recipe.steps} 
            onChange={handleChange} 
            style={smallertextareastyle} 
            defaultValue={`Step ${index +1} `} 
            ref={register()} />
            <button onClick={() => remove(index)}>Delete</button>
          </div>
        ))}
      <section>
        <button type="button" onClick={() => append({ name: "step" })} >
          Add step
        </button>
      </section>
      </div>
        )
    }




  const { register, control, handleSubmit } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute 
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"
  });
  
  return (
      <div>
          <h1>Add a new recipe!</h1>
    <form onSubmit={handleSubmit(data => console.log("data", data))}>
        <label>Title</label>
        <br></br>
        <input onChange={handleChange} name="title" placeholder="Title" ref={register}></input>
        <br></br>
        <label>Steps</label>
      {stepsMapper()}
      <input type="submit"></input>
    </form>
    </div>
  );


}



    

export default AddRecipeForm 