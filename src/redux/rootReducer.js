//combine reducers here
import { combineReducers } from 'redux';
import userReducer from './users/userReducer';
import recipeReducer from './recipes/recipeReducer'

const rootReducer = combineReducers({
    user: userReducer, 
    recipe: recipeReducer
})

export default rootReducer