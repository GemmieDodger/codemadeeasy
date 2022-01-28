import React from "react";

import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const HomeContent = (props) => {
  return (
    <Container className="h-100 mt-5 container">
      <Row className="h-100">
        <Col className="col-sm-12 my-auto align-middle mx-auto">
          {props.user && (
            <h1 className="text-brightest mb-5 text-center">Welcome home!</h1>
          )}
          <h1 className="text-center align-middle text-brightest " >
            Your one-stop-shop to break into the world of programming.
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default HomeContent;
