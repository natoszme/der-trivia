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

const Option = ({ onOptionSelected, option }) =>
  <Button onClick={() => onOptionSelected(option)}>{option}</Button>

const QuestionWithOptions = ({ question, options, moveToNext, currentQuestionNumber, questionCount }) => {
  const [answered, setAnswered] = useState(false);
  const [answerIsOk, setAnswerIsOk] = useState(false);

  //TODO improve this?
  const descriptionRead = () => {
    setAnswered(false);
    setAnswerIsOk(false);
    moveToNext(answerIsOk);
  };

  const { text, answer } = question;

  const optionSelected = option => {
    if (answered) return;
    const isCorrect = _.isEqual(answer, option);
    setAnswered(true);
    setAnswerIsOk(isCorrect);
  };

  const DescriptionModal = () =>
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

  return (
    <div>
      <h3>{text}</h3>
      {options.map((option, number) => <Option key={number} question={question} option={option} onOptionSelected={optionSelected}/> )}
      <p>{currentQuestionNumber + 1} / {questionCount}</p>

      <DescriptionModal />
    </div>
  );
}

export default function Question(props) {
  const { answer, incorrectAnswers } = props.question;
  const options = _(incorrectAnswers).concat(answer).shuffle().value();
  return <QuestionWithOptions options={options} {...props}/>
}