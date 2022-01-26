import React, { useEffect, useState } from "react";
import firebase from "../Firebase";

import AdminContent from "../components/content/AdminContent";
import Loading from "../components/common/Loading";
import Header from "../components/common/Header";

import { useAuth } from "../authProvider";

const Admin = (props) => {
  const { user, loading, logout } = useAuth();

  return (
    <>
      <Header user={user} logout={logout} />
      {!loading ? <AdminContent /> : <Loading />}
    </>
  );
};

export default Admin;
