import React, { useState, useEffect } from 'react';
import _ from "lodash";
import Question from "./question";

export default function Round ({ questions, setPlayAgain }) {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  
  const questionsCount = _.size(questions);
  const isActive = currentQuestionNumber < questionsCount;
  const currentQuestion = questions[currentQuestionNumber];
  
  const moveToNext = isCorrect => {
    if (isCorrect) setScore(score + 1);
    setCurrentQuestionNumber(currentQuestionNumber + 1)
  };

  const Score = () => <div>
      <p>{score}</p>
      <button onClick={setPlayAgain}>Jugar de nuevo</button>
    </div>;

  const Q = () => <Question
    question={currentQuestion}
    moveToNext={moveToNext}
    questionCount={questionsCount}
    currentQuestionNumber={currentQuestionNumber}
  />

  return (
    <div>
      {
        isActive?
          <Q />
        : <Score />
      }      
    </div>
  );
};