import React from 'react';
import {
  Link
} from "react-router-dom";
import '../App.css'

import firebase from "../firebase.js";

class Navigation extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      logged: false,
    }
  }

  componentDidMount() {



    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        this.setState({ logged: true })
      } else {
        // No user is signed in.
      }
    });
  }

  signOut() {
    try {
      firebase.auth().signOut()
    } catch (err) {
      console.log(err)
    }
  }

  render() {

    let login = <li className="nav__item"><Link to="/signup" className="nav__link">Sign Up</Link></li>

    if (this.state.logged) {
      login = (
        <li className="nav__item" onClick={this.signOut}><Link className="nav__link">Sign Out</Link></li>
      )
    }

    return (
      <div>
        <header className="l-header">
          <nav className="nav bd-grid">
            <div>
              <Link to="/" className="nav__logo">Kids Rate Toys</Link>
            </div>

            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item"><Link to="/" className="nav__link active">Home</Link></li>
                <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
                <li className="nav__item"><Link to="/contact" className="nav__link">Contact</Link></li>
                {login}
              </ul>
            </div>

            <div className="nav__toggle" id="nav-toggle">
              <i className='bx bx-menu'></i>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navigation;