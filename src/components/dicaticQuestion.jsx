import React, { useEffect, useState } from 'react';
import _ from "lodash";
import '../App.css';
import Question from "./question";
import DescriptionModal from "./descriptionModal";

export default function DidacticQuestion({ question, moveToNext, currentQuestionNumber, questionCount }) {
  const [answered, setAnswered] = useState(false);
  const [answerIsOk, setAnswerIsOk] = useState(false);
  const [options, setOptions] = useState([]);
  
  const { answer, incorrectAnswers } = question;
  useEffect(() => {
    const shuffledOptions = _(incorrectAnswers).concat(answer).shuffle().value();
    setOptions(shuffledOptions);
  }, []);

  const onOptionSelected = option => {
    if (answered) return;
    const isCorrect = _.isEqual(answer, option);
    setAnswered(true);
    setAnswerIsOk(isCorrect);
  };

  return (
    <div>
      <Question question={question} options={options} onOptionSelected={onOptionSelected}/>
      <p>{currentQuestionNumber + 1} / {questionCount}</p>

      <DescriptionModal
        descriptionRead={() => moveToNext(answerIsOk)}
        question={question}
        answered={answered}
        answerIsOk={answerIsOk}
      />
    </div>
  );
}