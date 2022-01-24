import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from '../resources/logo/codemadeeasy_logo.png';
import '../css/government_defaults.css';

const Header = () => {
  return(
  <Navbar  expand="lg" className="pt-2 pb-2 background-darkest" data-testid="header">
    <Container>
      <a href="/" className="navbar-left"><img src={logo} className="img-responsive" width={250} alt="Code Made Easy Logo" /></a>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="me-auto">
          <Nav.Link href="/" className="bg-transparent text-black">Home</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link href="/" className="bg-transparent text-black">Learn</Nav.Link>
        </Nav>
        <Nav className="me-auto">
          <Nav.Link href="/" className="bg-transparent text-black">Play</Nav.Link>
        </Nav>
        <Navbar.Text>
          <Button className="bg-transparent" id="login-button">Login</Button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header;