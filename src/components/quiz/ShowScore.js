import React from "react";
import PlayContent from "../content/PlayContent"

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Link } from "react-router-dom";

const ShowScore = (props) => {
  return (
    <>
      <div className="text-center text-brightest p-4 m-5">
        <Row>
          <p className=" mt-5">
            You scored {props.score} out of {props.length}
          </p>
        </Row>
        <Row>
          <Link to="/">
            <Button className="text-white background-bright">Go back to Home</Button>
          </Link>
        </Row>
      </div>
      {props.incorrectQuestions.length > 0 && (
      <>
      <Row className="bg-dark text-bright p-4 m-5">
      
        <h3 id="incorrectAnswers">Incorrect answers </h3>
          {props.incorrectQuestions.map((question, index) => (
            <>
              <Row >
                <Row className="p-3 text-white">
                  <Col>
                    <div className="mb-1">
                      <span>Question {question.currentQuestion + 1}</span>
                    </div>
                    <div className="mb-2">{question.questionText}</div>
                  </Col>
                  <Col>
                    <Row>
                      <div>
                        You picked the answer: {question.incorrectAnswerText}
                      </div>
                    </Row>
                    <Row>
                      <div>
                        The correct answer was: {question.correctAnswerText}
                      </div>
                    </Row>
                  </Col>
                </Row>
                <hr /> 
              </Row>
              </>
          ))}
        </Row>
        </> )}
        <PlayContent type="showScore" />
    </>
  );
};

export default ShowScore;
