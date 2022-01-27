import React from "react";

import Header from "../components/common/Header";
import PlayContent from "../components/content/PlayContent";
import Loading from "../components/common/Loading";

import { useAuth } from "../authProvider";

const Play = () => {
  const { user, loading, logout } = useAuth();

  return (
    <>
      <Header user={user} logout={logout} />
      {!loading ? <PlayContent type="landing" user={user} /> : <Loading />}
    </>
  );
};

export default Play;
