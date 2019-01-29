import React from 'react';
//import image from './elon.jpg';
import Style from '../style.css'

class Chiffres extends React.Component {
    
    render() {

        return (
            
            // les chiifres 
<div style = {{margin : "10px"}}>
<h1>{this.props.number}</h1>
<h2>{this.props.hobbies}</h2>
            
</div>      
                      
           
  );
    
    }
   
}

export default Chiffres