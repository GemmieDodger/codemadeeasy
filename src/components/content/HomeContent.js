import React from "react";

import Header from "../common/Header";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import { useAuth } from "../../authProvider";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LandingPage = (props) => {
  return (
    <Container className="h-100 mt-5 container">
      <Row className="">
        <Box className="col">
          {props.user && (
            <h1 className="text-brightest m-5 text-center">Welcome home!</h1>
          )}
          <h3 className="text-center m-5 align-middle text-brightest ">
            Your one-stop-shop to break into the world of programming.
          </h3>
        </Box>
      </Row>
    </Container>
  );
};

const Box = styled.div`
  padding: 100px;
  margin: auto;
  font-weight: bolder;
`;
export default LandingPage;