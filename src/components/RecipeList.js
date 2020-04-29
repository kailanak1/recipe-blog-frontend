import React, {Fragment} from 'react'
import { api } from '../services/api'
import  RecipeDetail  from './RecipeDetail'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'

class RecipeList extends React.Component{
    constructor(){
        super()
        this.state = {
            recipes: [],
            detail: false, 
            meal: ''
        }
    }


    //map over the recipes, display the first few 

    componentDidMount(){
        api.recipes.getRecipes().then(data => {
            this.setState({
                recipes: data
            })
        })
    }

    goBack = () => {
        this.setState(prev => {
            return {
                detail: !prev.detail, 
            }
        }, () => {
            this.props.history.push('/recipes')
        })
        console.log("go back was hit")
    }


    showDetail = () => {
        if (this.state.detail === false) {
          return <RecipeDetail {...this.props} recipe={this.state.meal} goBack = {this.goBack} style={{display: "none"}} show={this.state.detail} />
        } else {
          return <RecipeDetail {...this.props} recipe={this.state.meal} goBack = {this.goBack} show={this.state.detail} style={{display:'block'}}/>}
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
        return this.state.recipes.reverse().map(meal => {
           
            return (
                
                <Fragment>
                    <div className = "ui column">
                        <div className = "ui card">
                    <Card 
                    style={{width: '18rem', border: "1px solid black", cursor: 'pointer', alignSelf: 'center'}} 
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
                    </div>
                    </div>
                </Fragment>
            )
        })
    }




    render(){
        console.log(this.state)
        return(
            <div>
                <h1>Recipes</h1>
                {this.state.detail ? this.showDetail() : this.recipeMapper()}
            </div>
        )
    }

}

export default RecipeList