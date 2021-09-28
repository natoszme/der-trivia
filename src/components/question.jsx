import React, { useState } from 'react';
import _ from "lodash";
import { Modal, Button } from "react-bootstrap";
import '../App.css';

const Description = ({ question: { description }, answerIsOk }) => {
  return (
    <div>
      <p>{description}</p>
      <p>{answerIsOk? "Ok" : "Not ok"}</p>
    </div>
  );
}

export default function Question({ question, moveToNext }) {
  const [answered, setAnswered] = useState(false);
  const [answerIsOk, setAnswerIsOk] = useState(false);
  
  const { text, answer, incorrectAnswers } = question;
  const options = _(incorrectAnswers).concat(answer).shuffle().value();

  const optionSelected = option => {
    if (answered) return;
    const isCorrect = _.isEqual(answer, option);
    setAnswered(true);
    setAnswerIsOk(isCorrect);
  };

  const DescriptionModal = () =>
    <Modal show={answered} onHide={moveToNext}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Description question={question} answerIsOk={answerIsOk}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={moveToNext}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>

  return (
    <div>
      <h3>{text}</h3>
      {options.map((option, number) => <Option key={number} question={question} option={option} optionSelected={optionSelected}/> )}
      <DescriptionModal />
    </div>
  );
}

const Option = ({ optionSelected, option }) =>
  <Button onClick={() => optionSelected(option)}>{option}</Button>