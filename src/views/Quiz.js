import React from "react";

import Loading from "../components/common/Loading";
import Header from "../components/common/Header";
import QuizContent from "../components/content/QuizContent";

import useAuth from "../firebaseAuth";

const Quiz = (props) => {
  const { user, loading, logout } = useAuth();

  return (
    <>
      <Header user={user} logout={logout} />
      {!loading ? <QuizContent /> : <Loading />}
    </>
  );
};

export default Quiz;
