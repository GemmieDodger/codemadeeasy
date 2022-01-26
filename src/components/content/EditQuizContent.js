import React, { useEffect, useState } from "react";
import firebase from "../../Firebase";

import ShowModal from "../common/ShowModal";
import ErrorMessage from "../common/ErrorMessage";
import SubHeader from "../common/SubHeader";
import AddQuestion from "../quiz/AddQuestion";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";

import { useParams } from "react-router-dom";

const EditQuestions = (props) => {
  const { id, quizname } = useParams();
  // State for display of quiz.
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [quiz, setQuiz] = useState({});
  const [questions, setQuestions] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    questionText: "",
    answerOptions: [
      { answerText: "", isCorrect: "" },
      { answerText: "", isCorrect: "" },
      { answerText: "", isCorrect: "" },
    ],
    code: "",
    timestamp: 0,
  });

  // Modal
  const [show, setShow] = useState(false);
  const [type, setType] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onCollectionUpdate = (querySnapshot) => {
    const questions = [];
    querySnapshot.forEach((doc) => {
      const { key, questionText, answerOptions, code, timestamp } = doc.data();
      questions.push({
        key: doc.id, // DocumentSnapshot
        doc,
        questionText,
        answerOptions,
        code,
        timestamp,
      });
    });
    setQuestions(questions);
  };

  useEffect(() => {
    const col = firebase
      .firestore()
      .collection("quizzes")
      .doc(id)
      .collection("questions")
      .orderBy("timestamp");
    const ref = firebase.firestore().collection("quizzes").doc(id);

    ref.get().then((doc) => {
      if (doc.exists) {
        setQuiz(doc.data());
        setIsLoading(false);
      }
    });
    const unsubscribe = col.onSnapshot(onCollectionUpdate);
    return () => unsubscribe();
  }, [deleted]); // , props.match.params.id

  const onChangeQuestions = (e) => {
    const name = e.target.name;
    const questionRef = parseInt(name.match(/\d+/)[0]);
    if (name.includes("answerText")) {
      const ref = parseInt(name.match(/\d+/g)[1]);
      questions[questionRef].answerOptions[ref].answerText = e.target.value;
    } else if (name.includes("isCorrect")) {
      const ref = parseInt(name.match(/\d+/g)[1]);
      questions[questionRef].answerOptions[ref].isCorrect = e.target.value;
    } else if (name.includes("code")) {
      questions[questionRef]["code"] = e.target.value;
    } else if (name.includes("questionText")) {
      questions[questionRef]["questionText"] = e.target.value;
    }
    setQuestions(questions);
  };

  const onSubmitQuestions = (e) => {
    e.preventDefault();

    const updatedQuestions = questions;

    questions.map((question, index) => {
      const updateRef = firebase
        .firestore()
        .collection("quizzes")
        .doc(id)
        .collection("questions")
        .doc(question.key);

      const { key, questionText, answerOptions, code, timestamp } = question;

      updateRef
        .set({
          key,
          questionText,
          answerOptions,
          code,
          timestamp,
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
      setType("saved");
      handleShow();
    });
  };

  const deleteQuestion = (questionId) => {
    firebase
      .firestore()
      .collection("quizzes")
      .doc(id)
      .collection("questions")
      .doc(questionId)
      .delete()
      .then(() => {
        setType("deleted");
        handleShow();
      })
      .catch((error) => {
        return <ErrorMessage e={error} />;
      });
  };
  console.log(questions);

  const { answerOptions, code, questionText, timestamp } = newQuestion;

  return (
    <>
      <Container>

          <SubHeader quizName={quiz.quizname} />
          {show && (
            <>
              <ShowModal
                handleClose={handleClose.bind(this, show)}
                show={show}
                type={type}
              />
            </>
          )}
          <div className="background-mid text-white border border-white p-4 mt-5">
            {questions.length > 0 && (
              <>
                <h2 className=" text-brightest">UPDATE QUESTIONS</h2>
                <Form onSubmit={onSubmitQuestions}>
                  {questions.map((question, index) => (
                    <>
                      <Row
                        className="mb-4 mt-4 editQuestion"
                        test-id="editQuestion"
                        key={index}
                      >
                        <Col>
                          <div className="mb-1">
                            <span>
                              <h3>Question {index + 1}</h3>
                            </span>
                          </div>
                          <Form.Group className="mb-3" controlId="questionText">
                            <Form.Control
                              as="textarea"
                              className="questionText"
                              key={index}
                              rows={2}
                              placeholder={questions[index].questionText}
                              name={`question[${index}].questionText`}
                              defaultValue={questions[index].questionText}
                              onChange={onChangeQuestions}
                            />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="code">
                            <Row>
                              <Form.Text className="text-white">
                                Write code in text, with no indents or
                                formatting. JavaScript is formatted on display.
                              </Form.Text>
                            </Row>
                            <Form.Control
                              as="textarea"
                              rows={3}
                              placeholder={questions[index].code}
                              name={`questions[${index}].code`}
                              defaultValue={questions[index].code}
                              onChange={onChangeQuestions}
                            />
                          </Form.Group>
                        </Col>
                        <Col>
                          <Stack gap={3} className="m-auto mt-2">
                            <Row>
                              <Col>
                                <Row>
                                  <Col>
                                    <Form.Group
                                      className="mb-3"
                                      controlId={`questions[${index}].answerOption0`}
                                    >
                                      <Form.Label>Option 1:</Form.Label>
                                      <Form.Control
                                        as="textarea"
                                        rows={1}
                                        placeholder={
                                          questions[index].answerOptions[0]
                                            .answerText
                                        }
                                        name={`questions[${index}].answerOptions[0].answerText`}
                                        defaultValue={
                                          questions[index].answerOptions[0]
                                            .answerText
                                        }
                                        onChange={onChangeQuestions}
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col>
                                    <Form.Label>Option 1 is</Form.Label>
                                    <Form.Select
                                      aria-label="The answer is correct or incorrect"
                                      name={`questions[${index}].answerOptions[0].isCorrect`}
                                      onChange={onChangeQuestions}
                                      defaultValue={
                                        questions[index].answerOptions[0]
                                          .isCorrect
                                      }
                                    >
                                      <option value="false">Incorrect</option>
                                      <option value="true">Correct</option>
                                    </Form.Select>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <Form.Group
                                      className="mb-3"
                                      controlId={`questions[${index}].answerOption1`}
                                    >
                                      <Form.Label>Option 2?</Form.Label>
                                      <Form.Control
                                        as="textarea"
                                        rows={1}
                                        placeholder={
                                          questions[index].answerOptions[1]
                                            .answerText
                                        }
                                        name={`questions[${index}].answerOptions[1].answerText`}
                                        defaultValue={
                                          questions[index].answerOptions[1]
                                            .answerText
                                        }
                                        onChange={onChangeQuestions}
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col>
                                    <Form.Label>Option 2 is</Form.Label>
                                    <Form.Select
                                      aria-label="The answer is correct or incorrect"
                                      name={`questions[${index}]answerOptions[1].isCorrect`}
                                      onChange={onChangeQuestions}
                                      defaultValue={
                                        questions[index].answerOptions[1]
                                          .isCorrect
                                      }
                                    >
                                      <option value="false">Incorrect</option>
                                      <option value="true">Correct</option>
                                    </Form.Select>
                                  </Col>
                                </Row>
                                <Row>
                                  <Col>
                                    <Form.Group
                                      controlId={`questions[${index}].answerOption2`}
                                    >
                                      <Form.Label>Option 3:</Form.Label>
                                      <Form.Control
                                        as="textarea"
                                        rows={1}
                                        placeholder={
                                          questions[index].answerOptions[2]
                                            .answerText
                                        }
                                        name={`questions[${index}].answerOptions[2].answerText`}
                                        defaultValue={
                                          questions[index].answerOptions[2]
                                            .answerText
                                        }
                                        onChange={onChangeQuestions}
                                      />
                                    </Form.Group>
                                  </Col>
                                  <Col>
                                    <Form.Label>Option 3 is</Form.Label>
                                    <Form.Select
                                      aria-label="The answer is correct or incorrect"
                                      name={`questions[${index}].answerOptions[2].isCorrect`}
                                      onChange={onChangeQuestions}
                                      defaultValue={
                                        questions[index].answerOptions[2]
                                          .isCorrect
                                      }
                                    >
                                      <option value="false">Incorrect</option>
                                      <option value="true">Correct</option>
                                    </Form.Select>
                                  </Col>
                                </Row>
                              </Col>
                            </Row>
                          </Stack>
                        </Col>
                        <Row>
                          <Button
                            onClick={deleteQuestion.bind(this, question.key)}
                            key={index}
                            className="btn-danger m-3 "
                          >
                            Delete
                          </Button>
                        </Row>
                      </Row>
                      <hr />
                    </>
                  ))}
                  <Row>
                    <Button
                      className="background-bright text-white mt-4"
                      type="submit"
                    >
                      Save updates
                    </Button>
                  </Row>
                </Form>
              </>
            )}
          </div>
          <AddQuestion id={id} />
      </Container>
    </>
  );
};

export default EditQuestions;
