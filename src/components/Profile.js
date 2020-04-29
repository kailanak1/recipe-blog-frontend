
import React, {Fragment} from 'react'
import { api } from '../services/api'
import RecipeProfileDetail from './ProfileRecipeDetail'
import Card from 'react-bootstrap/Card'

class Profile extends React.Component{
    constructor(){
        super()
        this.state = {
            recipes:[], 
            detail: false,
            myrecipes: []
        }
    }


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
          return <RecipeProfileDetail {...this.props} recipe={this.state.meal} goBack = {this.goBack} style={{display: "none"}} show={this.state.detail} />
        } else {
          return <RecipeProfileDetail {...this.props} recipe={this.state.meal} goBack = {this.goBack} show={this.state.detail} style={{display:'block'}}/>}
      }

      handleClick = (meal) => {
        this.setState(prev => {
            return {
              detail: !prev.detail,
              meal: meal
            }
          }, () => this.showDetail)
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
                  <Card.Body>
                            <Card.Title style={{fontWeight: 'bolder'}}>{meal.title}</Card.Title>
                                <br></br>
                                <Card.Subtitle className="meta text-wrap">
                                    {!!meal.summary ? meal.summary : "No summary given"}
                                    <br></br>
                                    <button onClick={() => this.handleDelete(meal.id)}>Delete</button>
                                </Card.Subtitle>
                    </Card.Body>
                    </Card>
                    <br></br>
                </Fragment>
            )
        })
    }


    handleDelete = (e) => {
        fetch(`http://localhost:3000/api/v1/recipes/${e.recipe.id}`, {
            method: "DELETE"
          })
          .then(resp => this.props.history.push('/profile'))
        
    }

//   mapRecipeArray = () => {
//       return this.recipeArray().map(recipe => {
//           recipe
//         //   if(recipe.user_id == this.props.appState.auth.user.id){
//         //       return <div>{recipe.title}</div>
//         //   }
//       })
//   }



    render(){
        console.log(this.props)
        console.log(this.state)
        console.log(this.props.appState.auth.user.id)

     
        return(
            <div>
                <h1>{this.props.appState.auth.user.username}'s Recipes</h1>
                {this.state.detail ? this.showDetail() : this.recipeMapper()}
            </div>
        )
    }
}

export default Profile