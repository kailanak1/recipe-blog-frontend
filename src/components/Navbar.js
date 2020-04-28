import React from 'react'
import { NavLink } from 'react-router-dom';

export default class Navbar extends React.Component {

    render(){
        const link = {
            color: "black"
        }
        return (
            <div className="navbar">
                <NavLink
                    to='/'
                    exact
                    style={link}
                    > Recipe Blog
                </NavLink>


               
                <NavLink
                    to='/profile'
                    exact
                    style={link}
                    > Profile
                </NavLink>

                {!!localStorage.getItem("token")? <NavLink
                    to='/add-recipe'
                    exact
                    style={link}
                    > Add a Recipe!
                </NavLink> : null }

                <NavLink
                    to='/recipes'
                    exact
                    style={link}
                    > Recipes
                </NavLink>

                {!localStorage.getItem("token") ? <NavLink
                    to='/signup'
                    exact
                    style={link}
                    > Sign Up
                </NavLink> : null} 

                {!localStorage.getItem("token") ?
                <NavLink
                    to='/login'
                    exact
                    style={link}
                    > Login
                </NavLink> : null }



                {!!localStorage.getItem("token") ?
                <NavLink className='link'
                    to="/"
                     exact
                    style={link}
                    activeStyle={{
                    background: 'rgba(71, 3, 114, 0.836)'
                    }}
                    onClick={this.props.logout}
                >Logout</NavLink> : null}



            </div>
        //return end
        )
    }
}