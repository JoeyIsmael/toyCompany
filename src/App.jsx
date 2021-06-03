import React from 'react';
import "./App.css";

import Navigation from "./components/Navbar.jsx"
import {Input, Button, InputGroup, InputGroupAddon} from 'reactstrap'
function App() {
  
  return (
    <div className="App">
      <Navigation/>
      <div className="Banner">
        <div className="title1">
          <h1 className="title2">
            Looking for a Toy Product Review?
          </h1>
         {/* <Input className="searchbar" placeholder="Find a Toy"></Input> */}
         <InputGroup>
          <Input className="searchbar" placeholder="Find a Toy"/>
          <InputGroupAddon addonType="prepend"><Button>Search</Button></InputGroupAddon>
        </InputGroup>
        </div> 
        </div>
    </div>
  );
}

export default App;
