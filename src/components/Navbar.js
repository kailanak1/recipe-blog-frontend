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

                {/* only display if user is logged in */}
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



            </div>
        //return end
        )
    }
}