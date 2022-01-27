import React from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const LandingPage = (props) => {
  return (
    <Container className="h-100 mt-5 container">
      <Row className="">
        <Col>
          {props.user && (
            <h1 className="text-brightest mt-5 text-center">Welcome home!</h1>
          )}
          <h3 className="text-center mt-5 align-middle text-brightest ">
            Your one-stop-shop to break into the world of programming.
          </h3>
        </Col>
      </Row>
    </Container>
  );
};

export default LandingPage;
