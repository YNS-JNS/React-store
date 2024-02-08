import React from 'react';
/* - Styles ________________________________ */
import './header.css';
/* - React-bootstrap _______________________ */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
/* - React-router-dom ______________________ */
import { Link } from 'react-router-dom';
/*__________________________________________ */

const Header = () => {
  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Store-Fit</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/">Products</Nav.Link>
              <Nav.Link as={Link} to="/add-product">Add Product</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header