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

                <NavLink
                    to='/add-recipe'
                    exact
                    style={link}
                    > Add a Recipe!
                </NavLink>

                <NavLink
                    to='/signup'
                    exact
                    style={link}
                    > Sign Up
                </NavLink>

                <NavLink
                    to='/login'
                    exact
                    style={link}
                    > Login
                </NavLink>



                



            </div>
        //return end
        )
    }
}