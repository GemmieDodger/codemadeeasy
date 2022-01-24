import React from "react";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../resources/logo/codemadeeasy_logo.png";
import "../css/government_defaults.css";

const Header = (props) => {
  return (
    <Navbar
      expand="lg"
      className="pt-2 pb-2 background-night"
      data-testid="header"
      variant="dark" 
    >
      <Container>
        <a href="/" className="navbar-left">
          <img
            src={logo}
            className="img-responsive"
            width={250}
            alt="Code Made Easy Logo"
          />
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end text-white">
          <Nav className="me-auto">
            <Nav.Link href="/" className="bg-transparent text-white">
              Home
            </Nav.Link>
          </Nav>
          <Nav className="me-auto">
            <Nav.Link href="/learn" className="bg-transparent text-white">
              Learn
            </Nav.Link>
          </Nav>
          {/* <Nav className="me-auto">
            <Nav.Link href="/play" className="bg-transparent text-white">
              Play
            </Nav.Link>
          </Nav> */}
          <Navbar.Text>
          {!props.user ? 
              <>
              <Nav.Link href="/login">
                <Button className="bg-transparent" id="login-button">Login</Button>
              </Nav.Link>
              </>
              : 
              <>
              <Nav.Link to="/logout">
                <Button className="bg-transparent" id="logout-button" onClick={props.logout}>Logout</Button>
              </Nav.Link>
              </>
              }
              </Navbar.Text>



        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
