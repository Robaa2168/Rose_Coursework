import { Link } from 'react-router-dom';
import React from 'react';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" className="app-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">Alone World</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/search">Search</Nav.Link>
            <Nav.Link as={Link} to="/about">About us</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact us</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
