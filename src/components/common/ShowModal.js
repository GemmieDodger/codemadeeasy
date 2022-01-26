import React, { useEffect, useState } from "react";
import firebase from "../../Firebase";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import Modal from "react-bootstrap/Modal";

const ShowModal = (props) => {
  const [show, setShow] = useState(props.show);

  var statement = "";
  switch (props.type) {
    case "saved":
      statement = "Your changes have been saved.";
      break;
    case "deleted":
      statement = "You deleted a question";
      break;
    default:
      statement =
        "You have performed an action. I'm a little confused at what the action was!";
  }
  return (
    <>
      <Modal className="background-night border border-white  text-brightest  " show={show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{statement}</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button className="background-bright text-white" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShowModal;
