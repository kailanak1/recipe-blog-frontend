import React from 'react'
import { connect } from "react-redux";
import { postUser } from "../redux";





class Signup extends React.Component{

    handleSubmit = event => {
        event.preventDefault()
        this.props.onCreateUser(event)
        event.target.username.value = ''
        event.target.password.value = ''
        this.props.history.push('/landing')
    }

    render(){
        
   
        return (
            <div id="signup">
                <h1>Sign up for an account</h1>
                {this.props.appState.errors ? <h3 style={{color: 'white'}}>Someone took this username already. Please come up with a different one.</h3> : <h3>Enter the information below to create an account.</h3>}
                <form id="signup-form" onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <br></br>
                    <input type='text' placeholder='username' name='username' />
                    <br></br>
                    <label>Password</label>
                    <br></br>
                    <input type='password' placeholder='password' name='password'/><br></br>
                    <br></br>
                    <br></br>
                    <input type="submit"></input>
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

// export default connect(null, mapDispatchToProps)(Signup)
export default Signup 

