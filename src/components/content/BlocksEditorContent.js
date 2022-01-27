import React, { useEffect, useState } from "react";

import BlocksElement from "../blockseditor/BlocksElement";
import Editor from "../common/Editor";
import SubHeader from "../common/SubHeader";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { DragDropContext } from "react-beautiful-dnd";

const data = {
  suggestionsHtmlData: [
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
    {
      id: "10",
      prefix: "html",
      content: `<p id="answer">If you add some functions, I might transform!</p>`,
    },
  ],
  suggestionsJavascriptData: [
    {
      id: "11",
      prefix: "js",
      content:
        "const people = [{name: 'john'}, {name: 'fred'},{name: 'amber'}];",
    },
    {
      id: "15",
      prefix: "js",
      content: "const number = 10;",
    },
    {
      id: "17",
      prefix: "js",
      content: `const answer = document.getElementById("answer");`,
    },
    {
      id: "13",
      prefix: "js",
      content: "for (person of people) {number = number + 1;}",
    },
    {
      id: "18",
      prefix: "js",
      content: `if (typeof(string) !== typeof(number)){ answer.append(" I told you so! This happened because the variables did not match") };`,
    },
    {
      id: "14",
      prefix: "js",
      content: `element.innerHTML = number;`,
    },
  ],
  javascriptData: [
    {
      id: "16",
      prefix: "js",
      content: `const string = "I'm a string";`,
    },
  ],
  suggestionsCssData: [
    {
      id: "23",
      prefix: "css",
      content:
        "#answer {margin: auto; font-size: 40px; border: 3px solid white; padding: 10px;}",
    },
    {
      id: "24",
      prefix: "css",
      content: "ul {border-style: double; border-color: white; margin: 20px;}",
    },
    {
      id: "25",
      prefix: "css",
      content:
        "body {background-color: black; color: white; text-align: center;}",
    },
  ],
  cssData: [
    {
      id: "26",
      prefix: "css",
      content: "h1 {color: blue;}",
    },
  ],
};

const BlocksEditor = (props) => {
  const lists = ["suggestionsHtmlData", "htmlData"];
  const [elements, setElements] = React.useState(data);
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [srcDoc, setsrcDoc] = useState("");

  const handleChange = (lists, droppableId) => {
    var code = "";
    if (droppableId.includes("Html") || droppableId.includes("html")) {
      lists.htmlData.forEach((listItem) => {
        code = code.concat(" ", listItem.content);
      });
      setHtml(code);
    } else if (
      droppableId.includes("Javascript") ||
      droppableId.includes("javascript")
    ) {
      lists.cssData.forEach((listItem) => {
        code = code.concat(" ", listItem.content);
      });
      setJs(code);
    } else if (droppableId.includes("Css") || droppableId.includes("css")) {
      lists.cssData.forEach((listItem) => {
        code = code.concat(" ", listItem.content);
      });
      setCss(code);
    }
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
    handleChange(listCopy, result.source.droppableId);
  };

  useEffect(() => {
    // Handle html on initial load.
    if (html === "") {
      handleChange(elements, "html");
    } else if (css === "") {
      handleChange(elements, "css");
    } else if (js === "") {
      handleChange(elements, "javascript");
    }

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
  }, [html, css, js, elements]);

  return (
    <>
      <Container className="mt-5 text-white">
        <Row className="g-4 mt-5 text-center justify-content-center"></Row>
        <SubHeader type="blockseditor" />
        <Row>
          <DragDropContext onDragEnd={onDragEnd}>
            <Col item xs={12} sm={12} md={4}>
              <BlocksElement
                title="HTML SUGGESTIONS"
                onChange={setHtml}
                elements={elements.suggestionsHtmlData}
                key="suggestionsHtmlData"
                prefix="suggestionsHtmlData"
              />
              <BlocksElement
                title="YOUR HTML FILE"
                onChange={setHtml}
                elements={elements.htmlData}
                key="htmlData"
                prefix="htmlData"
              />
            </Col>
          </DragDropContext>

          <DragDropContext onDragEnd={onDragEnd}>
            <Col item xs={12} sm={12} md={4}>
              <BlocksElement
                title="CSS SUGGESTIONS"
                onChange={setCss}
                elements={elements.suggestionsCssData}
                key="suggestionsCssData"
                prefix="suggestionsCssData"
              />
              <BlocksElement
                title="YOUR CSS FILE"
                onChange={setCss}
                elements={elements.cssData}
                key="cssData"
                prefix="cssData"
              />
            </Col>
          </DragDropContext>

          <DragDropContext onDragEnd={onDragEnd}>
            <Col item xs={12} sm={12} md={4}>
              <BlocksElement
                title="JAVASCRIPT SUGGESTIONS"
                onChange={setJs}
                elements={elements.suggestionsJavascriptData}
                key="suggestionsJavascriptData"
                prefix="suggestionsJavascriptData"
              />
              <BlocksElement
                title="YOUR JAVASCRIPT FILE"
                onChange={setJs}
                elements={elements.javascriptData}
                key="javascriptData"
                prefix="javascriptData"
              />
            </Col>
          </DragDropContext>
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
