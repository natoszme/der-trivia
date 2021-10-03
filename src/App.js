import Quizz from "./components/quizz";
import questions from "./questions.json";
import _ from "lodash";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import config from "./config";


function App() {
  const [playAgain, setPlayAgain] = useState();
  const Game = ({ setPlayAgain }) => {
    const roundQuestions = _.sampleSize(questions, config.questionsPerRound);
    return <Quizz questions={roundQuestions} setPlayAgain={setPlayAgain}/>;
  };

  return (
    <div className="App">
        <Game setPlayAgain={setPlayAgain}/>
    </div>
  );
}

export default App;
