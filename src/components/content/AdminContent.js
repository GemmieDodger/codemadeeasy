import React, { useEffect, useState } from "react";
import { quizzesRef} from "../../Firebase";

import ErrorMessage from "../common/ErrorMessage";
import SubHeader from "../common/SubHeader";

import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { useAuth } from "../../authProvider";
import { Link } from "react-router-dom";

const AdminContent = (props) => {
  const { user } = useAuth();
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

  //check quizzes exists + set state
  useEffect(() => {
    

    quizzesRef.get().then((doc) => {
      if (!doc.exists) {
        console.log("No such document!");
      }
    });
    const unsubscribe = quizzesRef.onSnapshot(onCollectionUpdate);
    return () => unsubscribe();
  }, [user]);

  try {
    return (
      <Container className="text-center" data-testid="AdminContent">
        <Row className="g-4 mt-5 text-center justify-content-center">
          <SubHeader type="admin" />

          {state.quizzes.length > 0 ? (
            <>
              <Container data-testid="admin">
                <Row className="g-4 text-center justify-content-center">
                  <Col xs={12} md={4}>
                    <Link
                      className="text-decoration-none"
                      to={{pathname: `/admin/create`}}
                    >
                      <Card style={{ height: 250 }} className=" d-flex ">
                        <Card.Body className="align-items-center text-white background-bright  d-flex justify-content-center">
                          <h3>Create quiz</h3>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                  {state.quizzes.map((quiz) => (
                    <>
                      <Col key={quiz.key} xs={12} md={4}>
                        <div data-label="quiz">
                          <Link
                            className="text-decoration-none"
                            to={{
                              pathname: `/admin/edit/quiz/${quiz.key}/${quiz.quizName}`,
                              passedProps: { quizName: quiz.quizName },
                            }}
                          >
                            <Card style={{ height: 250 }} className="d-flex">
                              <Card.Body className="align-items-center d-flex background-mid text-white justify-content-center">
                                <h3>Edit {quiz.quizName} Quiz</h3>
                              </Card.Body>
                            </Card>
                          </Link>
                        </div>
                      </Col>
                    </>
                  ))}
                </Row>
              </Container>
            </>
          ) : (
            <>
              <Row className="g-4 mt-2 text-center justify-content-center">
                <Col xs={12} md={4}>
                  <Link
                    className="text-decoration-none"
                    to={{pathname: `/admin/create`}}
                  >
                    <Card style={{ height: 250 }} className=" d-flex ">
                      <Card.Body className="align-items-center text-white background-bright  d-flex justify-content-center">
                        <h3>Create quiz</h3>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              </Row>
            </>
          )}
        </Row>
      </Container>
    );
  } catch (error) {
    <ErrorMessage type="admin" e={error} />
  }               
};

export default AdminContent;
