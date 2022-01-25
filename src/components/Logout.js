import React from "react";

import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../components/Header";
import { uiConfig } from "../authProvider";
import firebase from "../Firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import { Button } from "react-bootstrap";

const Logout = (props) => {

  return (
    <div>
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
    </div>
  )
}

export default Logout;
