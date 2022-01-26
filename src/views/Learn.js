import React from "react";

import Header from "../components/common/Header";
import LearnContent from "../components/content/LearnContent";
import Loading from "../components/common/Loading";

import { useAuth } from "../authProvider";

const Learn = () => {
  const { user, loading, logout } = useAuth();

  return (
    <>
      <Header user={user} logout={logout} />
      {!loading ? <LearnContent user={user} />
        : <Loading />}
    </>
  );
};

export default Learn;
