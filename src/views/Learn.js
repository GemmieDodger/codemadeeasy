import React from "react";
import Header from "../components/Header";
import LearnContent from "../components/LearnContent";
import Loading from "../components/Loading";

import Card from "react-bootstrap/Card";
import { useAuth } from "../authProvider";
import { Link } from "react-router-dom";

const Learn = () => {
  const { user, loading, logout } = useAuth();

  if (loading) {
    return (
      <div>
        <Header user={user} logout={logout} />
        <Link className="text-decoration-none text-info" to={{ pathname:"/admin"}}>
              <Card
                  style={{ maxHeight: 100 }}
                  className="bg-secondary d-flex  m-0 p-0 text-light xs={1} md={2}"
                >
                  <Card.Body className="align-items-center d-flex justify-content-center">
               <h3>Create or edit quiz?</h3>
               </Card.Body>
                </Card>
            </Link>
        <Loading />
      </div>
    );
  }

  return (
    <div className="App">
      <Header user={user} logout={logout} />
      <LearnContent user={user} />
    </div>
  );
};

export default Learn;
