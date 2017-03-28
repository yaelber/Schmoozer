import React, { Component } from 'react';
import {} from 'react-router';
import render from 'react-dom';
import { Button, Navbar, NavItem, NavDropdown, MenuItem,  Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


import LoginModal from '../LoginModal/LoginModal'


const Navigation = (props) => {
  return (
    <Navbar inverse collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#" style={navigationStyle.logo}>Schmoozer</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
    </Navbar>
  );
};

const navigationStyle = ({
  logo: {
    fontWeight: 'bold',
    fontFamily:'Copperplate'
  }
})
export default Navigation

 // <Navbar.Collapse>
      //   <Nav>
      //     <LinkContainer to={{pathname: '/foo'}}>
      //       <NavItem eventKey={1}>Event Form</NavItem>
      //     </LinkContainer>
      //     <LinkContainer to ={{pathname: '/bar'}}>
      //       <NavItem eventKey={2}>Single Category Designs</NavItem>
      //     </LinkContainer>
      //     <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
      //       <MenuItem eventKey={3.1}>Action</MenuItem>
      //       <MenuItem eventKey={3.2}>Another action</MenuItem>
      //       <MenuItem eventKey={3.3}>Something else here</MenuItem>
      //       <MenuItem divider />
      //       <MenuItem eventKey={3.3}>Separated link</MenuItem>
      //     </NavDropdown>
      //   </Nav>
      //   <Nav pullRight>
      //     <NavItem eventKey={1} onClick={props.openModal}>Log In</NavItem>
      //     <NavItem eventKey={2} href="#">Register</NavItem>
      //   </Nav>
      // </Navbar.Collapse>