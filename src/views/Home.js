import React from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import LandingPage from "../components/LandingPage";

import { useAuth } from "../authProvider";
import { Link } from "react-router-dom";

const Home = () => {
  const { user, loading, logout } = useAuth();

  return (
    <>
      <Header user={user} logout={logout} />
      <LandingPage user={user} />
    </>
  );
};

export default Home;
