import React from "react";
import Header from "../components/Header";
import LearnContent from "../components/LearnContent";
import Loading from "../components/Loading";

import Card from "react-bootstrap/Card";
import { useAuth } from "../authProvider";
import { Link } from "react-router-dom";

const Learn = () => {
  const { user, loading, logout } = useAuth();

  return (
    <div>
      <Header user={user} logout={logout} />
      {loading ? (
        <Loading />
      ) : (
        <>
          <LearnContent user={user} />
        </>
      )}
    </div>
  );
};

export default Learn;
