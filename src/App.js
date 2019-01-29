import React, { Component } from 'react';
import './App.css';
import Program from './Program'
import Chiffres from './components/chiffres'
import Images from './components/images'



class App extends React.Component {
  render() {
    return (
        <div>
        <center>
    <h1>Le Programme</h1>
        </center>
         <div className= "programs">
        
        <Program
        title = " full Time"
        content = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it"
        button ="Lire La Suite"
        />
        
        
        <Program
        title = " Part Time"
        content = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it"
        button ="Lire La Suite"
        />
         
        <Program
        title = " Kids  Code "
        content = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it"
        button ="Lire La Suite"
        />        
        </div>
        <h1>Quelques Chiffres </h1>
        <div className = "chiffre">
        <Chiffres
        number= "2000 "
        hobbies= "Etudiants"
        />
        <Chiffres
        number= "3 "
        hobbies= "Ecoles"

        />
        <Chiffres
        number= "3 "
        hobbies= "Ecoles"
        
        />
        </div>
        <center>
        <h1>Ou Se Passe </h1>
        <h2>bhagdjgazjzdzahbdhzdz,sfszhfsdygfj</h2>
        </center>
        <div className = "images">
        
        <Images
        
        image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPNpEH2oyYwFE9PsTNCUl_hahbezPdy1XiUHjh-z56LxiuHQrW'
        legende= 'Tunis'
    
        />
        <Images
        
        image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Sousse_Ribat_Aussicht.JPG/280px-Sousse_Ribat_Aussicht.JPG'
        legende= 'sousse'
        />
     <Images
        
        image = 'http://www.webdo.tn/wp-content/uploads/2017/07/sfax.jpg'
        legende= 'sfax'
    
        />
        
        </div>
        
        </div>
        
  
    );
  }
}
export default App;
