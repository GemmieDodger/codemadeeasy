import React, { useEffect, useState } from "react";

import BlocksElement from "../blockseditor/BlocksElement";
import Editor from "../common/Editor";
import SubHeader from "../common/SubHeader";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DragDropContext } from "react-beautiful-dnd";

const data = {
  suggestionsData: [
    {
      id: "2",
      prefix: "htmlData",
      content: "<h3 id='header3'>Style me!</h3>",
    },
    {
      id: "3",
      prefix: "htmlData",
      content: "<a id='link' href='/'>This is a link to home</a>",
    },
    {
      id: "4",
      prefix: "htmlData",
      content: `<ul id="list">
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>`,
    },
    {
      id: "5",
      prefix: "htmlData",
      content: `<p id="longparagraph">Here is an extra long paragraph. It would be great if you could give me some colour</p>`,
    },
    {
      id: "6",
      prefix: "htmlData",
      content: `<p id="number">2</p>`,
    },
    {
      id: "7",
      prefix: "htmlData",
      content: `<!-- You can add me - but I'll never show! I'm a comment. -->`,
    },
    {
      id: "8",
      prefix: "htmlData",
      content: `<h5 id="header2">You can move me too!</h5>`,
    },
    {
      id: "9",
      prefix: "htmlData",
      content: `<h1 id="header1">Shout if you love coding!</h1>`,
    },
  ],
  htmlData: [
    {
      id: "1",
      prefix: "html",
      content: "<p>Can you remove me?</p>",
    },
  ],
};

const BlocksEditor = (props) => {
  const lists = ["suggestionsData", "htmlData"];
  const [elements, setElements] = React.useState(data);
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setsrcDoc] = useState("");

  const handleChange = (elements) => {
    var code = "";
    console.log(elements.htmlData);
    elements.htmlData.forEach((element) => {
      code = code.concat(" ", element.content);
    });
    setHtml(code);
  };

  const removeFromList = (list, index) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = (list, index, element) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };
    const sourceList = listCopy[result.source.droppableId];
    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );
    listCopy[result.source.droppableId] = newSourceList;
    const destinationList = listCopy[result.destination.droppableId];
    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );
    setElements(listCopy);
    handleChange(listCopy);
  };

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
          <Container className="mt-5 text-white">
          <Row className="mt-5">
          <SubHeader type="blockseditor" />
          </Row>
            
            <Row>
            <DragDropContext onDragEnd={onDragEnd}>
              <Col item xs={12} sm={12} md={4}>
                <BlocksElement
                  title="HTML SUGGESTIONS"
                  onChange={setHtml}
                  elements={elements.suggestionsData}
                  key="suggestionsData"
                  prefix="suggestionsData"
                />
                <BlocksElement
                  title="HTML"
                  onChange={setHtml}
                  elements={elements.htmlData}
                  key="htmlData"
                  prefix="htmlData"
                />
              </Col>
            </DragDropContext>

              <Col item xs={12} sm={12} md={4}>
                <Editor
                  title="CSS"
                  language="css"
                  value={css}
                  onChange={setCss}
                />
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
              <Row>
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

    </>
  );
};

export default BlocksEditor;
