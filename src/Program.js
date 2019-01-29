import React from 'react';
import './style.css'
class Program extends React.Component {
    
    render() {

        return (
            
<div className = "programme" >
    <h1 className = "title"> {this.props.title}</h1>
    <h1 className = "content ">{this.props.content}</h1>
     <input type = "button" value={this.props.button} className = "button"/> 
</div>      
                               
  );
    
    }
   
}

export default Program