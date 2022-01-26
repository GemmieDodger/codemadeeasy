import React, { useState } from "react";

import Header from "../components/common/Header";
import Loading from "../components/common/Loading";
import CreateQuizContent from "../components/content/CreateQuizContent";

import { useAuth } from "../authProvider";

const CreateQuiz = (props) => {
  const { user, loading, logout } = useAuth();

  
  return (
    <>
      <Header user={user} logout={logout} />
      {!loading ? <CreateQuizContent /> : <Loading />}
    </>
  );
};

export default CreateQuiz;
