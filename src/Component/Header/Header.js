import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {

    return (
            <>
        <Navbar className="navbar text-black" collapseOnSelect expand="lg" sticky="top">
          <Container>
          <Navbar.Brand as={Link} to="/">
              <img src="https://themangojelly.com/images/the-mango-jelly-logo-text.svg" alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="#">Home</Nav.Link>

            </Nav>
              <Nav className="ms-auto">
                <Nav.Link as={Link} to="/add">Add Item</Nav.Link>

                <Nav.Link as={Link} to="/manage">All Items</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
            </>
    );
};

export default Header;