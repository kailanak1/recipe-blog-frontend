import React from 'react';
import {Link} from 'react-router-dom';
import {carousel} from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';


export default class LandingPage extends React.Component{
constructor(props){
    super(props)
    this.state = {
        recipes: this.props.recipes, 
        newestThree: []
    }
}
  
    spliceForLanding = () => {
       
        let newest = this.props.appState.recipes.splice(-1, 3)

        this.setState({
          newestThree: newest
        })
    }
    

    render(){
     
        return(
            <div>
            <h1>Welcome to Show Me the Recipe!</h1>
            Here you can find recipes, not blogs. 
          
            </div>
        )
    }

}

