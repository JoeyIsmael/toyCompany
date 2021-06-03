import React from 'react';
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Navigation from "./components/Navbar.jsx"
import Toy from "./components/Toy.jsx"
import { Input, Button, InputGroup, InputGroupAddon } from 'reactstrap'
function App() {

  return (
    <div className="App">


      <Router>
        <Switch>
          <Route exact path='/'>
            <Navigation />
            <div className="Banner">
              <div className="title1">
                <h1 className="title2">Looking for a Toy Product Review?</h1>
                <InputGroup>
                  <Input className="searchbar" placeholder="Find a Toy" />
                  <InputGroupAddon addonType="prepend"><Button>Search</Button></InputGroupAddon>
                </InputGroup>
              </div>
            </div>
            </Route>
          <Route path="/toy/:name" component={Toy} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
