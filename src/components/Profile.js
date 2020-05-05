
import React, {Fragment} from 'react'
import { api } from '../services/api'
import RecipeProfileDetail from './ProfileRecipeDetail'
import Card from 'react-bootstrap/Card'
import EditForm from './EditForm'
import {BrowserRouter as Router, Route} from 'react-router-dom'


class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
            recipes:[], 
            detail: false,
            myrecipes: [], 
            form: false
        }
    }

    //add a render conditional here

    componentDidMount(){
        api.recipes.getRecipes().then(data => {
            this.setState({
                recipes: data
            })
        })
    }

    filtermyRecipes = () => {
        const filtered = (this.state.recipes.filter(recipe => recipe.user_id == this.props.appState.auth.user.id))
        this.setState({
            myrecipes: filtered
        })
    }

    goBack = () => {
        this.setState(prev => {
            return {
                detail: !prev.detail, 
            }
        }, () => {
            this.props.history.push('/profile')
        })
        console.log("go back was hit")
    }

    showDetail = () => {
        if (this.state.detail === false) {
          return <RecipeProfileDetail {...this.props} recipe={this.state.meal} goBack = {this.goBack} style={{display: "none"}} show={this.state.detail} edit={this.handleEdit} delete={this.handleDelete}/>
        } else {
          return <RecipeProfileDetail {...this.props} recipe={this.state.meal} goBack = {this.goBack} show={this.state.detail} delete={this.handleDelete} edit={this.handleEdit} style={{display:'block'}}/>}
      }

      handleClick = (meal) => {
        this.setState(prev => {
            return {
              detail: !prev.detail,
              meal: meal
            }
          }, () => this.showDetail)
        }

        handleEdit = (meal) => {
            this.setState(prev => {
                return {
                    form: !prev.form,
                    detail: !prev.detail, 
                    meal: meal 
                }
            }, () => this.showForm)
        }



    recipeMapper = () => {
        const filtered = (this.state.recipes.filter(recipe => recipe.user_id == this.props.appState.auth.user.id))
        return filtered.reverse().map(meal => {
           
            return (
                
                <Fragment>
                    <Card 
                    style={{width: '18rem', border: "1px solid black", cursor: 'pointer'}} 
                    id={meal.id}  
                    onClick={() => this.handleClick(meal)}>
                        <Card.Img variant="top" src=""></Card.Img>
                  <Card.Body>
                            <Card.Title style={{fontWeight: 'bolder'}}>{meal.title}</Card.Title>
                                <br></br>
                                <Card.Subtitle className="meta text-wrap">
                                    {!!meal.summary ? meal.summary : "No summary given"}
                                   
                                </Card.Subtitle>
                    </Card.Body>
                    </Card>
                    <br></br>
                </Fragment>
            )
        })
    }

    handleDeletedRecipe = (id) => {
        const newRecipeState = this.state.recipes.filter(recipe => recipe.id !== id)
        this.setState({
            recipes: newRecipeState
        })
}

    

    handleDelete = (e) => {
        fetch(`http://localhost:3000/api/v1/recipes/${e}`, {
            method: "DELETE"
          })
          .then(resp => this.handleDeletedRecipe(e))
          .then(data => this.goBack())
        
    }

    showForm = () => {
        if(this.state.form === false){
            return( 
             <EditForm style={{display: "none"}}/>)
            }
        else{
            return(
            <EditForm style={{display: "block"}}/>)
        }
    }

    // profileRender = () => {
    //     if (!!this.state.detail && !this.state.form){
    //         return <RecipeProfileDetail {...this.props} recipe={this.state.meal} goBack = {this.goBack} show={this.state.detail} delete={this.handleDelete} edit={this.handleEdit} style={{display:'block'}}/>
    //     } else if (!!this.state.detail && !!this.state.form){
    //         return <EditForm/>
    //     } else if (!this.state.detail && !this.state.form){
    //         this.recipeMapper()
    //     } else {
    //         this.recipeMapper()
    //     }
    // }
 
    checkState = () => {
        if(!this.state.form && this.state.detail){
            this.recipeMapper()
        }else if(this.state.form && this.state.detail){
            this.showForm()
        } else if (!this.state.form && !this.state.detail){
            this.recipeMapper()
        }
    }



   


    render(){
        console.log(this.props)
        console.log(this.state)

        return(
            <div>
                <h1>{this.props.appState.auth.user.username}'s Recipes</h1>
                {this.state.detail && !this.state.form ? this.showDetail(): this.recipeMapper()}
                {/* {this.checkState()} */}

            </div>
        )
    }
}

export default Profile