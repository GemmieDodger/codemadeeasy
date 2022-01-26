import React from "react";

import Loading from "../components/common/Loading";
import Header from "../components/common/Header";
import QuizContent from "../components/content/QuizContent";

import useAuth from "../firebaseAuth";
import { useParams } from "react-router-dom";

const Quiz = (props) => {
  const { user, loading, logout } = useAuth();
  const { quizName } = useParams();
  console.log(quizName)
  return (
    <>
      <Header user={user} logout={logout} />
      {!loading ? <QuizContent /> : <Loading />}
    </>
  );
};

export default Quiz;
