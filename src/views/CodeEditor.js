import React from "react";

import Header from "../components/common/Header";
import CodeEditorContent from "../components/content/CodeEditorContent";

import { useAuth } from "../authProvider";

const CodeEditor = () => {
  const { user, logout } = useAuth();

  return (
    <>
      <Header user={user} logout={logout} />
      <CodeEditorContent />
    </>
  );
};

export default CodeEditor;
