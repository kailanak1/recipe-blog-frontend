import React from 'react';
import {Link} from 'react-router-dom';
import {carousel} from 'react-bootstrap';

export default class LandingPage extends React.Component{
  
    //click on recipe, history push to recipe detail
    render(){
        return(
            <div>
            <h1>Welcome to Recipe (Not Blog)</h1>
            Here you can find recipes, not blogs. 
            </div>
        )
    }

}

