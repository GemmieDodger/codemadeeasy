import React from "react";

import firebase from "../../Firebase";
import Header from "./Header";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { uiConfig } from "../../authProvider";
import { StyledFirebaseAuth } from "react-firebaseui";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Logout = (props) => {

  return (
    <>
    <Header />   
      <Container fluid className="text-white p-5 center" data-testid="logout">
        <Row>
            <Col className="text-center">
            <h4 className="text-brightest m-2">You have been logged out!</h4>
            <Link className="text-decoration-none" to="/"><Button className=" m-4 background-bright text-center text-white">Return to home</Button></Link>
            <h6 className="m-2">OR</h6>
            <h5 className="m-4">Sign back in below?</h5>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default Logout;
