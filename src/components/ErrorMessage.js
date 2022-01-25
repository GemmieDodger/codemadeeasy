import React from "react";

import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useAuth } from "../authProvider";

const ErrorMessage = (props) => {
  const { user } = useAuth();
  let statement = "";
  switch (props.type) {
    case "questions":
      statement = "There appear to be no questions set for this quiz.";
      break;
    case "quiz":
      statement = "There seems to have been an error with this quiz.";
      break;
    case "quizzes":
      statement = "There appear to be no quizzes.";
      break;
    default:
      statement = "There has been an error";
  }

  return (
    <>
      <Col className="text-brightest p-4 m-5 text-center">
        <Row className="p-5">
          <h3>{statement}</h3>
          <h6>{props.e}</h6>
        </Row>
        <Row>
        <Link className="text-decoration-none" to="/"><Button className=" m-4 background-bright text-center text-white">Return to home</Button></Link>
        </Row>
        {props.type === "questions" &&  user ?
        <>        
        <Row>
          <h6>or</h6>
        </Row>
        <Row className="mb-5">
          <Link to={`/admin`}>
            <h4>Edit quizzes</h4>
          </Link>
        </Row>
        </>
       : ''
        }
      </Col>
    </>
  );
};

export default ErrorMessage;
