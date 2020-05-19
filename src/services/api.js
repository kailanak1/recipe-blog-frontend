const API_ROOT = `http://localhost:3000/api/v1`;

const token = () => localStorage.getItem("token");

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: token()
  };
};

const login = data => {
    return fetch(`${API_ROOT}/login`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify( {auth: data})
    }).then(res => {return res.json()});
  };
  
  const getCurrentUser = () => {
    return fetch(`${API_ROOT}/current_user`, {
      headers: headers()
    }).then(res => {
      return res.json();
    });
  };

  const createUser = (data) => {
    return fetch(`${API_ROOT}/sign_up`, {
      method: "POST",
      headers: {      
        "Content-Type": "application/json",
        Accept: "application/json"
        },
      body: JSON.stringify({user: data})
    }).then(res => { return res.json()});
};

    const getRecipes = () => {
        return fetch (`${API_ROOT}/recipes`)
        .then(res => {
            return res.json()
        })
    }
    
    const getRecipeDetail = (id) => {
      return fetch (`${API_ROOT}/recipes/${id}`)
      .then(res => {
          return res.json()
      })
  }


    

  export const api = {
      auth: {
          login, 
          getCurrentUser, 
          createUser
      },
      recipes: {
          getRecipes,
          getRecipeDetail
      }
  }