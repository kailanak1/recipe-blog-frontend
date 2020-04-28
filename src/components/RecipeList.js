import React, {Fragment} from 'react'
import { api } from '../services/api'
import  RecipeDetail  from './RecipeDetail'
import { Link } from 'react-router-dom'

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


    showDetail = () => {
        if (this.state.detail === false) {
          return <RecipeDetail {...this.props} recipe={this.state.meal} style={{display: "none"}} show={this.state.detail} />
        } else {
          return <RecipeDetail {...this.props} recipe={this.state.meal} show={this.state.detail} style={{display:'block'}}/>}
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
        return this.state.recipes.map(meal => {
           
            return (
                
                <Fragment>
                    <br></br>
                    <div className="ui column" id={meal.id}>
                        <div className="ui card" 
                        style={{border: "1 px solid black", cursor: 'pointer'}}
                        key={meal.id}
                        onClick={() => this.handleClick(meal)}
                        >
                            <div className="content">
                                <div className="header">
                                    <span stye={{fontWeight: 'bolder'}}>{meal.title}</span>
                                    <br></br>
                                </div>
                                <div className="meta text-wrap">
                                    {!!meal.summary ? meal.summary : "No summary given"}
                                </div>
                            </div>

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