import React from 'react';
//import image from './elon.jpg';
import Style from '../style.css'

class Images extends React.Component {
    
    render() {

        return (
            
            // les images 
<div >
 <img src = {this.props.image} style={{height:"33px", 
                                      width:"33px", 
                                      margin : "10px"}}/>
<h1 style = {{display: "flex",
            justifyContent : "center"}}>{this.props.legende}</h1>
</div>      
                      
           
  );
    
    }
   
}

export default Images 