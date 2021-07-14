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
import About from "./components/About.jsx"
import Create from "./components/Create.jsx"

import Login from "./components/Login.jsx"
import SignUp from "./components/Signup.jsx"


function App() {
  return (
    <Router>
        <Navigation />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path="/toy/:name" component={Toy} />
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
