import React from 'react';
import './App.css'

// Import Components
import Homepage from './Components/Homepage';
import Char from './Components/Char';
// import CreateData from './Components/CreateData';

function App(){
  return(
    <div className="container">
      {/* HomePage Imports */}
      <Homepage /> 
      <Char />

      {/* Create Data Imports */}
    </div>
  );
}

export default App;

