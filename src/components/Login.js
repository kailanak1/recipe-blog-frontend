import React from 'react'
import { api } from '../services/api'


class Login extends React.Component{
    constructor(){
        super()

        this.state = {
            errors: false,
            fields: { 
                username: "",
                password: ""
            }
            
        }
    }

    handleSubmit = event => {
        event.preventDefault()
     
        api.auth.login(this.state.fields).then(res => {
            if (!res.errors){
                this.props.onLogin(res);
                this.props.history.push('/')
            } else {
                this.setState({errors: true})
            }
        })
    }

    handleChange = (event) => {
        const newState = {...this.state.fields, [event.target.name]: event.target.value}
        console.log(newState)
        this.setState({
                fields: newState
        })      
    }



    render(){
        const fields = this.state 
      
        return (
            <div id="signup">
            
            <form id="event-form" onSubmit={this.handleSubmit}>
            <h1>Login to your account</h1>
                <label>Username</label>
                <br></br>
                <input type='text' placeholder='username' name='username' value={fields.username} onChange={this.handleChange}/>
                <br></br>
                <br></br>
                <label>Password</label>
                <br></br>
                <input type='password' placeholder='password' name='password' value={fields.password} onChange={this.handleChange}/><br></br>
                <br></br>
                <br></br>
                <input type="submit" ></input>
            </form>
          </div>
        )
    }

}

// const mapDispatchToProps = dispatch => {
//     return {
//         onAddUser: (userFromState) => postUser(userFromState)(dispatch)
//     }
// }

// export default connect(null, mapDispatchToProps)(Login)

export default Login 