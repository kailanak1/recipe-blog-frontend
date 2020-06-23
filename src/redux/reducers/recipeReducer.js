const RECIPE_INITIAL_STATE = []

const recipeReducer = (state = RECIPE_INITIAL_STATE, action) => {
    switch(action.type){
        case 'GET RECIPES': 
            return action.payload.map(item => item)
        case 'POST RECIPE':
            return state.map(q => q.id === action.payload.recipe_id
                ? {...r, ingredients: [...r.ingredients, action.payload] } : q) 
        case 'ADD RECIPE':
            return [...state, action.payload]
        case 'DELETE RECIPE': 
            let newState = state.filter(recipe => recipe.id !== action.payload)
            return newState
        case 'UPDATE RECIPE': 
           return state.map(q => q.id === action.payload.id
            ? {...q, points: action.payload.points } : q)
        case 'GET RECIPES_ERROR': 
            return action.error
        case 'POST RECIPE_ERROR': 
            return action.error
        case 'ADD RECIPE_ERROR': 
            return action.error
        case 'DELETE RECIPE_ERROR': 
            return action.error
        case 'UPDATE RECIPE_ERROR': 
            return action.error
        default:
            return state
    }
}

export default recipeReducer;