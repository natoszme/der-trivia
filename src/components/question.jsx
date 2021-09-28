import React, { useState } from 'react';
import _ from "lodash";

const Description = ({ question: { description }, answerIsOk, onDescriptionRead }) => {
  return (
    <div>
      <p>{description}</p>
      <p>{answerIsOk? "Ok" : "Not ok"}</p>
      <button onClick={onDescriptionRead}>Ok</button>
    </div>
  );
}

export default function Question({ question, moveToNext }) {
  const [answered, setAnswered] = useState(false);
  const [answerIsOk, setAnswerIsOk] = useState(false);
  
  const { text, answer, incorrectAnswers } = question;
  const options = _(incorrectAnswers).concat(answer).shuffle().value();

  const optionSelected = option => {
    const isCorrect = _.isEqual(answer, option);
    setAnswered(true);
    setAnswerIsOk(isCorrect);
  };

  return (
    <div>
      {
        !answered?
          <div>
            <h3>{text}</h3>
            {options.map((option, number) => <Option key={number} question={question} option={option} optionSelected={optionSelected}/> )}
          </div>
        : <Description question={question} onDescriptionRead={moveToNext} answerIsOk={answerIsOk}/>
      }
    </div>
  );
}

const Option = ({ optionSelected, option }) =>
  <button onClick={() => optionSelected(option)}>{option}</button>