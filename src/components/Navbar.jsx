import React from 'react';
import {
  Link
} from "react-router-dom";
import '../App.css'

const Navigation = (props) => {

  return (
    <div>
      <header class="l-header">
        <nav class="nav bd-grid">
          <div>
          <Link to="/"><a class="nav__logo">Kids Rate Toys</a></Link>
          </div>

          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <Link to="/"><li class="nav__item"><a class="nav__link active">Home</a></li></Link>
              <Link to="/about"><li class="nav__item"><a class="nav__link">About</a></li></Link>
              <Link to="/contact"><li class="nav__item"><a class="nav__link">Contact</a></li></Link>
            </ul>
          </div>

          <div class="nav__toggle" id="nav-toggle">
            <i class='bx bx-menu'></i>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Navigation;