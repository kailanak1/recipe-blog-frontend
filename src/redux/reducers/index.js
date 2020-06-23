import userReducer from './user'; 
import  recipeReducer  from './recipeReducer';
import userReducer from './userReducer';
import {combineReducers} from 'redux'; 


export default combineReducers({
    userContext: userReducer,
    recipess: recipeReducer
});