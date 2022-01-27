import React from "react";

import Header from "../components/common/Header";
import EditQuizContent from "../components/content/EditQuizContent";
import Loading from "../components/common/Loading";

import { useAuth } from "../authProvider";

const EditQuiz = (props) => {
  const { user, loading, logout } = useAuth();

    return (
      <>
        <Header user={user} logout={logout} />
        {!loading ? <EditQuizContent /> :
          <Loading />}
      </>
    );
};

export default EditQuiz;
