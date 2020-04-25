import {
    POST_USER,
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
  } from "./userTypes";
  
  const initialState = {
    data: [],

  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case POST_USER:
        return {
          ...state,
        
          data: [...state.data, action.payload],
        };
      case FETCH_USERS_REQUEST:
        return {
          ...state,
     
        };
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
       
          data: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default userReducer;