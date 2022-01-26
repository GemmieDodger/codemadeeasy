import React from "react";

import Header from "../components/common/Header";
import BlocksEditorContent from "../components/content/BlocksEditorContent";

import { useAuth } from "../authProvider";

const BlocksEditor = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <Header user={user} logout={logout} />
      <BlocksEditorContent />
    </>
  );
};

export default BlocksEditor;