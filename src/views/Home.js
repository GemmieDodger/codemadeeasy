import React from "react";

import Header from "../components/common/Header";
import Loading from "../components/common/Loading";
import HomeContent from "../components/content/HomeContent";

import { useAuth } from "../authProvider";

const Home = () => {
  const { user, loading, logout } = useAuth();

  return (
    <>
      <Header user={user} logout={logout} />
      {!loading ? <HomeContent user={user} /> : <Loading />}
    </>
  );
};

export default Home;
