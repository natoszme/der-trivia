import React from "react";
import { Modal, Button } from "react-bootstrap";

const Description = ({ question: { description }, answerIsOk }) => {
  return (
    <div>
      <p>{description}</p>
      <p>{answerIsOk? "Ok" : "Not ok"}</p>
    </div>
  );
}

export default ({ question, answered, answerIsOk, descriptionRead }) => (
  <Modal show={answered} onHide={descriptionRead}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Description question={question} answerIsOk={answerIsOk}/>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={descriptionRead}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);