import React from 'react';
import {
  Link
} from "react-router-dom";
import '../App.css'

const Navigation = (props) => {

  return (
    <div>
      <header className="l-header">
        <nav className="nav bd-grid">
        
          <div className="titlebar">
            <img src={require("./img/krtlogo.png")} alt="" className="logoimg"/>
            <Link to="/" className="nav__logo">Kids Rate Toys</Link>
          </div>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list">
              <li className="nav__item"><Link to="/" className="nav__link active">Home</Link></li>
              <li className="nav__item"><Link to="/create" className="nav__link">Create</Link></li>
              <li className="nav__item"><Link to="/about" className="nav__link">About</Link></li>
              <li className="nav__item"><Link to="/contact" className="nav__link">Contact</Link></li>
              <li className="nav__item"><Link to="/signup" className="nav__link">Sign Up</Link></li>
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

export default Navigation;