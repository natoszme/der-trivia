import React, { useState } from 'react';
import _ from "lodash";
import Question from "./question";

export default function Quizz({ questions }) {
  const shuffledQuestions = _.shuffle(questions);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questionsCount = _.size(shuffledQuestions);

  const optionSelected = isCorrect => {
    if (isCorrect) setScore(score + 1);
    setCurrentQuestion(currentQuestion + 1)
  };

  const Score = () => <p>{score}</p>;

  return (
    <div>
      {
        questionsCount == currentQuestion?
          <Score score />
        : <div>
            <Question question={shuffledQuestions[currentQuestion]} onOptionSelected={optionSelected} />
            <p>{currentQuestion + 1} / {questionsCount}</p>
          </div>
      }      
    </div>
  );
}