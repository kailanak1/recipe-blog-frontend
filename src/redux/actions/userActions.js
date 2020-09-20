

const API_ROOT = `http://localhost:3000/api/v1`;

const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token()
  };
};
  
  export const fetchUserSuccess = (users) => {
    return {
      type: FETCH_USERS_SUCCESS,
      payload: users
    };
  };
  
  export const fetchUserFailure = (error) => {
    return {
      type: FETCH_USERS_FAILURE,
      error: error
    };
  };
  
  export const fetchUserRequest = () => {
    return {
      type: FETCH_USERS_REQUEST
    };
  };
  
  export const postUserSuccess = (newUser) => {
    return {
      type: POST_USER,
      payload: newUser
    };
  };
  
  export const addUser = (user) => {
    return {
      type: POST_USER,
      payload: user
    };
  };
  
  export const fetchUsers = () => {
    return (dispatch) => {
      dispatch(fetchUserRequest());
      fetch(API_ROOT)
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            dispatch(fetchUserFailure(data.error));
          } else {
            dispatch(fetchUserSuccess(data));
          }
        });
    };
  };

  export const fetchaUser = () => {
      return (dispatch) => {
          dispatch(fetchUserRequest()); 
          fetch(API_ROOT)
          .then(res => res.json())
          .then(data => {
            if (data.error) {
              dispatch(fetchUserFailure(data.error));
            } else {
              dispatch(fetchUserSuccess(data));
            }
          });
      }
  }
  
  export const postUser = (newUser) => {
 
    return (dispatch) => {
      dispatch(fetchUserRequest());
      return fetch(`${API_ROOT}/signup`, {
        method: "POST",
        headers: 
            headers()
        ,
        body: JSON.stringify({user: newUser}),
      })
        .then(res => res.json())
        .then((user) => {
            
          if (user.error) {
            dispatch(fetchUserFailure(user.error));
          } else {
            dispatch(postUserSuccess(user));
          }
        });
    };
  };