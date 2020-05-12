import {
    POST_RECIPE,
    FETCH_RECIPES_REQUEST,
    FETCH_RECIPES_SUCCESS,
  } from "./recipeTypes";
  
  const initialState = {
    data: [],

  };
  
  const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_RECIPE:
        return {
          ...state,
        
          data: [...state.data, action.payload],
        };
      case FETCH_RECIPES_REQUEST:
        return {
          ...state,
     
        };
      case FETCH_RECIPES_SUCCESS:
        return {
          ...state,
       
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default recipeReducer;