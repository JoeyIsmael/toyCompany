import React, { useState } from 'react';
import {
  Navbar,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Input
} from 'reactstrap';

import '../App.css'

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">kidsratetoys</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Input className="searchbar" placeholder="Find a Toy"></Input>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navigation;