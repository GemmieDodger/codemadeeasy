import React from "react";

import Header from "./Header";
import firebase from "../../Firebase";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { uiConfig } from "../../authProvider";
import { StyledFirebaseAuth } from "react-firebaseui";
import { Link } from "react-router-dom";

const Login = (props) => {
  return (
    <div>
      <Header />
      <Container fluid className="text-white p-5" data-testid="login">
        <Row>
          <Col>
            <StyledFirebaseAuth
              style="p-2"
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
