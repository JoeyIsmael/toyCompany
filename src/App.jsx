import React from 'react';
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from "./components/Navbar.jsx"
import Home from "./components/Home.jsx"
import Toy from "./components/Toy.jsx"
import Contact from "./components/Contact.jsx"

function App() {

  return (
    <Router>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/toy/:name" component={Toy} />
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
