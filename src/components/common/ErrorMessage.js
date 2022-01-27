import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { useAuth } from "../../authProvider";
import { Link } from "react-router-dom";

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
      case "admin":
        statement = "Looks like there's a problem with your admin page.";
        break;
    case "quizzes":
      statement = "There appear to be no quizzes.";
      break;
    default:
      statement = "There has been an error with this page";
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
          <Link to={`/admin`} className="background-bright text-white">
            <Button>Edit quizzes</Button>
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
