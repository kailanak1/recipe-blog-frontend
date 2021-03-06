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
                    > Recipes Not Blogs
                </NavLink>


                {!!localStorage.getItem("token") ?
                <NavLink
                    to='/profile'
                    exact
                    style={link}
                    > Profile
                </NavLink> : null}

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
                    onClick={this.props.logout}
                >Logout</NavLink> : null}



            </div>
        //return end
        )
    }
}