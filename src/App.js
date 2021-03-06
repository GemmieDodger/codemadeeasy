import React from "react";
import "core-js/stable";
import "regenerator-runtime/runtime";

import Home from "./views/Home";
import Quiz from "./views/Quiz";
import Admin from "./views/Admin";
import CreateQuiz from "./views/CreateQuiz";
import EditQuiz from "./views/EditQuiz";
import Learn from "./views/Learn";
import Play from "./views/Play";
import CodeEditor from "./views/CodeEditor";
import BlocksEditor from "./views/BlocksEditor";
import Login from "./components/common/Login";
import Logout from "./components/common/Logout";

import { AuthProvider } from "./authProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/play" element={<Play />} />
              <Route path="/play/codeeditor" element={<CodeEditor />} />
              <Route path="/play/blockseditor" element={<BlocksEditor />} />
              <Route path="/learn/quiz/:id/:quizname" element={<Quiz />} />
              <Route exact path="/admin" element={<Admin />} />
              <Route exact path="/admin/create" element={<CreateQuiz />} />
              <Route
                exact
                path="/admin/edit/quiz/:id/:quizname"
                element={<EditQuiz />}
              />
            </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
