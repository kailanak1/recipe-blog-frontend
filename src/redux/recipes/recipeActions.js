import {
  
    FETCH_RECIPES_REQUEST,
    FETCH_RECIPES_SUCCESS,
    FETCH_RECIPES_FAILURE,
    POST_RECIPE
  } from "./recipeTypes";

const API_ROOT = `http://localhost:3000/api/v1`;

const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token()
  };
};
  
  export const fetchRecipeSuccess = (recipes) => {
    return {
      type: FETCH_RECIPES_SUCCESS,
      payload: recipes
    };
  };
  
  export const fetchRecipeFailure = (error) => {
    return {
      type: FETCH_RECIPES_FAILURE,
      error: error
    };
  };
  
  export const fetchRecipeRequest = () => {
    return {
      type: FETCH_RECIPES_REQUEST
    };
  };
  
  export const postRecipeSuccess = (newRecipe) => {
    return {
      type: POST_RECIPE,
      payload: newRecipe
    };
  };
  
  export const addRecipe = (recipe) => {
    return {
      type: POST_RECIPE,
      payload: recipe
    };
  };
  
  export const fetchRecipes = () => {
    return (dispatch) => {
      dispatch(fetchRecipeRequest());
      fetch(API_ROOT)
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            dispatch(fetchRecipeFailure(data.error));
          } else {
            dispatch(fetchRecipeSuccess(data));
          }
        });
    };
  };

  export const fetchaRecipe = () => {
      return (dispatch) => {
          dispatch(fetchRecipeRequest()); 
          fetch(API_ROOT)
          .then(res => res.json())
          .then(data => {
            if (data.error) {
              dispatch(fetchRecipeFailure(data.error));
            } else {
              dispatch(fetchRecipeSuccess(data));
            }
          });
      }
  }
  
  export const postRecipe = (newRecipe) => {
      console.log(newRecipe)
    return (dispatch) => {
      dispatch(fetchRecipeRequest());
      return fetch(`${API_ROOT}/recipes`, {
        method: "POST",
        headers: 
            headers()
        ,
        body: JSON.stringify({recipe: newRecipe}),
      })
        .then(res => res.json())
        .then((recipe) => {
            console.log(recipe.error)
          if (recipe.error) {
            dispatch(fetchRecipeFailure(recipe.error));
          } else {
            dispatch(postRecipeSuccess(recipe));
          }
        });
    };
  };