import React from "react";

import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import AddQuestion from "../components/AddQuestion";
import EditQuestions from "../components/EditQuestions";
import Loading from "../components/Loading";
import { useAuth } from "../authProvider";
import { useParams } from "react-router-dom";

const EditQuiz = (props) => {
  const { user, loading, logout } = useAuth();
  const { id, quizname } = useParams();

  if (!loading) {
    return (
      <>
        <Header user={user} logout={logout} />
        {loading ? (
          <Loading />
        ) : (
          <>
            <SubHeader quizName={quizname} />
            <EditQuestions id={id} />
          </>
        )}
        <AddQuestion id={id} />
      </>
    );
  }
};

export default EditQuiz;
