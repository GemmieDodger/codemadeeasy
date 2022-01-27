import React, { useState } from "react";

import firebase from "../../Firebase";
import Loading from "../common/Loading";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../authProvider";
import SubHeader from "../common/SubHeader";

const CreateQuizContent = (props) => {
  const { loading} = useAuth();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState({
    quizName: "",
  });

  const onChangeQuiz = (e) => {
    setQuiz({ quizName: e.target.value });
  };

  const onSubmitQuiz = (e) => {
    e.preventDefault();
    const { quizName } = quiz;

    const ref = firebase.firestore().collection("quizzes");

    ref
      .add({ quizName })
      .then((docRef) => {
        setQuiz({ quizName: "" });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
    navigate(`/admin`);
  };
  if (!loading) {
    return (
      <>
        <Container  className="mt-5">
          <Row >
            <SubHeader type="add"/>
            <Form className="background-mid text-white border border-white p-4" onSubmit={onSubmitQuiz}>
              <Form.Group className="mb-3" controlId="quizName">
                <Form.Control
                  id="addAQuizName"
                  as="textarea"
                  rows={1}
                  placeholder="Add quiz name here"
                  name="quizName"
                  onChange={onChangeQuiz}
                />
              </Form.Group>
              <Button
                className="background-bright text-white m-4 "
                type="submit"
              >
                Create new quiz
              </Button>
            </Form>
          </Row>
        </Container>
      </>
    );
  } else {
    return (
      <Loading />
    )
  }
};

export default CreateQuizContent;
