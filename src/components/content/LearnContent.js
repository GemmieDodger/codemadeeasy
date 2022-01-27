import React, { useEffect, useState } from "react";
import firebase from "../../Firebase";
import ErrorMessage from "../common/ErrorMessage";
import SubHeader from "../common/SubHeader";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";

import { Link } from "react-router-dom";

const LearnContent = (props) => {
  const [state, setState] = useState({
    quizzes: [],
  });

  const onCollectionUpdate = (querySnapshot) => {
    const quizzes = [];
    querySnapshot.forEach((doc) => {
      const { quizName } = doc.data();
      quizzes.push({
        key: doc.id,
        doc, // DocumentSnapshot
        quizName,
      });
    });
    setState({ quizzes });
  };

  // Check quizzes exists + set state.
  useEffect(() => {
    const ref = firebase.firestore().collection("quizzes");

    ref.get().then((doc) => {
      if (!doc.exists) {
        console.log("No such document!");
      }
    });
    const unsubscribe = ref.onSnapshot(onCollectionUpdate);
    return () => unsubscribe();
  }, []);

  try {
    return (
      <Container className="text-center" data-testid="learncontent">
        <Row className="g-4 text-center mt-5 justify-content-center">
          {props.user && (
            <Link
              className="text-decoration-none mt-4"
              to={{ pathname: "/admin" }}
            >
              <Card
                style={{ maxHeight: 100 }}
                className="d-flex mt-5  m-2 p-0  xs={1} md={2}"
              >
                <Card.Body className="align-items-center text-white background-bright d-flex justify-content-center ">
                  <h3>Create or edit quiz?</h3>
                </Card.Body>
              </Card>
            </Link>
          )}
          {state.quizzes.length > 0 ? (
            <>
              <SubHeader type="choosequiz" />
              {state.quizzes.map((quiz) => (
                <Col key={quiz.id} xs={12} md={4}>
                  <div key={quiz.key} data-label="quiz">
                    <Link
                      key={quiz.id}
                      className="text-decoration-none"
                      to={{
                        pathname: `/learn/quiz/${quiz.key}/${quiz.quizName}`,
                      }}
                    >
                      <Card
                        style={{ height: 250 }}
                        className=" d-flex  m-0 p-0 xs={1} md={2}"
                      >
                        <Card.Body
                          data-testid="quizCard"
                          className="align-items-center background-mid d-flex text-white justify-content-center"
                        >
                          <h3>{quiz.quizName} Quiz</h3>
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                </Col>
              ))}
            </>
          ) : (
            <ErrorMessage type="quizzes" />
          )}
        </Row>
      </Container>
    );
  } catch (error) {
    <ErrorMessage type="learn" e={error} />;
  }
};

export default LearnContent;
