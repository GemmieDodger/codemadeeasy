import React, { useEffect, useState } from "react";

import Editor from "../common/Editor";
import SubHeader from "../common/SubHeader";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CodeEditorContent = () => {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setsrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setsrcDoc(`
    <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
    </html>`);
    }, 250);
    return () => {
      clearTimeout(timeout);
    };
  }, [html, css, js]);

  return (
    <>
        <Container>
        <Row className="mt-5">
        <Container >
        <SubHeader type="codeeditor"/>
        <Row className="text-white">
          <Col item xs={12} sm={12} md={4}>
            <Editor
              title="HTML"
              language="xml"
              value={html}
              onChange={setHtml}
            />
          </Col>
          <Col item xs={12} sm={12} md={4}>
            <Editor title="CSS" language="css" value={css} onChange={setCss} />
          </Col>
          <Col item xs={12} sm={12} md={4}>
            <Editor
              title="JS"
              language="javascript"
              value={js}
              onChange={setJs}
            />
          </Col>
          </Row>
        </Container>
        <Container>
          <Row item xs={12}>
            <Col className="mt-4">
              <iframe
                srcDoc={srcDoc}
                title="output"
                sandbox="allow-scripts"
                width="100%"
                height="300px"
                overflow="scroll"
                className="background-white"
              />
            </Col>
          </Row>
        </Container>
        </Row>
        </Container>
    </>
  );
}

export default CodeEditorContent;