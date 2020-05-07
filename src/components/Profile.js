
import React, {Fragment} from 'react'
import { api } from '../services/api'
import RecipeProfileDetail from './ProfileRecipeDetail'
import Card from 'react-bootstrap/Card'
import EditForm from './EditForm'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'


const Profile = ({recipes}) => {

    // const handleClick = (recipeId) => {
    //     console.log(recipeId)
    // }

    const recipeMapper = () => {
               return recipes.reverse().map((recipe, index)=> {
                  return <div key={index}>
                      
                    <Card 
                    id={recipe.id}
                    style={{width: '18rem', border: "1px solid black", cursor: 'pointer', alignSelf: 'center', boxShadow: '5px .2em 10px #888888'}} 
                    // onClick={() => handleClick(recipe.id)}
                    >
                       <Card.Body>
                           <Card.Title><Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link></Card.Title>
                           <Card.Subtitle className="meta text-wrap">
                                     {!!recipe.summary ? recipe.summary : "No summary given"}
                                 </Card.Subtitle>
                       </Card.Body> 
                  </Card>
                  
                </div>

               })
               
        }
   

    return(
        <div>{recipeMapper()}</div>
    )

}

export default Profile

// class Profile extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             recipes:[], 
//             detail: false,
//             myrecipes: [], 
//             form: false
//         }
//     }

//     //add a render conditional here

//     componentDidMount(){
//         api.recipes.getRecipes().then(data => {
//             this.setState({
//                 recipes: data
//             },()=> this.filtermyRecipes())
//         }) 
//     }

//     filtermyRecipes = () => {
//         const filtered = (this.state.recipes.filter(recipe => recipe.user_id == this.props.appState.auth.user.id))
//         this.setState({
//             myrecipes: filtered
//         })
//     }

//     goBack = () => {
//         this.setState(prev => {
//             return {
//                 detail: !prev.detail, 
//             }
//         }, () => {
//             this.props.history.push('/profile')
//         })
        
//     }

//     showDetail = () => {
//         if (this.state.detail === false) {
//           return <RecipeProfileDetail {...this.props} recipe={this.state.meal} goBack = {this.goBack} style={{display: "none"}} show={this.state.detail} edit={this.handleEdit} delete={this.handleDelete}/>
//         } else {
//           return <RecipeProfileDetail {...this.props} recipe={this.state.meal} goBack = {this.goBack} show={this.state.detail} delete={this.handleDelete} edit={this.handleEdit} style={{display:'block'}}/>}
//       }

//       handleClick = (meal) => {
//         this.setState(prev => {
//             return {
//               detail: !prev.detail,
//               meal: meal
//             }
//           }, () => this.showDetail)
//         }

//         handleEdit = (meal) => {
//             this.setState(prev => {
//                 return {
//                     form: !prev.form, 
//                     meal: meal 
//                 }
//             }, () => this.showForm)
//         }



//     recipeMapper = () => {
//         const filtered = (this.state.recipes.filter(recipe => recipe.user_id == this.props.appState.auth.user.id))
//         return filtered.reverse().map((meal, index) => {
           
//             return (
                
//                 <Fragment key={index}>
//                     <Card 
//                     style={{width: '18rem', border: "1px solid black", cursor: 'pointer', alignSelf: 'center', boxShadow: '5px .2em 10px #888888'}} 
//                     id={meal.id}  
//                     onClick={() => this.handleClick(meal)}>
//                         <Card.Img variant="top" src=""></Card.Img>
//                   <Card.Body>
//                             <Card.Title style={{fontWeight: 'bolder'}}>{meal.title}</Card.Title>
//                                 <br></br>
//                                 <Card.Subtitle className="meta text-wrap">
//                                     {!!meal.summary ? meal.summary : "No summary given"}
                                   
//                                 </Card.Subtitle>
//                     </Card.Body>
//                     </Card>
//                     <br></br>
//                 </Fragment>
//             )
//         })
//     }

//     handleDeletedRecipe = (id) => {
//         const newRecipeState = this.state.recipes.filter(recipe => recipe.id !== id)
//         this.setState({
//             recipes: newRecipeState
//         })
// }

    

//     handleDelete = (e) => {
//         fetch(`http://localhost:3000/api/v1/recipes/${e}`, {
//             method: "DELETE"
//           })
//           .then(resp => this.handleDeletedRecipe(e))
//           .then(data => this.goBack())
        
//     }

//     showForm = () => {
//         return <EditForm />
//     }

//     profileRender = () => {
//         if (!!this.state.detail && !this.state.form){
//             return <RecipeProfileDetail {...this.props} recipe={this.state.meal} goBack = {this.goBack} show={this.state.detail} delete={this.handleDelete} edit={this.handleEdit} style={{display:'block'}}/>
//         } else if (!!this.state.detail && !!this.state.form){
//             return <EditForm/>
//         } else if (!this.state.detail && !this.state.form){
//             this.recipeMapper()
//         } else {
//             this.recipeMapper()
//         }
//     }

   


//     render(){
     

//         return(
//             <div>
//                 <h1>{this.props.appState.auth.user.username}'s Recipes</h1>
//                 {this.state.detail ? this.showDetail() : this.recipeMapper()}
//                 {/* {this.profileRender()} */}

//             </div>
//         )
//     }
// }

// export default Profile