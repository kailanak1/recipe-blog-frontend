import React, {useReducer, useState} from 'react'
import Form from 'react-bootstrap/Form';
import { api } from '../services/api'



class EditForm extends React.Component {
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


    getRecipe = () => {
        const id = this.props.match.params.id
        api.recipes.getRecipeDetail(id)
        .then(response => 
            console.log(response))
            
        
    }



    render(){
       
        return(
            <div>Edit Form
            {this.getRecipe()}

            </div>
        )
    }

}

export default EditForm 