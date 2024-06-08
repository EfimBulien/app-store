<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">&nbsp;iPhone Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Главная</Nav.Link>
          <Nav.Link as={Link} to="/catalog">Каталог</Nav.Link>
          <Nav.Link as={Link} to="/favorites">Избранное</Nav.Link>
          <Nav.Link as={Link} to="/cart">Корзина</Nav.Link>
          <Nav.Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}   

export default Header;
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">&nbsp;iPhone Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Главная</Nav.Link>
          <Nav.Link as={Link} to="/catalog">Каталог</Nav.Link>
          <Nav.Link as={Link} to="/favorites">Избранное</Nav.Link>
          <Nav.Link as={Link} to="/cart">Корзина</Nav.Link>
          <Nav.Link>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-person-fill" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}   

export default Header;
>>>>>>> 30c05d1e3476e7ab2f826add1a31abc6f6de6ebd
