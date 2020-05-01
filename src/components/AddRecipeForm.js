import React, {useReducer} from 'react'
import { render } from '@testing-library/react'

const maxChars = 80
const smallertextareastyle= {
    padding: "9px", 
    boxSizing: "border-box", 
    fontSize: "15px", 
    minHeight: "100px",
    minWidth: "300px"
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

    const handleClick = () => {

    }


          
    return(
        <div>
            <form>
                <label>Title</label>
                <br></br>
                <input type="text" onChange={handleChange} value={recipe.title} name="title"></input>
                <br></br>
                <label>Steps</label>
                <br></br>
                <textarea onChange={handleChange} value={recipe.steps} name="steps"></textarea>
                <button onClick={handleClick}>Add a new Step</button>
                {/* <textarea onChange={handleChange}  value={recipe.steps.step2} name="step2"></textarea> */}
            </form>
        </div>
    )



}

export default AddRecipeForm 