import React, { useState } from 'react';
import _ from "lodash";
import Question from "./question";

const Round = ({ questions }) => {
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  const questionsCount = _.size(questions);
  const isActive = currentQuestionNumber < questionsCount;
  const currentQuestion = questions[currentQuestionNumber];

  const moveToNext = isCorrect => {
    if (isCorrect) setScore(score + 1);
    setCurrentQuestionNumber(currentQuestionNumber + 1)
  };

  const Score = () => <p>{score}</p>;

  return (
    <div>
      {
        isActive?
          <Question
            question={currentQuestion}
            moveToNext={moveToNext}
            questionCount={questionsCount}
            currentQuestionNumber={currentQuestionNumber}
          />
        : <Score />
      }      
    </div>
  );
};

export default function Quiz({ questions }) {
  const shuffledQuestions = _.shuffle(questions);
  return <Round questions={shuffledQuestions}/>
}