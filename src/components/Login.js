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
        console.log("loggin in")
        api.auth.login(this.state.fields).then(res => {
            if (!res.errors){
                this.props.onLogin(res);
                this.props.history.push('/calendar')
            } else {
                this.setState({errors: true})
            }
        })


    }



    render(){
        return (
            <div id="signup">
            {/* {this.props.appState.errors ? <h3 style={{color: 'white'}}>Error! This username has already been taken. Please try again.</h3> : <h3>Enter the information below to create an account.</h3>} */}
            <form id="event-form" onSubmit={this.handleSubmit}>
            <h1>Login to your account</h1>
                <label>Username</label>
                <br></br>
                <input type='text' placeholder='username' name='username'/>
                <br></br>
                <br></br>
                <label>Password</label>
                <br></br>
                <input type='password' placeholder='password' name='password'/><br></br>
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