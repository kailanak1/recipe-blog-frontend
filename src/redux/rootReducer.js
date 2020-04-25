//combine reducers here
import { combineReducers } from 'redux';
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
    user: userReducer, 
    // recipe: recipeReducer
})

export default rootReducer