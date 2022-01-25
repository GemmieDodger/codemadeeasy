import React, { useEffect, useState } from "react";
import firebase from "../Firebase";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

import ErrorMessage from "./ErrorMessage";

const PlayContent = (props) => {
  return (
    <Container className="text-center" data-testid="PlayContent">
      <Row className="g-4 text-center justify-content-center">
        <Row>
          <h1 className="mb-3 mt-5 text-brightest">
            Choose your level for code play?
          </h1>
        </Row>
        <Col xs={12} md={4}>
          <div>
            <Link
              className="text-decoration-none"
              to={{ pathname: `/play/codeeditor` }}
            >
              <Card
                style={{ height: 250 }}
                className=" d-flex background-mid  m-0 p-0 xs={1} md={2} background-mid "
              >
                <Card.Body
                  className="align-items-center background-mid d-flex text-white justify-content-center"
                >
                  <h3>Code Editor</h3>
                 
                </Card.Body>
                <Card.Footer className="background-mid ">
                <h5 className="text-bright">Let me freestyle!</h5>
                </Card.Footer>
              </Card>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PlayContent;
