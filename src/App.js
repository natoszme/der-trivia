import logo from './logo.svg';
import Quizz from "./components/quizz";
import questions from "./questions.json";
import _ from "lodash";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {
  const [playAgain, setPlayAgain] = useState();
  const Game = () => {
    const roundQuestions = _.sampleSize(questions, 10);
    return <Quizz questions={roundQuestions} setPlayAgain={setPlayAgain}/>;
  };

  return (
    <div className="App">
        <Game />
    </div>
  );
}

export default App;
