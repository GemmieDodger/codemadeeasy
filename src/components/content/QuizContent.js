import React, { useEffect, useState } from "react";
import firebase from "../../Firebase";

import CodeBox from "../quiz/CodeBox";
import SubHeader from "../common/SubHeader";
import ErrorMessage from "../common/ErrorMessage";
import Loading from "../common/Loading";
import Header from "../common/Header";
import ShowScore from "../quiz/ShowScore";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Container from "react-bootstrap/Container";
import ProgressBar from "react-bootstrap/ProgressBar";

import useAuth from "../../firebaseAuth";
import { useParams } from "react-router-dom";

const QuizContent = (props) => {
  // state for quiz play
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [position, setPosition] = useState(0);
  const [score, setScore] = useState(0);
  const [quiz, setQuiz] = useState({});
  const [questions, setQuestions] = useState([]);
  const [propsCode, setPropsCode] = useState("");
  const [showErrorScreen, setShowErrorScreen] = useState(false);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);

  // auth
  const { user, logout } = useAuth();
const { quizname, id } = useParams();
  const onCollectionUpdate = (querySnapshot) => {
    const questions = [];
    querySnapshot.forEach((doc) => {
      const { answer, answerOptions, code, options, questionText } = doc.data();
      questions.push({
        answer, // DocumentSnapshot
        answerOptions,
        code,
        options,
        questionText,
      });
    });
    updatePosition();
    if (questions[0]) {
      setQuestions(questions);
      setPropsCode(questions[currentQuestion].code);
      setIsLoading(false);
    } else {
      setIsLoading(false);
      setShowErrorScreen(true);
    }
  };

  useEffect(() => {
    const col = firebase
      .firestore()
      .collection("quizzes")
      .doc(id)
      .collection("questions");
    const ref = firebase.firestore().collection("quizzes").doc(id);

    ref.get().then((doc) => {
      if (doc.exists && doc.questions) {
        setQuiz(doc.data());
      }
    });
    const unsubscribe = col.onSnapshot(onCollectionUpdate);
    return () => unsubscribe();
  }, [propsCode, currentQuestion, showScore]);

  const updatePosition = () => {
    const place = currentQuestion;
    const distributed = 100 / questions.length - 1;
    setPosition(distributed * place);
  };

  const handleIncorrectAnswers = (incorrectAnswerText, currentQuestion) => {
    var incorrectQQuestions = [];
    var correctAnswerText = "";
    const questionText = questions[currentQuestion].questionText;
    incorrectQuestions.forEach((question) => {
      incorrectQQuestions.push(question);
    });
    questions[currentQuestion].answerOptions.map((answerOption, index) => {
      if (answerOption.isCorrect) {
        correctAnswerText = answerOption.answerText;
      }
    });
    incorrectQQuestions.push({
      correctAnswerText,
      incorrectAnswerText,
      currentQuestion,
      questionText,
    });

    setIncorrectQuestions(incorrectQQuestions);
  };

  const handleAnswerButtonClick = (isCorrect, answerText, currentQuestion) => {
    if (isCorrect) {
      setScore(score + 1);
    } else {
      handleIncorrectAnswers(answerText, currentQuestion);
    }

    const nextQuestion = currentQuestion + 1;

    setPropsCode("set next question here to be:");

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setPropsCode(questions[nextQuestion].code);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      <Container data-testid="quiz">
        {!isLoading && (
          <>
            <Row className="mt-5">
              <Col>
                {showScore ? (
                  <>
                    <ShowScore
                      score={score}
                      length={questions.length}
                      incorrectQuestions={incorrectQuestions}
                    />
                  </>
                ) : (
                  <>
                    <SubHeader quizName={quizname} type="play" />
                    <ProgressBar animated now={position} variant="progress" className="mt-5" />

                    <Row className="background-mid border border-white text-white p-4 m-5">
                      <Col>
                        <div className="mb-1">
                          <span>Question {currentQuestion + 1}</span>/
                          {questions.length}
                        </div>
                        <div className="mb-2">
                          {questions[currentQuestion].questionText}
                        </div>
                        {propsCode ? <CodeBox code={propsCode} /> : ""}
                      </Col>
                      <Col>
                        <Stack gap={3} className="m-auto">
                          {questions[currentQuestion].answerOptions.map(
                            (answerOption, index) => (
                              <Button
                                key={answerOption.key}
                                className="background-bright"
                                id={"answerOption" + index}
                                onClick={() =>
                                  handleAnswerButtonClick(
                                    answerOption.isCorrect,
                                    answerOption.answerText,
                                    currentQuestion
                                  )
                                }
                              >
                                {answerOption.answerText}
                              </Button>
                            )
                          )}
                        </Stack>
                      </Col>
                    </Row>
                  </>
                )}
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default QuizContent;